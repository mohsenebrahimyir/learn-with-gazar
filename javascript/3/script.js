var initialCount = 120;
var count = initialCount;
var countInterval;

var onLoadCounter = function () {
  count = Number(Cookies.get("count"));
  document.getElementById("counter").innerHTML = count;
  var previousState = Cookies.get("state");
  if (previousState === "started") {
    start();
  }
  if (count === 0) {
    pause();
  }
};

var start = function () {
  countInterval = setInterval(function () {
    count -= 1;
    Cookies.set("count", count);
    Cookies.set("state", "started");
    document.getElementById("counter").innerHTML = count;
    document.getElementsByClassName("start")[0].disabled = true;
    document.getElementsByClassName("pause")[0].disabled = false;
    document.getElementsByClassName("reset")[0].disabled = false;
  }, 1000);
};

var pause = function () {
  clearInterval(countInterval);
  Cookies.set("state", "paused");
  Cookies.set("count", count);
  document.getElementsByClassName("start")[0].disabled = false;
  document.getElementsByClassName("pause")[0].disabled = true;
};


var reset = function () {
  count = initialCount;
  pause();
  document.getElementById("counter").innerHTML = count;
  document.getElementsByClassName("reset")[0].disabled = true;
};
