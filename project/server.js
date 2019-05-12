const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');
const cors = require("cors");
app.use(cors());

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/bikes', (req, res) => {
  bikes = require('./bikes.json');
  res.send(bikes[0]);
})

const updateDatabase = (data) => {
  let path = "bikes.json";
   try {
     console.log(data, path);
     //fs.writeFileSync(path, JSON.stringify(data));
   } catch (error) {
     console.error(error);
   }
}
