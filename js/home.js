document.getElementById('button-clicked').addEventListener("click",function(event){
    event.preventDefault();
   
    const amountMoney =document.getElementById('amount').value;
    console.log(amountMoney);
    const getpin =document.getElementById('pin-number').value;
    console.log(getpin);
    if(getpin==="1234"){
        console.log("Adding money to your account");
        const currentBalance=document.getElementById('current-balance').innerText;
        console.log(currentBalance);

        const addmomeyNumber=parseFloat( amountMoney);
        console.log(addmomeyNumber);
        const currentBalanceNumber=parseFloat(currentBalance);
        console.log(currentBalanceNumber);
        const newBalance=addmomeyNumber+currentBalanceNumber;
        console.log(newBalance);
        document.getElementById('current-balance').innerText=newBalance;

    }else{
        alert("incorrect pin number");
    }
  


})