const fs = require('fs');

fs.writeFile('./text.txt', 'text from nodejs', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('file created');
  }
});

console.log('última línea de código');