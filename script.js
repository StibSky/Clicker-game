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








function Cookie() {


    this.click = function () {

        clickAmount++;
        totalAmaount = clickAmount + intervalIncrease;
        counter.innerHTML = totalAmaount;
        return totalAmaount;

    };

    this.autoIncrease = function () {
        if (totalAmaount - upgradeCost < 0){
            console.log("fuck off mate");
        } else {
            totalAmaount = clickAmount + intervalIncrease;
            counter.innerHTML = totalAmaount;
            setInterval(oneUp, 1000);


            return totalAmaount;
        }
        
    };


}




// cookie clickable and saves number

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

function updateCosts() {
    document.getElementById("costOne").innerHTML = farmer.costs;
    document.getElementById("amountFarmers").innerHTML = farmer.timesUpgraded;
}

function updateVegan() {
    counter.innerHTML = player.coins;
    document.getElementById("debugClick").innerHTML = "clickAmount "+ player.clicks;
    document.getElementById("debugTotal").innerHTML = "Coins "+ player.coins;
    document.getElementById("debugUpdate").innerHTML= "UpdateAmount= " + intervalIncrease;
}
