const mysql = require(`mysql`);

const connection = mysql.createConnection({
    host:`localhost`,
    user:`root`,
    password:`test`,
    database:`burgers_db`,
});


connection.connect(function(err){
    if (err) throw err
});

module.exports = connection;