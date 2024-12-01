"use server";

import { headers } from "next/headers";

export async function useHostname() {
  const headersList = await headers();
  const hostname = headersList.get("x-forwarded-host");
  return hostname;
}