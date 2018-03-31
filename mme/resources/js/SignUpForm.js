/*This Module is used for the signup process of the user. The User is able to signup with his name and email.*/

/* eslint-env browser*/

var SignUpForm = (function() {
    "use strict";
      var that = {}, messageBoxAlertView;
      function init() {
          setPlayerInfo();
          setSignUpButton();
          setQuestList();

          messageBoxAlertView = FitnessRPG.MessageBoxAlertView();

      }
      //Adds eventListener to the signup button
      function setSignUpButton() {
          var signUpButton = document.getElementsByClassName("signup-button");
          signUpButton[0].addEventListener("click",getData);

      }
      //Saves the user entered data and opens the next page if the user signed up
      function getData() {
          var name, email, playerInfo;
          name = document.getElementsByName("user_name");
          email = document.getElementsByName("user_email");
          if (name[0].value === "") {messageBoxAlertView.showMessage("Bitte einen Namen eingeben!");}
          else if (name[0].value.length > 8) {messageBoxAlertView.showMessage("Bitte kürzeren Namen eingeben!")}
          else if (!validateEmail(email[0].value)) {messageBoxAlertView.showMessage("Bitte eine korrekte Email eingeben!")}
          else {
              playerInfo = JSON.parse(localStorage.getItem("playerinfo"));
              playerInfo.playerinfo[0].name = name[0].value;
              playerInfo.playerinfo[0].email = email[0].value;
              localStorage.setItem("playerinfo",JSON.stringify(playerInfo));
              window.open("slider.html","_self");
          }
      }
    // Validates mail so it's in a correct form (******@***.de/com/etc)
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    //Once the signup page is loaded the local storage is set for the first time with all available quest and a placeholder player data
      function setPlayerInfo() {
           var jsonString = "", client;
        client = new XMLHttpRequest();
        client.open("GET", "resources/xml/playerinfo.json");
        client.onloadend = function () {
            jsonString = client.responseText;
            localStorage.setItem("playerinfo", jsonString);
            return jsonString;
        };
        client.send();

      }
      function setQuestList() {
        var jsonString = "", client;
        client = new XMLHttpRequest();
        client.open("GET", "resources/xml/quests.json");
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
