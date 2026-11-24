// Dad Joke Showdown entry: writes one dad joke, the same bytes on every run.
// The turn: potters "throw" clay on the wheel, and dad "throws himself into things".
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "Your mom says I'm obsessed with pottery class. What can I say? I throw myself into things.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE);
