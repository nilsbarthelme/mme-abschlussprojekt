var FitnessRPG = FitnessRPG || {};
    FitnessRPG.AvailableQuestController = function () {


        "use strict";

        var that = {};
        var activeQuestView,availableQuestModel;
        var availableQuests;


<<<<<<< HEAD
        function availQuestsGetInstances(activeQuestviewInstance, availableQuestModelInstance, messageBoxAlertInstance) {
<<<<<<< HEAD
=======
        var that = {},activeQuestView,availableQuestModel,availableQuests;


        function setInstances(activeQuestviewInstance, availableQuestModelInstance) {
>>>>>>> 1d7e892f9debbf13125b5ae5bfdc13d231eac545
=======
        function availQuestsGetInstances(activeQuestviewInstance, availableQuestModelInstance) {
>>>>>>> parent of c423d61... Added Alert Box
=======
>>>>>>> parent of f3ab6fd... Merge branch 'master' of https://github.com/UniRegensburg/mme-abschlussprojekte-ws-201718-fitnessrpg
            activeQuestView = activeQuestviewInstance;
            availableQuestModel = availableQuestModelInstance;
        }
        function setClickListenerEnabled(button) {
             button.addEventListener("click",acceptbutton);
        }
        function setClickListenerDisabled(button) {
            button.addEventListener("click",requirementsNotFulfilled);

        }

        function acceptbutton(){
           var elm = event.target;
            if(localStorage.getItem("activeQuest") === null){
                console.log(localStorage);
                console.log(localStorage.getItem("activeQuest"));
              elm.parentNode.parentNode.removeChild(elm.parentNode);
              activeQuestView.createActiveQuest(getQuestData(elm));
            } else {
              alert("Sie können nur eine Quest gleichzeitig annehmen!");
          }


        }

        function requirementsNotFulfilled() {
            alert("Sie erfüllen die Anforderungen für diese Quest nicht!");
        }
        function getQuestData(target) {
                availableQuests = availableQuestModel.availableQuests;
                console.log(availableQuests);
                var clickedId = target.parentNode.getAttribute("id");
                var questData;
                for(var i = 0; i < availableQuests.length; i++){
                    if(availableQuests[i].id === clickedId){
                  questData = availableQuests[i];
              }}
                return questData;
            }
            that.availQuestsGetInstances = availQuestsGetInstances;
            that.setClickListenerDisabled = setClickListenerDisabled;
            that.setClickListenerEnabled = setClickListenerEnabled;

        return that;
    };
