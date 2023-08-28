function acc() {
  localStorage.setItem("email", "veerendrahari396@gmail.com");
  var mail = localStorage.getItem("email");
  document.getElementById("mail").innerHTML = `${mail}`;
}
function acc_num() {
  var code = document.getElementById("code").value;
  if (code == localStorage.getItem("pin")) {
    document.getElementById("acc_num").innerHTML = `${localStorage.getItem(
      "accnum"
    )}`;
  }
}
