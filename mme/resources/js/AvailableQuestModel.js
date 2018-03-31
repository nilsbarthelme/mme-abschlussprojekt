var FitnessRPG = FitnessRPG || {};
    FitnessRPG.AvailableQuestModel = function () {


        "use strict";

        var that = {};
        var availableQuests = [];
      //  var playerInfo =  JSON.parse(localStorage.getItem("playerinfo"));


        function addElementsToQuestList() {
            var availableQuests = [];
            var questlist = JSON.parse(localStorage.getItem("quests"));
            var length = questlist.questlist.quest.length;

             for(var i = 0; i < length;i++){
                createQuestObjects(i,questlist);}


        }
        function parseQuests() {
                addElementsToQuestList();

                return availableQuests;
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
                availableQuests.push(quest)

            }

            function storageActiveQuest(id){
             localStorage.setItem("activeQuest",id);
            }

            that.storageActiveQuest = storageActiveQuest;
            that.parseQuests = parseQuests;
            that.availableQuests = availableQuests;
        return that;
    };
