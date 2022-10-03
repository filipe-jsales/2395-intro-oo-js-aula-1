import User from "./User.js";

export default class Admin extends User{

    constructor(nome, email, nascimento, role = 'admin', ativo = false){
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas){
        return `curso de ${nomeDoCurso} criado com ${vagas}`
    }
}




