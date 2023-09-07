const dayElement = document.getElementById("currentDayofTheWeek");
const dayId = document.getElementById("dayId");
const timeId = document.getElementById("timeId");

const updateUTCTimeAndDay = () => {
  const currentTimeUTC = new Date().toUTCString();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date().getDay();
  const currentDayOfTheWeek = daysOfWeek[date];

  timeId.textContent = currentTimeUTC;
  dayElement.textContent = currentDayOfTheWeek;
  dayId.textContent = date + 1;
};

updateUTCTimeAndDay();
setInterval(updateUTCTimeAndDay, 1000);
