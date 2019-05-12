const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');

//Route setup
app.get('/', (req, res) => {
  
  res.send('root route');

})

//Start server
app.listen(port, (req, res) => {

console.log(`server listening on port: ${port}`)

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
