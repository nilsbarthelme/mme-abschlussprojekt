var FitnessRPG = FitnessRPG || {};
    FitnessRPG.questParser = function () {


        "use strict";

        var that = {};
        var xmldoc;
        var availableQuests = [];

        function initEventListeners() {
            checkLocalStorage();
        }


        function checkLocalStorage() {
        }

        function parseQuests() {
           checkLocalStorage();
            var xmlString = "";
            var parser = new DOMParser();
            var client = new XMLHttpRequest();
            client.open('GET', 'resources/xml/quests.xml');
            client.onloadend = function () {
                xmlString = client.responseText;
                xmldoc = parser.parseFromString(xmlString, 'text/xml');
                addElementsToQuestList();
                buildQuestElements();
                return xmldoc;
            };

            client.send();
        }
        function addElementsToQuestList() {
            var questlist = JSON.parse(localStorage.getItem("quests"));
            var length = questlist.questlist.quest.length;

             for(var i = 0; i < length;i++){
                createQuestObjects(i,questlist);}

        }
        function buildQuestElements() {
            var rightside = document.getElementsByClassName("right")[0];
            var index = xmldoc.getElementsByTagName("quest");
            for(var i = 0; i < index.length;i++){
                var questid = availableQuests[i].id;
                DOMQuestElement(rightside,questid);
            }


        }
        function acceptbutton(){
           var elm = event.target;
          elm.parentNode.parentNode.removeChild(elm.parentNode);
          createActiveQuest(getQuestData(elm));

        }

            function createQuestObjects(index,questlist) {

                var name = questlist.questlist.quest[index].name;
                var id = questlist.questlist.quest[index].questid;
                var status = questlist.questlist.quest[index].status;
                var duration = questlist.questlist.quest[index].dauer;
                var exercises = questlist.questlist.quest[index].uebung;
                var requirements = questlist.questlist.quest[index].voraussetzung;
                var award = questlist.questlist.quest[index].belohnung;
                var quest = new Object();
                quest.status = status;
                quest.id = id;
                quest.name = name;
                quest.duration = duration;
                quest.exercises = exercises;
                quest.requirements = requirements;
                quest.award = award;
                console.log(quest);
                availableQuests.push(quest)
            }

            function createActiveQuest(clickedQuest) {
                var questbox = document.createElement("div");
                questbox.className ="questelement";
                var questActive = document.createElement("ul");
                questActive.className = "questsactive";
                questbox.appendChild(questActive);
                var quest = document.createElement("li");
                quest.className = "quest";
                quest.id = clickedQuest.id;
                var titlequest = document.createElement("div");
                var duration  = document.createElement("div");
                duration.className = "duration";
                duration.innerHTML ="Questdauer: ";
                duration.innerHTML += clickedQuest.duration;
                titlequest.className ="questtitleactive";
                titlequest.innerHTML = clickedQuest.name;
                var removeButton = document.createElement("div");
                removeButton.className = "removebuttonactive";
                var removeButtonInner = document.createElement("div");
                removeButtonInner.className = "x flop large";
                    for (var i = 0; i < 4; i++) {
                    removeButtonInner.appendChild(document.createElement("b"));
                }
                var sendButton = document.createElement("div");
                sendButton.className = "sendbutton";
                sendButton.innerHTML = "Quest abschließen"
                removeButton.appendChild(removeButtonInner);
                quest.appendChild(removeButton);
                quest.appendChild(titlequest);
                quest.appendChild(duration);
                createExercises(clickedQuest,quest);
                createRequirements(clickedQuest,quest);
                createAwards(clickedQuest,quest);
                quest.appendChild(sendButton);
                questActive.appendChild(quest);
                var parent = document.getElementsByClassName("middle")[0];
                parent.appendChild(questbox);
                removeButton.addEventListener("click",removeActive);
                sendButton.addEventListener("click",changeStatus);

            }
            function changeStatus() {
                var elm = event.target;
                var questelement = elm.parentNode;
                var questId = questelement.getAttribute("id");
                console.log(questId);
                for (var i = 0; i < availableQuests.length; i++ ){
                    if (availableQuests[i].id === questId){
                        availableQuests[i].status = "erledigt";
                        console.log(availableQuests);
                    }
                }
            }
            function removeActive() {

                var elm = event.target;
                var parent = document.getElementsByClassName("questelement")[0];
                parent.parentNode.removeChild(parent);
                var questelement = elm.parentNode.parentNode.parentNode;
                var questId = questelement.getAttribute("id");
                resetQuest(questId);

            }
            function resetQuest(id) {
                var rightside = document.getElementsByClassName("right")[0];
                DOMQuestElement(rightside,id);
            }

            function DOMQuestElement(parent, id) {

            var quest = document.createElement("LI");
               var title = document.createElement("div");
                title.className = "questtitle";
                title.innerHTML = availableQuests[id].name;
                var readMoreIcon = document.createElement("img");
                readMoreIcon.src = "resources/img/add-button-inside-black-circle.png";
                readMoreIcon.height = "40";
                readMoreIcon.width = "40";
                readMoreIcon.className = "more";
                var readMore = document.createElement("div");
                readMore.className = "readmore";
                readMore.innerHTML = "Read More";
                var removeButton = document.createElement("div");
                removeButton.className = "removebuttonquest";
                var removeButtonInner = document.createElement("div");
                var accept = document.createElement("button");
                accept.className = "button";
                accept.id = "accept";
                accept.innerHTML = "Accept";
                removeButtonInner.className = "x flop large";
                for (var i = 0; i < 4; i++) {
                    removeButtonInner.appendChild(document.createElement("b"));
                }
                removeButton.appendChild(removeButtonInner);
                quest.appendChild(title);
                quest.appendChild(removeButton);
                quest.appendChild(accept);
                quest.appendChild(readMoreIcon);
                quest.appendChild(readMore);
                quest.className = "questAvailable";
                quest.id = id;
                parent.appendChild(quest);
                accept.addEventListener("click",acceptbutton);
                readMoreIcon.addEventListener("click",readMoreButtonClick);
            }

            function readMoreButtonClick(){
                var parent =  document.getElementsByClassName("messagebox")[0];
                parent.style.display="block";
                var target = event.target;
                createName(getQuestData(target),parent);
                createDuration(getQuestData(target),parent);
                createExercises(getQuestData(target),parent);
                createRequirements(getQuestData(target),parent);
                createAwards(getQuestData(target),parent);
            }
            function createDuration(questData,parent){
                var duration  = document.createElement("div");
                duration.className = "exercise";
                duration.innerHTML ="Questdauer: ";
                duration.innerHTML += questData.duration;
                parent.appendChild(duration)

            }
            function createName(questData,parent) {
                var title = document.createElement("div");
                title.className = "exercise";
                title.innerHTML = questData.name;
                parent.appendChild(title);
            }
            function createRequirements(questData,parent) {
            for(var i = 0; i < questData.requirements.length;i++){
                    var requirement = document.createElement("div");
                    requirement.className = "exercise";
                    requirement.innerHTML = "Anforderungen: ";
                    requirement.innerHTML += questData.requirements[i];
                    console.log(questData.requirements);
                    console.log(questData.requirements[0]);
                    parent.appendChild(requirement);
                }

            }
            function createExercises(questData,parent) {
                for(var i = 0; i < questData.exercises.length; i++){
                    var checkbox = document.createElement("input");
                    checkbox.setAttribute("type","checkbox");
                    checkbox.className = "checkbox";
                    var exercise = document.createElement("div");
                    console.log(checkbox);
                    exercise.className = "exercise";
                    exercise.innerHTML = "Übung: ";
                    exercise.innerHTML += questData.exercises[i];
                    exercise.appendChild(checkbox);
                    console.log(questData.exercises);
                    console.log(questData.exercises[0]);
                    parent.appendChild(exercise);
                }

            }
            function createAwards(questData,parent) {
                for(var i = 0; i < questData.award.length;i++){
                    var award = document.createElement("div");
                    award.className = "exercise";
                    award.innerHTML = "Belohnungen: ";
                    award.innerHTML += questData.award[i].awardid;
                    award.innerHTML += " "+ questData.award[i].value;
                    parent.appendChild(award);
                }

            }
            function getQuestData(target) {
                var clickedId = target.parentNode.getAttribute("id");
                var questData;
                for(var i = 0; i < availableQuests.length; i++){
                    if(availableQuests[i].id === clickedId){
                  questData = availableQuests[i];
              }}
                return questData;
            }



            that.parseQuests = parseQuests;
            return that;
        };
