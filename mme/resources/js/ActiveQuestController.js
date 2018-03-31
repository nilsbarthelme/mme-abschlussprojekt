/* The ActiveQuestController is used to handle the users Interaction with Buttons and elements. In this Module the Listeners are set
* and alerts are shown if the user interacts with the elements*/


var FitnessRPG = FitnessRPG || {};
    FitnessRPG.ActiveQuestController = function () {


        "use strict";

        var that = {},availableQuestModel,availableQuestView,playerInfoModel,quests, messageBoxAlert;
        /*  gets the in "FitnessRPG.js" created instances and set them*/

        function setInstances(availableQuestModelInstance,availableQuestViewInstance, playerInfoModelInstance, messageBoxAlertInstance) {
            availableQuestModel = availableQuestModelInstance;
            availableQuestView = availableQuestViewInstance;
            playerInfoModel = playerInfoModelInstance;
            quests = availableQuestModel.availableQuests;
            messageBoxAlert = messageBoxAlertInstance;
        }
        /*Sets a listener on the Button to finish a quest */
        function changeQuestStatus(button) {
            button.addEventListener("click",changeStatus);
        }
        /*Sets a listener on the remove Button in the upper right of an active quest*/
        function removeActiveQuest(button) {
            button.addEventListener("click",removeButtonActive);
        }
        /*Checks if the user has checked all the boxes of a quest to be sure that the user has done every exercise
        * If Yes the status of the quest is set to "erledigt" and the playerstats are updated. Further the quest is finished/removed
        * A MessageBoxAlert is shown to the user that he knows that he finished a quest. If the user did not finish all the exercises a message
        * appears that the user needs to finish all exercises*/
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
        /*This functiom checks the different checkboxes and returns true if all boxes are checked.*/
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
            /*Is called to remove a quest of the interface and rebuild it as an finishedquest in the available questlist*/
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
             /*Is called to remove a quest of the interface and rebuild it in the available questlist*/
             function removeButtonActive() {
                var parent,questId;
                    parent = document.getElementsByClassName("questelement")[0];
                    parent.parentNode.removeChild(parent);
                    questId = JSON.parse(localStorage.getItem("activeQuest"));
                    availableQuestView.resetQuestCancelled(questId);
                    localStorage.removeItem("activeQuest");


            }
             /*Sets the property of the element to checked or unchecked in the localstorage to
             * store it for the next session*/
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
                availableQuestModel.storeCheckboxes(JSON.stringify(quests));
            }
            that.setChecked = setChecked;
            that.setInstances = setInstances;
            that.changeQuestStatus = changeQuestStatus;
            that.removeActiveQuest = removeActiveQuest;

        return that;
    };
