//Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

//Routing
const apiRoute = require("./routes/api_routes");
const htmlRoute = require("./routes/html_routes");
app.use('/api', apiRoute);
app.use('/', htmlRoute);

//Listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
