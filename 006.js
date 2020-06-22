//program by raja rinaldy
//program sederhana untuk menambah dan menghapus data dalam deret array dengan pemanggilan fungsi
var data = ['bangku', 'meja', 'papan tulis', 'spidol', 'kipas angin', 'penghapus'];

function tampil() {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
}

function tambah() {
    var add = 'pendingin ruangan';
    data.push(add);
}

function hapus() {
    var del = 'penghapus';
    data.pop(del);
}

hapus();
tambah();
tampil();