export default class User{
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo;
    constructor(nome, email, nascimento, role, ativo = false){
        this.#nome= nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome(){
        return this.#nome;
    }
    get email(){
        return this.#email;
    }
    get role(){
        return this.#role;
    }
    get ativo(){
        return this.#ativo;
    }
    get nascimento(){
        return this.#nascimento;
    }
    set nome(nome){
        this.#nome = nome;
    }
    set email(email){
        this.#email = email;
    }
    set ativo(ativo){
        this.#ativo = ativo;
    }
    set role(role){
        this.#role = role;
    }
    set nascimento(nascimento){
        this.#nascimento = nascimento;
    }

    #montaObjUser(){
        return({
            nome:this.#nome,
            email:this.#email,
            nascimento:this.#nascimento,
            role:this.#role,
            ativo:this.#ativo
        })
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.ativo}, ${this.role}`
    }
}

