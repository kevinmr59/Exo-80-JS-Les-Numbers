let entier =document.getElementById('is-integer');
if (Number.isInteger(entier)){
    entier.innerHTML='est un nombre entier'
}else {
    entier.innerHTML= 'est pas un nombre entier'
}

let nombre = document.getElementById('is-nan');
if (Number.isNaN(nombre)) {
    nombre.innerHTML='est Nan';}
    else
    {
        nombre.innerHTML='est un nombre';
    }


let flote =document.getElementById('parse-float');
let floteO = parseInt(flote.innerHTML)
flote.innerHTML= parseFloat(floteO*28)+'de la population blablabla';


let four = document.getElementById('parse-int');
let fourO = parseInt(four.innerHTML);
four.innerHTML= parseInt(fourO/28)+ 'px';


let five = document.getElementById('to-fixed');
let fiveO =parseFloat(five.innerHTML);
five.innerHTML=fiveO.toFixed(2);










