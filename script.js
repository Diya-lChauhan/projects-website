document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const messageElement = document.createElement('p');
        messageElement.textContent = messageText;
        document.getElementById('chat-window').appendChild(messageElement);
        
        messageInput.value = '';
        messageInput.focus();
        
        // Scroll to the bottom of the chat window
        const chatWindow = document.getElementById('chat-window');
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}