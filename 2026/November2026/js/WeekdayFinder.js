//https://www.freecodecamp.org/learn/daily-coding-challenge/11-06
//Weekday Finder

function getWeekday(date) {
  const [year, month, day] = date.split("-").map(Number);

  const dateObj = new Date(Date.UTC(year, month - 1, day));

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return weekdays[dateObj.getUTCDay()];
}

// Test cases
console.log(getWeekday("2025-11-06")); // Thursday
console.log(getWeekday("1999-12-31")); // Friday
console.log(getWeekday("1111-11-11")); // Saturday
console.log(getWeekday("2112-12-21")); // Wednesday
console.log(getWeekday("2345-10-01")); // Monday
