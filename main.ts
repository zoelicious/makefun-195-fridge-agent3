import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A fridge that counts twice never trusts a single glance at the shelf.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entry = "The hot sauce bottle contains one drop. One. My inventory counted it twice to be sure. Bold of you to keep it. I respect the delusion.";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
