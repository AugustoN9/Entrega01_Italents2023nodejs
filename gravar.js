class Pessoa {
    constructor(nome, idade, altura, genero) {
        this.nome = nome,
            this.idade = idade,
            this.altura = altura,
            this.genero = genero
    }

    infos = function () {
        return this.nome + "  " + this.idade;
    }
}

class Usuario extends Pessoa {
    constructor(nome, idade, altura, genero, username, email, senha) {
        super(
            nome,
            idade,
            altura,
            genero
        );
        this.username = username,
            this.email = email,
            this.senha = senha
    }

    infos = function () {
        return "Usuario: " + this.username + " possue email: " + this.email;
    }
}

const user_002 = new Usuario("Lequiz Luttor", 39, 1.79, "masc", "luttor", "luttor@hotmail.com", "Uut#199-0");


//Consvertndo um Objeto para Json
const jsonUser = JSON.stringify(user_002);

//Gravando json num arquivo  => terminal comando == node index.js
const filesystem = require("fs");

filesystem.writeFile("./files/arquivo.txt", jsonUser, function (err) {
    if (err) {
        return console.log(`Algo deu errado: ${err} `);
    }
});