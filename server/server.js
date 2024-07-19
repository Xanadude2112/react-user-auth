const express = require("express")
const cors = require("cors")

const app = express ();

//if the server gets any json request it will parse the request into json info
app.use(express.json())
app.use(cors())

app.listen(4000, () => console.log("🔥 SERVER RUNNING BABY 😎 ~~~~ localhost:4000 ✅"))

app.get("/CreateUser", (req, res) => {
  console.log(req.body);
  res.send("response recieved: ", res.body)
})