// constantes e variaveis de escopo

// Mutação
const usuario = { nome: 'Marcos' };

usuario.nome = 'Aurelio';

console.log(usuario);

// Variaveis de escopo
// function teste (x) {
//     let y = 2;

//     if (x > 5) {
//         console.log(x, y);
//     }
// }

// teste(10);

function teste (x) {
    let y = 2;

    if (x > 5) {
        let y = 4;
        console.log(x, y);
    }
}

teste(10)