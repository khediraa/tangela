const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');
const bikePath = './bikes.json';

const jsonParser = bodyParser.json();
const textParser = bodyParser.text();
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res, next) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.post('/bike', textParser, (req, res) => {
  let id = req.body;
  const bikes = getBikes();
  const index = bikes.findIndex(bike => bike.id == id);
  res.send(bikes[index]);
});

app.post('/filtered-bikes', jsonParser, (req, res) => {
  let city = req.body.city;
  let bikeType = req.body.bikeType;
  let dates = req.body.dates;
  const bikes = getBikes();  
  let filteredBikes = bikes.filter(bike => containsBike(bike, city, bikeType, dates));
  res.send(filteredBikes);
})

app.post('/rent-bike', jsonParser, (req, res) => {
  let id = req.body.id;
  let startDate = new Date(req.body.startDate);
  let endDate = new Date(req.body.endDate);
  
  const bikes = getBikes();
  const index = bikes.findIndex(bike => bike.id == id);
  //Adds all dates in range to an array
  var dateArray = getDates(startDate, endDate);
 
  //If all dates are not available for the bike, return false.
  dateArray.forEach(element => {
    if (!bikes[index].dates.includes(element)) {
      res.status(300).send('Dates not available.');
    }
  });

  //Make the dates unavailable for the bike.
  dateArray.forEach(element => {
    if (bikes[index].dates.includes(element)) {
      var index = bikes[index].dates.indexOf(element);
      bikes[index].dates.splice(index, 1);
    }
  });
  success = updateBikes(bikes);
  if (!success) {
    res.status(301).send('Could not write.');
  }
  res.status(200).send('Dates updated.');
});

app.post('/add-bike', jsonParser, (req, res) => {
  
  let newBike = req.body;
  newBike.id = getNextId();
  incrementNextId();
  const bikes = getBikes();
  bikes.push(newBike);
  let success = updateBikes(bikes);
  success ? res.status(200).send('Added bike.') : res.status(300).send('Could not add bike.');
});

/* Helper functions */

/* Sets the bikes in bikes.json */
function updateBikes(data) {
   try {
    const jsonString = fs.readFileSync(bikePath, "utf-8");
    var bikeJson = JSON.parse(jsonString);
    bikeJson.bikes = data;
     fs.writeFileSync(bikePath, JSON.stringify(bikeJson, null, 4));
     return true;
   } catch (error) {
     console.error(error);
     return false;
   }
}

function getBikes() {
  try{
    const jsonString = fs.readFileSync(bikePath, "utf-8");
    jsonObject = JSON.parse(jsonString);
    return jsonObject.bikes;
  } catch (error) {
    console.error(error);
  }
}

function getNextId() {
  try{
    const jsonString = fs.readFileSync(bikePath, "utf-8");
    jsonObject = JSON.parse(jsonString);
    return jsonObject.nextId;
  } catch (error) {
    console.error(error);
  }
}

function incrementNextId() {
  try {
    const jsonString = fs.readFileSync(bikePath, "utf-8");
    let bikeJson = JSON.parse(jsonString);
    let nextId = parseInt(bikeJson.nextId);
    nextId += 1;
    bikeJson.nextId = nextId.toString();
    fs.writeFileSync(bikePath, JSON.stringify(bikeJson, null, 4));
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

/* Takes a bike object and checks if the bike object has "city", "bike_type", and "dates" */
function containsBike(bike, city, bike_type, dates) {
  let todaysDate = DateToString(new Date());
  let containsCity = city==="" ? true : city.toUpperCase()===bike.city.toUpperCase();
  let containsDates = dates.length===0 ? bike.dates.some(d => todaysDate<=d) : dates.some(d => bike.dates.includes(d));
  let containsType = bike_type==="all" ? true : bike.type===bike_type;
  return containsCity && containsType && containsDates;
}

function DateToString(date) {
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

/* Returns array of dates within starDate and endDate */
function getDates(startDate, endDate) {
  var dateArray = [];
  var currentDate = startDate;
  
  //Put all dates between startDate and endDate in an array.
  while (currentDate <= endDate) {
    dateArray.push(DateToString(new Date(currentDate)));
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
}

/* Returns a new Date object for a specified number of days after the current date. */
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}
