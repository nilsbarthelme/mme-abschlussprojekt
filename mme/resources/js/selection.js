var FitnessRPG = FitnessRPG || {};
    FitnessRPG.selection = function () {
        var that = {};

        "use strict";

        init();
        function init() {
            initListener()
            console.log(localStorage);

        }

        function initListener() {
            var char_1 = document.getElementsByClassName("michael")[0];
            var char_2 = document.getElementsByClassName("franklin")[0];
            var char_3 = document.getElementsByClassName("trevor")[0];

            char_1.addEventListener("click",saveFirstCharacter);
            char_2.addEventListener("click",saveSecondCharacter);
            char_3.addEventListener("click",saveThirdCharacter);


            console.log(char_1);
            console.log("hi console");
            checkLocalStorage();
        }
        function openNewPage() {
            window.open('index.html');

        }
        function saveFirstCharacter() {
            localStorage.setItem('character', 'char_1');
            openNewPage();

        }
        function saveSecondCharacter() {
            localStorage.setItem('character', 'char_2');
             openNewPage();
        }
        function saveThirdCharacter() {
            localStorage.setItem('character', 'char_3');
             openNewPage();
        }



        function checkLocalStorage() {
            localStorage.setItem('Aufgabe_1', 'Aktiv am Self-Wiki mitarbeiten!');
        }




            that.init = init;
            that.initListener = initListener;
            return that;
        };
