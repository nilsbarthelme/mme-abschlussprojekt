/* The AvailableQuestController is used to handle the users Interaction with Buttons. In this Module the Listeners are set
* and functions of the view module are called.*/

/* eslint-env browser*/

var FitnessRPG = FitnessRPG || {};
    FitnessRPG.AvailableQuestController = function () {

        "use strict";

        var that = {},activeQuestView,availableQuestModel,availableQuests, messageBoxAlert;

      // gets the in "FitnessRPG.js" created instances and set them
        function setInstances(activeQuestviewInstance, availableQuestModelInstance, messageBoxAlertInstance) {
            activeQuestView = activeQuestviewInstance;
            availableQuestModel = availableQuestModelInstance;
            messageBoxAlert = messageBoxAlertInstance;
        }

       /*Listener for the accept button is set if the button is enabled and the user is able to start the quest (Requirements fulfilled)
       * */
        function setClickListenerEnabled(button) {
             button.addEventListener("click",acceptbutton);
        }
        /*Listener for the accept button is set if the button is not enabled and the user is
        * not able to start the quest (Requirements not fulfilled)*/
        function setClickListenerDisabled(button) {
            button.addEventListener("click",requirementsNotFulfilled);

        }
        /*This function is triggered if the enabled button is clicked. The quest is being removed from the available questlist
        * and a function for creating the active quest is called in the activeQuestView Module
        * We restricted the quest to the amount of 1 because the quests are very demanding and more than one quest a week is not healthy
        * for our targetgroup */
        function acceptbutton(){
           var targetElement = event.target;
            if(localStorage.getItem("activeQuest") === null){
              targetElement.parentNode.parentNode.removeChild(targetElement.parentNode);
              activeQuestView.createActiveQuest(getQuestData(targetElement));
            } else {
                messageBoxAlert.showMessage("Sie können nur eine Quest gleichzeitig annehmen!");
          }

        }
        // Is called if the user does not meet the requirements
        function requirementsNotFulfilled() {
            messageBoxAlert.showMessage("Sie erfüllen die Anforderungen für diese Quest nicht!");
        }

        //Compares Id from the html doc element and the elements in the array to find out the element in the array for flexible editing
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
            that.setInstances = setInstances;
            that.setClickListenerDisabled = setClickListenerDisabled;
            that.setClickListenerEnabled = setClickListenerEnabled;

        return that;
    };
