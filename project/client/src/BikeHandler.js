//import data from "./resources/bikes.json";
//var bikes = data; //TODO: Update json file periodically to make backup.
var bikes = require('./resources/bikes.json');
var myId=6;
const serverURL = '/bikes'; // gets appended to the proxy from package.json

/* Fetches a bike based on id them. 
   Returns a Promise, access bike by chaining .then() to it.*/
export async function getBike(id) {
  return fetch('/bike', {
    method: 'POST',
    headers: {
      'Accept': 'text/plain',
      'Content-Type': 'text/plain'
    },

    body: id
  })
  .then(function(response) {
    return response.json();
  });
}

/* Passes search parameters to server and fetches list of bikes that match them. 
   Returns a Promise, access bikes by chaining .then() to it.*/
   export async function getFilteredBikes(city, bike_type, dates) {
    return fetch('/filtered-bikes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
  
      body: JSON.stringify({
        city: city,
        bikeType: bike_type,
        dates: dates
      })
    })
    .then((response) => {
      return response.json();
    });
  }

/* Takes a bike object and checks if the bike object has "city", "bike_type", and "dates" */
export function containsBike(bike, city, bike_type, dates) {
  let todaysDate = DateToString(new Date());
  let containsCity = city==="" ? true : city.toUpperCase()===bike.city.toUpperCase();
  let containsDates = dates.length===0 ? bike.dates.some(d => todaysDate<=d) : dates.some(d => bike.dates.includes(d));
  let containsType = bike_type==="all" ? true : bike.type===bike_type;
  return containsCity && containsType && containsDates;
}

/* Returns array of dates within starDate and endDate */
export function getDates(startDate, endDate) {
  var dateArray = [];
  var currentDate = startDate;
  
  //Put all dates between startDate and endDate in an array.
  while (currentDate <= endDate) {
    dateArray.push(DateToString(new Date(currentDate)));
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
}

/* Function that adds another bike to the json file */
export function addBike(name, lat, long, frame, type, gears, price, startDate, endDate, description) {
    var newBike= ({name:name, lat:lat, long:long, frame:frame, type:type, gears:gears, price:price, dates:getDates(startDate, endDate), description:description });

  bikes[myId] = newBike;
  console.log(bikes[myId]);
  //console.log(bikes);
  //TODO: bikes ska skicka till JSON-filen
  myId=myId+1;
}

/* Removes the rented days from the bike specified by id*/
export function rentBike(id, startDate, endDate) {
  
  //Adds all dates in range to an array
  var dateArray = getDates(startDate, endDate);
 
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

export function DateToString(date) {
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

/* Returns a new Date object for a specified number of days after the current date. */
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}
