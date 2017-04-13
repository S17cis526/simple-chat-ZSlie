var socket = io();

socket.on('welcome', function(text) {
    $('<li>').text(text).appendTo('#message-log');
});

socket.on('message', function(message) {
    $('<li>')
        .text(message.text)
        .css('color', message.color)
        .appendTo('#message-log');
});

$('#chat-send').on('click', function() {
    var text = $('#chat-text').text();
    socket.emit('message', text);
    // Clears the chat text
    $('#chat-text').val('');
});