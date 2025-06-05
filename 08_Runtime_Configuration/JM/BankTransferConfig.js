const fs = require('fs');

class BankTransferConfig {
    constructor() {
        this.configFile = 'bank_transfer_config.json';
        this.defaultConfig = {
            lang: "en",
            transfer: {
                threshold: 25000000,
                low_fee: 6500,
                high_fee: 15000
            },
            methods: ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
            confirmation: {
                en: "yes",
                id: "ya"
            }
        };
        this.loadConfig();
    }

    loadConfig() {
        if (fs.existsSync(this.configFile)) {
            const data = fs.readFileSync(this.configFile);
            this.config = JSON.parse(data);
        } else {
            this.config = this.defaultConfig;
            this.saveConfig();
        }
    }

    saveConfig() {
        fs.writeFileSync(this.configFile, JSON.stringify(this.config, null, 4));
    }
}

module.exports = BankTransferConfig;