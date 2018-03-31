var FitnessRPG = (function() {
    "use strict";
   if(localStorage.length === 0){
        window.open('signup.html',"_self");
    }

    var that = {}, availablequestview,
        playerinfoview,
        availableQuestModel,
        availableQuestController,
        readMoreView,
        activeQuestView,
        activeQuestController,
        playerInfoModel,
        playerInfoController;

    function init() {
        initObjects();
        setInstances();
        playerInfoController.init();
        updateUserInfo();
    }

    function setInstances() {
        activeQuestController.activeControllerGetInstances(availableQuestModel,availablequestview);
        availablequestview.getInstances(availableQuestModel,availableQuestController,readMoreView,activeQuestView);
        availableQuestController.availQuestsGetInstances(activeQuestView,availableQuestModel);
        activeQuestView.activeViewGetInstances(activeQuestController,availableQuestModel);
        activeQuestController.activeControllerGetInstances(availableQuestModel,availablequestview, playerInfoModel);
        availablequestview.buildQuestElements(availableQuestModel.parseQuests());
        playerInfoModel.setInstances(playerinfoview,availablequestview,availableQuestModel);
        playerInfoController.setInstances(activeQuestView, playerinfoview);
        playerinfoview.setInstances(playerInfoController);
    }

    function initObjects() {
        availablequestview = new FitnessRPG.AvailableQuestView();
        availableQuestModel = new FitnessRPG.AvailableQuestModel();
        activeQuestController = new FitnessRPG.ActiveQuestController();
        activeQuestController.activeControllerGetInstances(availableQuestModel,availablequestview);
        playerinfoview = new FitnessRPG.PlayerInfoView();
        readMoreView = new FitnessRPG.ReadMoreView();
        activeQuestView = new FitnessRPG.ActiveQuestView();
        playerInfoModel = new FitnessRPG.PlayerInfoModel();
        playerInfoController = new FitnessRPG.PlayerInfoController();
        availableQuestController = new FitnessRPG.AvailableQuestController();
    }

    function updateUserInfo() {
        playerinfoview.updateCharacterImage();
        playerinfoview.updateCharacterLevel();
        playerinfoview.updateCharacterName();
        playerinfoview.updateUserView();
    }

    that.init = init;
    return that;
}());
