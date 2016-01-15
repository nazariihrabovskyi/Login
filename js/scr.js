$("#btn-login").click(function(){
  /*var data =  $("#login-form :input").serializeArray();*/
    
    $.post($("#login-form").attr("action"), ,$("myForm :input").serializeArray(), function (info){ $("#result").html(info);} );

});

$("#login-form").submit( function(){
return false;
});
/*function clearInput(){

    $("#login-form").each( function(){
    $(this).val('');
    });

}*/