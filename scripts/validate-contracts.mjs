import fs from "node:fs";
import path from "node:path";

const failures = [];
const root = process.cwd();

function readJson(relativePath) {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    failures.push(`missing required contract file: ${relativePath}`);
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(absolutePath, "utf8"));
  } catch {
    failures.push(`invalid JSON contract: ${relativePath}`);
    return null;
  }
}

for (const relativePath of [
  "schemas/protocol.schema.json",
  "schemas/alignment.schema.json",
  "schemas/mapper-result.schema.json"
]) {
  const schema = readJson(relativePath);
  if (!schema) continue;
  if (typeof schema.$schema !== "string") failures.push(`${relativePath} must declare a JSON Schema dialect`);
  if (schema.type !== "object") failures.push(`${relativePath} must define an object root`);
  if (!Array.isArray(schema.required) || schema.required.length === 0) failures.push(`${relativePath} must declare required fields`);
}

for (const relativePath of [
  "docs/authority-model.md",
  "docs/legal-positioning.md",
  "VERSION.md",
  "README.md"
]) {
  if (!fs.existsSync(path.join(root, relativePath))) failures.push(`missing required governance/documentation file: ${relativePath}`);
}

const protocol = readJson("schemas/protocol.schema.json");
if (protocol) {
  for (const field of ["protocolVersion", "timestampUtc"]) {
    if (!protocol.required?.includes(field)) failures.push(`protocol schema must require ${field}`);
  }
}

const appPackage = readJson("apps/belief-mapper-web/package.json");
if (appPackage && typeof appPackage.scripts?.build !== "string") {
  failures.push("belief-mapper-web must expose a build script");
}

if (failures.length) {
  console.error("OneGodian Protocol contract validation FAILED");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(JSON.stringify({
  status: "PASS",
  service: "onegodian-protocol",
  schemasValidated: 3,
  governanceDocumentsPresent: true,
  deployClaim: false,
  note: "Specification contracts validated. Application deployment, authentication, and production runtime proof remain separate gates."
}, null, 2));
