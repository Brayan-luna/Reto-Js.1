// solo letras
let arrayDatos = [];
let indexNum = 0;

const crearItem = (nombre, salarioo, horas, ff, ID) => {
    let persona = {
        Nombre: nombre,
        Salario: salarioo,
        Horas: horas,
        salarioTotal: ff,
        Id : ID,
    }
    arrayDatos.push(persona);

}

function Formula(horas, salarioBa) {
    let salario = parseInt(salarioBa);
    let horass = parseInt(horas);
    if (horas <= "35") {
        let salarioTotal = (salario * horass) / 35;
        if (salarioTotal >= 100000) {
            let salarioImp = salarioTotal * 0.2;
            salarioTotal = salarioTotal - salarioImp;
            return salarioTotal;
        }
        else {
            return salarioTotal;
        }

    }
    else {
        horasExtras = horass - 35;
        let Aumento = (salario * horass) / 35;
        salarioTotal = Aumento + salario;
        if (salarioTotal >= 100000) {
            let salarioImp = salarioTotal * 0.2;
            salarioTotal = salarioTotal - salarioImp;
            return salarioTotal;
        }
        else {
            return salarioTotal;
        }
    }
}



const guardarDB = () => {
    localStorage.setItem('formulario', JSON.stringify(arrayDatos));
}
const pintarDB = () => {
    tabla.innerHTML = '';
    arrayDatos = JSON.parse(localStorage.getItem('formulario'));
    if (arrayDatos === null) {
        arrayDatos = [];
    }
    else {

        arrayDatos.forEach(element => {

           
            tabla.innerHTML += `<tr class="trStyles" Dadta-id="tr ${element.id}">
            <td>${element.Nombre}</td>
            <td>${element.salarioTotal}</td>
            <td>${element.Horas}</td>
            <td>
            <button onclick="eliminarButton(this)" class="button-form" id="button" >
            Eliminar
            </button>
            </td>
            <span id="contador"></span>
            </tr>`;
        });
    }
}
// function validar(){
//     let todoMal = false;
//     let salarioBase = document.getElementById("salario").value;
//     let nombreTrabajador = document.getElementById("nombre").value;
//     let horast = document.getElementById("horas").value;
//     let expresionEnDe = /^\d*\.\d+$/;
//     let expresionEn = /^[0-12]+$/;

//     if(!isNaN(nombreTrabajador) && !expresionEn.test(horast) && !expresionEnDe.test(salarioBase)){
//         todoMal = true;
//     }
//     else{
//         alert("mal")
//     }

//     // if(!isNaN(nombreTrabajador)){
//     //     todoMal = true;
//     // }
//     // if(!expresionEnDe.test(salarioBase)){
//     //     todoMal = true;
//     // }

//     // if(!expresionEn.test(horast)){
//     //     todoMal = true;
//     // }
//     // if(todoMal){
//     //     alert("revisa bien los campos")
//     // }
// };
function eliminarButton(td){
 let eliminar = td.parentNode.parentNode
 document.getElementById("tr");
 let datId = eliminar.getAttribute("Dadta-id");
 eliminar.remove()
}

function getNNewId(){
    let lastId = localStorage.getItem("lastId") || "-1"
    let newLasId = JSON.parse(lastId) + 1; 
    localStorage.setItem("lastId", JSON.stringify(newLasId));
    return newLasId;
}

let tabla = document.getElementById("table");
let formulario = document.getElementById("formulario");
let button = document.getElementsByName("button")
formulario.addEventListener("submit", envio);

function envio(e) {
    let salarioBase = document.getElementById("salario").value;
    let nombreTrabajador = document.getElementById("nombre").value;
    let horast = document.getElementById("horas").value;
    let ff = Formula(horast, salarioBase);
    let ID = getNNewId();
    crearItem(nombreTrabajador, salarioBase, horast, ff, ID);
    formulario.reset();
    guardarDB();

}


document.addEventListener('DOMContentLoaded', pintarDB);
