const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

class HaloGeneric {
    static SapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}

readline.question("Masukkan nama Anda: ", (nama) => {
    HaloGeneric.SapaUser(nama);
    readline.close();
});