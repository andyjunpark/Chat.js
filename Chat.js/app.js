var socket = io();


$('button').on('click',function () {
  var text = $("#message").val();
  //alert(text);
  socket.emit('message', text);
  $('#message').val('');
  return false;
});

socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
});

$('h1').on('click', function() {
  alert('Welcome to my app!')
  return false;
})