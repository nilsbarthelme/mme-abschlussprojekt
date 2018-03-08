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
            console.log(availableQuests[0].name)

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
                console.log(quest);
                console.log(parent);
                parent.appendChild(quest);
            }



            that.parseQuests = parseQuests;
            return that;
        };
