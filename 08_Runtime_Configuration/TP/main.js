const fs = require("fs");
const readline = require("readline");
const CovidConfig = require("./CovidConfig.js");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const config = new CovidConfig();

config.UbahSatuan();

rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${config.satuan_suhu}: `, (suhuInput) => {
    let suhu = parseFloat(suhuInput);

    rl.question("Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ", (hariInput) => {
        const hariDemam = parseInt(hariInput);

        let isNormalSuhu = false;

        if (config.satuan_suhu === "celcius") {
            isNormalSuhu = (suhu >= 36.5 && suhu <= 37.5);
        } else if (config.satuan_suhu === "fahrenheit") {
            isNormalSuhu = (suhu >= 97.7 && suhu <= 99.5);
        }

        if (isNormalSuhu && hariDemam < config.batas_hari_demam) {
            console.log(config.pesan_diterima);
        } else {
            console.log(config.pesan_ditolak);
        }

        rl.close();
    });
});