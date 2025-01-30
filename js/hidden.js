document.getElementById('cash-out-button').addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('Add-money-form').classList.add('hidden');
});

document.getElementById('button-add-money').addEventListener('click',function(){
    document.getElementById('Add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');

})