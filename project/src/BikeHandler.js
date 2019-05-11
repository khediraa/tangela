//import data from "./resources/bikes.json";
var bikes = require('./resources/bikes.json');

//var bikes = data; //TODO: Update json file periodically to make backup.
var myId=6;

export function getBike(id) {
  return bikes[id];
}

/* Returns all bikes */
export function getAllBikes() {
  return bikes;
}

/* Function that adds another bike to the json file */
export function addBike(name, lat, long, frame, type, gears, price, startDate, endDate, description) {
  var dateArray = [];
  var currentDate = startDate;

  //Put all dates between startDate and endDate in an array.
  while (currentDate <= endDate) {
    dateArray.push(DateToString(new Date(currentDate)));
    currentDate = currentDate.addDays(1);
  }

  var newBike= ({name:name, lat:lat, long:long, frame:frame, type:type, gears:gears, price:price, dates:dateArray, description:description });

  bikes[myId] = newBike;
  console.log(bikes[myId]);
  //console.log(bikes);
  //TODO: bikes ska skicka till JSON-filen
  myId=myId+1;
}

/* Removes the rented days from the bike specified by id*/
export function rentBike(id, startDate, endDate) {
  var dateArray = [];
  var currentDate = startDate;

  //Put all dates between startDate and endDate in an array.
  while (currentDate <= endDate) {
    dateArray.push(DateToString(new Date(currentDate)));
    currentDate = currentDate.addDays(1);
  }

  //If all dates are not available for the bike, return false.
  //TODO: alert user on return false.
  dateArray.forEach(element => {
    if (!bikes[id].dates.includes(element)) {
      return false;
    }
  });

  //Make the dates unavailable for the bike.
  dateArray.forEach(element => {
    if (bikes[id].dates.includes(element)) {
      var index = bikes[id].dates.indexOf(element);
      bikes[id].dates.splice(index, 1);
    }
  });
  return true;
}

function DateToString(date) {
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

/* Returns a new Date object for a specified number of days after the current date. */
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}
