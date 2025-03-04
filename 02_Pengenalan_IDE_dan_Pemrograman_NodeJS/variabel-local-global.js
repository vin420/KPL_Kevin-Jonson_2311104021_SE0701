let globalvariable = "Kevin Jonson";

function getmyidentity() {
  let localvariable = "2311104021";
  console.log(
    `Nama saya ${globalvariable} dan nim saya adalah ${localvariable}`
  );
}

console.log(globalvariable);

// local variabel cuma bisa di akses sama function yang punya variabel tersebut
console.log(localvariable);

getmyidentity();
