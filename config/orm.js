var connection = require("./connection.js");

var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
            console.log(result);
        });
    },
    insertOne: function(theTable, firstVal, secondVal, firstInput, secondInput) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES ('??', ??)";
        console.log(queryString);
        connection.query(queryString, [theTable, firstVal, secondVal, firstInput, secondInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
        var queryString = "SELECT ?? FROM ?? WHERE tOne";
        queryString += " LEFT JOIN ?? AS tTwo";
        queryString += " ON tOne.?? = tTwo.??";

        console.log(queryString);

        connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(
            err,
            result
        ) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;