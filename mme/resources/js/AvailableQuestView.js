var FitnessRPG = FitnessRPG || {};
    FitnessRPG.AvailableQuestView = function () {


        "use strict";

        var that = {},availableQuests, availableQuestModel, availableQuestController,activeQuestView,readMoreView,playerinfo;
        playerinfo = JSON.parse(localStorage.getItem("playerinfo"));

        function getInstances (availableQuestModelInstance, availableQuestControllerInstance, readMoreViewInstance, activeQuestViewInstance){
            availableQuestModel = availableQuestModelInstance;
            availableQuestController = availableQuestControllerInstance;
            readMoreView = readMoreViewInstance;
            activeQuestView = activeQuestViewInstance;
            availableQuests = availableQuestModel.availableQuests;
        }
       function buildQuestElements(data) {
            var activeQuestIndex,parentObj,dataLength,questid;
            if(localStorage.getItem("activeQuest") !== null || undefined){
               activeQuestIndex = localStorage.getItem("activeQuest");
               activeQuestView.createActiveQuest(data[activeQuestIndex]);
            }
            parentObj = document.getElementsByClassName("right")[0];
            dataLength = data.length;
            for(var i = 0; i < dataLength;i++){
                if(data[i].status === "offen"){
                    questid = data[i].id;
                if(questid !== activeQuestIndex){
                createAvailableQuest(parentObj,questid);}
            }}
            for(var i = 0; i < dataLength;i++){
                if(data[i].status === "erledigt"){
                    questid = data[i].id;
                if(questid !== activeQuestIndex){
                createAvailableQuest(parentObj,questid);}
            }}

        }
        function createTitle(id) {
           var title = document.createElement("div");
               title.className = "questtitle";
               title.innerHTML = availableQuests[id].name;
            return title;
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
               var readMore = document.createElement("div");
                    readMore.className = "readmore";
                if(availableQuests[id].status === "offen"){
                    readMore.innerHTML = "Mehr Informationen";
                }
                else {
                        readMore.innerHTML = "Erfolgreich abgeschlossen!";
                }
                return readMore;
        }
        function createAcceptButton(id,quest) {
            var accept = document.createElement("button");
                accept.className = "button";
                accept.id = "accept";
                accept.innerHTML = "Annehmen";
                if(availableQuests[id].status === "offen" && checkRequirements(id)){
                    quest.appendChild(accept);
                    availableQuestController.listenerQuestAvailable(accept);
                    quest.className = "questAvailable";
                } else if (availableQuests[id].status === "offen" && !checkRequirements(id)){
                    quest.appendChild(accept);
                    accept.className = "buttonRequirements";
                    accept.innerHTML = "Nicht erfüllt!";
                    availableQuestController.listenerQuestNotAvailable(accept);
                    quest.className = "questAvailable";
                }else{
                    quest.className = "questDone";
                    var readMore = document.getElementsByClassName("readmore");
                    readMore.innerHTML = "";
                    readMore.innerHTML = "Erledigt!";
                    }
                return accept;
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
                var rightside = document.getElementsByClassName("right")[0];
                var firstQuest = rightside.getElementsByClassName("questAvailable");
                var quest = document.createElement("LI");
                quest.appendChild(createTitle(id));
                createAcceptButton(id,quest);
                quest.appendChild(createReadMoreIcon());
                quest.appendChild(createReadMoreText());
                quest.id = id;
                rightside.insertBefore(quest,firstQuest[0]);

            }
            function resetQuestFinished(id) {
                var rightside = document.getElementsByClassName("right")[0];
               createAvailableQuest(rightside,id);

            }
        function readMoreButtonClick(){
                var parent =  document.getElementsByClassName("messagebox")[0];
                parent.style.display="block";
                var target = event.target;
                readMoreView.createName(getQuestData(target),parent);
                readMoreView.createDuration(getQuestData(target),parent);
                readMoreView.createExercises(getQuestData(target),parent);
                readMoreView.createRequirements(getQuestData(target),parent);
                readMoreView.createAwards(getQuestData(target),parent);
                readMoreView.removeButton();
            }
            function getQuestData(target) {
                var clickedId = target.parentNode.getAttribute("id");
                var currentQuest;
                for(var i = 0; i < availableQuests.length; i++){
                    if(availableQuests[i].id === clickedId){
                  currentQuest = availableQuests[i];
              }}
                return currentQuest;
            }

            function checkRequirements(id) {
                    var lvl = parseInt(playerinfo.playerinfo[0].level);
                    var exp = parseInt(playerinfo.playerinfo[0].exp);
                    var str = parseInt(playerinfo.playerinfo[0].strlevel);
                    var end = parseInt(playerinfo.playerinfo[0].endlevel);
                    var agi = parseInt(playerinfo.playerinfo[0].agilevel);


                    var lvlrequ = parseInt(availableQuests[id].requirements[0]);
                    var exprequ = parseInt(availableQuests[id].requirements[1]);
                    var strrequ = parseInt(availableQuests[id].requirements[2]);
                    var endrequ = parseInt(availableQuests[id].requirements[3]);
                    var agirequ = parseInt(availableQuests[id].requirements[4]);
            if(lvl>= lvlrequ && exp >= exprequ && str >= strrequ && end >= endrequ && agi >= agirequ){

                return true;
            } else {return false;}
        }

        that.getInstances = getInstances;
        that.resetQuestCancelled = resetQuestCancelled;
        that.resetQuestFinished = resetQuestFinished;
        that.buildQuestElements = buildQuestElements;
        return that;
    };
