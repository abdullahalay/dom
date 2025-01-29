document.getElementById('button-clicked').addEventListener('click',function(event){
    event.preventDefault();
    console.log("button clicked")
    const phoneNumber=document.getElementById('phone-number').value;
    console.log(phoneNumber);
    const pinNumber=document.getElementById('pin-number').value;
    console.log(pinNumber);
    //a temporary way
    if(phoneNumber==='5' && pinNumber==='1234'){
        console.log("you are logged in");
        window.location.href='/home.html';
    }else{
        alert('wrong pin number or pin');
    }




})