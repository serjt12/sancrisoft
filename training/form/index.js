$(document).ready(function () {


$('#portafolioform').on('blur', '.portafolioName', function () {
var input=$(this);
var portafolioName=input.val();
if (portafolioName.length===0) {
    
   input.closest('#portafolioform').find('#error').addClass('error_show');
   
} 
if (portafolioName.length > 0 && portafolioName.length<5) {
    input.closest('#portafolioform').find('#short').addClass('error_show');
    input.closest('#portafolioform').find('#error').removeClass('error_show');
}else{
    input.closest('#portafolioform').find('#short').removeClass('error_show');
}


});

$('#portafolioform').on('blur', '.portafolioAddress', function () {
    var input = $(this);
    var portafolioAddress = input.val();
    if (portafolioAddress.length === 0) {

        input.closest('#portafolioform').find('#errorad').addClass('error_show');

    }
    if (portafolioAddress.length > 0 && portafolioAddress.length < 5) {
        input.closest('#portafolioform').find('#shortad').addClass('error_show');
        input.closest('#portafolioform').find('#errorad').removeClass('error_show');
    } else {
        input.closest('#portafolioform').find('#shortad').removeClass('error_show');
    }


});

$('#portafolioform').on('blur', '.username', function () {
    var input = $(this);
    var userName = input.val();
    if (userName.length === 0) {

        input.closest('#portafolioform').find('#erroruser').addClass('error_show');

    }
    if (userName.length > 0 && userName.length < 5) {
        input.closest('#portafolioform').find('#shortuser').addClass('error_show');
        input.closest('#portafolioform').find('#erroruser').removeClass('error_show');
    } else {
        input.closest('#portafolioform').find('#shortuser').removeClass('error_show');
    }


});

$('#portafolioform').on('blur', '.email', function () {
    var input = $(this);
    var email = input.val();
    if (email.length === 0) {

        input.closest('#portafolioform').find('#errormail').addClass('error_show');

    }else{
       
          var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
             if (email.length > 5 && testEmail.test(email))
             // Do whatever if it passes.
         input.closest('#portafolioform').find('#wrongmail').removeClass('error_show');
        
           else
        // Do whatever if it fails.
        input.closest('#portafolioform').find('#wrongmail').addClass('error_show');
        input.closest('#portafolioform').find('#errormail').removeClass('error_show');
    }
    

});

$('#portafolioform').on('blur', '.password', function () {
    var input = $(this);
    var password = input.val();
    if (password.length === 0) {

        input.closest('#portafolioform').find('#errorpass').addClass('error_show');

    }
    if (password.length > 0 && password.length < 5) {
        input.closest('#portafolioform').find('#shortpass').addClass('error_show');
        input.closest('#portafolioform').find('#errorpass').removeClass('error_show');
    } else {
        input.closest('#portafolioform').find('#shortpass').removeClass('error_show');
    }


});



$('#portafolioform').on('click','button', function(e) {
e.preventDefault();
var showClass =$('#portafolioform').find('span').hasClass('error_show');
var portaname=$(this).closest('#portafolioform').find('.portafolioName').val();
var portaaddress=$(this).closest('#portafolioform').find('.portafolioAddress').val();
var username=$(this).closest('#portafolioform').find('.username').val();
var email=$(this).closest('#portafolioform').find('.email').val();
var pass=$(this).closest('#portafolioform').find('.password').val();

   
   
   
if (!(showClass) && ($('#terms:checked').length === 1) && portaname.length > 0 && portaaddress.length > 0 && username.length > 0 && email.length > 0 && pass.length > 0) {
    alert('Your information was succesfully saved');
} else {
    alert('You have some data missing');
}
   





    

});


});