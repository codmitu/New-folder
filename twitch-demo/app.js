
const twChat = document.querySelector("#chatText");
const form = document.querySelector("#form");
const inp0 = document.querySelector("#input0");
const inp1 = document.querySelector("#input1");
const inp2 = document.querySelector("#input2");
const submitBtn = document.querySelector("#submit");
const messages = [];
const maxMessages = 100;
ComfyJS.onChat = (user, message, flags, self, extra) => {
    let timestamp = new Date(extra.timestamp * 1);
    let dt = timestamp.toString().slice(16, 24);
    updateMessages(dt, user, message);
    let text = inp1.value;
    let msg = inp2.value;
    if (message.toLowerCase().includes(text) && text !== "" && msg !== "") {
        ComfyJS.Say(msg);
    }
}
ComfyJS.onCommand = (user, command, message, flags, extra) => {
    if (command === "keep") {
        ComfyJS.Say("replying to !keeps");
    }
}
form.addEventListener('submit', e => {
    e.preventDefault();
    iniateChannel();
});
function iniateChannel() {
    let channel = inp0.value;
    ComfyJS.Init('mezerx', 'zaa5dqea0ypm54vp2uyvcnwpmnf6t4', channel);
}

function updateMessages(dt, user, message) {
    messages.push(message);

    const userEl = document.createElement('b');
    userEl.classList.add('user');
    userEl.innerText = `(${dt})${user}:  `;

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