var FitnessRPG = FitnessRPG || {};
    FitnessRPG.AvailableQuestController = function () {


        "use strict";

<<<<<<< HEAD
        var that = {};
        var activeQuestView,availableQuestModel;
        var availableQuests,
        messageBoxAlert;


        function availQuestsGetInstances(activeQuestviewInstance, availableQuestModelInstance, messageBoxAlertInstance) {
=======
        var that = {},activeQuestView,availableQuestModel,availableQuests;


        function setInstances(activeQuestviewInstance, availableQuestModelInstance) {
>>>>>>> 1d7e892f9debbf13125b5ae5bfdc13d231eac545
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
                var clickedId, quests,i;
                availableQuests = availableQuestModel.availableQuests;
                clickedId = target.parentNode.getAttribute("id");
                for( i = 0; i < availableQuests.length; i++){
                    if(availableQuests[i].id === clickedId){
                  quests = availableQuests[i];
              }}
                return quests;
            }
            that.setInstances = setInstances;
            that.setClickListenerDisabled = setClickListenerDisabled;
            that.setClickListenerEnabled = setClickListenerEnabled;

        return that;
    };
