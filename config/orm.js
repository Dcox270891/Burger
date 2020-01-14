const connection = require(`./connection.js`);

const orm={
    selectAll(callback) {
        connection.query("SELECT * FROM burgers", (err, res) => {
            if (err) throw err;
            callback(res);
    })},

    insertOne(burger){
        connection.query(`INSERT INTO burgers (burger, devoured) VALUES (?, false)`, burger,(err) => {
            if (err) throw err;
            console.log(`${burger} has been added to the database`);

        });
    },

    updateOne(ToUpdate, updatedInfo, idToUpdate, callback){
        connection.query('UPDATE burgers SET ?? = ? WHERE id = ?', [ToUpdate, updatedInfo, idToUpdate], (err, res) => {
            if (err) throw err;
                console.log(`${idToUpdate} has been edited in the database to ${ToUpdate} = ${updatedInfo}`);
            callback(res);
        });
    }
};
module.exports = orm;