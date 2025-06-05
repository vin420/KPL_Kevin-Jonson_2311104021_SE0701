class DoorMachine {
    constructor() {
        this.state = null;
        this.setState("Terkunci");
    }

    setState(status) {
        this.state = status;
        const pesan = status === "Terkunci" ? "Pintu terkunci" : "Pintu tidak terkunci";
        console.log(pesan);
    }

    kunciPintu() {
        if (this.state === "Terkunci") {
            console.log("Pintu sudah terkunci.");
        } else {
            this.setState("Terkunci");
        }
    }

    bukaPintu() {
        if (this.state === "Terbuka") {
            console.log("Pintu sudah tidak terkunci.");
        } else {
            this.setState("Terbuka");
        }
    }
}

const pintu = new DoorMachine();
pintu.bukaPintu();
pintu.kunciPintu();
pintu.kunciPintu();
pintu.bukaPintu();
