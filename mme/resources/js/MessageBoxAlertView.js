/* eslint-env browser*/

var FitnessRPG = FitnessRPG || {};
FitnessRPG.MessageBoxAlertView = function () {

    "use strict";

    var that = {};

    function showMessage(messageText) {
        document.querySelector(".messageboxAlert").style.opacity = "1";
        document.querySelector(".messageboxAlert").style.display = "block";
        document.querySelector(".messageboxAlertText").textContent = messageText;
        document.querySelector(".messageboxAlert").style.opacity = "1";
        document.querySelector(".buttonOK").addEventListener("click",hideMessage);
    }

    function hideMessage() {
        document.querySelector(".messageboxAlert").style.opacity = "0";
        document.querySelector(".messageboxAlertText").textContent = "";
        document.querySelector(".messageboxAlert").style.display = "none";
    }

    that.showMessage = showMessage;

    return that;
};
