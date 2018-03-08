var FitnessRPG = FitnessRPG || {};
    FitnessRPG.AvailableQuestView = function () {


        "use strict";

        var that = {};
        var xmldoc;
        var num = 0;
        var questparser = new FitnessRPG.questParser();
        xmldoc = questparser.parseQuests();
        console.log("test");
        console.log("test");



        return that;
    };
