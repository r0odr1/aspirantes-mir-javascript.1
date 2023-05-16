let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: 'true',
    hobbies: ["programar","squash","piano"],
}
function Object1(){
    console.log(pedro.edad);
    pedro.estatura =1.8;
    delete pedro.activo;

let llaves = Object.keys(pedro);
for (let i = 0; i < llaves.length; i++){
    let llave = llaves[i];
    console.log(llave +" : "+ pedro[llave]);
    }
}
Object1();

pedro.saluda = () => {
    console.log("Hola, me llamo " + pedro.nombre);
};
pedro.saluda();
/*console.log(pedro.estatura);
console.log(pedro.edad)*/