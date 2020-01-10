//welke hier niet meer nodig? delete plox :)
//Globals maken die niet anders kunnen dan global


let upgradeOne = document.getElementById("upgradeOne");

let player = new Player(0,0);
let farmer = new Upgrade(10, 0, 1, 1000);
let upgradeCollection;
//let farmer = new Upgrade(100,10,0);
//player.upgrades.add(farmer);


let counter = document.querySelector("#counter");
let intervalIncrease = 0;





upgradeOne.addEventListener("click", function () {
    if (player.coins >= farmer.costs) {
        addUpgrade(farmer);
        upgradeCollection.add(farmer);
    }

});

function addUpgrade(nieuw) {
    nieuw.buyUpgrade();
    nieuw.increasePerBuy();
    nieuw.increasePerClick();
    upgradeCollection.add(nieuw);
}

//click on vegan  button
let image = document.getElementById("clickImage");
image.addEventListener("click", function (){
    player.click();
    //store
    localStorage.setItem("lastCount", player.coins);

});

//Save functionality
let saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", function (){
    localStorage.setItem("player", player.save());
    localStorage.setItem("upgrades", upgradeCollection);

});

//Load functionality
let loadBtn = document.getElementById("loadBtn");
loadBtn.addEventListener("click", function (){
    player.load( localStorage.getItem("player"));
    upgradeCollection = localStorage.getItem("upgrades");
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
    //live debug hieronder
    document.getElementById("debugClick").innerHTML = "clickAmount "+ player.clicks;
    document.getElementById("debugTotal").innerHTML = "Coins "+ player.coins;
    document.getElementById("debugUpdate").innerHTML= "UpdateAmount= " + intervalIncrease;
}
