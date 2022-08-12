//varaibles punto 1
var dato = document.getElementById('numero')
var total = 0

//variables punto 2
var numero = document.querySelector('#numero1')

//variables punto 3
var edad = document.querySelector('#edad')
var genero = document.querySelector('#genero')

//botones
var btnSuma = document.getElementById('btn-suma')
var btn = document.getElementById('btn-validar')
var btnDescuento = document.getElementById('btn-descuento')


//Resultados
var resultado = document.querySelector('#resultado')
var valor = document.querySelector('#valor')
var descuento = document.querySelector('#descuento')

function suma() {
    for (var i = 1; i <= dato.value; i++) {
        total = total + i;
        console.log(total)
        resultado.innerHTML += `${total}<br>`
    }
}

function validar() {
    if (numero.value % 2 == 0) {
        valor.innerHTML = `<br>${numero.value} es un numero es par`
    }else{
        valor.innerHTML = `<br>${numero.value} es un numero impar`
    }
}

function premio(){
    if(genero.value == "hombre" && edad.value <= 10){
            descuento.innerHTML == `Usted aplica para el premio de un jugo y porcion de pizza tres carnes`
        }else if(genero.value == "hombre" && edad.value >= 18){
            descuento.innerHTML == `Usted aplica para el premio de una cerveza y porcion de pizza tres carnes`
        }else if(genero.value == "mujer" && edad.value <= 10){
        descuento.innerHTML == `Usted aplica para el premio de un jugo y porcion de pizza hawaiana`
    }else{

    }

}