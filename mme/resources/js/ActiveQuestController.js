var FitnessRPG = FitnessRPG || {};
    FitnessRPG.ActiveQuestController = function () {


        "use strict";

<<<<<<< HEAD
        var that = {};
        var availableQuestModel;
        var availableQuestView;
        var playerInfoModel;
        var quests,
        messageBoxAlert;

        function activeControllerGetInstances(availableQuestModelInstance,availableQuestViewInstance, playerInfoModelInstance, messageBoxAlertInstace) {
=======
        var that = {},availableQuestModel,availableQuestView,playerInfoModel,quests;

        function setInstances(availableQuestModelInstance,availableQuestViewInstance, playerInfoModelInstance) {
>>>>>>> 1d7e892f9debbf13125b5ae5bfdc13d231eac545
            availableQuestModel = availableQuestModelInstance;
            availableQuestView = availableQuestViewInstance;
            playerInfoModel = playerInfoModelInstance;
            quests = availableQuestModel.availableQuests;
            messageBoxAlert = messageBoxAlertInstace;
        }

        function changeQuestStatus(button) {
            button.addEventListener("click",changeStatus);
        }

        function removeActiveQuest(button) {
            button.addEventListener("click",removeButtonActive);
        }

        function changeStatus() {
                var targetElement,questElement,questId,jsonObj,i;
                targetElement = event.target;
                questElement = targetElement.parentNode;
                questId = questElement.getAttribute("id");
                jsonObj = JSON.parse(localStorage.getItem("quests"));
                if(checkQuestProgress(questElement)){
                for ( i = 0; i < quests.length; i++ ){
                    if (quests[i].id === questId){
                        quests[i].status = "erledigt";
                        jsonObj.questlist.quest[i].status = "erledigt";
                        playerInfoModel.updatePlayerStats(i);
<<<<<<< HEAD
                        localStorage.setItem("quests",JSON.stringify(jsonobj));
                        messageBoxAlert.showMessage("Quest erfolgreich abgeschlossen!");
=======
                        localStorage.setItem("quests",JSON.stringify(jsonObj));
                        alert("Quest erfolgreich abgeschlossen!");
>>>>>>> 1d7e892f9debbf13125b5ae5bfdc13d231eac545
                        removeActiveFinished();
                    }
                }} else {messageBoxAlert.showMessage("Sie Müssen erst alle Aufgaben der Quest erledigen um die Quest abzuschließen!");}
            }

             function checkQuestProgress(questelement) {
                var exercises,proofNumber,i;
                exercises = questelement.getElementsByClassName("checkbox");
                proofNumber = 0;
                for ( i = 0; i < exercises.length; i ++){
                    if(exercises[i].checked){
                        proofNumber++;
                    }
                }
                if(proofNumber === exercises.length){
                    return true;
                }
                    return false;

            }
            function removeActiveFinished() {
                var targetElement,parent,questElement,questId
                    targetElement = event.target;
                parent = document.getElementsByClassName("questelement")[0];
                parent.parentNode.removeChild(parent);
                questElement = targetElement.parentNode;
                questId = questElement.getAttribute("id");
                availableQuestView.resetQuestFinished(questId);

                localStorage.removeItem("activeQuest");
            }

             function removeButtonActive() {
<<<<<<< HEAD
                var elm = event.target;
                var parent = document.getElementsByClassName("questelement")[0];
                     parent.parentNode.removeChild(parent);
                    var questId = JSON.parse(localStorage.getItem("activeQuest"));
=======
                var parentObj,questId;
                parentObj = document.getElementsByClassName("questelement")[0];
                if (confirm('Bist du dir sicher, dass du diese Quest abbrechen willst?')) {
                    parentObj.parentNode.removeChild(parentObj);
                    questId = JSON.parse(localStorage.getItem("activeQuest"));
>>>>>>> 1d7e892f9debbf13125b5ae5bfdc13d231eac545
                    availableQuestView.resetQuestCancelled(questId);
                    localStorage.removeItem("activeQuest");


            }
            function setChecked() {
                var targetElement,quest,exercises,index,questId,quests,i;
                targetElement = event.target;
                quest = targetElement.parentNode.parentNode;
                exercises = quest.getElementsByClassName("checkbox");
                for(i = 0; i < exercises.length; i++){

                    if(exercises[i] === targetElement){
                        index=i;
                    }

                }
                questId = quest.getAttribute("id");
                quests = JSON.parse(localStorage.getItem("quests"));
                if(targetElement.checked){
                quests.questlist.quest[questId].uebung[index].checkbox = true;
                }else{
                    quests.questlist.quest[questId].uebung[index].checkbox = false;
                }
                localStorage.setItem("quests",JSON.stringify(quests));

            }
            that.setChecked = setChecked;
            that.setInstances = setInstances;
            that.changeQuestStatus = changeQuestStatus;
            that.removeActiveQuest = removeActiveQuest;

        return that;
    };
