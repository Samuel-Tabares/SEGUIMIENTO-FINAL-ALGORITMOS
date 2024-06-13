//ejemplo 1
abstract class Person{
    nombre: string;

    constructor(nombre:string){
        this.nombre = nombre;
    }

    display(): void{
        console.log(this.nombre)
    }

    abstract find(persona:string): Person;
}

class Empleado extends Person{
    emcodigo: number;

    constructor(nombre:string, codigo:number){
        super(nombre);
        this.emcodigo = codigo;
    }

    find(nombre:string): Person{
        return new Empleado(nombre, 34)
    }
}

let emp: Person = new Empleado("samuel", 35)
emp.display();

let emp2: Person = new Empleado("esteban", 60)
emp2.display();



//ejemplo 2

abstract class Rectangulo{
    abstract getArea(): number;
}

class Circulo extends Rectangulo{
    constructor(private radius: number){
        super()
    }

    getArea(){
        return Math.PI * this.radius**2;
    }
}

const sss = new Circulo(6);
console.log(sss.getArea());