function myFunction(elmnt) {
    if (elmnt.style.color == "red") { elmnt.style.color = "white" }
    else { elmnt.style.color = "red" }
}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}
const btnPlusAray = document.getElementsByClassName("plus");
const checkboxInputes = document.querySelectorAll("input")

for (var i = 0; i < btnPlusAray.length; i++) {
    btnPlusAray[i].addEventListener("click", increment);
    checkboxInputes[i].addEventListener("click", TotalPrice)
}
function increment(event) {
    const btnPlus = event.target
    const divElt = btnPlus.parentElement
    const quantityTag = divElt.querySelector("p")
    var quantityValue = parseInt(quantityTag.innerHTML)
    quantityValue++
    quantityTag.innerHTML = quantityValue
    const trElement = divElt.parentElement.parentElement
    //console.log(trElement)
    const UnitePriceValue = Number(trElement.querySelector(".UnitePrice").innerHTML)
    const priceTag = trElement.querySelector(".price")
    var priceValue = Number(priceTag.innerHTML)
    priceValue = quantityValue * UnitePriceValue
    priceTag.innerHTML = priceValue
}
const btnMinusAray = document.getElementsByClassName("minus");
for (var j = 0; j < btnMinusAray.length; j++) {
    btnMinusAray[j].addEventListener("click", decrement);
}
function decrement(event) {
    const btnMinus = event.target
    const divElt = btnMinus.parentElement
    const quantityTag = divElt.querySelector("p")
    var quantityValue = parseInt(quantityTag.innerHTML)
    quantityValue--
    quantityTag.innerHTML = quantityValue
    const trElement = divElt.parentElement.parentElement
    //console.log(trElement)
    const UnitePriceValue = Number(trElement.querySelector(".UnitePrice").innerHTML)
    const priceTag = trElement.querySelector(".price")
    var priceValue = Number(priceTag.innerHTML)
    priceValue = quantityValue * UnitePriceValue
    priceTag.innerHTML = priceValue
}
function TotalPrice(e) {
    const checkbox = e.target
    const trElt = checkbox.parentElement.parentElement
    const priceTag = trElt.querySelector(".price")
    var priceValue = parseInt(priceTag.innerHTML)
    var totalTag = document.getElementById("Total")
    var totalValue = parseInt(totalTag.innerHTML)
    const btnPlus = trElt.querySelector(".plus")
    const btnMinus = trElt.querySelector(".minus")
    if (checkbox.checked === true) {
        totalValue += priceValue
        btnPlus.setAttribute("disabled", true)
        btnMinus.setAttribute("disabled", true)
    }
    else {
        btnPlus.removeAttribute("disabled")
        btnMinus.removeAttribute("disabled")
        totalValue -= priceValue
    }
    totalTag.innerHTML = totalValue
}


