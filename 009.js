//program by raja rinaldy
var data = ["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", 
    "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"];
var dups = [];
var arr = data.filter(function(el) {
    // If it is not a duplicate, return true
    if (dups.indexOf(el) == -1) {
        dups.push(el);
        return true;
    }
    return false;
});
console.log(arr);