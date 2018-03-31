/*This Module is used to manipulate the interface and create a messagebox alert for different supposes. This is used because
* the integrated alert function is mostly used for debugging and not editable through css. */

/* eslint-env browser*/

var FitnessRPG = FitnessRPG || {};
FitnessRPG.MessageBoxAlertView = function () {

    "use strict";

    var that = {};
//Shows the message box
    function showMessage(messageText) {
        document.querySelector(".messageboxAlert").style.opacity = "1";
        document.querySelector(".messageboxAlert").style.display = "block";
        document.querySelector(".messageboxAlertText").textContent = messageText;
        document.querySelector(".messageboxAlert").style.opacity = "1";
        document.querySelector(".buttonOK").addEventListener("click",hideMessage);
    }
//Hides the messageboxalert
    function hideMessage() {
        document.querySelector(".messageboxAlert").style.opacity = "0";
        document.querySelector(".messageboxAlertText").textContent = "";
        document.querySelector(".messageboxAlert").style.display = "none";
    }

    that.showMessage = showMessage;

    return that;
};
