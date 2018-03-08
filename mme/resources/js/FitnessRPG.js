var FitnessRPG = (function() {
    "use strict";

    var that = {}, availablequestview,questparser;

    function init() {
        questparser = new FitnessRPG.questParser();
        availablequestview = new FitnessRPG.AvailableQuestView();
    }

    that.init = init;
    return that;
}());
