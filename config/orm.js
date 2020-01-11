const connection = require(`./connection.js`);

const orm={
    selectAll(callback) {
        connection.query("SELECT * FROM burgers", (err, res) => {
            if (err) throw err;
            callback(res);
    })},

    insertOne(burger){
        connection.query(`INSERT INTO burgers (burger, devoured) VALUES (? , false)`, burger.burger,(err) => {
            if (err) throw err;
            console.log(`${burger} has been added to the database`);

        });
    },

    updateOne(burger, id){
        connection.query('INSERT INTO burger SET ? WHERE "id" ?', [burger, id], (err, res) => {
            if (err) throw err;
            console.log(`${burger} has been edited in the database`);
            res.json(results);
        });
    }
};
module.exports = orm;