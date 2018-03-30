var FitnessRPG = FitnessRPG || {};
    FitnessRPG.AvailableQuestView = function () {


        "use strict";

        var that = {};
        var questdata, availableQuestModel, availableQuestController,activeQuestView,readMoreView,playerinfo;
        playerinfo = JSON.parse(localStorage.getItem("playerinfo"))

        function getInstances (availableQuestModelInstance, availableQuestControllerInstance, readMoreViewInstance, activeQuestViewInstance){
            availableQuestModel = availableQuestModelInstance;
            availableQuestController = availableQuestControllerInstance;
            readMoreView = readMoreViewInstance;
            activeQuestView = activeQuestViewInstance;
            questdata = availableQuestModel.availableQuests;
        }

       function buildQuestElements(data) {

            if(localStorage.getItem("activeQuest")!== null || undefined){
               var activeIndex = localStorage.getItem("activeQuest");
               activeQuestView.createActiveQuest(data[activeIndex]);
            }
            var rightside = document.getElementsByClassName("right")[0];
            var index = data.length;
            for(var i = 0; i < index;i++){
                if(data[i].status === "offen"){
                var questid = data[i].id;
                if(questid !== activeIndex){
                createAvailableQuest(rightside,questid);}
            }}
            for(var i = 0; i < index;i++){
                if(data[i].status === "erledigt"){
                var questid = data[i].id;
                if(questid !== activeIndex){
                createAvailableQuest(rightside,questid);}
            }}

        }
        function createTitle(id) {
           var title = document.createElement("div");
                title.className = "questtitle";
                title.innerHTML = questdata[id].name;
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
        function createReadMoreText() {
               var readMore = document.createElement("div");
                readMore.className = "readmore";
                readMore.innerHTML = "Mehr Informationen";
                return readMore;
        }
        function createAcceptButton(id,quest) {
            var accept = document.createElement("button");
                accept.className = "button";
                accept.id = "accept";
                accept.innerHTML = "Accept";
                if(questdata[id].status === "offen" && checkRequirements(id)){
                    quest.appendChild(accept);
                    availableQuestController.listenerQuestAvailable(accept);
                    quest.className = "questAvailable";
                } else if (questdata[id].status === "offen" && !checkRequirements(id)){
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
                quest.appendChild(createReadMoreText());
                quest.id = id;
                parent.appendChild(quest);
            }
        function resetQuest(id) {
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
                for(var i = 0; i < questdata.length; i++){
                    if(questdata[i].id === clickedId){
                  currentQuest = questdata[i];
              }}
                return currentQuest;
            }

            function checkRequirements(id) {
                    var lvl = parseInt(playerinfo.playerinfo[0].level);
                    var exp = parseInt(playerinfo.playerinfo[0].exp);
                    var str = parseInt(playerinfo.playerinfo[0].strlevel);
                    var end = parseInt(playerinfo.playerinfo[0].endlevel);
                    var agi = parseInt(playerinfo.playerinfo[0].agilevel);


                    var lvlrequ = parseInt(questdata[id].requirements[0]);
                    var exprequ = parseInt(questdata[id].requirements[1]);
                    var strrequ = parseInt(questdata[id].requirements[2]);
                    var endrequ = parseInt(questdata[id].requirements[3]);
                    var agirequ = parseInt(questdata[id].requirements[4]);
            if(lvl>= lvlrequ && exp >= exprequ && str >= strrequ && end >= endrequ && agi >= agirequ){

                return true;
            } else {

                return false;}

        }

        that.getInstances = getInstances;
        that.resetQuest = resetQuest;
        that.buildQuestElements = buildQuestElements;
        return that;
    };
