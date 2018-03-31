/*This Module is used to create and manipulate the message box when clicking on the read more button. */


var FitnessRPG = FitnessRPG || {};
    FitnessRPG.ReadMoreView = function () {


        "use strict";

        var that = {};
        // Adds an eventlistener to the remove button
        function removeButton() {
            document.querySelector("#messagebox").addEventListener("click", hideMessageButton);
            function hideMessageButton() {
                document.getElementsByClassName("messagebox")[0].style.display="none";
}
        }
        // creates the duration text of the quest
        function createDuration(questData,parent){
                var duration = document.createElement("div");
                duration.className = "duration";
                duration.innerHTML ="Questdauer: ";
                duration.innerHTML += questData.duration;
                parent.appendChild(duration);

            }

            //creates the quest name
            function createName(questData,parent) {
                var title = document.createElement("div");
                title.className = "name";
                title.innerHTML = questData.name;
                parent.appendChild(title);
            }
            //creates the dfferent requirements of the quests
            function createRequirements(questData,parent) {
            var requirement,i,property;
            for( i = 0; i < questData.requirements.length;i++){
                    switch (i){
                        case 0: property = "Spielerlevel: ";
                        break;
                        case 1: property = "Erfahrungslevel: ";
                        break;
                        case 2: property = "Stärkelevel: ";
                        break;
                        case 3: property = "Ausdauerlevel: ";
                        break;
                        case 4: property = "Beweglichkeitslevel: ";
                        break;}

                    requirement = document.createElement("div");
                    requirement.className = "requirement";
                    requirement.innerHTML = property;
                    requirement.innerHTML += questData.requirements[i];
                    parent.appendChild(requirement);}
                }

            //creates the different exercises of the quests
            function createExercises(questData,parent) {
            var exercise,i;
                for( i = 0; i < questData.exercises.length; i++){
                    exercise = document.createElement("div");
                    exercise.className = "exercise";
                    exercise.innerHTML = "Übung: ";
                    exercise.innerHTML += questData.exercises[i].uebung;

                    parent.appendChild(exercise);
                }

            }
            //creates the different awards of the quests
            function createAwards(questData,parent) {
            var award,i;
                for(i = 0; i < questData.award.length;i++){
                    award = document.createElement("div");
                    award.className = "award";
                    award.innerHTML = "Belohnungen: ";
                    award.innerHTML += questData.award[i].awardid;
                    award.innerHTML += " "+ questData.award[i].value;
                    parent.appendChild(award);
                }

            }


            that.removeButton = removeButton;
            that.createDuration = createDuration;
            that.createAwards = createAwards;
            that.createExercises = createExercises;
           that.createName = createName;
           that.createRequirements = createRequirements;


        return that;
    };
