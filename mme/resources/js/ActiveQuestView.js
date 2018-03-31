/* This Module is responsible for manipulating the interface of the active quests. The currently active Quest generated/Build out of different
* HTML Elements. This Module is important to separate dom accesses.*/

var FitnessRPG = FitnessRPG || {};
    FitnessRPG.ActiveQuestView = function () {


        "use strict";

        var that = {},availableQuestModel,activeQuestController;
        const removeButtonLength = 4;

        /*  gets the in "FitnessRPG.js" created instances and set them*/
        function setInstances(activeQuestControllerInstance,availableQuestModelInstance) {
            activeQuestController = activeQuestControllerInstance;
            availableQuestModel = availableQuestModelInstance;

        }
        /*Creates the questparent element */
        function createQuest(clickedQuest) {
             var quest = document.createElement("li");
                quest.className = "quest";
                quest.id = clickedQuest.id;
                return quest;
        }
        /*Creates the quest title element */
        function createQuestTitle(clickedQuest) {
               var titlequest = document.createElement("div");
                titlequest.className ="questtitleactive";
                titlequest.innerHTML = clickedQuest.name;
                return titlequest;
        }
        /*Creates the quest duration element*/
        function createDuration(clickedQuest) {
                var duration = document.createElement("div");
                duration.className = "duration";
                duration.innerHTML ="Questdauer: ";
                duration.innerHTML += clickedQuest.duration;
                return duration;
        }
        /*Creates the Remove button of active quests in the upper right */
        function createRemoveButton() {
            var removeButton,removeButtonInner,i;
            removeButton = document.createElement("div");
                removeButton.className = "removebuttonactive";
                 removeButtonInner = document.createElement("div");
                removeButtonInner.className = "x flop large";
                    for ( i = 0; i < removeButtonLength; i++) {
                    removeButtonInner.appendChild(document.createElement("b"));
                }
                  removeButton.appendChild(removeButtonInner);
                    activeQuestController.removeActiveQuest(removeButton);
                    return removeButton;
        }

        /*Creates the Button to finish the quest */
        function createFinishButton() {

            var sendButton = document.createElement("div");
                sendButton.className = "sendbutton";
                sendButton.innerHTML = "Quest abschließen";
                activeQuestController.changeQuestStatus(sendButton);
                return sendButton;
        }
        /*Combines the different created html documents and storages the active quest in the local storage */
        function createActiveQuest(clickedQuest) {
                var questbox,questActive,quest,parent;
                questbox = document.createElement("div");
                questbox.className ="questelement";
                questActive = document.createElement("ul");
                questActive.className = "questsactive";
                questbox.appendChild(questActive);
                quest = createQuest(clickedQuest);
                quest.appendChild(createRemoveButton());
                quest.appendChild(createQuestTitle(clickedQuest));
                quest.appendChild(createDuration(clickedQuest));
                createExercises(clickedQuest,quest);
                createAwards(clickedQuest,quest);
                quest.appendChild(createFinishButton());
                questActive.appendChild(quest);
                parent = document.getElementsByClassName("middle")[0];
                parent.appendChild(questbox);
                availableQuestModel.storageActiveQuest(quest.id);


            }
        /*Creates the different exercises with their checkboxes*/
            function createExercises(questData,parent) {
            var i, checkbox,exercise;
                for( i = 0; i < questData.exercises.length; i++){
                    checkbox = document.createElement("input");
                    checkbox.setAttribute("type","checkbox");
                    checkbox.className = "checkbox";
                    if(questData.exercises[i].checkbox === "false" || questData.exercises[i].checkbox ===false){
                        checkbox.checked = false;
                    } else {checkbox.checked = true; }
                    checkbox.addEventListener("change",activeQuestController.setChecked);
                    exercise = document.createElement("div");
                    exercise.className = "exercise";
                    exercise.innerHTML = "Übung: ";
                    exercise.innerHTML += questData.exercises[i].uebung;
                    exercise.appendChild(checkbox);

                    parent.appendChild(exercise);
                }

            }
              /*Creates the different awards the user gets*/
            function createAwards(questData,parent) {
            var i, award;
                for( i = 0; i < questData.award.length;i++){
                    award = document.createElement("div");
                    award.className = "award";
                    award.innerHTML = "Belohnungen: ";
                    award.innerHTML += questData.award[i].awardid;
                    award.innerHTML += " "+ questData.award[i].value;
                    parent.appendChild(award);
                }

            }
              /*selects the middle element out of the dom*/
            function getMiddleElement() {
                return document.querySelector(".middle");
            }
              /*Sets width of the middle element*/
            function setMiddleWidth(width) {document.querySelector(".middle").style.width = width + "%";}

            that.setMiddleWidth = setMiddleWidth;
            that.getMiddleElement = getMiddleElement;
            that.setInstances = setInstances;
            that.createActiveQuest = createActiveQuest;

        return that;
    };
