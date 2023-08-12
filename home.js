document.addEventListener("DOMContentLoaded", function () {
  var A = "HUBLOT";
  var B = "OMEGA";
  var C = "ROLEX";
  var D = "BAMFORD";
  var T = document.getElementById("faza");

  setInterval(function () {
    if (T.innerHTML === C) {
      T.innerHTML = A;
    } else if (T.innerHTML === A) {
      T.innerHTML = B;
    } else if (T.innerHTML === B) {
      T.innerHTML = D;
    } else {
      T.innerHTML = C;
    }
  }, 2000);
});
