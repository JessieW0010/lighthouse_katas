const talkingCalendar = function(date) {
  let year = date.slice(0, 4);
  let month = date.slice(5, 7);
  let day = "";

  //removes 0 if day is one number
  if (date.charAt(8) === "0") {
    day = date.slice(9);
  } else {
    day = date.slice(8);
  }

  //make month into words
  switch (month) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "Feburary";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
  };

  //if 1/21/31 add st, if 2/22 add nd, anthing else add th
  if (day[(day.length - 1)] === "1" && day !== "11") {
    day += "st";
  } else if (day[(day.length - 1)] === "2" && day !== "12") {
    day += "nd";
  } else {
    day += "th";
  }

  return `${month} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
