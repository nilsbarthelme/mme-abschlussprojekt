/* eslint-env browser*/

var FitnessRPG = FitnessRPG || {};
    FitnessRPG.selection = function () {

        "use strict";

        var that = {};

        init();
        function init() {
            initListener();
        }

        function initListener() {
            var char1, char2, char3;
            char1 = document.getElementsByClassName("michael")[0];
            char2 = document.getElementsByClassName("franklin")[0];
            char3 = document.getElementsByClassName("trevor")[0];

            char1.addEventListener("click",saveFirstCharacter);
            char2.addEventListener("click",saveSecondCharacter);
            char3.addEventListener("click",saveThirdCharacter);
        }

        function openNewPage() {
            window.open("index.html");

        }

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
