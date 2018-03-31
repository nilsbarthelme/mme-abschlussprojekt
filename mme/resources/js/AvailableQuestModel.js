/*  The AvailableQuestModel.js Module is a centered Module for Parsing the quests out of the localStorage in an array to
*   have a flexible object which can be manipulated. Every questObject in the array has a name, id, completion status, duration, its exercises,
*   requirements and awards properties. The Array Object is global accessible so just one parsing process is necessary. Further in this Module
*   the currently active Quest is stored in the local Storage.
* */

var FitnessRPG = FitnessRPG || {};
    FitnessRPG.AvailableQuestModel = function () {


        "use strict";

        var that = {},availableQuests = [];

    // Parses elements from the local storage and calls the createQuestObjects function
        function addElementsToQuestList() {
            var questStorage,questStorageLength,i;
            questStorage = JSON.parse(localStorage.getItem("quests"));
            questStorageLength = questStorage.questlist.quest.length;
             for(i = 0; i < questStorageLength;i++){
                createQuestObjects(i,questStorage);}
        }

        // Returns the work-ready quest-array with the parsed quests
        function parseQuests() {
                addElementsToQuestList();
                return availableQuests;
        }
        // Creates an questobject and pushes it to the array for every entry in the localStorage
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
        //Stores the currently active quest to the localStorage
            function storageActiveQuest(id){
             localStorage.setItem("activeQuest",id);
            }
          //Stores the currently checked checkBoxes to the localStorage
            function storeCheckboxes(data) {
                localStorage.setItem("quests",data);

            }

            that.storeCheckboxes = storeCheckboxes;
            that.storageActiveQuest = storageActiveQuest;
            that.parseQuests = parseQuests;
            that.availableQuests = availableQuests;
        return that;
    };
