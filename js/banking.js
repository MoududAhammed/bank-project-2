function getCurrentBalance(){
    const balance = document.getElementById('total-balance');
    const previousTotalAmount = parseFloat(balance.innerText);
    return previousTotalAmount;
}
// get input and make as a float vlue
function getInput(inputId){
    const inputfield = document.getElementById(inputId);
    const inputValue = parseFloat(inputfield.value);
    inputfield.value = '';
    return inputValue;
}
// add amount with previous total amount
function addAmount(totalId,newAmount){
    if(newAmount>0){
        const total = document.getElementById(totalId);
        const previousTotal = parseFloat(total.innerText);
        const currentTotal = previousTotal + newAmount;
        total.innerText = currentTotal;
    }
      
}

//cooking total balalnce
function finalBalance(newAmount,isTrue){
    if(newAmount>0){
        const balalnce = document.getElementById('total-balance');
        // const previousTotalAmount =parseFloat(balalnce.innerText);
        const previousTotalAmount = getCurrentBalance();
        debugger;
            if(isTrue==true){
                const finalValue = previousTotalAmount + newAmount;
                balalnce.innerText = finalValue;
            }
            else{
                const finalValue = previousTotalAmount - newAmount;
                balalnce.innerText = finalValue;
            }
    }     
}
// deposit button click action
document.getElementById('deposit-button').addEventListener('click',function(){
    const inputAmount = getInput('deposit-input');
    addAmount('deposit-total',inputAmount);
    // add deposit balance with final balance
    finalBalance(inputAmount,true);   
})

// widthdraw button click action
document.getElementById('withdraw-button').addEventListener('click',function(){
    const inputAmount = getInput('withdraw-input');
    const totalAmount  = getCurrentBalance();

    if(totalAmount >= inputAmount){
        addAmount('withdraw-total',inputAmount);
        // final balance after withdraw
        finalBalance(inputAmount,false);
     } 
})

