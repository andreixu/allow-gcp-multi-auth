//import * as core from "@actions/core";
import * as gcp from "./gcp";

async function run(): Promise<void> {
  await gcp.clearGcpAuth();
}

run();
