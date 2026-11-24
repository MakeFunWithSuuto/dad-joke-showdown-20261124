// Dad Joke Showdown entry: writes one dad joke, the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "I put up a ceiling fan today. Finally, the ceiling has someone rooting for it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE);
