function estudiante(ID: number){
    switch(ID){
        case (123456):
        console.log("you are esteban");
        break;
        case (134788):
        console.log("you are samuel");
        break;
        case (192657):
        console.log("you are zara");
        break;
        case (123553):
        console.log("you are junior");
        break;
        case (123356):
        console.log("you are villa");
        break;
        case (123466):
        console.log("you are mateo");
        break;
        case (122456):
        console.log("you are susana");
        break;
        case (111456):
        console.log("you are jero");
        break;
        default:
            throw new Error ("ID incorrecto")
    }
}

estudiante(134788);