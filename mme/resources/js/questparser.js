var FitnessRPG = FitnessRPG || {};
    FitnessRPG.questParser = function () {


        "use strict";

        var that = {};
        var xmldoc;
        var availableQuests = [];

        function initEventListeners() {
            console.log("hi");
        }


        function parseQuests() {
            var xmlString = "";
            var parser = new DOMParser();
            var client = new XMLHttpRequest();
            client.open('GET', 'resources/xml/quests.xml');
            client.onloadend = function () {
                xmlString = client.responseText;
                xmldoc = parser.parseFromString(xmlString, 'text/xml');
                console.log(xmldoc);
                buildQuestElements();
                return xmldoc;
            };

            client.send();
        }
        function buildQuestElements() {
            var rightside = document.getElementsByClassName("right")[0];
            var questlist = xmldoc.getElementsByTagName("quest");
            console.log(questlist);
            for(var i = 0; i < questlist.length;i++){
                createQuestObjects(i);
                var questid = availableQuests[i].id;
                var name = availableQuests[i].name;
                DOMQuestElement(rightside,questid,name);
            }
            console.log(availableQuests);


        }
        function acceptbutton(){
           var elm = event.target;
           var clickedId = elm.parentNode.getAttribute("id");
          console.log(elm.parentNode.getAttribute("id"));
          elm.parentNode.style.display = "none";
          var clickedQuest;
          for(var i = 0; i < availableQuests.length; i++){
              if(availableQuests[i].id === clickedId){
                  clickedQuest = availableQuests[i];
              }
          }
          createActiveQuest(clickedQuest);


        }

            function createQuestObjects(index) {
                var id = xmldoc.getElementsByTagName("quest")[index].getAttribute("id");
                var name = xmldoc.getElementsByTagName("quest")[index].getElementsByTagName("name")[0].childNodes[0].nodeValue;
                var duration = xmldoc.getElementsByTagName("quest")[index].getElementsByTagName("dauer")[0].childNodes[0].nodeValue;
                var exercises = xmldoc.getElementsByTagName("quest")[index].getElementsByTagName("uebung");
                var requirements = xmldoc.getElementsByTagName("quest")[index].getElementsByTagName("voraussetzung");
                var award = xmldoc.getElementsByTagName("quest")[index].getElementsByTagName("belohnung");
                var quest = new Object();
                quest.id = id;
                quest.name = name;
                quest.duration = duration;
                quest.exercises = exercises;
                quest.requirements = requirements;
                quest.award = award;
                availableQuests.push(quest)
            }

            function createActiveQuest(clickedQuest) {
                var questbox = document.createElement("div");
                questbox.className ="questelement";
                var questActive = document.createElement("ul");
                questActive.className = "questsactive";
                questbox.appendChild(questActive);
                var title = document.createElement("li");
                title.className = "quest";
                title.id = "active";
                var titlequest = document.createElement("div");
                var duration  = document.createElement("div");
                duration.className = "duration";
                duration.innerHTML ="Questdauer: ";
                duration.innerHTML += clickedQuest.duration;
                titlequest.className ="questtitleactive";
                titlequest.innerHTML = clickedQuest.name;
                title.appendChild(titlequest);
                title.appendChild(duration);
                for(var i = 0; i < clickedQuest.exercises.length; i++){
                    var exercise = document.createElement("div");
                    exercise.className = "exercise";
                    exercise.innerHTML = "Übung: ";
                    exercise.innerHTML += clickedQuest.exercises[i].innerHTML;
                    console.log(clickedQuest.exercises);
                    console.log(clickedQuest.exercises[0]);
                    title.appendChild(exercise);
                }
                for(var i = 0; i < clickedQuest.requirements.length;i++){
                    var requirement = document.createElement("div");
                    requirement.className = "exercise";
                    requirement.innerHTML = "Anforderungen: ";
                    requirement.innerHTML += clickedQuest.requirements[i].innerHTML;
                    console.log(clickedQuest.requirements);
                    console.log(clickedQuest.requirements[0]);
                    title.appendChild(requirement);
                }
                questActive.appendChild(title);



                var parent = document.getElementsByClassName("middle")[0];



                parent.appendChild(questbox);

            }

            function DOMQuestElement(parent, id, name) {
                var title = document.createElement("div");
                title.className = "questtitle";
                title.innerHTML = name;
                var readMoreIcon = document.createElement("img");
                readMoreIcon.src = "resources/img/add-button-inside-black-circle.png";
                readMoreIcon.height = "40";
                readMoreIcon.width = "40";
                readMoreIcon.className = "more";
                var readMore = document.createElement("div");
                readMore.className = "readmore";
                readMore.innerHTML = "Read More";
                var quest = document.createElement("LI");
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
                quest.className = "quest";
                quest.id = id;
                parent.appendChild(quest);
                accept.addEventListener("click",acceptbutton);
            }



            that.parseQuests = parseQuests;
            return that;
        };
