var FitnessRPG = FitnessRPG || {};
    FitnessRPG.AvailableQuestModel = function () {


        "use strict";

        var that = {},availableQuests = [];


        function addElementsToQuestList() {
            var questStorage,questStorageLength;
            questStorage = JSON.parse(localStorage.getItem("quests"));
            questStorageLength = questStorage.questlist.quest.length;
             for(var i = 0; i < questStorageLength;i++){
                createQuestObjects(i,questStorage);}
                console.log(availableQuests);
        }

        function parseQuests() {
                addElementsToQuestList();
                return availableQuests;
        }

        function createQuestObjects(index,questlist) {
<<<<<<< HEAD
            
            var questObj = new Object();
=======
                var questObj = new Object();
>>>>>>> parent of f3ab6fd... Merge branch 'master' of https://github.com/UniRegensburg/mme-abschlussprojekte-ws-201718-fitnessrpg
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
