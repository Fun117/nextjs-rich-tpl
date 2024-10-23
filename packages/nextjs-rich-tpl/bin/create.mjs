#!/usr/bin/env node

import { exec, spawn } from "child_process";
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import cliProgress from "cli-progress";
import chalk from "chalk";
import ora from "ora";

const templates = [
  {
    name: "app/with-i18n-routing",
    description: "Next.js app with i18n routing setup",
    path: "examples/app/with-i18n-routing",
  },
  {
    name: "app/without-i18n-routing",
    description: "Next.js app without i18n routing setup",
    path: "examples/app/without-i18n-routing",
  },
];

let isCancelled = false;

process.on("SIGINT", () => {
  console.log(chalk.red("\nProcess interrupted. Cleaning up..."));
  isCancelled = true;

  // 必要に応じてここにクリーンアップロジックを追加
  // 例: 進行中の作業をキャンセル、リソースを解放するなど
  process.exit(1);
});

// コマンドライン引数を解析
const args = process.argv.slice(2);
let templateName = null;
let projectName = null;

if (args.includes("-c") || args.includes("--create")) {
  const index = args.findIndex((arg) => arg === "-c" || arg === "--create");
  templateName = args[index + 1];
  projectName = args[index + 2];
}

function countFiles(dir) {
  let fileCount = 0;
  const entries = fs.readdirSync(dir);

  entries.forEach((entry) => {
    const entryPath = path.join(dir, entry);
    if (fs.lstatSync(entryPath).isDirectory()) {
      fileCount += countFiles(entryPath);
    } else {
      fileCount++;
    }
  });

  return fileCount;
}

function copyDirectory(src, dest, progressBar) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src);

  entries.forEach((entry) => {
    const srcPath = path.join(src, entry);
    const destPath = path.join(dest, entry);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDirectory(srcPath, destPath, progressBar);
    } else {
      fs.copyFileSync(srcPath, destPath);
      progressBar.increment();
    }
  });
}

function showProgressBar(total, message) {
  const bar = new cliProgress.SingleBar(
    {
      format: `${message} |{bar}| {percentage}% || {value}/{total} Chunks || Speed: {speed}`,
      barCompleteChar: "\u2588",
      barIncompleteChar: "\u2591",
      hideCursor: true,
    },
    cliProgress.Presets.shades_classic
  );

  bar.start(total, 0, { speed: "N/A" });
  return bar;
}

function runCommand(command) {
  return new Promise((resolve, reject) => {
    const proc = exec(command, (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });

    proc.stdout.on("data", (data) => {
      process.stdout.write(data);
    });

    proc.stderr.on("data", (data) => {
      process.stderr.write(data);
    });
  });
}

async function installDependencies() {
  const spinner = ora(chalk.blue("Installing dependencies...")).start();

  return new Promise((resolve, reject) => {
    const installProcess = spawn("npm", ["install"], { stdio: "pipe" });

    installProcess.stdout.on("data", (data) => {
      spinner.text = chalk.blue(
        `Installing dependencies...\n${chalk.gray(data.toString())}`
      );
    });

    installProcess.stderr.on("data", (data) => {
      spinner.text = chalk.red(`Error during install: ${data.toString()}`);
    });

    installProcess.on("close", (code) => {
      spinner.stop();
      if (code === 0) {
        console.log(chalk.green("\nDependencies installed successfully.\n"));
        resolve();
      } else {
        reject(new Error(`npm install process exited with code ${code}`));
      }
    });
  });
}

(async () => {
  if (!templateName || !projectName) {
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "templateName",
        message: "Select a Next.js template:",
        choices: templates.map((t) => ({ name: t.description, value: t.name })),
      },
      {
        type: "input",
        name: "projectName",
        message: "Enter your project name:",
        default: "my-nextjs-app",
      },
    ]);
    templateName = answers.templateName;
    projectName = answers.projectName;
  }

  const selectedTemplate = templates.find((t) => t.name === templateName);
  if (!selectedTemplate) {
    console.error(chalk.red(`Error: Template '${templateName}' not found.`));
    process.exit(1);
  }

  const targetPath = path.resolve(process.cwd(), projectName);

  if (fs.existsSync(targetPath)) {
    console.error(chalk.red(`Error: Directory ${projectName} already exists.`));
    process.exit(1);
  }

  console.log(
    chalk.blue(
      `\nCreating a new Next.js Rich Template in ${chalk.green(targetPath)}\n`
    )
  );

  try {
    const repoUrl = "https://github.com/Fun117/nextjs-rich-tpl.git";
    const cloneSpinner = ora("Cloning repository...").start();

    await runCommand(
      `git clone --depth 1 --filter=blob:none --sparse ${repoUrl} ${projectName}`
    );
    cloneSpinner.succeed("Repository cloned.");

    console.log(
      `\n${chalk.blue("Initializing project with template:")} ${chalk.green(
        selectedTemplate.name
      )}\n`
    );
    process.chdir(targetPath);
    await runCommand(`git sparse-checkout set ${selectedTemplate.path}`);

    const itemsToRemove = fs
      .readdirSync(targetPath)
      .filter((item) => item !== "examples");
    const progressBarRemove = showProgressBar(
      itemsToRemove.length,
      "Removing files"
    );

    itemsToRemove.forEach((item) => {
      const itemPath = path.join(targetPath, item);
      fs.rmSync(itemPath, { recursive: true, force: true });
      progressBarRemove.increment();
    });

    progressBarRemove.stop();
    console.log(chalk.gray("Removed unnecessary files."));

    const templatePath = path.join(targetPath, selectedTemplate.path);
    const totalFilesToCopy = countFiles(templatePath);
    const progressBarCopy = showProgressBar(totalFilesToCopy, "Copying files");

    copyDirectory(templatePath, targetPath, progressBarCopy);
    progressBarCopy.stop();

    fs.rmSync(path.join(targetPath, "examples"), {
      recursive: true,
      force: true,
    });
    console.log(chalk.gray("Removed examples directory."));

    await installDependencies();

    console.log(
      chalk.green(`\nSuccess! Created ${projectName} at ${targetPath}\n`)
    );
  } catch (error) {
    console.error(
      chalk.red("\nAn error occurred while setting up the project:", error)
    );
  }
})();

// 進行中の処理がある場合、キャンセルフラグをチェック
if (isCancelled) {
  console.log(chalk.yellow("Operation was cancelled."));
}
