const express = require("express");
const ListItems = require("./items");
const { getListItems } = ListItems();
const app = express();
const user = "jake";
const List_craft = getListItems();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Acpet',
  );
  next();
});

app.get("/getListCraft", function (req, res) {
  res.send(List_craft);
});
app.post("/command", function (req, res) {
  const comando = req.body.command;
  const params = req.body.pars.join(" ");
  outHandler(comando, params);
  res.send("Comando enviado !");
});
app.listen(3000, () => {
  //outHandler({ run: "", out: "running" });
});
async function outHandler(comando, parametros) {
  const out_cmd = { cmd: comando, param: parametros };
  console.log(JSON.stringify(out_cmd));
}
