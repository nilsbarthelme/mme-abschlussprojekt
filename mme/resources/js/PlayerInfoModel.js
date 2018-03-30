var FitnessRPG = FitnessRPG || {};
FitnessRPG.PlayerInfoModel = function () {

    "use strict";

    var that = {},
    playerInfoView,
    playerLevelOffset= 15,
    playerAttributeOffset= 15,
    playerLevel,
    expAward,
    questReward;

    function setInstances(playerInfoViewInstance) {
        playerInfoView = playerInfoViewInstance;
    }

    function updatePlayerStats(questId) {
        var jsonobjQuests, jsonobjPlayer, index;
        jsonobjQuests = JSON.parse(localStorage.getItem("quests"));
        jsonobjPlayer = JSON.parse(localStorage.getItem("playerinfo"));
        questReward = jsonobjQuests.questlist.quest[questId].belohnung;
        playerLevel= parseInt(jsonobjPlayer.playerinfo[0].level);

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
            }
        }
        localStorage.setItem("playerinfo",JSON.stringify(jsonobjPlayer));
        playerInfoView.updateUserView();
        playerInfoView.updateCharacterImage();
    }

    function updatePlayerLevel(playerLevel, jsonobjPlayer) {
        var expLeft = (playerLevel * playerLevelOffset) - parseInt(jsonobjPlayer.playerinfo[0].exp);
        jsonobjPlayer.playerinfo[0].exp = String(parseInt(questReward[0].value) - expLeft);
        jsonobjPlayer.playerinfo[0].level =  String(playerLevel + 1);
    }

    function updateStrLevel(attributeLevel, attributeExp, jsonobjPlayer) {
        var expLeft = (attributeLevel * playerAttributeOffset) - parseInt(jsonobjPlayer.playerinfo[0].str);
        jsonobjPlayer.playerinfo[0].str = String(attributeExp - expLeft);
        jsonobjPlayer.playerinfo[0].strlevel =  String(attributeLevel + 1);
    }

    function updateEndLevel(attributeLevel, attributeExp, jsonobjPlayer) {
        var expLeft = (attributeLevel * playerAttributeOffset) - parseInt(jsonobjPlayer.playerinfo[0].str);
        jsonobjPlayer.playerinfo[0].end = String(attributeExp - expLeft);
        jsonobjPlayer.playerinfo[0].endlevel =  String(attributeLevel + 1);
    }

    function updateAgiLevel(attributeLevel, attributeExp, jsonobjPlayer) {
        var expLeft = (attributeLevel * playerAttributeOffset) - parseInt(jsonobjPlayer.playerinfo[0].str);
        jsonobjPlayer.playerinfo[0].agi = String(attributeExp - expLeft);
        jsonobjPlayer.playerinfo[0].agilevel =  String(attributeLevel + 1);
    }

    that.updatePlayerStats = updatePlayerStats;
    that.setInstances = setInstances;

    return that;
};
