const BankTransferConfig = require('./BankTransferConfig');
const readline = require('readline');

const config = new BankTransferConfig();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => rl.question(question, answer => resolve(answer)));
}

async function main() {
    const lang = config.config.lang;
    const transfer = config.config.transfer;
    const methods = config.config.methods;
    const confirmation = config.config.confirmation;

    const promptTransfer = lang === "id" ? "Masukkan jumlah uang yang akan di-transfer: " : "Please insert the amount of money to transfer: ";
    const amountInput = await ask(promptTransfer);
    const amount = parseFloat(amountInput);

    let fee = amount <= transfer.threshold ? transfer.low_fee : transfer.high_fee;
    let total = amount + fee;

    if (lang === "id") {
        console.log(`Biaya transfer = ${fee}`);
        console.log(`Total biaya = ${total}`);
    } else {
        console.log(`Transfer fee = ${fee}`);
        console.log(`Total amount = ${total}`);
    }

    const promptMethod = lang === "id" ? "Pilih metode transfer:" : "Select transfer method:";
    console.log(promptMethod);
    methods.forEach((method, index) => {
        console.log(`${index + 1}. ${method}`);
    });

    await ask("> (pilih nomor metode) ");

    const confirmPrompt = lang === "id" ? `Ketik "${confirmation.id}" untuk mengkonfirmasi transaksi: ` : `Please type "${confirmation.en}" to confirm the transaction: `;
    const confirmInput = await ask(confirmPrompt);

    const confirmWord = lang === "id" ? confirmation.id : confirmation.en;

    if (confirmInput.toLowerCase() === confirmWord.toLowerCase()) {
        console.log(lang === "id" ? "Proses transfer berhasil" : "The transfer is completed");
    } else {
        console.log(lang === "id" ? "Transfer dibatalkan" : "Transfer is cancelled");
    }

    rl.close();
}

main();