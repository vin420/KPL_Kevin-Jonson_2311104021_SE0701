import { PusatDataSingleton } from './PusatDataSingleton.js';

try {
  const pusat1 = PusatDataSingleton.getInstance();
  pusat1.tambahData("Data 1");
  pusat1.tambahData("Data 2");

  const pusat2 = PusatDataSingleton.getInstance();
  pusat2.tambahData("Data 3");

  console.log("Semua Data dari pusat1:", pusat1.getSemuaData());
  console.log("Semua Data dari pusat2:", pusat2.getSemuaData());

  console.log("Apakah pusat1 === pusat2?", pusat1 === pusat2); 
} catch (err) {
  console.error(err.message);
}