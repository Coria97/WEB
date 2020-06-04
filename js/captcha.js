//llama a la funcion generar captcha
let captcha = generarCaptcha();

//Asocia la funcion validar al evento submit del elemtno con id #formulario
const form=document.querySelector("#formulario").addEventListener("submit", validar);

//Funcion que se encarga de devolverme un numero random entre 1 a 10
function generaRandom()
{   
    return Math.floor((Math.random()*10)+1); 
}

//Funcion que se encarga de generar el captcha y imprimpirlo en la pagina web
function generarCaptcha()
{   
    let captcha= generaRandom() * 1000 + generaRandom() * 100 + generaRandom() * 10 + generaRandom(); 
    //Como el captcha es de 4 digitos si supero 10000 lo dividimos entre dos hasta que sea un numero de 4 digitos
    while(captcha >= '10000')
        captcha = Math.floor(captcha/2);
    //Me trae el elemento p con queryselector al se primer que matchea con #muestracaptcha y imprimo el captcha
    document.querySelector("#muestracaptcha").innerHTML=captcha;
    return captcha;
}

//Funcion que se enecargar de verificar que el captcha que ingreso y el que le pedimos que ingrese sean iguales 
function validar(event){
    
    //Extrae lo que ingreso el usuario
    let aValidar = document.getElementById("txtCap").value;
    //lo transforma a un int con la funcion parseInt
    aValidar= parseInt(aValidar);
    if(aValidar !== captcha){
        //Si son distintos entra al if 
        //Me trae el elemento p con queryselector al se primer que matchea con #muestraResultado y imprimo el captcha
        document.querySelector("#muestraResultado").innerHTML= "El captcha ingresado es erroneo";
        //Cancelamos un evento con event.preventDefault(), esto hara que no se envie el captcha
        event.preventDefault();
        captcha=generarCaptcha();
    }
}

