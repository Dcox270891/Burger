const connection = require(`./config/connection.js`);
const orm = require(`./config/orm.js`);
const Burger = require(`./controllers/burger-controller.js`);
const PORT = process.env.PORT || 4567;
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

let burgerToRender = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
});

app.get(`/`, function (req, res) {
    orm.selectAll(burgers => {
        burgerToRender = [];
        burgers.forEach(({ burger, devoured})=>{
            if (devoured === 1){
                console.log(`${burger} has already been eaten`);
            } else {
                const newBurger = new Burger(burger,false);
                burgerToRender.push(newBurger);
            }
        })
        res.render(`index`, { burgers: burgerToRender});
        console.log(burgerToRender)
    });
});

app.post(`/`, function (req, res){
    const createdBurger = new Burger(req.body.createdBurger);
    console.log(createdBurger);
    orm.insertOne(createdBurger);
    res.redirect(`/`);
})