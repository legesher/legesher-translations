const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const db = require(`./config/db`);
const translations = require("./app/routes");

const port = 8000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// parser is being depricated, have to use the new parser
MongoClient.connect(db.url, {
    useNewUrlParser: true
}, (err, database) => {
    if (err) {
        return console.log(err);
    }
    // Make sure to add the database name and not the collection name
    const translationDatabase = database.db("legesher-translations");
    translations(app, translationDatabase);
});

app.listen(port, () => {
    console.log("Holla we're live on port " + port + " babaayyy!!!");
});