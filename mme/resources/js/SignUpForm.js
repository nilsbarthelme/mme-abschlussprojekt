var SignUpForm = (function() {
    "use strict";
      var that = {};
      function init() {
          setPlayerInfo();
          setSignUpButton();
          setQuestList();

      }
      function setSignUpButton() {
          var signUpButton = document.getElementsByClassName("signup-button");
          signUpButton[0].addEventListener("click",getData);

      }
      function getData() {
          var name = document.getElementsByName("user_name");
          var email = document.getElementsByName("user_email");
          var playerInfo = JSON.parse(localStorage.getItem("playerinfo"));
          playerInfo.playerinfo[0].name = name[0].value;
          playerInfo.playerinfo[0].email = email[0].value;
          localStorage.setItem("playerinfo",JSON.stringify(playerInfo));
          window.open('slider.html',"_self");

      }
      function setPlayerInfo() {
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
      function setQuestList() {
         var jsonString = "";
        var client = new XMLHttpRequest();
        client.open('GET', 'resources/xml/quests.json');
        client.onloadend = function () {
            jsonString = client.responseText;
            localStorage.setItem("quests", jsonString);
            return jsonString;

        };
        client.send();
    }


    that.init = init;
    return that;
}());
