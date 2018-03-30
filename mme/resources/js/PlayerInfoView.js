var FitnessRPG = FitnessRPG || {};
FitnessRPG.PlayerInfoView = function () {

    "use strict";

    var that = {},
    playerInfoController,
    playerLevelOffset = 15,
    playerAttributeOffeset = 15;

    function setinstances(playerInfoControllerView) {
        playerInfoController = playerInfoControllerView;
    }

    function updateUserView() {
        var obj = JSON.parse(localStorage.getItem("playerinfo"));
        var expInPercent = (parseFloat(obj.playerinfo[0].exp) / (parseFloat(obj.playerinfo[0].level) * playerLevelOffset) ) * 100;
        var strInPercent =  (parseFloat(obj.playerinfo[0].str) / (playerAttributeOffeset * parseFloat(obj.playerinfo[0].strlevel))) * 100 ;
        var endInPercent =  (parseFloat(obj.playerinfo[0].end) / (playerAttributeOffeset * parseFloat(obj.playerinfo[0].endlevel))) * 100 ;
        var agiInPercent =  (parseFloat(obj.playerinfo[0].agi) / (playerAttributeOffeset * parseFloat(obj.playerinfo[0].agilevel))) * 100 ;
        console.log("agi: " +  parseFloat(obj.playerinfo[0].endlevel));
        console.log("end: " + endInPercent);
        document.querySelector(".username").textContent = obj.playerinfo[0].name;
        document.querySelector(".level").textContent = "Level: " + obj.playerinfo[0].level;
        document.querySelector(".expprogressback").style.width = expInPercent + "%";
        document.querySelector(".strprogressback").style.width = strInPercent + "%";
        document.querySelector(".endprogressback").style.width = endInPercent + "%";
        document.querySelector(".agiprogressback").style.width = agiInPercent + "%";
        document.querySelector(".expinfo").textContent = obj.playerinfo[0].exp + " / " + (obj.playerinfo[0].level * playerLevelOffset);
        document.querySelector(".strinfo").textContent = obj.playerinfo[0].str + " / " + (obj.playerinfo[0].strlevel * playerAttributeOffeset);
        document.querySelector(".endinfo").textContent = obj.playerinfo[0].end + " / " + (obj.playerinfo[0].endlevel * playerAttributeOffeset);
        document.querySelector(".agiinfo").textContent = obj.playerinfo[0].agi + " / " + (obj.playerinfo[0].agilevel * playerAttributeOffeset);
    }

    function updateCharacterImage() {
        var char = document.getElementById("character");
        var character = localStorage.getItem("character");
        var jsonObj = JSON.parse(localStorage.getItem("playerinfo"));
        var level = parseInt( jsonObj.playerinfo[0].level);
        var imgLevel = definePlayerImageLevel(level);
        console.log(level);
        switch (character){
            case "char_1":
                char.setAttribute("src","resources/img/Char1Level" + imgLevel + ".png");
                break;
            case "char_2":
                char.setAttribute("src","resources/img/Char2Level" + imgLevel + ".png");
                break;
            case "char_3":
                char.setAttribute("src","resources/img/Char3Level" + imgLevel + ".png");
                console.log(imgLevel);
                break;
        }
        console.log(character);
    }

    function definePlayerImageLevel(level) {
        if (level <= 2) {return "1";}
        else if (level <= 4) {return "2";}
        else if (level <= 6) {return "3";}
        else if (level <= 8) {return "4";}
        else if (level >= 9 ) {return "5";}
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

    function getInfoElement() {
        return document.querySelector(".left");
    }

    that.getInfoElement = getInfoElement;
    that.setInstances = setinstances;
    that.updateUserView = updateUserView;
    that.updateCharacterImage = updateCharacterImage;
    that.updateCharacterLevel = updateCharacterLevel;
    that.updateCharacterName = updateCharacterName;

    return that;
};
