//Require connection
var connection = require('./connection.js');

// Connect to MySQL database
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };
    console.log('connected as id ' + connection.threadId);
});

// ORM to call MySQL commands with JS
var orm = {

    // selectAll();
    selectAll: function (callback) {
        connection.query('SELECT * FROM burgers', function (err, result) {
            if (err) throw err;
            callback(result);
        });

    },

    // insertOne();
    insertOne: function (burgerName, callback) {
        connection.query('INSERT INTO burgers SET ?', {
            burgerName: burgerName,
            devoured: false,
            date: timestamp
        }, function (err, result) {
            if (err) throw err;
            callback(result);
        });

    },

    // updateOne();
    updateOne: function (burgerID, callback) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: burgerID }], function (err, result) {
            if (err) throw err;
            callback(result);
        });

    }

};

module.exports = ORM;