var FitnessRPG = (function() {
    "use strict";
   if(localStorage.length === 0){
        window.open('signup.html',"_self");
    }

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
        initObjects();
        setInstances();
        playerInfoController.init();
        updateUserInfo();
    }

    function setInstances() {
        activeQuestController.activeControllerGetInstances(availableQuestModel,availablequestview, activeQuestController, messageBoxAlert);
        availablequestview.setInstances(availableQuestModel,availableQuestController,readMoreView,activeQuestView);
        availableQuestController.availQuestsGetInstances(activeQuestView,availableQuestModel, messageBoxAlert);
        activeQuestView.activeViewGetInstances(activeQuestController,availableQuestModel);
        activeQuestController.activeControllerGetInstances(availableQuestModel,availablequestview, playerInfoModel);
        availablequestview.buildQuestElements(availableQuestModel.parseQuests());
        playerInfoModel.setInstances(playerinfoview,availablequestview,availableQuestModel);
        playerInfoController.setInstances(activeQuestView, playerinfoview);
        playerinfoview.setInstances(playerInfoController);
        activeQuestController.activeControllerGetInstances(availableQuestModel,availablequestview,playerInfoModel,messageBoxAlert);
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
