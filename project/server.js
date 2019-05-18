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
  const jsonString = fs.readFileSync(bikePath, "utf-8");
  const bikes = JSON.parse(jsonString);
  const index = bikes.findIndex(bike => bike.id == id);
  res.send(bikes[index]);
});

app.post('/filtered-bikes', jsonParser, (req, res) => {
  let city = req.body.city;
  let bikeType = req.body.bikeType;
  let dates = req.body.dates;
  const jsonString = fs.readFileSync(bikePath, "utf-8");
  const jsonObject = JSON.parse(jsonString);  
  let filteredBikes = jsonObject.filter(bike => containsBike(bike, city, bikeType, dates));
  res.send(filteredBikes);
})

app.post('/rent-bike', jsonParser, (req, res) => {
  let id = req.body.id;
  let startDate = new Date(req.body.startDate);
  let endDate = new Date(req.body.endDate);
  console.log(startDate);
  
  const jsonString = fs.readFileSync(bikePath, "utf-8");
  const bikes = JSON.parse(jsonString);
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
  success = updateDatabase(bikes, bikePath);
  if (!success) {
    res.status(301).send('Could not write.');
  }
  res.status(200).send('Dates updated.');
});

app.post('/add-bike', jsonParser, (req, res) => {
  

  myId=myId+1;
  bikes[myId] = newBike;
  console.log(bikes[myId]);
  //console.log(bikes);
  //TODO: bikes ska skicka till JSON-filen
  return myId;
});

/* Helper functions */

function updateDatabase(data, path) {
   try {
     fs.writeFileSync(path, JSON.stringify(data, null, 4));
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
