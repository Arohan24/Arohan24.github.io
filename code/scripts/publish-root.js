const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const codeDir = path.resolve(__dirname, "..");
const repoRoot = path.resolve(codeDir, "..");
const buildDir = path.join(codeDir, "build");

console.log("Building React app in code/...");
execSync("npm run build", { cwd: codeDir, stdio: "inherit" });

if (!fs.existsSync(buildDir)) {
  console.error("Build output not found at", buildDir);
  process.exit(1);
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

const rootStatic = path.join(repoRoot, "static");
if (fs.existsSync(rootStatic)) {
  fs.rmSync(rootStatic, { recursive: true, force: true });
}

console.log("Copying build/ → repo root...");
for (const entry of fs.readdirSync(buildDir)) {
  const from = path.join(buildDir, entry);
  const to = path.join(repoRoot, entry);
  if (fs.existsSync(to) && fs.statSync(to).isDirectory()) {
    fs.rmSync(to, { recursive: true, force: true });
  }
  copyRecursive(from, to);
}

console.log("Publish complete. Commit and push root artifacts to update GitHub Pages.");
