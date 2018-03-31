var FitnessRPG = FitnessRPG || {};
    FitnessRPG.AvailableQuestModel = function () {


        "use strict";

        var that = {},availableQuests = [];


        function addElementsToQuestList() {
            var questStorage,questStorageLength,i;
            questStorage = JSON.parse(localStorage.getItem("quests"));
            questStorageLength = questStorage.questlist.quest.length;
             for( i = 0; i < questStorageLength;i++){
                createQuestObjects(i,questStorage);}
        }
        function parseQuests() {
                addElementsToQuestList();
                return availableQuests;
        }

        function createQuestObjects(index,questlist) {
            
            var questObj = new Object();
            questObj.name = questlist.questlist.quest[index].name;
            questObj.id = questlist.questlist.quest[index].questid;
            questObj.status = questlist.questlist.quest[index].status;
            questObj.duration = questlist.questlist.quest[index].dauer;
            questObj.exercises = questlist.questlist.quest[index].uebung;
            questObj.requirements = questlist.questlist.quest[index].voraussetzung;
            questObj.award = questlist.questlist.quest[index].belohnung;
            availableQuests.push(questObj);

            }

            function storageActiveQuest(id){
             localStorage.setItem("activeQuest",id);
            }


            that.storageActiveQuest = storageActiveQuest;
            that.parseQuests = parseQuests;
            that.availableQuests = availableQuests;
        return that;
    };
