import * as core from "@actions/core";
import * as gcp from "./gcp";

async function run(): Promise<void> {
  core.info("STarting custom action...");
  await gcp.clearGcpAuth();
  core.warning("Should have output");
}

run();
