var FitnessRPG = (function() {
    "use strict";

<<<<<<< HEAD
    var that = {}, availablequestview,questparser, playerinfo, obj,quests,questsobj, playerInfoView;

    function init() {
        playerInfoView = new FitnessRPG.PlayerInfoView();
        questparser = new FitnessRPG.questParser();
=======
    var that = {}, availablequestview,questparser, playerinfo, obj,quests,questsobj,playerinfoview,availableQuestModel;

    function init() {
        //questparser = new FitnessRPG.questParser();
>>>>>>> master
        availablequestview = new FitnessRPG.AvailableQuestView();
        availableQuestModel = new FitnessRPG.AvailableQuestModel();
        playerinfoview = new FitnessRPG.PlayerInfoView();
        updateLocalStorage();
<<<<<<< HEAD
        playerInfoView.updateCharacterImage();
=======
        availablequestview.buildQuestElements(availableQuestModel.parseQuests());

       playerinfoview.updateCharacterImage();
       playerinfoview.updateCharacterLevel();
       playerinfoview.updateCharacterName();
>>>>>>> master
    }

    function updateLocalStorage() {
        if (localStorage.length === 0) {
            setNewPlayerinfo();
            setQuestList();
        } else {
            playerinfo = localStorage.getItem("playerinfo");
            quests = localStorage.getItem("quests");
            // json string
            questsobj = JSON.parse(quests);
            obj = JSON.parse(playerinfo);
            console.log(questsobj.questlist);
            console.log(JSON.parse(localStorage.getItem("quests")).questlist.quest[0]);
            console.log(obj); // java objekt
            console.log(obj.playerinfo[0].level); //level des users
<<<<<<< HEAD
            playerInfoView.updateUserView(obj);
=======
           // PlayerInfoView.updateUserView(obj);
>>>>>>> master
        }
        console.log(localStorage);
    }

    function updatePlayerStats() {

        console.log("in playerRPG");

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
