class PusatDataSingleton {
  constructor() {
    if (PusatDataSingleton._instance) {
      throw new Error("Gunakan getInstance() untuk mendapatkan instance.");
    }

    this.dataTersimpan = []; // List untuk menyimpan data
    PusatDataSingleton._instance = this;
  }

  static getInstance() {
    if (!PusatDataSingleton._instance) {
      PusatDataSingleton._instance = new PusatDataSingleton();
    }
    return PusatDataSingleton._instance;
  }

  tambahData(data) {
    this.dataTersimpan.push(data);
  }

  getSemuaData() {
    return this.dataTersimpan;
  }
}

export { PusatDataSingleton };