const user = {
    nome: "juliana",
    email: "j@j.com",
    nascimento: "20/01/2021",
    role: "administrador",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const exibir = function(){
    console.log(this.nome)
}
const exibirNome = exibir.bind(user)


exibirNome()
exibir()