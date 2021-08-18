
//Dependencies
const express = require('express');
const router = express.Router();
const fs = require('fs');

//* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
router.get("./notes", (res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
  });

//* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
router.post("./notes", (req) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        let newNote = JSON.parse(data);
        newNote.push(req.body);
        fs.writeFile("./db/db.json", JSON.stringify(newNote), (err) => {
            if(err) return err;
            console.log("File saved successfully");
        });
    });
});

/*unique ID packages: "uniqid", "uuid"*/

module.exports = router;