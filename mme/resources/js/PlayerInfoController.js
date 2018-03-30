var FitnessRPG = FitnessRPG || {};
FitnessRPG.PlayerInfoController = function () {


    "use strict";

    var that = {},
    activeQuestView,
    playerInfoView;

    function setInstances(activeQuestViewInstance, playerInfoViewInstance) {
        activeQuestView = activeQuestViewInstance;
        playerInfoView = playerInfoViewInstance;
    }

    function init() {
        var infoElement  = playerInfoView.getInfoElement();
        var middleElment = activeQuestView.getMiddleElement();
        infoElement.addEventListener("mouseover", function() {
            activeQuestView.setMiddleWidth(38);
            console.log("in: mouseover");
        });

        infoElement.addEventListener("mouseout", function () {
            activeQuestView.setMiddleWidth(48);
        })
    }

    that.init = init;
    that.setInstances = setInstances;

    return that;
};
