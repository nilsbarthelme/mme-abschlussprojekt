var FitnessRPG = FitnessRPG || {};
    FitnessRPG.ActiveQuestController = function () {


        "use strict";

        var that = {};
        var availableQuestModel;
        var availableQuestView;
        var quests;

        function activeControllerGetInstances(availableQuestModelInstance,availableQuestViewInstance) {
            availableQuestModel = availableQuestModelInstance;
            availableQuestView = availableQuestViewInstance;
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
                        localStorage.setItem("quests",JSON.stringify(jsonobj));
                        alert("Quest erfolgreich abgeschlossen!");
                        removeActiveFinished();
                    }
                }} else { alert("Sie Müssen erst alle Aufgaben der Quest erledigen um die Quest abzuschließen!")}
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
                    console.log("All Boxes checked!");
                    return true;
                } else {
                    console.log("Not all  Boxes checked!");
                    return false;}


            }
            function removeActiveFinished() {
                var elm = event.target;
                var parent = document.getElementsByClassName("questelement")[0];
                parent.parentNode.removeChild(parent);
                var questelement = elm.parentNode;
                var questId = questelement.getAttribute("id");
                availableQuestView.resetQuest(questId);

                 localStorage.removeItem("activeQuest");


            }
             function removeButtonActive() {
                var elm = event.target;
                var parent = document.getElementsByClassName("questelement")[0];
                if (confirm('Bist du dir sicher, dass du diese Quest abbrechen willst?')) {
                     parent.parentNode.removeChild(parent);
                        var questelement = elm.parentNode.parentNode.parentNode;
                    var questId = questelement.getAttribute("id");
                    availableQuestView.resetQuest(questId);
                    localStorage.removeItem("activeQuest");
                } else {

                 }


            }



            that.activeControllerGetInstances = activeControllerGetInstances;
            that.changeQuestStatus = changeQuestStatus;
            that.removeActiveQuest = removeActiveQuest;

        return that;
    };
