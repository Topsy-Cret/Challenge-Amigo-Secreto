// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let arrayNumSorteados = [];
let campoAmigo = document.getElementById('amigo');
let ulListaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado')
let contador=0;

function agregarAmigo(){
    
    let nombreAmigo = (campoAmigo.value).toUpperCase();
    let validacionOk = validarNombreIngresado(nombreAmigo);

    if(validacionOk != false){
        listaAmigos.push(nombreAmigo);
        campoAmigo.value = '' ;
        mostrarLista(listaAmigos);
        console.log(listaAmigos);
        
        
    }else{
        campoAmigo.value = '' ;
    }

    
}

// validacion de nombres ingresados en el campo
function validarNombreIngresado(nombreUsuario){
    let nombreAmigoArray = [];
    console.log(!campoAmigo)
    if(!campoAmigo.value){
        alert('El campo está vacío')
        return false;
    }else{
            for(let i=0 ; i < nombreUsuario.length ; i++){
                nombreAmigoArray[i] = nombreUsuario.charCodeAt(i);

                if (nombreAmigoArray[i] < 65 || (nombreAmigoArray[i] > 90 && nombreAmigoArray[i] != 209) ){
                    alert('Solo se permiten letras como carácter válido');
                    return false;
                    
                }
            }
        }


}
//muestra la lista en el HTML
function mostrarLista(arrayAmigos){
    
ulListaAmigos.innerHTML= '';
    for(let i = 0; i < arrayAmigos.length ; i++){
        ulListaAmigos.insertAdjacentHTML('beforeend',`<li>${arrayAmigos[i]}</li>`);
    }

}
//funcionalidad del boton 'Sortear Amigo'
function sortearAmigo(){
    
    if(listaAmigos.length === 0){
        alert('Escriba un nombre  y pulse AÑADIR antes de sortear');
        return false;
    }else{
        let numeroAleatorio = Math.floor(Math.random()*listaAmigos.length);
        console.log(`num random ${numeroAleatorio}`);
        let resul=listaDeNumAleatorios(numeroAleatorio);
        if(resul == true){
            sortearAmigo() ; }else if(resul == false){

            }else{
                console.log(resul);
        console.log(`array num random ${arrayNumSorteados}`);
        console.log(`num random ${numeroAleatorio}`);
            resultado.innerHTML='';
            resultado.insertAdjacentHTML('afterbegin',`<li>${listaAmigos[numeroAleatorio]}, quedan ${(listaAmigos.length)-contador} por sortear</li>`);
    }
}
}

function listaDeNumAleatorios(numAleatorio){
     
     if (arrayNumSorteados.includes(numAleatorio)&&arrayNumSorteados.length<listaAmigos.length){
        return true;
     }else if (!arrayNumSorteados.includes(numAleatorio)&&arrayNumSorteados.length<listaAmigos.length){
        contador++;
        arrayNumSorteados.push(numAleatorio);
        return;
        }else{
            alert('se sortearon todos los nombres');
            return false;
        }

        
}
