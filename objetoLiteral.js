const user = {
    nome: "juliana",
    email: "j@j.com",
    nascimento: "20/01/2021",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin ={
    nome: "Mariana", 
    email: "m@m.com",
    role: "admin",
    criarCurso(){
        console.log('curso criado');
    }
}


Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()