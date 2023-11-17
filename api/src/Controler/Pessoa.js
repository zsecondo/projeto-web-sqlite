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




export async function getUserName(req, res) {
    let email = req.query.email;
    let senha = req.query.senha;

    openDb().then(db => {
        db.get('SELECT nome FROM Pessoa WHERE email=? AND senha=?', [email, senha])
            .then(usuario => {
                if (usuario) {
                    res.json({ nome: usuario.nome });
                } else {
                    res.status(404).json({ error: 'Usuário não encontrado' });
                }
            })
            .catch(error => {
                console.error(error);
                res.status(500).json({ error: 'Erro ao buscar nome do usuário' });
            });
    });
}