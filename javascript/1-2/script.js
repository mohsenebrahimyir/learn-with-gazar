var submitForm = function (event) {
  if (event) event.preventDefault();
  if (document.getElementsByName("username")[0]) {
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;
    console.log("username", username);
    console.log("password", password);
    document.getElementById("description").innerHTML = "Submitted";
    document.getElementById("description").style.color = "green";
  } else {
    document.getElementById("description").innerHTML("Erro");
    document.getElementById("description").style.color = "red";
  }
};

var onBirthdayChange = function (event) {
  console.log("value", new Date(event.target.value));
};

var onLoadPageToUpdateInformation = function () {
  document.getElementById("information").innerHTML =
    "<div>" + location.host + "</div>";

  let today = new Date().toLocaleDateString("fa-IR");
  document.getElementById("fa-today").innerHTML = "<div>" + today + "</div>";
};

var goToGoogle = function () {
  location.href = "https://www.google.com/";
};
