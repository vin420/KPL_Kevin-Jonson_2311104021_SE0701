class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    AddNewData(data) {
        const isValidFloat = Number(data) === data && data % 1 !== 0 || Number.isInteger(data);
        if (typeof data !== "number" || !Number.isFinite(data) || !isValidFloat) {
            throw new Error("Data harus berupa angka desimal (float)");
        }

        this.storedData = [...this.storedData, data];
        this.inputDates = [...this.inputDates, new Date()];
    }

    PrintAllData() {
        for (let i = 0; i < this.storedData.length; i++) {
            const entry = `Data: ${i + 1}, berisi :${this.storedData[i]}, Date: ${this.inputDates[i]}`;
            console.log(entry);
        }
    }
}

const db = new SimpleDataBase();
db.AddNewData(12);
db.AddNewData(34);
db.AddNewData(56);
db.PrintAllData();
