// const express = require("express");
// const faker = require("faker/locale/en");

// const app = express();

// app.get("/fake-bus-location", (req, res) => {
//   const latitude = faker.address.latitude();
//   const longitude = faker.address.longitude();

//   res.json({ latitude, longitude });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

//samriddhi //doesn't change anything
// const express = require("express");
// const faker = require("faker/locale/en");

// const app = express();

// app.get("/fake-bus-location", (req, res) => {
//   const busLocation = {
//     latitude: faker.address.latitude(),
//     longitude: faker.address.longitude(),
//   };

//   res.json(busLocation);
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize the express app
const app = express();

app.use(bodyParser.json());

// POST route to receive GPS coordinates
app.post('/gps-data', (req, res) => {
    const { latitude, longitude, altitude } = req.body;

    console.log(`Received GPS Data: Latitude: ${latitude}, Longitude: ${longitude}, Altitude: ${altitude}`);
    
    // Send a response
    res.send({ message: 'GPS data received', latitude, longitude, altitude });
});


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
