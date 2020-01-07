function selectAll(){
    connection.query(`SELECT * FROM burgers`, (err,res) =>{
        if (err) throw err;
        console.log(res);
    });
};

function insertOne(burger){
    connection.query(`INSERT INTO burger SET ?`, burger, (err, res) =>{
        if (err) throw err;
        console.log(`${burger} has been added to the database`);
    });
}

function updateOne(burger, id){
    connection.query(`INSERT INTO burger SET ? WHERE 'id' ?`, [burger, id], (err, res) =>{
        if (err) throw err;
        console.log(`${burger} has been edited in the database`);
    });
}

module.exports = SQLcommands;