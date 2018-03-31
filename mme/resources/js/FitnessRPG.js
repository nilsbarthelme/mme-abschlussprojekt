/* eslint-env browser*/

var FitnessRPG = (function() {
    "use strict";

    var that = {},
        availablequestview,
        playerinfoview,
        availableQuestModel,
        availableQuestController,
        readMoreView,
        activeQuestView,
        activeQuestController,
        playerInfoModel,
        playerInfoController,
        messageBoxAlert;

    function init() {
        if(localStorage.length === 0){
            window.open("signup.html","_self");
        }

        initObjects();
        setInstances();
        playerInfoController.init();
        updateUserInfo();
    }

    function setInstances() {
        availablequestview.setInstances(availableQuestModel,availableQuestController,readMoreView,activeQuestView);
        availableQuestController.setInstances(activeQuestView,availableQuestModel, messageBoxAlert);
        activeQuestView.setInstances(activeQuestController,availableQuestModel);
        availablequestview.buildQuestElements(availableQuestModel.parseQuests());
        playerInfoModel.setInstances(playerinfoview);
        playerInfoController.setInstances(activeQuestView, playerinfoview);
        activeQuestController.setInstances(availableQuestModel,availablequestview,playerInfoModel,messageBoxAlert);
    }

    function initObjects() {
        availablequestview = new FitnessRPG.AvailableQuestView();
        availableQuestModel = new FitnessRPG.AvailableQuestModel();
        activeQuestController = new FitnessRPG.ActiveQuestController();
        playerinfoview = new FitnessRPG.PlayerInfoView();
        readMoreView = new FitnessRPG.ReadMoreView();
        activeQuestView = new FitnessRPG.ActiveQuestView();
        playerInfoModel = new FitnessRPG.PlayerInfoModel();
        playerInfoController = new FitnessRPG.PlayerInfoController();
        availableQuestController = new FitnessRPG.AvailableQuestController();
        messageBoxAlert = new FitnessRPG.MessageBoxAlertView();
    }

    function updateUserInfo() {
        playerinfoview.updateCharacterImage();
        playerinfoview.updateCharacterLevel();
        playerinfoview.updateCharacterName();
        playerInfoModel.updateUserViewBoot();
    }

    that.init = init;
    return that;
}());
