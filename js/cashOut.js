document.getElementById('Cash-button-clicked').addEventListener('click',function(event){
    event.preventDefault();
    console.log("button clicked");
    const totalAmount=document.getElementById('Total-amount').value;
    console.log(totalAmount);
    const cashOutPin=document.getElementById('Cash-pin-number').value;
    console.log(cashOutPin);
    if(cashOutPin==="1234"){
        console.log("money widrowing from your account");
        const currentBalance=document.getElementById('current-balance').innerText;
        console.log(currentBalance);
        const currentBalanceNumber2=parseFloat(currentBalance);
        console.log(currentBalanceNumber2);
        const totalAmountNumber=parseFloat(totalAmount);
        console.log(totalAmountNumber);
        const newBalance2=currentBalanceNumber2-totalAmountNumber;
        console.log(newBalance2);
        document.getElementById('current-balance').innerText=newBalance2;
    }else
    {
        alert("incorrect pin number");
    }
})