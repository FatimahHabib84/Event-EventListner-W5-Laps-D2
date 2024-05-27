let taxes = document.getElementById('tax');
btn = document.getElementsByTagName('button');

btn[0].addEventListener('click',()=>{
    let price = parseFloat(document.getElementsByTagName('input')[0].value);
    console.log(price)
    console.log(tax)
    let totalTax = price + (price*0.15)
    console.log(totalTax)
    taxes.innerText+=totalTax.toString()
    return totalTax
})

let qata = document.getElementById('qata')
btn[1].addEventListener("click",()=>{
    let totalPrice = parseFloat(document.getElementById("totalPrice").value)
    let numberOfpeople = parseFloat(document.getElementById('numberOfpeople').value)
    let devide = totalPrice/numberOfpeople
    qata.innerText+=devide.toString()
})