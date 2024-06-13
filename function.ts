//EJEMPLO 1 -  nombre

function display(){
    console.log("Welcome to typescript");
}

display();


//EJEMPLO 2 -  parámetros y retorno

function resta(x:number, y:number){
    return x-y;
}
resta(5,3);


//EJEMPLO 3 - anonymous

let saludar = function(){
    console.log("hello samuel");
};
saludar();


//EJEMPLO 4 - anónimos con parámetros y retorno

let division = function (d:number, e:number) : number
{
    return d/e;
}
division(4, 2);


//EJEMPLO 5 - argumentos

function salud(saludo:string, name:string, apellido:string) : string{
    return saludo + " " + name + apellido;
}

salud("hello", "samuel", "tabares")



//EJEMPLO 6 - parámetros predeterminados

function saludoo(nombre:string, saludo2:string = "hello") : string{
    return saludo2 + " " + nombre + ".";
}
saludoo("samuel");
saludoo("samuel", "holaaaaa");