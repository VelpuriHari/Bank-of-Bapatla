import fs from "fs";
function file(lit) {
  fs.open("accountdetailes.txt", "a+", (err, file) => {
    if (err) throw err;
    fs.writeFile(file, lit, (err) => {
      if (err) throw err;
      console.log("Written on File!");
    });
  });
}
function submitform() {
  event.preventDefault();
}
function account_create() {
  const acct =
    Math.round(Math.random() * (100000000000 - 10000000000 + 1)) + 10000000000;
  document.getElementById("sub").disabled = true;
  console.log(acct);

  document.getElementById(
    "account_num"
  ).innerHTML = `Your Account Number : ${acct} `;
  const lit = [];
  lit[0] = acct;
  for (var i = 1; i <= 16; i++) {
    lit[i] = document.getElementById(i).value;
  }
  console.log(lit);
}
