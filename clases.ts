class Persona{
    nombre: string;
    apellido: string;
    edad: number;

    constructor(nombre:string, apellido:string, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} + ${this.apellido}, y tengo ${this.edad} años`);
    }
}

const saludo = new Persona("Samuel", "Tabares Leon", 17);

saludo.saludar();

//ejemplo 2 

class minipersona{

    private _edad: number;

    constructor(edad: number){
        this._edad = edad;
    }

    get edad(){
        return this._edad;
    }

    set edad(valor: number){
        if(valor<0){
            throw new Error("no hay edades negativas");
        }
        this._edad = valor;
    }
}

const personita = new minipersona(17);

console.log(personita.edad);

personita.edad = 15;
console.log(personita.edad);

//ejemplo 3

class superpersona{
    nombre: string;
    edad: number;

    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }

    comer(){
        console.log(`${this.nombre} está comiendo`);
    }

    info(){
        console.log(`${this.nombre} tiene ${this.edad} años`)
    }
}

class Estudiante extends superpersona{

    materias: string[];

    constructor(nombre:string, edad:number, materias:string[]){
        super(nombre, edad);
        this.materias = materias;
    }

    estudia(){
        console.log(`${this.nombre} estudia ${this.materias}`);
    }


}

const alumno = new Estudiante("Samuel", 17,["Introduccion", "Calculo"]);

//ejemplo 4

interface maquina{
    tipo: string;
}

interface vehiculo{
    placa: number;
}

class Auto implements maquina, vehiculo{
    private _tipo: string;
    private _placa: number;

    constructor(tipo:string, placa:number){
        this._tipo = tipo;
        this._placa = placa;
    }

    get tipo(){
        return this._tipo;
    }

    set tipo(value){
        this._tipo = value;
    }

    get placa(){
        return this._placa;
    }

    set placa(value){
        this._placa = value;
    }
}

const auto = new Auto("lexus", 43758342);
auto.tipo = "lamborghini";
auto.placa = 28192323;
console.log(auto);