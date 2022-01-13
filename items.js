const xlsx = require("xlsx");
const path = require("path");
function getListItems() {
  const ref_file = path.join(__dirname, "itmes.xlsx");
  const info = xlsx.readFile(ref_file);
  const data = info.Sheets["Hoja1"];
  const json_data = xlsx.utils.sheet_to_json(data);
  return json_data;
}
module.exports = () => {
  return { getListItems };
};