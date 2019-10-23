var ObjectID = require("mongodb").ObjectID;

module.exports = function(app, db) {
    // GET Obtains the translation in the database
    app.get("/translations/:id", (req, res) => {
        const id = req.params.id;
        const details = {
            _id: new ObjectID(id)
        };

        db.collection("translations").findOne(details, (err, item) => {
            if (err) {
                console.log(err);
                res.send({ error: "An error has occured" });
            } else {
                res.send(item);
            }
        });
    });

    // POST ONE Insert a translation into database
    app.post("/translations", (req, res) => {
        // create translation here
        const translation = {
            spokenLanguage: req.body.spokenLanguage,
            programmingLanguage: req.body.programmingLanguage,
            definition: req.body.definition,
            keyword: req.body.keyword,
            translation: req.body.translation
        };

        db.collection("translations").insertOne(translation, (err, result) => {
            if (err) {
                console.log(err);
                res.send({ error: "An error has occured" });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    // POST MANY Insert a translation into database
    app.post("/translations", (req, res) => {
        // create translation here, passing in an array of objects
        const translations = [{
            spokenLanguage: req.body.spokenLanguage,
            programmingLanguage: req.body.programmingLanguage,
            definition: req.body.definition,
            keyword: req.body.keyword,
            translation: req.body.translation
        }];

        db.collection("translations").insertMany(translation, (err, result) => {
            if (err) {
                console.log(err);
                res.send({ error: "An error has occured" });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    // DEL Delete a translation into database
    app.delete("/translations/:id", (req, res) => {
        const id = req.params.id;
        const details = {
            _id: new ObjectID(id)
        };

        db.collection("translation").removeOne(details, (err, item) => {
            if (err) {
                console.log(err);
                res.send({ error: "An error has occured" });
            } else {
                res.send("Translation for " + id + " has been deleted!");
            }
        });
    });

    // PUT Update a translation into database
    app.put("/translations/:id", (req, res) => {
        const id = req.params.id;
        const details = {
            _id: new ObjectID(id)
        };

        const translation = {
            spokenLanguage: req.body.spokenLanguage,
            programmingLanguage: req.body.programmingLanguage,
            definition: req.body.definition,
            keyword: req.body.keyword,
            translation: req.body.translation
        };

        db.collection("translation").updateOne(details, translation, (err, item) => {
            if (err) {
                console.log(err);
                res.send({ error: "An error has occured" });
            } else {
                res.send(translation);
            }
        });
    });
};