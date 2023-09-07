const dayElement = document.getElementById("currentDayofTheWeek");
const dayId = document.getElementById("dayId");
const timeId = document.getElementById("timeId");
const date = new Date();
const day = date.getDay();
const currentUTCTime = date.toUTCString();

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// console.log(date.toString());
console.log(date);
dayElement.textContent = daysOfTheWeek[day];
dayId.textContent = day + 1;
timeId.textContent = currentUTCTime;
