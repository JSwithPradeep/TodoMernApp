import express from "express"
import mongoose  from "mongoose";
import router from "./router/todoRouter.js";
import dotenv from "dotenv"
import { fileURLToPath } from 'url';
import path from "path";

dotenv.config();

import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 18000;

//middleware

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DATABSE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("database is connected"))
  .catch((error) => console.log(error));

app.use("/api", router)

// static filse
app.use(express.static(path.join(__dirname,"./client/build")));
app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
})
app.listen(PORT, () => console.log(`Listning at ${PORT}...`));
