var FitnessRPG = FitnessRPG || {};
    FitnessRPG.AvailableQuestController = function () {


        "use strict";

        var that = {};
        var activeQuestView;
        var availableQuests;
        activeQuestView = new FitnessRPG.ActiveQuestView();
        var availableQuestModel = new FitnessRPG.AvailableQuestModel();

        function listenerQuestAvailable(button) {
             button.addEventListener("click",acceptbutton);
        }
        function listenerQuestNotAvailable(button) {
            button.addEventListener("click",requirementsNotFulfilled);

        }

        function acceptbutton(){
           var elm = event.target;
            if(localStorage.getItem("questActive") === null){
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
                availableQuests = availableQuestModel.parseQuests();
                console.log(availableQuests);
                var clickedId = target.parentNode.getAttribute("id");
                var questData;
                for(var i = 0; i < availableQuests.length; i++){
                    if(availableQuests[i].id === clickedId){
                  questData = availableQuests[i];
              }}
                return questData;
            }

            that.listenerQuestNotAvailable = listenerQuestNotAvailable;
            that.listenerQuestAvailable = listenerQuestAvailable;

        return that;
    };
