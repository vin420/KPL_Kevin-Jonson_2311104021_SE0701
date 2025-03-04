const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let items = [];
let itemCount = 0;

rl.question("Masukkan jumlah barang: ", (count) => {
  itemCount = parseInt(count);
  if (isNaN(itemCount) || itemCount <= 0) {
    console.log("Jumlah barang harus berupa angka yang valid!");
    rl.close();
    return;
  }
  askItem(1);
});

function askItem(index) {
  if (index > itemCount) {
    calculateTotal();
    return;
  }
  rl.question(`Masukkan harga barang ke-${index}: `, (price) => {
    price = parseFloat(price);
    if (isNaN(price) || price <= 0) {
      console.log("Harga harus berupa angka yang valid!");
      askItem(index);
      return;
    }
    items.push({ index, price });
    askItem(index + 1);
  });
}

function calculateTotal() {
  let total = items.reduce((sum, item) => sum + item.price, 0);
  let discountCategory = "Tidak Ada Diskon";

  if (total > 100000) {
    discountCategory = "Diskon Besar";
  } else if (total >= 50000) {
    discountCategory = "Diskon Sedang";
  }

  console.log(`Total harga: ${total}`);
  console.log(`Jumlah barang: ${itemCount}`);
  console.log(`Kategori Diskon: ${discountCategory}`);

  items.forEach((item) => {
    console.log(`Informasi tambahan untuk barang ke-${item.index}`);
  });

  rl.close();
}
