/*
1. Generar un teclado funcional que muestre las letras clickeados en el cuadro de texto
2. Hacer un evento para cada boton que genere la letra
3. Usando for o while o cualquier recorrido vamos a asignar eventos a los botones
4. Usar la logica conocida para crear reglas a los botones especiales
    a) Boton de mayusculas, debe generar letras mayusculas los demas botones cuando este haya sido presionado
    b) Boton de borrar debe borrar el ultimo caracter
    c) El boton de espacio debe generar un espacio  
*/

//WRITING AREA METHOD
//this will select every element which the class 'button'
const array = document.querySelectorAll('.button');

//this will select the text area with textArea class
const textArea = document.querySelector('.textArea');

let specialCharacters = []
const backspace = document.querySelector('.backspace');
const space = document.querySelector('.space');
const mayus = document.querySelector('.mayus');

//toma el arreglo de array y extrae cada elemento, llamado button
array.forEach(button => {
    //diciendole que al escuchar el evento click,
    button.addEventListener('click', () => {
        // le 'sume' al textArea, el innerText (<innerText>) de cada elemento button del arreglo array
        textArea.value += button.innerText
        //divide cada elemento del array para poder eliminar el ultimo
        specialCharacters = textArea.value.split('');


    });
});

//SPECIAL CHARACTERS
backspace.addEventListener('click', () => {
    //elimina el ultimo elemento del array
    specialCharacters.pop();
    // El método join() une todos los elementos de una matriz
    //  (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
    textArea.value = specialCharacters.join('')
});

space.addEventListener('click', () => {
    //agrega un espacio al final del arreglo
    specialCharacters.push(' ')
    //separa los elementos, como push utiliza un espacio en blanco lo omite, asi que necesita join
    textArea.value = specialCharacters.join('');
});

mayus.addEventListener('click', () => {
    // let buttonMayus=textArea.value;
    // textArea.value=buttonMayus.toUpperCase();
    // textArea.value = specialCharacters.join('')
    array.forEach(button => {
        button.classList.toggle("upper");
    })
});





