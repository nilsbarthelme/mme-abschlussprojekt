var FitnessRPG = FitnessRPG || {};
FitnessRPG.PlayerInfoModel = function () {

    "use strict";

    var that = {},
    playerInfoView,
    playerLevelOffset= 15,
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
                    console.log("Player Experience before update: " + jsonobjPlayer.playerinfo[0].exp)
                    expAward = parseInt(questReward[index].value);
                    if (parseInt(jsonobjPlayer.playerinfo[0].exp) + expAward >= playerLevel * playerLevelOffset) {
                        updatePlayerLevel(playerLevel, jsonobjPlayer);
                    } else { jsonobjPlayer.playerinfo[0].exp = String(parseInt(jsonobjPlayer.playerinfo[0].exp) + expAward);}
                    break;
                case "End":
                    jsonobjPlayer.playerinfo[0].str = String(parseInt(jsonobjPlayer.playerinfo[0].str) + parseInt(questReward[index].value));
                    break;
                case "Strength":
                    jsonobjPlayer.playerinfo[0].end = String(parseInt(jsonobjPlayer.playerinfo[0].end) + parseInt(questReward[index].value));
                    break;
                case "Agi":
                    jsonobjPlayer.playerinfo[0].agi = String(parseInt(jsonobjPlayer.playerinfo[0].agi) + parseInt(questReward[index].value));
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

    that.updatePlayerStats = updatePlayerStats;
    that.setInstances = setInstances;

    return that;
};
