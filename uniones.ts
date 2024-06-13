//ej 1
type union = {
    nombre: string;
    apellido: string;
} | {
    correo: string;
    facultad: string;
};

let x: union = {nombre: "samuel", apellido: "tabares leon"};
x = {correo: "stabares_26@cue.edu.co", facultad: "Ingeniería y ciencias básicas"};



//ej 2
type unionnn = string | boolean;

let y: unionnn = "samuel";
y = true;