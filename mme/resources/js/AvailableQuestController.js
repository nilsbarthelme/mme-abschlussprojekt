var FitnessRPG = FitnessRPG || {};
    FitnessRPG.AvailableQuestController = function () {


        "use strict";

        var that = {},activeQuestView,availableQuestModel,availableQuests;


        function setInstances(activeQuestviewInstance, availableQuestModelInstance) {
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
           var targetElement = event.target;
            if(localStorage.getItem("activeQuest") === null){
              targetElement.parentNode.parentNode.removeChild(targetElement.parentNode);
              activeQuestView.createActiveQuest(getQuestData(targetElement));
            } else {
              alert("Sie können nur eine Quest gleichzeitig annehmen!");
          }


        }

        function requirementsNotFulfilled() {
            alert("Sie erfüllen die Anforderungen für diese Quest nicht!");
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
