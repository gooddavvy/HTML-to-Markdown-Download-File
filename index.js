import execSync from "exec-sync";

export var _ = execSync("cd main && npm run dev");
console.log(_.toString());
