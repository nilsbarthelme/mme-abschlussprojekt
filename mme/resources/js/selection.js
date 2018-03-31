/*This Module is used to save the selected character in the local storage so it is displayed correctly in the user info*/


var FitnessRPG = FitnessRPG || {};
    FitnessRPG.Selection = function () {
        "use strict";
        var that = {};
        init();
        function init() {
            initListener();

        }
        /*Adds eventlistener to the different images*/

        function initListener() {
            var char1,char2,char3;
            char1 = document.getElementsByClassName("michael")[0];
            char2 = document.getElementsByClassName("franklin")[0];
            char3 = document.getElementsByClassName("trevor")[0];

            char1.addEventListener("click",saveFirstCharacter);
            char2.addEventListener("click",saveSecondCharacter);
            char3.addEventListener("click",saveThirdCharacter);

        }
        //Opens index.html to start the game
        function openNewPage() {
            window.open("index.html");

        }

        /*These functions save the different chosen characters to the local storage*/
        function saveFirstCharacter() {
            localStorage.setItem("character", "char_1");
            openNewPage();

        }
        function saveSecondCharacter() {
            localStorage.setItem("character", "char_2");
             openNewPage();
        }
        function saveThirdCharacter() {
            localStorage.setItem("character", "char_3");
             openNewPage();
        }
            that.init = init;
            that.initListener = initListener;
            return that;
        };
