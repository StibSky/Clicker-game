//welke hier niet meer nodig? delete plox :)
//Globals maken die niet anders kunnen dan global


let upgradeOne = document.getElementById("upgradeOne");

let player = new Player(0,0);
let farmer = new Upgrade(10, 0, 1, 1000);

//let farmer = new Upgrade(100,10,0);
//player.upgrades.add(farmer);

let upgradeCost = 0;
let counter = document.querySelector("#counter");
player.clicks = 0;
let intervalIncrease = 0;
player.coins = 0;




    upgradeOne.addEventListener("click", function () {
        if (player.coins >= farmer.costs) {
            farmer.buyUpgrade();
            farmer.increasePerBuy();
            farmer.increasePerClick();
        }

    });

    //click on vegan  button
    let image = document.getElementById("clickImage");
    image.addEventListener("click", function (){
        player.click();
        //store
        localStorage.setItem("lastCount", player.coins);

    });


    // Retrieve
    counter.innerHTML = localStorage.getItem("lastCount");



document.getElementById("reset").addEventListener("click", function () {
    localStorage.clear();
});
// deze mss naar de Classes verplaatsen? Of in Game loop plaatsen...

function updateCosts() {
    document.getElementById("costOne").innerHTML = farmer.costs;
    document.getElementById("amountFarmers").innerHTML = farmer.timesUpgraded;
}
// deze mss naar de Classes verplaatsen? Of in Game loop plaatsen...

function updateVegan() {
    counter.innerHTML = player.coins;
    document.getElementById("debugClick").innerHTML = "clickAmount "+ player.clicks;
    document.getElementById("debugTotal").innerHTML = "Coins "+ player.coins;
    document.getElementById("debugUpdate").innerHTML= "UpdateAmount= " + intervalIncrease;
}
