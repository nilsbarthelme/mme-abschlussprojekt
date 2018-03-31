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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of f3ab6fd... Merge branch 'master' of https://github.com/UniRegensburg/mme-abschlussprojekte-ws-201718-fitnessrpg
        activeQuestController.activeControllerGetInstances(availableQuestModel,availablequestview, activeQuestController, messageBoxAlert);
=======
        activeQuestController.activeControllerGetInstances(availableQuestModel,availablequestview);
>>>>>>> parent of c423d61... Added Alert Box
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        activeQuestController.setInstances(availableQuestModel,availablequestview);
>>>>>>> 1d7e892f9debbf13125b5ae5bfdc13d231eac545
=======
        activeQuestController.activeControllerGetInstances(availableQuestModel,availablequestview);
>>>>>>> parent of c423d61... Added Alert Box
=======
>>>>>>> parent of f3ab6fd... Merge branch 'master' of https://github.com/UniRegensburg/mme-abschlussprojekte-ws-201718-fitnessrpg
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
