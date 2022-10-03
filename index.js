import Docente from "./Docente.js";
import User from "./User.js";
import Admin from "./Admin.js";


const user = new User("jj", "jjj", "29-09-38");

console.log(user.exibirInfos())
console.log(user.nome)

const admin = new Admin("rodrigo", "rodrig@gmaismda", "82-02-2772")
admin.nome = "pedro"
console.log(admin.nome)