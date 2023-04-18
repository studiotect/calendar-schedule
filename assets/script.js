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
  if (i > currTime) {
    parentID.children[1].classList.add("future")
  }
  else if (i === currTime) {
    parentID.children[1].classList.add("present")
  }
  else if (i < currTime) {
    parentID.children[1].classList.add("past")
  };
  parentID.children[1].value = localStorage.getItem("hour-" + i);
  parentID.children[2].addEventListener("click", function () {
    var text = this.previousElementSibling.value
    localStorage.setItem("hour-" + i, text)
  })
}
