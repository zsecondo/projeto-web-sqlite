import {createTable, insertPessoa, selectPessoas, getUserName} from "./Controler/Pessoa.js";
import { Router } from "express";

const router = Router();

router.get('/',(req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "API Rodando"
    })
})

router.get('/pessoas',selectPessoas)
router.post('/pessoa', insertPessoa)
router.get('/nomeUsuario', getUserName);

export default router;