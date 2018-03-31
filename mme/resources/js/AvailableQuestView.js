var FitnessRPG = FitnessRPG || {};
    FitnessRPG.AvailableQuestView = function () {


        "use strict";

        var that = {},availableQuests, availableQuestModel, availableQuestController,activeQuestView,readMoreView,playerinfo,parentObj;
        const removeButtonLength= 4;
        playerinfo = JSON.parse(localStorage.getItem("playerinfo"));

        function setInstances (availableQuestModelInstance, availableQuestControllerInstance, readMoreViewInstance, activeQuestViewInstance){
            availableQuestModel = availableQuestModelInstance;
            availableQuestController = availableQuestControllerInstance;
            readMoreView = readMoreViewInstance;
            activeQuestView = activeQuestViewInstance;
            availableQuests = availableQuestModel.availableQuests;
        }
       function buildQuestElements(data) {
            var activeQuestIndex,dataLength,questid,i;
            if(localStorage.getItem("activeQuest") !== null || undefined){
               activeQuestIndex = localStorage.getItem("activeQuest");
               activeQuestView.createActiveQuest(data[activeQuestIndex]);
            }
            parentObj = document.getElementsByClassName("right")[0];
            dataLength = data.length;
            for( i = 0; i < dataLength;i++){
                if(data[i].status === "offen"){
                    questid = data[i].id;
                if(questid !== activeQuestIndex){
                createAvailableQuest(parentObj,questid);}
            }}
            for( i = 0; i < dataLength;i++){
                if(data[i].status === "erledigt"){
                    questid = data[i].id;
                if(questid !== activeQuestIndex){
                createAvailableQuest(parentObj,questid);}
            }}

        }
        function createTitle(id) {
           var titleElement = document.createElement("div");
               titleElement.className = "questtitle";
               titleElement.innerHTML = availableQuests[id].name;
            return titleElement;
        }
        function createReadMoreIcon() {
            var readMoreIcon = document.createElement("img");
                readMoreIcon.src = "resources/img/add-button-inside-black-circle.png";
                readMoreIcon.height = "40";
                readMoreIcon.width = "40";
                readMoreIcon.className = "more";
                readMoreIcon.addEventListener("click",readMoreButtonClick);
                return readMoreIcon;
        }
        function createReadMoreText(id) {

               var readMoreText = document.createElement("div");
                    readMoreText.className = "readmore";
                if(availableQuests[id].status === "offen"){
                    readMoreText.innerHTML = "Mehr Informationen";
                }
                else {
                        readMoreText.innerHTML = "Erfolgreich abgeschlossen!";
                }
                return readMoreText;
        }
        function createAcceptButton(id,quest) {
            var acceptButton = document.createElement("button");
                acceptButton.className = "button";
                acceptButton.id = "acceptButton";
                acceptButton.innerHTML = "Annehmen";
                if(availableQuests[id].status === "offen" && checkRequirements(id)){
                    quest.appendChild(acceptButton);
                    availableQuestController.setClickListenerEnabled(acceptButton);
                    quest.className = "questAvailable";
                } else if (availableQuests[id].status === "offen" && !checkRequirements(id)){
                    quest.appendChild(acceptButton);
                    acceptButton.className = "buttonRequirements";
                    acceptButton.innerHTML = "Nicht erfüllt!";
                    availableQuestController.setClickListenerDisabled(acceptButton);
                    quest.className = "questAvailable";
                } else {quest.className = "questDone"; }
                return acceptButton;
        }
        function createAvailableQuest(parent, id) {

                var quest = document.createElement("LI");
                quest.appendChild(createTitle(id));
                createAcceptButton(id,quest);
                quest.appendChild(createReadMoreIcon());
                quest.appendChild(createReadMoreText(id));
                quest.id = id;
                parent.appendChild(quest);
            }
        function resetQuestCancelled(id) {
                var firstQuest,resettedQuest;
                    firstQuest = parentObj.getElementsByClassName("questAvailable");
                    resettedQuest = document.createElement("LI");
                    resettedQuest.appendChild(createTitle(id));
                    createAcceptButton(id,resettedQuest);
                    resettedQuest.appendChild(createReadMoreIcon());
                    resettedQuest.appendChild(createReadMoreText(id));
                    resettedQuest.id = id;
                    parentObj.insertBefore(resettedQuest,firstQuest[0]);

            }
            function resetQuestFinished(id) {
               createAvailableQuest(parentObj,id);

            }
            function deleteChilds(parent) {
                var removeButton, removeButtonInner,messageboxText,i;
                while (parent.firstChild) {
                        parent.removeChild(parent.firstChild);
                }
                messageboxText = document.createElement("div");
                messageboxText.innerHTML = "Questbeschreibung";
                messageboxText.className = "messagetext";
                removeButton = document.createElement("div");
                removeButton.className = "removebuttonactive";
                removeButton.id = "messagebox";
                removeButtonInner = document.createElement("div");
                removeButtonInner.className = "x flop large";
                    for (i = 0; i < removeButtonLength; i++) {
                    removeButtonInner.appendChild(document.createElement("b"));
                }
                removeButton.appendChild(removeButtonInner);
                parent.appendChild(removeButton);
                parent.appendChild(messageboxText);
               }
        function readMoreButtonClick(){
                var parent,target;
                    parent = document.getElementsByClassName("messagebox")[0];
                    deleteChilds(parent);
                    parent.style.display="block";
                    target = event.target;
                    readMoreView.createName(getQuestData(target),parent);
                    readMoreView.createDuration(getQuestData(target),parent);
                    readMoreView.createExercises(getQuestData(target),parent);
                    readMoreView.createRequirements(getQuestData(target),parent);
                    readMoreView.createAwards(getQuestData(target),parent);
                    readMoreView.removeButton();
            }
            function getQuestData(target) {
                var clickedId,currentQuest,i;
                    clickedId = target.parentNode.getAttribute("id");
                for( i = 0; i < availableQuests.length; i++){
                    if(availableQuests[i].id === clickedId){
                  currentQuest = availableQuests[i];
              }}
                return currentQuest;
            }

            function checkRequirements(id) {
            var lvl,exp,str,end,agi,lvlRequirement,expRequirement,strRequirement,endRequirement,agiRequirement;
                     lvl = parseInt(playerinfo.playerinfo[0].level);
                     exp = parseInt(playerinfo.playerinfo[0].exp);
                     str = parseInt(playerinfo.playerinfo[0].strlevel);
                     end = parseInt(playerinfo.playerinfo[0].endlevel);
                     agi = parseInt(playerinfo.playerinfo[0].agilevel);


                     lvlRequirement = parseInt(availableQuests[id].requirements[0]);
                     expRequirement = parseInt(availableQuests[id].requirements[1]);
                     strRequirement = parseInt(availableQuests[id].requirements[2]);
                     endRequirement = parseInt(availableQuests[id].requirements[3]);
                     agiRequirement = parseInt(availableQuests[id].requirements[4]);
            if(lvl>= lvlRequirement && exp >= expRequirement && str >= strRequirement && end >= endRequirement && agi >= agiRequirement){

                return true;
            } return false;
        }

        that.setInstances = setInstances;
        that.resetQuestCancelled = resetQuestCancelled;
        that.resetQuestFinished = resetQuestFinished;
        that.buildQuestElements = buildQuestElements;
        return that;
    };
