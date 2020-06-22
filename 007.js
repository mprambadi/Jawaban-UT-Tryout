//program by raja rinaldy
function balikata(kata) {
    //pisahkan kata menjadi karakter
    var pisah = kata.split('');
    
    // 2. balik karakter tadi
    var balik = pisah.reverse();

    //hasilnya digabung kembali menjadi sebuah string
    var gabung = balik.join('');
    
    return gabung;
}
console.log(balikata('semua kata-kata'));