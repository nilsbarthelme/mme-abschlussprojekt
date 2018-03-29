var FitnessRPG = (function() {
    "use strict";
   if(localStorage.length === 0){
        window.open('signup.html',"_self");

    }
    var that = {}, availablequestview,
        questparser,
        playerinfo,
        obj,
        quests,
        questsobj,
        playerinfoview,
        availableQuestModel,
        availableQuestController,
        readMoreView,
        activeQuestView,
        activeQuestController,
        playerInfoModel;

    function init() {


        availablequestview = new FitnessRPG.AvailableQuestView();
        availableQuestModel = new FitnessRPG.AvailableQuestModel();
        activeQuestController = new FitnessRPG.ActiveQuestController();
         activeQuestController.activeControllerGetInstances(availableQuestModel,availablequestview);
        playerinfoview = new FitnessRPG.PlayerInfoView();
        readMoreView = new FitnessRPG.ReadMoreView();
        activeQuestView = new FitnessRPG.ActiveQuestView();
        playerInfoModel = new FitnessRPG.PlayerInfoModel();

    availableQuestController = new FitnessRPG.AvailableQuestController();
        updateLocalStorage();
        playerinfoview.updateUserView();
         activeQuestController.activeControllerGetInstances(availableQuestModel,availablequestview);
       availablequestview.getInstances(availableQuestModel,availableQuestController,readMoreView,activeQuestView);
       availableQuestController.availQuestsGetInstances(activeQuestView,availableQuestModel);
       activeQuestView.activeViewGetInstances(activeQuestController,availableQuestModel);
       activeQuestController.activeControllerGetInstances(availableQuestModel,availablequestview, playerInfoModel);
        availablequestview.buildQuestElements(availableQuestModel.parseQuests());
        playerInfoModel.setInstances(playerinfoview);
       playerinfoview.updateCharacterImage();
       playerinfoview.updateCharacterLevel();
       playerinfoview.updateCharacterName();
    }


   function updateLocalStorage() {
            playerinfo = localStorage.getItem("playerinfo");
            quests = localStorage.getItem("quests");
            // json string
            questsobj = JSON.parse(quests);
            obj = JSON.parse(playerinfo);
            console.log(questsobj.questlist);
            console.log(JSON.parse(localStorage.getItem("quests")).questlist.quest[0]);
            console.log(obj); // java objekt
            console.log(obj.playerinfo[0].level); //level des users
           // PlayerInfoView.updateUserView(obj);
        }



    function setNewPlayerinfo() {
        var jsonString = "";
        var client = new XMLHttpRequest();
        client.open('GET', 'resources/xml/playerinfo.json');
        client.onloadend = function () {
            jsonString = client.responseText;
            localStorage.setItem("playerinfo", jsonString);
            return jsonString;
        };

        client.send();

    }
    function setQuestList() {
         var jsonString = "";
        var client = new XMLHttpRequest();
        client.open('GET', 'resources/xml/quests.json');
        client.onloadend = function () {
            jsonString = client.responseText;
            localStorage.setItem("quests", jsonString);
            return jsonString;

        };
        client.send();
    }

    that.init = init;
    return that;
}());
