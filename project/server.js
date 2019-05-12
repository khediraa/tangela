const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

const updateDatabase = (data) => {
  let path = "bikes.json";
   try {
     console.log(data, path);
     //fs.writeFileSync(path, JSON.stringify(data));
   } catch (error) {
     console.error(error);
   }
}
