const buttonSend = document.querySelector(".button-send");
const mailInput = document.querySelector(".mail-input");

buttonSend.addEventListener("click", () => mailInput.value = "");