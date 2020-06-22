function billTotal() {


  let billAmount = Number(document.getElementById("billAmount").value)
  let tipPercent = Number(document.getElementById("tipPercent").value)
  let tipAmount = billAmount * tipPercent
  let totalAmount = tipAmount + billAmount
  // console.log(billAmount)
  // console.log(tipPercent)
  // console.log(totalAmount)
  // console.log(tipAmount)
  document.getElementById("tipAmount").innerHTML = tipAmount.toFixed(2)
  document.getElementById("billTotal").innerHTML = totalAmount.toFixed(2)


}




billTotal()

document.getElementById('total').onkeydown = function (e) {
  if (e.keyCode == 13) {
    billTotal()
    // submit
  }
};