const readline = require("readline");

class KodePos {
    constructor() {
        this.dataKodePos = Object.fromEntries([
            ["Batununggal", "40266"],
            ["Kujangsari", "40287"],
            ["Mengger", "40267"],
            ["Wates", "40256"],
            ["Cijaura", "40287"],
            ["Jatisari", "40286"],
            ["Margasari", "40286"],
            ["Sekejati", "40286"],
            ["Kebonwaru", "40272"],
            ["Maleer", "40274"],
            ["Samoja", "40273"]
        ]);
    }

    getKodePos(kelurahan) {
        if (kelurahan in this.dataKodePos) {
            return this.dataKodePos[kelurahan];
        }
        return "Kode Pos tidak ditemukan";
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const kodePosInstance = new KodePos();

function prosesInput(nama) {
    const hasil = kodePosInstance.getKodePos(nama);
    console.log(`Kode Pos ${nama} adalah: ${hasil}`);
    rl.close();
}

rl.question("Masukkan nama kelurahan: ", prosesInput);
