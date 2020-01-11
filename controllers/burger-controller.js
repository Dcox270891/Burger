class Burger {
    constructor(burger, devoured){
        this.burger = burger;
        this.devoured = false;
    };
    devour(){
        this.devoured = true;
    }
};

module.exports = Burger;