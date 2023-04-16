// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
//});


var calendarEntries = JSON.parse(localStorage.getItem('calendarEnties')) || [];

function dateTime() {
  setInterval(function () {
    var timeCurrent = dayjs()
    $('#currentDay').text(timeCurrent.format('dddd, MMMM D, YYYY h:mm:ss A'));
  }, 1000);
}
dateTime();
var currTime = dayjs().hour()

for (let i = 9; i < 19; i++) {
  var parentID = document.querySelector("#hour-" + i);
  console.log(parentID);
  if (i > currTime) {
    parentID.children[1].classList.add("future")
  }
  else if (i === currTime) {
    parentID.children[1].classList.add("present")
  }
  else if (i < currTime) {
    parentID.children[1].classList.add("past")
  };

}
