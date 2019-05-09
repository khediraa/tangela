import data from "./resources/bikes.json";

var bikes = data; //TODO: Update json file periodically to make backup.

var id=6;

export function getBike(id) {
  return bikes[id];
}

/* Returns all bikes */
export function getAllBikes() {
  return bikes;
}

/* lkadsf */
export function addBike(name, type, lat, long, frame, gears, price, dates, description) {
<<<<<<< HEAD

var newBike= id + "type:" + type + "lat:" + lat 

id=id+1;
=======
  alert( name +' '+ frame +' '+ price);
>>>>>>> 1620c4feae3e2212ff1500472e7b4fd65cb6c122
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
