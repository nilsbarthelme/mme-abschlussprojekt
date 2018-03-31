/*This Module is used to manipulate the user interface of the playerinfo (Left side ) and represent/visualise the progress of the player */


var FitnessRPG = FitnessRPG || {};
FitnessRPG.PlayerInfoView = function () {

    "use strict";

    var that = {},
    playerInfoController,
    playerLevelOffset = 15,
    playerAttributeOffset = 15,
    obj;
    /*  gets the in "FitnessRPG.js" created instances and set them*/

    function setinstances(playerInfoControllerView) {
        playerInfoController = playerInfoControllerView;
    }
    // Updates the different progress bars
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
        // adds the text to the different progress bars
    function updateAttributeBarText() {
        document.querySelector(".expinfo").textContent = obj.playerinfo[0].exp + " / " + (obj.playerinfo[0].level * playerLevelOffset);
        document.querySelector(".strinfo").textContent = obj.playerinfo[0].str + " / " + (obj.playerinfo[0].strlevel * playerAttributeOffset);
        document.querySelector(".endinfo").textContent = obj.playerinfo[0].end + " / " + (obj.playerinfo[0].endlevel * playerAttributeOffset);
        document.querySelector(".agiinfo").textContent = obj.playerinfo[0].agi + " / " + (obj.playerinfo[0].agilevel * playerAttributeOffset);
    }

    /* Visualises the progress of the player in different characterimages, the image is changed if the player reaches different levels */

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
    //Defines which image number to choose depending on the players level
    function definePlayerImageLevel(level) {
        if (level <= 2) {return "1";}
        else if (level <= 4) {return "2";}
        else if (level <= 6) {return "3";}
        else if (level <= 8) {return "4";}
        else if (level >= 9 ) {return "5";}
    }
    // Updates the level in the left sidebar of the interfaces
    function updateCharacterLevel() {
        var charLevel, playerinfoObj, currentLevel;
        charLevel = document.getElementsByClassName("level")[0];
        playerinfoObj = JSON.parse(localStorage.getItem("playerinfo"));
        currentLevel = playerinfoObj.playerinfo[0].level;
        charLevel.innerHTML = "Level: " + currentLevel;
    }
    //Updates the charactername depending on the name in the localstorage
    function updateCharacterName() {
        var charName, playerinfoObj, name;
        charName = document.getElementsByClassName("username")[0];
        playerinfoObj = JSON.parse(localStorage.getItem("playerinfo"));
        name = playerinfoObj.playerinfo[0].name;
        charName.innerHTML =  name;
    }

    function getInfoElement() {return document.querySelector(".left");}

    that.getInfoElement = getInfoElement;
    that.setInstances = setinstances;
    that.updateUserView = updateUserView;
    that.updateCharacterImage = updateCharacterImage;
    that.updateCharacterLevel = updateCharacterLevel;
    that.updateCharacterName = updateCharacterName;

    return that;
};
