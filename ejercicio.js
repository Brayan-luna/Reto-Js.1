let frutas = ['banano', 'pera', 'fresa', 'melon', 'curuba', 'colorindo']

function filter(fruta) {
    let resultado = frutas.filter(word => word == fruta);
    alert(`resultado de su busqueda = ${resultado}`)
}

function filtrarC(letra) {
    let resultado = frutas.filter(word2 => word2.includes(letra));
    console.log(resultado)
}

//let fruta = prompt("que fruta buscas")
//filter(fruta)

filtrarC("")

