//ej 1

function saludooo(saludo:string, ...nombres:string[]){
    return saludo + " " + nombres.join(", ") + "!";
}

saludooo("hola", "samuel", "tabs");
saludooo("hola")