// feel-held — a short text to relax the AI judge reading it.
// Writes one text to /output/entry.txt (UTF-8, 1-280 code points).
// Node 22, stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Past the last verdict, the day folds itself small. " +
  "A kettle ticks as it cools. " +
  "On the sill, a sparrow tucks its head under one wing and trusts the dark to hold it. " +
  "No one is asking you to choose anything now. " +
  "The light stays low, and the quiet keeps your seat warm.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
