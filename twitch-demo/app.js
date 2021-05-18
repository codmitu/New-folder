
const twChat = document.querySelector("#chat");
const messages = [];
const maxMessages = 20;
ComfyJS.onChat = (user, message, flags, self, extra) => {
    updateMessages(user, message);
    if (message === "OMEGALUL") {
        ComfyJS.Say("LUL");
    }
    // if (message.includes('a')) {
    //     ComfyJS.Say("fdgd");
    // }
}
ComfyJS.Init("Wolfabelle", "zaa5dqea0ypm54vp2uyvcnwpmnf6t4");

function updateMessages(user, message) {
    messages.push(message);

    const userEl = document.createElement('b');
    userEl.classList.add('user');
    userEl.innerText = user + ': ';

    const textT = document.createElement('span');
    textT.classList.add('text');
    textT.innerText = message;


    const lineText = document.createElement('div');
    lineText.appendChild(userEl);
    lineText.appendChild(textT);

    twChat.appendChild(lineText);

    if (messages.length > maxMessages) {
        messages.shift();
        const messageToDelete = twChat.firstChild;
        twChat.removeChild(messageToDelete);
    }


}
