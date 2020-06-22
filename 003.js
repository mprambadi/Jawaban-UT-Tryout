//program by raja rinaldy
var arr = [];
var total = 0;

//pengulangan untuk mendapatkan 100 bilangan random yang disimpan dalam array dengan nama variabel 'arr'
for (var i = 1; i <= 100; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1); //bilangan random rentang antara 1 sampai 100
}

//pengulangan untuk menentukan nilai rata2
for(var j = 0; j < arr.length; j++) {
    total += arr[j];
}

var rata = total / arr.length;
console.log(arr);
console.log('Nilai Maksimal '+Math.max(...arr));
console.log('Nilai Minimum '+Math.min(...arr));
console.log('Nilai Rata-Rata '+rata);