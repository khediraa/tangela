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
  console.log(req.body);
  
  let id = req.body;
  const jsonString = fs.readFileSync(bikePath, "utf-8");
  const bikes = JSON.parse(jsonString);
  console.log("sending: " + JSON.stringify(bikes[id]));
  res.send(bikes[id]);
})

app.post('/filtered-bikes', jsonParser, (req, res) => {
  let city = req.body.city;
  let bikeType = req.body.bikeType;
  let dates = req.body.dates;
  const jsonString = fs.readFileSync(bikePath, "utf-8");
  const jsonObject = JSON.parse(jsonString);
  let values = Object.values(jsonObject);
  let filteredBikes = values.filter(bike => containsBike(bike, city, bikeType, dates));
  res.send(filteredBikes);
})

/* Helper functions */

const updateDatabase = (data) => {
  let path = "bikes.json";
   try {
     console.log(data, path);
     //fs.writeFileSync(path, JSON.stringify(data));
   } catch (error) {
     console.error(error);
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
