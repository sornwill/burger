const mysql = require("mysql");


if (process.env.JAWSDB_URL) {
    let connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    let connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        port: process.env.PORT, 
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });
};

connection.connect(function(err){
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;