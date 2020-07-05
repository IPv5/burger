// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

var burger = {
    all: function() {
        orm.selectAll("burgers", function(res) {
            res.json("testtinggg");
        });
    },
    // The variables cols and vals are arrays.
    insert: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(table, burger_name, devoured, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += burger_name;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;