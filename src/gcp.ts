import * as core from "@actions/core";
import * as fs from "fs";

export async function clearGcpAuth() {
  const filePath = process.env["GITHUB_ENV"] || "";
  if (filePath) {
    const fileData = fs.readFileSync(filePath, "utf-8");
    core.info(fileData);
  }
}
