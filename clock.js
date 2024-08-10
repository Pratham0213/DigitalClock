
var clockElement = document.getElementById('clock');
var dateElement = document.getElementById('date');
var clockInterval;

document.getElementById('start').addEventListener('click', function() {
  clockInterval = setInterval(updateClock, 1000);
});

document.getElementById('stop').addEventListener('click', function() {
  clearInterval(clockInterval);
});

function updateClock() {
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var day = currentTime.getDate();
  var month = currentTime.getMonth() + 1;
  var year = currentTime.getFullYear();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;

  var timeString = hours + ':' + minutes + ':' + seconds;
  var dateString = day + '/' + month + '/' + year;

  clockElement.textContent = timeString;
  dateElement.textContent = dateString;
}

updateClock();
