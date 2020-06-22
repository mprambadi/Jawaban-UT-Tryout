//program by raja rinaldy
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
var angka = 0;
var jawab = 0;

function promptInput (prompt, handler) {
    rl.question(prompt, input => {
        if (handler(input) !== false) {
            promptInput(prompt, handler);
        } else {
            rl.close();
        }
    });
}

/*disini saya membuat program yang jika dimasukkan huruf maka program tidak akan berhenti,
tetapi angka yang sbeleumnya tetap disimpan sampai user mengetik '='*/
promptInput('Masukan Angka > ', input => {
    if (isFinite(input)) {
        angka = Number(input);
        jawab += angka;
        console.log(jawab);
    } else if (input === '=') {
        console.log('Hasil Akhir Anda Adalah : '+jawab);
        return false;
    } else {
        console.log('Masukkan hanya angka saja!');
    }
});