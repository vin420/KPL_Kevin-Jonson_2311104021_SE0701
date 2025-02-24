import process from "process";
import readline from "readline";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Siapa Nama Kamu?: ", (nama) => {
  console.info(`Hallo ${nama}`);
  input.question("Jurusan Kamu?: ", (jurusan) => {
    console.info(`Kamu di Jurusan ${jurusan}`);
    input.question("Universitas Kamu?: ", (univ) => {
      console.info(`Kamu berada diuniversitas ${univ}`);
      input.question("Umur Kamu?: ", (umur) => {
        console.info(`dan kamu berumur ${umur}`);
        input.close();
      });
    });
  });
});
