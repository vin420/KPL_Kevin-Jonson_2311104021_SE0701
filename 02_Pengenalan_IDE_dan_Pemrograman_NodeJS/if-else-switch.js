// if
const a = 5;
const b = 7;
const c = 2;

if (a > b) {
  console.log("a lebih besar dari b");
}

if (a % 2 === 0) {
  console.log("a habis dibagi 2");
} else if (b % 2 === 0) {
  console.log("b habis dibagi 2");
} else if (c % 2 === 0) {
  console.log("c habis dibagi 2");
} else {
  console.log("Semua value variabel tidak habis dibagi 2");
}

// if(2 == '2') {
//   console.log(true)
// }

let pilihan = 2;

switch (pilihan) {
  case 1:
    console.log("Ini pilihan 1");
    break;
  case 2:
    console.log("Ini pilihan 2");
    break;
  default:
    console.log("tidak ada pilihan");
    break;
}
