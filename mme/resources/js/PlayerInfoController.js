/*This Module is used to handle the users interaction with the playerinfo side (Leftside)*/

/* eslint-env browser*/

var FitnessRPG = FitnessRPG || {};
FitnessRPG.PlayerInfoController = function () {

    "use strict";

    var that = {},
    activeQuestView,
    playerInfoView,
    middleWidthSmall = 38.9,
    middleWidthLong = 48.9;

    function setInstances(activeQuestViewInstance, playerInfoViewInstance) {
        activeQuestView = activeQuestViewInstance;
        playerInfoView = playerInfoViewInstance;
    }

    function init() {
        var infoElement;
        infoElement = playerInfoView.getInfoElement();
        infoElement.addEventListener("mouseover", function() {
            activeQuestView.setMiddleWidth(middleWidthSmall);
        });
        infoElement.addEventListener("mouseout", function () {
            activeQuestView.setMiddleWidth(middleWidthLong);
        });
    }

    that.init = init;
    that.setInstances = setInstances;

    return that;
};
