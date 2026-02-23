const fs = require("fs")
const { registrar, leer } = require("./operaciones.js")
const [,, operacion, nombre, edad, animal, color, enfermedad, historial] = process.argv

if(operacion === "registrar"){
    registrar(nombre, edad, animal, color, enfermedad)
}
if(operacion === "leer"){
    leer()
}
