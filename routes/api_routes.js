// Import express package
const express = require('express');

// Require the JSON file and assign it to a variable called `termData`
const termData = require('./terms.json');
const PORT = 3001;

// Initialize our app variable by setting it to the value of express()
const app = express();

app.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));

// res.json() allows us to return JSON instead of a buffer, string, or static file
app.get('/api/terms', (req, res) => res.json(termData));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


//* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

//* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
