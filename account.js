function account_create() {
  document.getElementById("sub").disabled = true;
  localStorage.clear();
  window.open("accountNum.html", "blank");
  window.close("Account.html");
}
function acc() {
  val_ue = localStorage.getItem("accnum");
  if (!val_ue) {
    const acct =
      Math.round(Math.random() * (100000000000 - 10000000000 + 1)) +
      10000000000;
    document.getElementById(
      "account_num"
    ).innerHTML = `Your Account Number : ${acct}`;
    localStorage.setItem("accnum", acct);
  } else {
    document.getElementById(
      "account_num"
    ).innerHTML = `Your Account Number : ${val_ue}`;
  }
}
