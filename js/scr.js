$("#btn-login").click(function(e) {
  e.preventDefault();
  var name = $("#user_name").val(); 
  var user_email = $("#user_email").val();
  var password = $("#password").val();
  var dataString = 'user_name='+name+'&user_email='+user_email+'&password='+password;
  $.ajax({
    type:'POST',
    data:dataString,
    url:'reginfo.php',
    success:function(data) {
      alert(data);
    }
  });
});

/*$("#btn-login").click(function(){
  var data =  $("#login-form :input").serializeArray();
    
   $.post($("#form-signin").attr("action"), $("form :input").serializeArray(), function (info){ $("#result").html(info);} );

});

$("#form-signin").submit( function(){
return false;
});
function clearInput(){

    $("#form-signin").each( function(){
    $(this).val('');
    });

}*/