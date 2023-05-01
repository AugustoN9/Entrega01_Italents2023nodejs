
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

class Admin extends Pessoa {
    constructor(nome, idade, altura, genero, username, email, senha, cpf) {
        super(
            nome,
            idade,
            altura,
            genero
        );
        this.username = username,
            this.email = email,
            this.senha = senha,
            this.cpf = cpf
    }

    infos = function () {
        return "Admin: " + this.username + " possue cpf: " + this.cpf;
    }
}

//Instancia um Objetos
const user_002 = new Usuario("Lequiz Luttor", 39, 1.79, "masc", "luttor", "luttor@hotmail.com", "Uut#199-0")
const user_001 = new Admin("Augusto Lopez", 44, 1.70, "masc", "auguston9", "augusto@yahoo.com", "12pQw#915", 88680533068)


console.log(" ");
console.log(user_002);
console.log(" ");
console.log(user_001.infos());
console.log(" ");
console.log(user_002.infos());


