var FitnessRPG = FitnessRPG || {};
    FitnessRPG.AvailableQuestController = function () {


        "use strict";

        var that = {};
        var activeQuestView,availableQuestModel;
        var availableQuests,
        messageBoxAlert;


        function availQuestsGetInstances(activeQuestviewInstance, availableQuestModelInstance, messageBoxAlertInstance) {
            activeQuestView = activeQuestviewInstance;
            availableQuestModel = availableQuestModelInstance;
            messageBoxAlert = messageBoxAlertInstance;
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
                messageBoxAlert.showMessage("Sie können nur eine Quest gleichzeitig annehmen!");
          }


        }

        function requirementsNotFulfilled() {
            messageBoxAlert.showMessage("Sie erfüllen die Anforderungen für diese Quest nicht!");
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
