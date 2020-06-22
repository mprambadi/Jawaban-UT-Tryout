//program by raja rinaldy
function check_palindrome (str_entry) {
    var tidak = "Bukan kalimat Palindrome.";
    var iya = "Merupakan kalimat Palindrome.";
    //mengubah huruf menjadi huruf kecil dan eliminasi angka
    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var ccount = 0;
        //Cek apakah string kosong atau tidak
        if (cstr==="") {
            console.log("Tidak ditemukan apa apa!");
            return false;
        }
        //Cek apakah kalimat berjumlah ganjil atau genap
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
            if (cstr.length === 1) {
                console.log(iya);
                return true;
            } else {
                ccount = (cstr.length - 1) / 2;
            }
        }
        for (var x = 0; x < ccount; x++) {
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                console.log(tidak);
                return false;
            }
        }
    console.log(iya);
    return true;
}
check_palindrome('Cigar? Toss it in a can. It is so tragic');
check_palindrome('Eva, can I see bees in a cave?');
check_palindrome('fox');