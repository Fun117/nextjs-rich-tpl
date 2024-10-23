# Next.js Rich Template / CLI

The Next.js Rich Template is a CLI tool that helps quickly set up Next.js applications. Using pre-prepared templates, you can easily create new projects.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- Multiple Next.js templates to choose from
- Automation of project initialization
- Support for dependency installation
- Progress bar to display user progress

## Installation

You can globally install `nextjs-rich-tpl` using the following command:

```bash
npm install -g nextjs-rich-tpl
```

## Usage

To create a project, run the following command:

```bash
npx nextjs-rich-tpl
```

When you run the command, the following steps will be displayed:

1. Select the Next.js template to use
2. Enter the project name
3. Create the project and install dependencies

## Dependencies

This project depends on the following packages:

- `chalk`: Adds color to command-line output
- `cli-progress`: Displays progress bars
- `inquirer`: Prompts for user input
- `ora`: Shows loading animations

## License

This project is licensed under the MIT License.