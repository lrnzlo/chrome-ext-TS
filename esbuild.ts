import { buildSync } from "esbuild";
import path from "path";

buildSync({
  entryPoints: [
    path.resolve(__dirname, "src/background/background.ts"),
    path.resolve(__dirname, "src/content-script/content-script.ts"),
  ],
  bundle: true,
  minify: true,
  outdir: "dist",
});
