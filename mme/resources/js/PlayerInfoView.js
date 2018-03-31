/* eslint-env browser*/

var FitnessRPG = FitnessRPG || {};
FitnessRPG.PlayerInfoView = function () {

    "use strict";

    var that = {},
    playerLevelOffset = 15,
    playerAttributeOffset = 15,
    obj,
    imageLevel1 = 2,
    imageLevel2 = 4,
    imageLevel3 = 6,
    imageLevel4 = 8,
    imageLevel5 = 9;

    function updateUserView(expInPercent, strInPercent, endInPercent, agiInPercent) {
        obj = JSON.parse(localStorage.getItem("playerinfo"));
        document.querySelector(".username").textContent = obj.playerinfo[0].name;
        document.querySelector(".level").textContent = "Level: " + obj.playerinfo[0].level;
        document.querySelector(".expprogressback").style.width = expInPercent + "%";
        document.querySelector(".strprogressback").style.width = strInPercent + "%";
        document.querySelector(".endprogressback").style.width = endInPercent + "%";
        document.querySelector(".agiprogressback").style.width = agiInPercent + "%";
        updateAttributeBarText();
    }

    function updateAttributeBarText() {
        document.querySelector(".expinfo").textContent = "Erfahrung: " + obj.playerinfo[0].exp + " / " + (obj.playerinfo[0].level * playerLevelOffset);
        document.querySelector(".strinfo").textContent = "Stärke: " + obj.playerinfo[0].str + " / " + (obj.playerinfo[0].strlevel * playerAttributeOffset);
        document.querySelector(".endinfo").textContent = "Ausdauer: " + obj.playerinfo[0].end + " / " + (obj.playerinfo[0].endlevel * playerAttributeOffset);
        document.querySelector(".agiinfo").textContent = "Beweglichkeit: " + obj.playerinfo[0].agi + " / " + (obj.playerinfo[0].agilevel * playerAttributeOffset);
    }

    function updateCharacterImage() {
        var char, character, jsonObj, level, imgLevel;
        char = document.getElementById("character");
        character = localStorage.getItem("character");
        jsonObj = JSON.parse(localStorage.getItem("playerinfo"));
        level = parseInt( jsonObj.playerinfo[0].level);
        imgLevel = definePlayerImageLevel(level);
        switch (character){
            case "char_1":
                char.setAttribute("src","resources/img/Char1Level" + imgLevel + ".png");
                break;
            case "char_2":
                char.setAttribute("src","resources/img/Char2Level" + imgLevel + ".png");
                break;
            case "char_3":
                char.setAttribute("src","resources/img/Char3Level" + imgLevel + ".png");
                break;
        }
    }

    function definePlayerImageLevel(level) {
        if (level <= imageLevel1) {return "1";}
        else if (level <= imageLevel2) {return "2";}
        else if (level <= imageLevel3) {return "3";}
        else if (level <= imageLevel4) {return "4";}
        else if (level >= imageLevel5) {return "5";}
        return null;
    }

    function updateCharacterLevel() {
        var charLevel, playerinfoObj, currentLevel;
        charLevel = document.getElementsByClassName("level")[0];
        playerinfoObj = JSON.parse(localStorage.getItem("playerinfo"));
        currentLevel = playerinfoObj.playerinfo[0].level;
        charLevel.innerHTML = "Level: " + currentLevel;
    }

    function updateCharacterName() {
        var charName, playerinfoObj, name;
        charName = document.getElementsByClassName("username")[0];
        playerinfoObj = JSON.parse(localStorage.getItem("playerinfo"));
        name = playerinfoObj.playerinfo[0].name;
        charName.innerHTML = name;
    }


    function getInfoElement() {return document.querySelector(".left");}

    that.getInfoElement = getInfoElement;
    that.updateUserView = updateUserView;
    that.updateCharacterImage = updateCharacterImage;
    that.updateCharacterLevel = updateCharacterLevel;
    that.updateCharacterName = updateCharacterName;

    return that;
};
