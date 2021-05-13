import {
  name,
  version,
  license
} from "./package.json";

const output = [{
  format: "es",
  file: "lib/index.esm.js",
},
{
  format: "cjs",
  file: "lib/index.js",
}].map(out => {
  out.banner = "/**\n"
    + ` * @module ${name}\n`
    + ` * @verion ${version}\n`
    + ` * @license ${license}\n`
    + " */\n";
  
  return out;
});

export default {
  input: "src/index.js",
  output,
};
