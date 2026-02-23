const fs = require("fs")

const registrar = (nombre, edad, animal, color, enfermedad) =>{
    const historial = JSON.parse(fs.readFileSync("citas.json", "utf8"))
    let registro = { nombre, edad, animal, color, enfermedad }
    historial.push(registro)
    
    fs.writeFileSync("citas.json", JSON.stringify(historial, null, 2))
}

const leer = () =>{
    const registro = fs.readFileSync("citas.json", "utf8")
    console.log(JSON.parse(registro))
}

module.exports = { registrar, leer }