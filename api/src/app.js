import  express  from "express";
import { openDb } from "./configDB.js";
import router from "./routes.js";
import fs from 'fs';
import https from  'https';
import cors from 'cors';
import { createTable } from "./Controler/Pessoa.js";

const app = express();
const PORT = process.env.PORT || 8080;
const PORTHTTPS = process.env.PORTHTTPS || 8081

app.use(express.json());
app.use(cors());
app.use(router);


app.listen(PORT,()=>{
    console.log(`listening on localhost:${PORT}`)
    })

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')
}, app).listen(PORTHTTPS, ()=> console.log(`Rodando em HTTPS, ouvindo localhost:${PORTHTTPS}`))    
