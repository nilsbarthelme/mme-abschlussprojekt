var FitnessRPG = FitnessRPG || {};
    FitnessRPG.ActiveQuestController = function () {


        "use strict";

        var that = {};
        var availableQuestModel;
        var availableQuestView;
        var playerInfoModel;
        var quests;

<<<<<<< HEAD
        function activeControllerGetInstances(availableQuestModelInstance,availableQuestViewInstance, playerInfoModelInstance, messageBoxAlertInstace) {
<<<<<<< HEAD
=======
        var that = {},availableQuestModel,availableQuestView,playerInfoModel,quests;

        function setInstances(availableQuestModelInstance,availableQuestViewInstance, playerInfoModelInstance) {
>>>>>>> 1d7e892f9debbf13125b5ae5bfdc13d231eac545
=======
        function activeControllerGetInstances(availableQuestModelInstance,availableQuestViewInstance, playerInfoModelInstance) {
>>>>>>> parent of c423d61... Added Alert Box
=======
>>>>>>> parent of f3ab6fd... Merge branch 'master' of https://github.com/UniRegensburg/mme-abschlussprojekte-ws-201718-fitnessrpg
            availableQuestModel = availableQuestModelInstance;
            availableQuestView = availableQuestViewInstance;
            playerInfoModel = playerInfoModelInstance;
            quests = availableQuestModel.availableQuests;


        }
        function changeQuestStatus(button) {
            button.addEventListener("click",changeStatus);

        }
        function removeActiveQuest(button) {
            button.addEventListener("click",removeButtonActive);

        }
        function changeStatus() {
                var elm = event.target;
                var questelement = elm.parentNode;
                var questId = questelement.getAttribute("id");
                var jsonobj = JSON.parse(localStorage.getItem("quests"));
                if(checkQuestProgress(questelement)){
                for (var i = 0; i < quests.length; i++ ){
                    if (quests[i].id === questId){
                        quests[i].status = "erledigt";
                        jsonobj.questlist.quest[i].status = "erledigt";
                        playerInfoModel.updatePlayerStats(i);
                        localStorage.setItem("quests",JSON.stringify(jsonobj));
<<<<<<< HEAD
                        messageBoxAlert.showMessage("Quest erfolgreich abgeschlossen!");
<<<<<<< HEAD
=======
                        localStorage.setItem("quests",JSON.stringify(jsonObj));
                        alert("Quest erfolgreich abgeschlossen!");
>>>>>>> 1d7e892f9debbf13125b5ae5bfdc13d231eac545
=======
                        alert("Quest erfolgreich abgeschlossen!");
>>>>>>> parent of c423d61... Added Alert Box
=======
>>>>>>> parent of f3ab6fd... Merge branch 'master' of https://github.com/UniRegensburg/mme-abschlussprojekte-ws-201718-fitnessrpg
                        removeActiveFinished();
                    }
                }} else { alert("Sie Müssen erst alle Aufgaben der Quest erledigen um die Quest abzuschließen!");}
            }

             function checkQuestProgress(questelement) {
                var exercises = questelement.getElementsByClassName("checkbox");
                var proofNumber = 0;
                for (var i = 0; i < exercises.length; i ++){
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
                var elm = event.target;
                var parent = document.getElementsByClassName("questelement")[0];
                parent.parentNode.removeChild(parent);
                var questelement = elm.parentNode;
                var questId = questelement.getAttribute("id");
                availableQuestView.resetQuestFinished(questId);

                localStorage.removeItem("activeQuest");
            }

             function removeButtonActive() {
                var elm = event.target;
                var parent = document.getElementsByClassName("questelement")[0];
                if (confirm('Bist du dir sicher, dass du diese Quest abbrechen willst?')) {
                     parent.parentNode.removeChild(parent);
                    var questId = JSON.parse(localStorage.getItem("activeQuest"));
                    availableQuestView.resetQuestCancelled(questId);
                    localStorage.removeItem("activeQuest");
                }

            }
            function setChecked() {
                var elm = event.target;
                var quest = elm.parentNode.parentNode;
                var exercises = quest.getElementsByClassName("checkbox");
                var index;

                for(var i = 0; i < exercises.length; i++){

                    if(exercises[i] === elm){
                        index=i;
                    }

                }
                var questId = quest.getAttribute("id");
                var quests = JSON.parse(localStorage.getItem("quests"));
                if(elm.checked){
                quests.questlist.quest[questId].uebung[index].checkbox = true;}
                else{

                    quests.questlist.quest[questId].uebung[index].checkbox = false;
                }
                console.log(quests.questlist.quest[questId].uebung[index].checkbox);

                localStorage.setItem("quests",JSON.stringify(quests));

            }
            that.setChecked = setChecked;
            that.activeControllerGetInstances = activeControllerGetInstances;
            that.changeQuestStatus = changeQuestStatus;
            that.removeActiveQuest = removeActiveQuest;

        return that;
    };
