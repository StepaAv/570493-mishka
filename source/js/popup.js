var linkOne = document.querySelector("#basket1");
var linkTwo = document.querySelector("#basket2");
var linkThree = document.querySelector("#basket3");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__add-btn");

linkOne.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal--show");

});
linkTwo.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal--show");

});
linkThree.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal--show");

});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal--show");

});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show");
    }
  }
});
