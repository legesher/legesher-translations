const translationRoutes = require("./translation-routes");

module.exports = function(app, db) {
    translationRoutes(app, db);
};