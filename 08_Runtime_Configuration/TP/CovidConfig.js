const fs = require("fs");

class CovidConfig {
    constructor() {
        this.configFile = "covid_config.json";
        this.loadConfig();
    }

    loadConfig() {
        if (fs.existsSync(this.configFile)) {
            const data = fs.readFileSync(this.configFile);
            const config = JSON.parse(data);

            if (config.satuan_suhu === "CONFIG1" ||
                config.batas_hari_demam === "CONFIG2" ||
                config.pesan_ditolak === "CONFIG3" ||
                config.pesan_diterima === "CONFIG4") {
                
                this.satuan_suhu = "celcius"; 
                this.batas_hari_demam = 14;   
                this.pesan_ditolak = "Anda tidak diperbolehkan masuk ke dalam gedung ini"; 
                this.pesan_diterima = "Anda dipersilahkan untuk masuk ke dalam gedung ini"; 
                this.saveConfig(); 
            } else {
                this.satuan_suhu = config.satuan_suhu;
                this.batas_hari_demam = parseInt(config.batas_hari_demam);
                this.pesan_ditolak = config.pesan_ditolak;
                this.pesan_diterima = config.pesan_diterima;
            }
        }
    }

    saveConfig() {
        const config = {
            satuan_suhu: this.satuan_suhu,
            batas_hari_demam: this.batas_hari_demam,
            pesan_ditolak: this.pesan_ditolak,
            pesan_diterima: this.pesan_diterima
        };
        fs.writeFileSync(this.configFile, JSON.stringify(config, null, 4));
    }

    UbahSatuan() {
        if (this.satuan_suhu === "celcius") {
            this.satuan_suhu = "fahrenheit";
            console.log("Satuan suhu telah diubah menjadi Fahrenheit.");
        } else {
            this.satuan_suhu = "celcius";
            console.log("Satuan suhu telah diubah menjadi Celcius.");
        }
        this.saveConfig();
    }
}

module.exports = CovidConfig;