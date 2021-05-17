

const chat = document.querySelector("#chat");
const messages = [];
const maxMessages = 20;
ComfyJS.onChat = (user, message, flags, self, extra) => {
    updateMessages(user, message);
    // console.log(user, message)
}
ComfyJS.Init("xQcOW");

function updateMessages(user, message) {
    messages.push(message);
    // userN.innerText = username;
    // const messageS = document.createElement('span');
    // messageS.innerText = message;
    const textT = document.createElement('span');
    textT.classList.add('text');
    textT.innerText = message;
    const userEl = document.createElement('b');
    userEl.classList.add('user');
    userEl.innerText = user + ': ';
    const lineText = document.createElement('p');
    lineText.appendChild(userEl);
    lineText.appendChild(textT);

    chat.appendChild(lineText);
    // textT.appendChild(userN);
    // textT.appendChild(messageS);
    // text.innerText += message;
    if (messages.length > maxMessages) {
        messages.shift();
        const messageToDelete = chat.firstChild;
        chat.removeChild(messageToDelete);
    }

}