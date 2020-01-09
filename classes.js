//player class with coins and clicks
class Player {
    constructor(clicks, coins, upgrades){
    this.clicks = clicks;
    this.coins = coins;
    this.upgrades = upgrades;
        };
     click() {
        this.clicks++;
        this.coins++;
        updateVegan();

        return Math.floor(this.coins);
    }
}

//upgrades on upgradebuttons
class Upgrade {
    constructor(costs, timesUpgraded, factor, timeOut){
        this.costs = costs;
        this.timesUpgraded = timesUpgraded;
        this.factor = factor;
        this.timeOut = timeOut;

    };
    increasePerBuy(){
        //Math.floor on right side otherwise can't do =
            this.costs = Math.floor(this.costs * 1.1);
            this.timesUpgraded++;
            updateCosts();
            return this.costs;
    }
    buyUpgrade(){
            player.coins = Math.floor(player.coins - this.costs);
            updateVegan();
            return player.coins;
    }
    increasePerClick() {
        function increaseFunc(factorGain) {
            player.coins = player.coins + factorGain;
            updateVegan();
            return player.coins;
        }
       // To pass parameters in a callback function for a setInterval, an anonymous function
       // is required.
        setInterval(function(){increaseFunc(farmer.factor)}, this.timeOut);

    }
}
