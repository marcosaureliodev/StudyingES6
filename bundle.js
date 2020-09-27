"use strict";

// constantes e variaveis de escopo
// Mutação
var usuario = {
  nome: 'Marcos'
};
usuario.nome = 'Aurelio';
console.log(usuario); // Variaveis de escopo
// function teste (x) {
//     let y = 2;
//     if (x > 5) {
//         console.log(x, y);
//     }
// }
// teste(10);

function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

teste(10);
