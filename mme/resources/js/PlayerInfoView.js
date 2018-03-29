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
    function updateCharacterLevel() {
        var charLevel = document.getElementsByClassName("level")[0];
        var playerinfoObj = JSON.parse(localStorage.getItem("playerinfo"));
        var currentLevel = playerinfoObj.playerinfo[0].level;
        charLevel.innerHTML = "Level: " + currentLevel;
    }
    function updateCharacterName() {
        var charName = document.getElementsByClassName("username")[0];
        var playerinfoObj = JSON.parse(localStorage.getItem("playerinfo"));
        var name = playerinfoObj.playerinfo[0].name;
        charName.innerHTML =  name;

    }

    that.updateUserView = updateUserView;
    that.updateCharacterImage = updateCharacterImage;
    that.updateCharacterLevel = updateCharacterLevel;
    that.updateCharacterName = updateCharacterName;

    return that;
};
