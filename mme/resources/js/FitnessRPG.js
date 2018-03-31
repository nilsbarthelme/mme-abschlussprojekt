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
        messageBoxAlert.showMessage("Welcome to the jungel, my friend!!!");
    }

    function setInstances() {
<<<<<<< HEAD
        activeQuestController.activeControllerGetInstances(availableQuestModel,availablequestview, activeQuestController, messageBoxAlert);
        availablequestview.getInstances(availableQuestModel,availableQuestController,readMoreView,activeQuestView);
        availableQuestController.availQuestsGetInstances(activeQuestView,availableQuestModel, messageBoxAlert);
        activeQuestView.activeViewGetInstances(activeQuestController,availableQuestModel);
        activeQuestController.activeControllerGetInstances(availableQuestModel,availablequestview, playerInfoModel);
=======
        activeQuestController.setInstances(availableQuestModel,availablequestview);
        availablequestview.setInstances(availableQuestModel,availableQuestController,readMoreView,activeQuestView);
        availableQuestController.setInstances(activeQuestView,availableQuestModel);
        activeQuestView.setInstances(activeQuestController,availableQuestModel);
        activeQuestController.setInstances(availableQuestModel,availablequestview, playerInfoModel);
>>>>>>> 1d7e892f9debbf13125b5ae5bfdc13d231eac545
        availablequestview.buildQuestElements(availableQuestModel.parseQuests());
        playerInfoModel.setInstances(playerinfoview,availablequestview,availableQuestModel);
        playerInfoController.setInstances(activeQuestView, playerinfoview);
        playerinfoview.setInstances(playerInfoController);
        activeQuestController.activeControllerGetInstances(availableQuestModel,availablequestview);
    }

    function initObjects() {
        availablequestview = new FitnessRPG.AvailableQuestView();
        availableQuestModel = new FitnessRPG.AvailableQuestModel();
        activeQuestController = new FitnessRPG.ActiveQuestController();
<<<<<<< HEAD
=======
        activeQuestController.setInstances(availableQuestModel,availablequestview);
>>>>>>> 1d7e892f9debbf13125b5ae5bfdc13d231eac545
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
        playerinfoview.updateUserView();
    }

    that.init = init;
    return that;
}());
