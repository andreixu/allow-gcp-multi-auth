//import * as core from "@actions/core";
import * as gcp from "./gcp";

export async function run(): Promise<void> {
  await gcp.clearGcpAuth();
}
