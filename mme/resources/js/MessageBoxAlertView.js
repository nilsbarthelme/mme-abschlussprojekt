var FitnessRPG = FitnessRPG || {};
FitnessRPG.MessageBoxAlertView = function () {

    "use strict";

    var that = {};

    function showMessage(messageText) {
        document.querySelector(".messageboxAlertText").textContent = messageText;
        document.querySelector(".messageboxAlert").style.opacity = "1";
        document.querySelector(".buttonOK").addEventListener("click",hideMessage);
    }

    function hideMessage() {
        document.querySelector(".messageboxAlert").style.opacity = "0";
        document.querySelector(".messageboxAlertText").textContent = "";
    }

    that.showMessage = showMessage;

    return that;
};
