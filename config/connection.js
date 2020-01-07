const express = require("express");
const app = express();
const mysql = require(`mysql`);
const PORT = process.env.PORT || 4567;
const connection = mysql.createConnection({
    host:`localhost`,
    user:`root`,
    password:`test`,
    database:`burgers_db`,
});

connection.connect(function(err){
    if (err) throw err
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
});

module.exports = Connection;