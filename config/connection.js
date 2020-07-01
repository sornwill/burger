const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost", //CAN REPLACE WITH VARS ON HEROKU w/ process.env.SOMETHING
    port: 3306,
    user:"root",
    password:"22087005552493",
    database:"burgers_db"
});

connection.connect(function(err){
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;