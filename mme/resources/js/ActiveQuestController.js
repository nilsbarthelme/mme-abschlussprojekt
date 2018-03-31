var FitnessRPG = FitnessRPG || {};
    FitnessRPG.ActiveQuestController = function () {


        "use strict";

        var that = {},availableQuestModel,availableQuestView,playerInfoModel,quests, messageBoxAlert;

        function setInstances(availableQuestModelInstance,availableQuestViewInstance, playerInfoModelInstance, messageBoxAlertInstance) {
            availableQuestModel = availableQuestModelInstance;
            availableQuestView = availableQuestViewInstance;
            playerInfoModel = playerInfoModelInstance;
            quests = availableQuestModel.availableQuests;
            messageBoxAlert = messageBoxAlertInstance;
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
                for (i = 0; i < quests.length; i++ ){
                    if (quests[i].id === questId){
                        quests[i].status = "erledigt";
                        jsonObj.questlist.quest[i].status = "erledigt";
                        removeActiveFinished();
                        playerInfoModel.updatePlayerStats(i);
                        localStorage.setItem("quests",JSON.stringify(jsonObj));
                        messageBoxAlert.showMessage("Quest erfolgreich abgeschlossen!");
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
                var targetElement,parent,questElement,questId;
                targetElement = event.target;
                parent = document.getElementsByClassName("questelement")[0];
                parent.parentNode.removeChild(parent);
                questElement = targetElement.parentNode;
                questId = questElement.getAttribute("id");
                availableQuestView.resetQuestFinished(questId);

                localStorage.removeItem("activeQuest");
            }

             function removeButtonActive() {
                var parent,questId;
                    parent = document.getElementsByClassName("questelement")[0];
                    parent.parentNode.removeChild(parent);
                    questId = JSON.parse(localStorage.getItem("activeQuest"));
                    availableQuestView.resetQuestCancelled(questId);
                    localStorage.removeItem("activeQuest");


            }
            function setChecked() {
                var targetElement,quest,exercises,index,i,questId,quests;
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
                quests.questlist.quest[questId].uebung[index].checkbox = true;}
                else{

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
