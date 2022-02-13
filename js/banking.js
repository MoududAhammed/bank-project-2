// get input and make as a float vlue
function getInput(inputId){
    const inputfield = document.getElementById(inputId);
    const inputValue = parseFloat(inputfield.value);
    inputfield.value = '';
    return inputValue;
}
// add amount with previous total amount
function addAmount(totalId,newAmount){
    const total = document.getElementById(totalId);
    const previousTotal = parseFloat(total.innerText);
    const currentTotal = previousTotal + newAmount;
    total.innerText = currentTotal;  
}
//cooking total balalnce
function finalBalance(balalnceId,newAmount){
    const balalnce = document.getElementById(balalnceId);
    const previousTotalAmount =parseFloat(balalnce.innerText);
    const finalValue = previousTotalAmount + newAmount;
    balalnce.innerText = finalValue;
}
// deposit button click action
document.getElementById('deposit-button').addEventListener('click',function(){
    const inputAmount = getInput('deposit-input');
    addAmount('deposit-total',inputAmount);
    // add deposit balance with final balance
    finalBalance('total-balance',inputAmount);
    
})
// widthdraw button click action
document.getElementById('withdraw-button').addEventListener('click',function(){
    const inputAmount = getInput('withdraw-input');
    addAmount('withdraw-total',inputAmount);
    // final balance after withdraw
    finalBalance('total-balance',-inputAmount);
})

