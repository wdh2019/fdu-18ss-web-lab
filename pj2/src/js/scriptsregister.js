$(document).ready(function(){
    registerInit();
});
function registerInit(){
 //按×重置弹窗
 $("#registration a.close").click(function(){
    $("#registrationUsernameTip").html("");
    $("#registrationEmailTip").html("");
    $("#registrationPasswordTip").html("");
    $("#registrationRePasswordTip").html("");
    $("#registrationTelephoneTip").html("");
    $("#registrationAddressTip").html("");
});

$("#registration .popup-content form").submit(function(e){checkValidation(e)});
$('#registrationUsernameTip').change(function(){resetMessages()});
$('registrationEmailTip').change(function(){resetMessages()});
$('#registrationPasswordTip').change(function(){resetMessages()});
$('#registrationRePasswordTip').change(function(){resetMessages()});
$('#registrationTelephoneTip').change(function(){resetMessages()});
$('#registrationAddressTip').change(function(){resetMessages()});
}

function addErrorMessage(id,msg){
    $('#registration'+id+'Tip').html(msg);
    $('div#controlRegister'+id).addClass('error');
    }

    function clearErrorMessage(id){
    $('#registration'+id+'Tip').html('');
    $('div#controlRegister'+id).removeClass('error');
    }
     
    function resetMessages(){
        clearErrorMessage('Username');
        clearErrorMessage('Email');
        clearErrorMessage('Password');
        clearErrorMessage('Repassword');
        clearErrorMessage('Telephone');
        clearErrorMessage('Address');
    }
    function checkValidation(e){
        var errorFlag=false;
        if($("#registrationUsername").val()==="") {
            $(this).focus();
            addErrorMessage('Username','Alert!Username empty');
            errorFlag=true;
        }
        if($("#registrationPassword").val()==="") {
            $(this).focus();
            addErrorMessage('Username','Alert!Username empty');
            errorFlag=true;
        }
        //有错误则阻止表单发送
       if(errorFlag) e.preventDefault(); 
    }
