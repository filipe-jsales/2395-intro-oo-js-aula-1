import User from "./User.js";

class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = false){
        super(nome, email, nascimento, role, ativo)
    }

    exibirAdmin(){
        return "é admin";
    }
}

const admin = new Admin('Rodrigo', 'r@r.com', '2019-02-03');

console.log(admin.exibirInfos())