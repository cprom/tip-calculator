function billTotal() {

  let billAmount = document.getElementById("billAmount").value
  let tipPercent = document.getElementById("tipPercent").value
  let totalAmount = billAmount * tipPercent
  console.log(billAmount)
  console.log(tipPercent)
  console.log(totalAmount)
  document.getElementById("billTotal").innerHTML = totalAmount

}


billTotal()