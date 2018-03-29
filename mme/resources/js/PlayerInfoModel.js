var FitnessRPG = FitnessRPG || {};
FitnessRPG.PlayerInfoModel = function () {

    "use strict";

    var that = {},
    playerInfoView;

    function setInstances(playerInfoViewInstance) {
        playerInfoView = playerInfoViewInstance;
    }

    function updatePlayerStats(questId) {
        var jsonobjQuests = JSON.parse(localStorage.getItem("quests"));
        var jsonobjPlayer = JSON.parse(localStorage.getItem("playerinfo"));
        console.log(jsonobjPlayer);
        var questReward = jsonobjQuests.questlist.quest[questId].belohnung;
        console.log(jsonobjPlayer.playerinfo[0].agi);

        for (var i = 0; i < questReward.length; i++) {
            switch (questReward[i].awardid) {
                case "Exp":
                    jsonobjPlayer.playerinfo[0].exp = String(parseInt(jsonobjPlayer.playerinfo[0].exp) + parseInt(questReward[i].value));
                    break;
                case "End":
                    jsonobjPlayer.playerinfo[0].str = String(parseInt(jsonobjPlayer.playerinfo[0].str) + parseInt(questReward[i].value));
                    break;
                case "Strength":
                    jsonobjPlayer.playerinfo[0].end = String(parseInt(jsonobjPlayer.playerinfo[0].end) + parseInt(questReward[i].value));
                    break;
                case "Agi":
                    jsonobjPlayer.playerinfo[0].agi = String(parseInt(jsonobjPlayer.playerinfo[0].agi) + parseInt(questReward[i].value));
                    break;
            }
        }

        localStorage.setItem("playerinfo",JSON.stringify(jsonobjPlayer));
        playerInfoView.updateUserView();

    }

    that.updatePlayerStats = updatePlayerStats;
    that.setInstances = setInstances;

    return that;
};
