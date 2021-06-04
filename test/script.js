ComfyJS.onCommand = (user, command, message, flags, extra) => {
    if (command === "test") {
        console.log(user, command, message);
    }
}
// ComfyJS.onChat = (user, message, flags, self, extra) => {
//     if (message === "LUL") {
//         console.log(user, message, self);

//     }
// }
ComfyJS.Init("boxbox");