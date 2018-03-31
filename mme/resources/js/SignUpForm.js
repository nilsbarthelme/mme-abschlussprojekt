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
          if (name[0].value === "") {alert("Bitte einen Namen eingeben!")}
          else if (ame[0].value.length < 8) {alert("Bitte kürzeren Namen eingeben!")}
          else if (!validateEmail(email[0].value)) {alert("Bitte eine korrekte Email angeben!")}
          else {
              var playerInfo = JSON.parse(localStorage.getItem("playerinfo"));
              playerInfo.playerinfo[0].name = name[0].value;
              playerInfo.playerinfo[0].email = email[0].value;
              localStorage.setItem("playerinfo",JSON.stringify(playerInfo));
              window.open('slider.html',"_self");
          }


      }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
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
