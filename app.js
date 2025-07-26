// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
 let campoAmigo = document.getElementById('amigo');

function agregarAmigo(){
    
    let nombreAmigo = (campoAmigo.value).toUpperCase();
    console.log(nombreAmigo);
    
    let validacionOk = validarNombreIngresado(nombreAmigo);
    console.log(validacionOk);

    if(validacionOk != false){
        listaAmigos.push(nombreAmigo);
        campoAmigo.value = '' ;
        mostrarLista(listaAmigos);

        console.log(listaAmigos);
    }else{
        campoAmigo.value = '' ;
    }

    
}

function validarNombreIngresado(nombreUsuario){
    let nombreAmigoArray = [];

    if(nombreUsuario === ''){
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

function mostrarLista(arrayAmigos){
    
    let ulListaAmigos = document.getElementById('listaAmigos');
    ulListaAmigos.innerHTML= '';
    for(let i = 0; i < arrayAmigos.length ; i++){
        ulListaAmigos.insertAdjacentHTML('afterbegin',`<li>${arrayAmigos[i]}</li>`);
    }

}

function sortearAmigos(){
    

}