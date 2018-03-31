/*This Module is used to store and manipulate the data of the player. this means his progress is being processed in this file
* */

/* eslint-env browser*/

var FitnessRPG = FitnessRPG || {};
FitnessRPG.PlayerInfoModel = function () {

    "use strict";

    var that = {},
    playerInfoView,
    playerLevelOffset= 15,
    playerAttributeOffset= 15,
    playerLevel,
    expAward,
    questReward,
    jsonobjPlayer,
    percentMultiplikator = 100,
    jsonobjQuests,
    index;

    function setInstances(playerInfoViewInstance) {playerInfoView = playerInfoViewInstance;}

    //updates local storage with quest attributes when a quest is finished
    function updatePlayerStats(questId) {
        setAttributes(questId);
        for (index = 0; index < questReward.length; index++) {
            switch (questReward[index].awardid) {
                case "Exp":
                    expAward = parseInt(questReward[index].value);
                    if (parseInt(jsonobjPlayer.playerinfo[0].exp) + expAward >= playerLevel * playerLevelOffset) {
                        updatePlayerLevel(playerLevel, jsonobjPlayer);
                    } else { jsonobjPlayer.playerinfo[0].exp = String(parseInt(jsonobjPlayer.playerinfo[0].exp) + expAward);}
                    break;
                case "Strength":
                    expAward = parseInt(questReward[index].value);
                    if (parseInt(jsonobjPlayer.playerinfo[0].str) + expAward >= parseInt(jsonobjPlayer.playerinfo[0].strlevel) * playerAttributeOffset) {
                        updateStrLevel(parseInt(jsonobjPlayer.playerinfo[0].strlevel),expAward, jsonobjPlayer);
                    } else { jsonobjPlayer.playerinfo[0].str = String(parseInt(jsonobjPlayer.playerinfo[0].str) + expAward);}
                    break;

                case "End":
                    expAward = parseInt(questReward[index].value);
                    if (parseInt(jsonobjPlayer.playerinfo[0].end) + expAward >= parseInt(jsonobjPlayer.playerinfo[0].endlevel) * playerAttributeOffset) {
                        updateEndLevel(parseInt(jsonobjPlayer.playerinfo[0].endlevel),expAward, jsonobjPlayer);
                    } else {jsonobjPlayer.playerinfo[0].end = String(parseInt(jsonobjPlayer.playerinfo[0].end) + expAward);}
                    break;
                case "Agi":
                    expAward = parseInt(questReward[index].value);
                    if (parseInt(jsonobjPlayer.playerinfo[0].agi) + expAward >= parseInt(jsonobjPlayer.playerinfo[0].agilevel) * playerAttributeOffset) {
                        updateAgiLevel(parseInt(jsonobjPlayer.playerinfo[0].agilevel),expAward, jsonobjPlayer);
                    } else {jsonobjPlayer.playerinfo[0].agi = String(parseInt(jsonobjPlayer.playerinfo[0].agi) + parseInt(questReward[index].value));}
                    break;
                default:
            }
        }
        localStorage.setItem("playerinfo",JSON.stringify(jsonobjPlayer));
        updateUserView(jsonobjPlayer);
    }

    //writes new player stats in local storage
    function setAttributes(questId) {
        jsonobjQuests = JSON.parse(localStorage.getItem("quests"));
        jsonobjPlayer = JSON.parse(localStorage.getItem("playerinfo"));
        questReward = jsonobjQuests.questlist.quest[questId].belohnung;
        playerLevel= parseInt(jsonobjPlayer.playerinfo[0].level);
    }

    //updates userview to set new level when user leveld up
    function updatePlayerLevel(playerLevel, jsonobjPlayer) {
        var expLeft, playerLevelSet;
        expLeft = (playerLevel * playerLevelOffset) - parseInt(jsonobjPlayer.playerinfo[0].exp);
        jsonobjPlayer.playerinfo[0].exp = String(parseInt(questReward[0].value) - expLeft);
        playerLevelSet = playerLevel + 1;
        jsonobjPlayer.playerinfo[0].level = String(playerLevelSet);
        location.reload();
    }

    //following functions update jsonobj with new player attributes 
    function updateStrLevel(attributeLevel, attributeExp, jsonobjPlayer) {
        var expLeft = (attributeLevel * playerAttributeOffset) - parseInt(jsonobjPlayer.playerinfo[0].str);
        jsonobjPlayer.playerinfo[0].str = String(attributeExp - expLeft);
        jsonobjPlayer.playerinfo[0].strlevel = String(attributeLevel + 1);
    }

    function updateEndLevel(attributeLevel, attributeExp, jsonobjPlayer) {
        var expLeft = (attributeLevel * playerAttributeOffset) - parseInt(jsonobjPlayer.playerinfo[0].end);
        jsonobjPlayer.playerinfo[0].end = String(attributeExp - expLeft);
        jsonobjPlayer.playerinfo[0].endlevel = String(attributeLevel + 1);
    }

    function updateAgiLevel(attributeLevel, attributeExp, jsonobjPlayer) {
        var expLeft = (attributeLevel * playerAttributeOffset) - parseInt(jsonobjPlayer.playerinfo[0].agi);
        jsonobjPlayer.playerinfo[0].agi = String(attributeExp - expLeft);
        jsonobjPlayer.playerinfo[0].agilevel = String(attributeLevel + 1);
    }

    //updates the percentage of the player attribute bars when a quest is finished
    function updateUserView(obj) {
        var expInPercent, strInPercent, endInPercent, agiInPercent;
        expInPercent = (parseFloat(obj.playerinfo[0].exp) / (parseFloat(obj.playerinfo[0].level) * playerLevelOffset) ) * percentMultiplikator;
        strInPercent = (parseFloat(obj.playerinfo[0].str) / (playerAttributeOffset * parseFloat(obj.playerinfo[0].strlevel))) * percentMultiplikator ;
        endInPercent = (parseFloat(obj.playerinfo[0].end) / (playerAttributeOffset * parseFloat(obj.playerinfo[0].endlevel))) * percentMultiplikator ;
        agiInPercent = (parseFloat(obj.playerinfo[0].agi) / (playerAttributeOffset * parseFloat(obj.playerinfo[0].agilevel))) * percentMultiplikator ;

        playerInfoView.updateUserView(expInPercent, strInPercent, endInPercent, agiInPercent);
    }

    ////updates the percentage of the player attribute bars on initial start
    function updateUserViewBoot() {
        var expInPercent, strInPercent, endInPercent, agiInPercent, obj;
        obj = JSON.parse(localStorage.getItem("playerinfo"));
        expInPercent = (parseFloat(obj.playerinfo[0].exp) / (parseFloat(obj.playerinfo[0].level) * playerLevelOffset) ) * percentMultiplikator;
        strInPercent = (parseFloat(obj.playerinfo[0].str) / (playerAttributeOffset * parseFloat(obj.playerinfo[0].strlevel))) * percentMultiplikator ;
        endInPercent = (parseFloat(obj.playerinfo[0].end) / (playerAttributeOffset * parseFloat(obj.playerinfo[0].endlevel))) * percentMultiplikator ;
        agiInPercent = (parseFloat(obj.playerinfo[0].agi) / (playerAttributeOffset * parseFloat(obj.playerinfo[0].agilevel))) * percentMultiplikator;

        playerInfoView.updateUserView(expInPercent, strInPercent, endInPercent, agiInPercent);
    }

    that.updatePlayerStats = updatePlayerStats;
    that.setInstances = setInstances;
    that.updateUserViewBoot = updateUserViewBoot;

    return that;
};
