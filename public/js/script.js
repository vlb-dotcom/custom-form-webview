function onChatBotReady() {
  // You have to define HTML meta "bs:input:buttonName" in order to inform bot send data to buttonName parameter webview
  let btnName = BotStarWebview('getParameter', 'buttonName');

  let btn = document.getElementById('btn');
  if (btnName) {
    btn.appendChild(document.createTextNode(btnName));
    btn.style.display = 'inline-block';
  }
}

function sendResponse() {

var inputFirstName = document.getElementById("inputWebFName").value;
var inputLastName = document.getElementById("inputWebLName").value;
var inputAddress = document.getElementById("inputWebAddress").value;
var inputMobile = document.getElementById("inputWebMobile").value;
var inputEmail = document.getElementById("inputEmail").value;


var outputs = {
  firstName: inputFirstName,
  lastName: inputLastName,
  address: inputAddress,
  mobile: inputMobile,
  email: inputEmail,

};

  BotStarWebview('sendResponse', '', outputs, 'Button Clicked').catch((err) => {
    console.log(err);
  })
};



