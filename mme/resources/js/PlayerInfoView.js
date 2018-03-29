var FitnessRPG = FitnessRPG || {};
FitnessRPG.PlayerInfoView = function () {


    "use strict";

    var that = {};

    function updateUserView(obj) {
        document.querySelector(".username").textContent = obj.playerinfo[0].name;
        document.querySelector(".level").textContent = "Level: " + obj.playerinfo[0].level;
        document.querySelector(".expprogressback").style.width = obj.playerinfo[0].exp + "%";
        document.querySelector(".strprogressback").style.width = obj.playerinfo[0].str + "%";
        document.querySelector(".endprogressback").style.width = obj.playerinfo[0].end + "%";
        document.querySelector(".agiprogressback").style.width = obj.playerinfo[0].agi + "%";
    }

    function updateCharacterImage() {
        var char = document.getElementById("character");
        var character = localStorage.getItem("character");
        switch (character){
            case "char_1":
                char.setAttribute("src","resources/img/Char1Level1.png");
                break;
            case "char_2":
                char.setAttribute("src","resources/img/Char2Level1.png");
                break;
            case "char_3":
                char.setAttribute("src","resources/img/Char3Level5.png");
                break;
        }
        console.log(character);
    }

    that.updateUserView = updateUserView;
    that.updateCharacterImage = updateCharacterImage;

    return that;
};
