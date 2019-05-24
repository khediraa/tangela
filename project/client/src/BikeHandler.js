/* -------- Server communication functions -------- */


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

/* Function that adds another bike to the json file, connecting it to the user specified with email. */
export async function addBike(email, name, lat, lng, frame, type, gears, price, startDate, endDate, description) {
  let newBike= ({name:name, lat:lat, lng:lng, frame:frame, type:type, gears:gears, price:price, dates:getDates(startDate, endDate), description:description, rating:[] });

  // TODO: temporary hardcoded values. Remove when functionality added to Addbike.
  //newBike.lat = "57.69891";
  //newBike.lng = "11.97057";
  newBike.city = "Gothenburg";

  return fetch('add-bike', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify({
      bike: newBike,
      email: email
    })
  })
  .then((response) => {
    return response.text();
  })
  .catch( error => {
    console.log(error);

  });
}

/* Tells the server to remove the rented days from the bike specified by id.
Returns a Promise, access status by chaining .then() to it.
If status is 200, the dates were removed successfully. If not, an error occurred.*/
export async function rentBike(id, startDate, endDate) {
  //let startDateString = DateToString(startDate.toDate());
  //let endDateString = DateToString(endDate.toDate());

  return fetch('/rent-bike', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      startDate: startDate,
      endDate: endDate
    })
  })
  .then((response) => {
    return response.status;
  });
}

export async function removeBike(id) {
  return fetch('/remove-bike', {
    method: 'POST',
    headers: {
      'Accept': 'text/plain',
      'Content-Type': 'text/plain'
    },
    body: id
  })
  .then((response) => {
    return response.ok;
  })
}

/* -------- End server communication functions -------- */



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

export function DateToString(date) {
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

/* Returns a new Date object for a specified number of days after the current date. */
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}
