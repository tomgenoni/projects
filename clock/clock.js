
function init () {
  timeDisplay = document.createTextNode ("");
  document.getElementById("clock").appendChild ( timeDisplay );
}

function updateClock (){
  var currentTime = new Date ();

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  var weekday=new Array(7);
  weekday[0]="sun";
  weekday[1]="mon";
  weekday[2]="tue";
  weekday[3]="wed";
  weekday[4]="thu";
  weekday[5]="fri";
  weekday[6]="sat";

  var day = weekday[currentTime.getDay()];


  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;


  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  // var currentTimeString = currentHours + " " + currentMinutes + " " + currentSeconds;
  var currentTimeString = currentHours + " " + currentMinutes;

  // Update the time display
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
  document.getElementById("day").setAttribute("class", day);
}