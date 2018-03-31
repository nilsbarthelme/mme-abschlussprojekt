var FitnessRPG = FitnessRPG || {};
    FitnessRPG.ReadMoreView = function () {


        "use strict";

        var that = {};
        function removeButton() {
            document.querySelector("#messagebox").addEventListener("click", hideMessageButton);
            function hideMessageButton() {
                document.getElementsByClassName("messagebox")[0].style.display="none";
}
        }

        function createDuration(questData,parent){
                var duration = document.createElement("div");
                duration.className = "duration";
                duration.innerHTML ="Questdauer: ";
                duration.innerHTML += questData.duration;
                parent.appendChild(duration);

            }
            function createName(questData,parent) {
                var title = document.createElement("div");
                title.className = "name";
                title.innerHTML = questData.name;
                parent.appendChild(title);
            }
            function createRequirements(questData,parent) {
            var requirement,i;
            for( i = 0; i < questData.requirements.length;i++){
                    requirement = document.createElement("div");
                    requirement.className = "requirement";
                    requirement.innerHTML = "Anforderungen: ";
                    requirement.innerHTML += questData.requirements[i];
                    parent.appendChild(requirement);
                }

            }
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
