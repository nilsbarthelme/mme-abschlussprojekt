var FitnessRPG = FitnessRPG || {};
    FitnessRPG.AvailableQuestController = function () {


        "use strict";

        var that = {},activeQuestView,availableQuestModel,availableQuests, messageBoxAlert;


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
           var targetElement = event.target;
            if(localStorage.getItem("activeQuest") === null){
              targetElement.parentNode.parentNode.removeChild(targetElement.parentNode);
              activeQuestView.createActiveQuest(getQuestData(targetElement));
            } else {
                messageBoxAlert.showMessage("Sie können nur eine Quest gleichzeitig annehmen!");
          }

        }

        function requirementsNotFulfilled() {
            messageBoxAlert.showMessage("Sie erfüllen die Anforderungen für diese Quest nicht!");
        }
        function getQuestData(target) {
            var clickedId,questData,i;
                availableQuests = availableQuestModel.availableQuests;
                clickedId = target.parentNode.getAttribute("id");
                for( i = 0; i < availableQuests.length; i++){
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
