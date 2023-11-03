import { openDb } from "../configDB.js";

export async function dropTable() {
    openDb().then(db => {
        db.exec(`
            DROP TABLE IF EXISTS Pessoa;
        `);
    });
}

export async function selectPessoas(req, res){
    openDb().then(db=>{12
        db.all('SELECT * FROM Pessoa')
            .then(pessoas=> res.json(pessoas))
    })
   
}
export async function selectPessoa(req, res){
    let id = req.body.id
        openDb().then(db=>{
            db.get('SELECT * FROM Pessoa WHERE id=?',[id])
                .then(pessoa => res.json(pessoa))
     })
     
 }

export async function createTable(){
    openDb().then(db=>{
        db.exec(`CREATE TABLE IF NOT EXISTS Pessoa (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT NOT NULL,
            contato TEXT NOT NULL,
            endereco TEXT NOT NULL,
            cnpj TEXT NOT NULL,
            empresa TEXT NOT NULL,
            senha TEXT NOT NULL
        );
        `)
    })
    
}

export async function insertPessoa(req, res){
    let pessoa = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Pessoa (nome, email, contato, endereco, cnpj, empresa, senha) VALUES (?, ?, ?, ?, ?, ?, ?)',[pessoa.nome, pessoa.email, pessoa.contato, pessoa.endereco, pessoa.cnpj, pessoa.empresa, pessoa.senha])
    })
        res.json({
        statuscode: 200
        })
}

export async function updatePessoa(req, res){
    let pessoa = req.body;
    openDb().then(db=>{
        db.run('UPDATE Pessoa SET nome=?, idades=? WHERE id=?', [pessoa.nome, pessoa.idades, pessoa.id])
    })
    res.json({
        statuscode: 200
        })
}
export async function deletePessoa(req, res){
    let id = req.body.id
        openDb().then(db=>{
            db.get('DELETE FROM Pessoa WHERE id=?', [id])
                .then(pessoa=> res.json(pessoa))
    })
    res.json({
        statuscode: 200
        })
}