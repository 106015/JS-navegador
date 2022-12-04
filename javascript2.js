// Cálculo del número secreto.
// - Solicitar número de usuario.
// - Comprobación del numero secreto:
//   - Si, ganador
//   - No, pista
import readline from 'readline';

function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    debugger;
    return randomNumber;
}

const secretNumber = calculateRandomNumber(0, 10);

// console.log(secretNumber);

// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// productor
function getNumberFromConsole() {
    const promise = new Promise((resolve, reject) => {
        // nos permite hacer una pregunta por consola al usuario. Ojo que es un proceso asíncrono.
        rl.question('Introduce el número: ', (num) => {
            rl.pause();
            resolve(num)
                // si el usuario mete un número, resolvemos la promesa con ese número.
                // si el usuario mete una letra, debemos rechazar/rejectear la promesa.
        })
    })

    return promise;
}

// usuario
let numberFromConsole
do {
    numberFromConsole = await getNumberFromConsole()
    if (numberFromConsole == secretNumber) {
        console.log("Bien! El numero era " + numberFromConsole)
        break;

    } else {
        if (numberFromConsole > secretNumber)
            console.log("Uy! Te has pasado")
        else
            console.log("Uy! Te has quedado corto")
    }
}
while (true);

// no queremos pedir más números por consola.
rl.close()
