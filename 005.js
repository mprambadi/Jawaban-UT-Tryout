//program by raja rinaldy
var dari = 1600;
var ke = 2020;
var i = ke - dari;
for (; dari <= ke; dari++) {
    //fungsi kondisi yang menentukan apakah bilangan input merupakan tahun kabisat atau bukan
    if ( (0 == dari % 4) && (0 != dari % 100) || (0 == dari % 400) ) {
        console.log(dari+' Merupakan Tahun Kabisat');
    } else {
        console.log(dari+' Bukan Tahun Kabisat');
    }
}