function billTotal() {

  let billAmount = document.getElementById("billAmount").value
  let tipPercent = document.getElementById("tipPercent").value
  let tipAmount = billAmount * tipPercent
  let totalAmount = parseFloat(tipAmount) + parseFloat(billAmount)
  // console.log(billAmount)
  // console.log(tipPercent)
  // console.log(totalAmount)
  // console.log(tipAmount)
  document.getElementById("tipAmount").innerHTML = tipAmount.toFixed(2)
  document.getElementById("billTotal").innerHTML = totalAmount.toFixed(2)

}


billTotal()