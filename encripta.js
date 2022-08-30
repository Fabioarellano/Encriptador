document.getElementById("cadenaAEncriptar").onclick=ocultar;

function ocultar(){
  document.getElementById("cadenaDesEncriptar").style.display = "none";
  document.getElementById("miBotonCopiar").style.display = "none";

}


//Encriptar
document.getElementById("cadenaDesEncriptar").style.display = "none";
var copy = (document.getElementById("miBotonCopiar").style.display = "none");

let miBotonEncriptar = document.getElementById("miBotonEncriptar");

miBotonEncriptar.onclick = encriptarTexto; //Activar el evento del boton

function encriptarTexto() {
    //var textoAEncriptar = document.getElementById("cadenaAEncriptar").value.toLowerCase(); //convertir cadena a minusculas
    var textoAEncriptar = document.getElementById("cadenaAEncriptar").value;

    //validar minuscula y sin aceptos
    if (/[A-Z]/.test(textoAEncriptar) || /[ÑñÁáÉéÍíÓóÚú]/.test(textoAEncriptar)){
        alert("Solo letras minusculas y sin acentos");

        let copyText = document.getElementById("cadenaAEncriptar");
        copyText.select();

        document.getElementById("cadenaAEncriptar").focus();//pasar el foco al texto
    }
    else{
         //Encriptar texto
        var txtEncriptado = textoAEncriptar.replace(/e/gim, "enter");
        var txtEncriptado = txtEncriptado.replace(/o/gim, "ober");
        var txtEncriptado = txtEncriptado.replace(/i/gim, "imes");
        var txtEncriptado = txtEncriptado.replace(/a/gim, "ai");
        var txtEncriptado = txtEncriptado.replace(/u/gim, "ufat");

        //Pasar el texto cifrado  al input box DesEncriptar
        document.getElementById("cadenaDesEncriptar").value = txtEncriptado;
        document.getElementById("cadenaAEncriptar").value = "";
        document.getElementById("miBotonCopiar").style.display = "inline-block";
        document.getElementById("cadenaDesEncriptar").style.display = "inline-block";
    }
}

//boton copiar texto encriptado/desencriptado
var miBotonCopiar = document.getElementById("miBotonCopiar");
miBotonCopiar.onclick = copiarTexto;

function copiarTexto() {
  let copyText = document.getElementById("cadenaDesEncriptar");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);

  alert("texto copiado");
  
  // document.getElementById("cadenaDesEncriptar").value = "";
  document.getElementById("cadenaAEncriptar").focus();//pasar el foco al texto
}

//desEncriptar

let miBotonDesencriptar = document.getElementById("miBotonDesencriptar");

miBotonDesencriptar.onclick = desEncriptar; //Activar el evento del boton

function desEncriptar() {
  //var txtADesEncriptar = document.getElementById("cadenaAEncriptar").value.toLowerCase();
  document.getElementById("cadenaDesEncriptar").style.display="inline";
  document.getElementById("miBotonCopiar").style.display = "inline";
  var txtADesEncriptar = document.getElementById("cadenaAEncriptar").value;

  var txtDesencriptado = txtADesEncriptar.replace(/ober/gim, "o");
  var txtDesencriptado = txtDesencriptado.replace(/enter/gim, "e");
  var txtDesencriptado = txtDesencriptado.replace(/imes/gim, "i");
  var txtDesencriptado = txtDesencriptado.replace(/ai/gim, "a");
  var txtDesencriptado = txtDesencriptado.replace(/ufat/gim, "u");
  
  //Pasar el texto cifrado  al input box
  document.getElementById("cadenaDesEncriptar").value = txtDesencriptado;
  document.getElementById("cadenaAEncriptar").value = "";
}