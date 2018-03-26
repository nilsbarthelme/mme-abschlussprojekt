var FitnessRPG = (function() {
    "use strict";

    var that = {}, availablequestview,questparser, playerinfo, obj;

    function init() {
        questparser = new FitnessRPG.questParser();
        availablequestview = new FitnessRPG.AvailableQuestView();
        updateLocalStorage();
        updateCharacterImage();
    }

    function updateLocalStorage() {
        if (localStorage.length === 0) {
            setNewPlayerinfo();
        } else {
            playerinfo = localStorage.getItem("playerinfo"); // json string
             obj = JSON.parse(playerinfo);
            console.log(obj); // java objekt
            console.log(obj.playerinfo[0].level); //level des users
            updateUserView();
        }
        console.log(localStorage);
    }
    function updateCharacterImage() {
        var char = document.getElementById("character");
        var character = localStorage.getItem("character");
        switch (character){
            case "char_1":
                char.setAttribute("src","resources/img/Char1Level1.png");
                break;
            case "char_2":
                char.setAttribute("src","resources/img/Char2Level1.png");
                break;
            case "char_3":
                char.setAttribute("src","resources/img/Char3Level5.png");
                break;
        }
        console.log(character);

    }

    function updateUserView() {
        document.querySelector(".username").textContent = obj.playerinfo[0].name;
        document.querySelector(".level").textContent = "Level: " + obj.playerinfo[0].level;
        document.querySelector(".expprogressback").style.width = obj.playerinfo[0].exp + "%";
        document.querySelector(".strprogressback").style.width = obj.playerinfo[0].str + "%";
        document.querySelector(".endprogressback").style.width = obj.playerinfo[0].end + "%";
        document.querySelector(".agiprogressback").style.width = obj.playerinfo[0].agi + "%";
    }

    function setNewPlayerinfo() {
        var jsonString = "";
        var client = new XMLHttpRequest();
        client.open('GET', 'resources/xml/playerinfo.json');
        client.onloadend = function () {
            jsonString = client.responseText;
            localStorage.setItem("playerinfo", jsonString);
            return jsonString;
        };

        client.send();

    }

    that.init = init;
    return that;
}());
