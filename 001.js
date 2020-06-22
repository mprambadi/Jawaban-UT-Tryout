//program by raja rinaldy
var nilai = 59;
if (nilai >= 90 && nilai <= 100) {
    console.log('Nilai anda '+nilai+', Maka grade anda adalah A');
} else if (nilai >= 80 && nilai < 90) {
    console.log('Nilai anda '+nilai+', Maka grade anda adalah B');
} else if (nilai >= 70 && nilai < 80) {
    console.log('Nilai anda '+nilai+', Maka grade anda adalah C');
} else if (nilai >= 60 && nilai < 70) {
    console.log('Nilai anda '+nilai+', Maka grade anda adalah D');
} else if (nilai < 60) {
    console.log('Nilai anda '+nilai+', Maka grade anda adalah E');
} else {
    console.log('Tolong masukkan rentang nilai antara 0 sampai 100');
}