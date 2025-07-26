# Challenge-Amigo-Secreto
Primer challenge para el programa Oracle ONE en colaboración con Alura Latam

Primer desafío

***'Si el usuario ingresa un campo vacío debe aparecer una alerta indicándole que ingrese un nombre'***  
La solución podría parecer simple al inicio, solo validando que el valor del campo sea distinto a '' (campo vacío) debería bastar.
```javascript
let nombreAmigo = document.getElementById('amigo').value;
if (nombreAmigo === ''){
        alert('Ingresa un nombre válido');
}
```
Pero, ¿Que ocurre si ingresa números? ¿O caracteres especiales? ¿O si el gato se asentó en el teclado enviando una sucesión infinita de espacios?  
Solución: 
La realidad es que todos los valores ingresados ``` value ``` los tomará como ```'string'``` . 
Mi primera aproximación fue convertir el string que ingresara el usuario en un array, atraves del siguiente for (desconociendo que existia el método ```split()```)  :  

```javascript
let nombreAmigoArray = [];
    for(let i=0; i<nombreAmigo.length ; i++){
        nombreAmigoArray[i] = nombreAmigo.charAt(i);
    }
```
Luego a traves del método map compararia cada elemento con una condición. Si contenía un espacio, dejaría el elemento como estaba, sino, cambio el elemento por cualquier valor, en este caso ' % '  

```javascript
let arrayComparador = nombreAmigoArray.map(item => item === ' ' ? ' ' : '%' );
```
Al final deberia comparar ambos arrays , y de ser distintos aparecería la alerta. Pero claro, esta visión seguia siendo acotada al caracter espacio (o sucesión de este) sin tener en cuenta los números u otros símbolos. 

