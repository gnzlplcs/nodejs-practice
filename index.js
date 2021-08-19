const fs = require('fs');


// escribir un archivo: nombre del archivo, contenido, función
fs.writeFile('./text.txt', 'text from nodejs', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('file created');
  }
});

// leer un archivo: nombre del archivo, función
fs.readFile('./text.txt', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
})

console.log('esperando a que se ejecute esto');
console.log('después esto');
console.log('después esto otro');
console.log('vamos, ya casi termina');
console.log('casi la última línea');
console.log('última línea de código');