// Import module untuk input dari terminal
const readline = require("readline");

/**
 * Class KodePos
 * Menyediakan data dan fungsi untuk mengambil kode pos berdasarkan nama kelurahan.
 */
class KodePos {
    // Properti private untuk menyimpan data kelurahan dan kode pos
    constructor() {
        this._kelurahanKodePosMap = Object.fromEntries([
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

    /**
     * Mengambil kode pos berdasarkan nama kelurahan.
     * @param {string} kelurahan - Nama kelurahan
     * @returns {string} Kode pos atau pesan error
     */
    getPostalCodeByKelurahan(kelurahan) {
        if (kelurahan in this._kelurahanKodePosMap) {
            return this._kelurahanKodePosMap[kelurahan];
        }

        return "Kode Pos tidak ditemukan";
    }
}

// Inisialisasi antarmuka pembaca input dari terminal
const inputInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const postalCodeService = new KodePos();

/**
 * Fungsi callback untuk memproses input kelurahan dari user.
 * @param {string} kelurahanInput - Input nama kelurahan
 */
function handleUserInput(kelurahanInput) {
    const postalCode = postalCodeService.getPostalCodeByKelurahan(kelurahanInput);
    console.log(`Kode Pos ${kelurahanInput} adalah: ${postalCode}`);
    inputInterface.close();
}

// Mulai menerima input dari pengguna
inputInterface.question("Masukkan nama kelurahan: ", handleUserInput);
