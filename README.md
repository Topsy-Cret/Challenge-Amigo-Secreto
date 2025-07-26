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


