
let upgradeCost = 10;
let counter = document.querySelector("#counter");
let clickAmount = 0;
let intervalIncrease = 0;
let totalAmaount = 0;

function oneUp() {

        intervalIncrease++;
        totalAmaount = intervalIncrease + clickAmount - upgradeCost;
        counter.innerHTML = totalAmaount;
        return intervalIncrease;

}

let upgradeOne = document.getElementById("upgradeOne");






function Cookie() {


    this.click = function () {

        clickAmount++;
        totalAmaount = clickAmount + intervalIncrease;
        counter.innerHTML = totalAmaount;
        return totalAmaount;

    };

    this.autoIncrease = function () {
        if (totalAmaount - upgradeCost <= 0){
            console.log("fuck off mate");
        } else {
            setInterval(oneUp, 1000);
            totalAmaount = clickAmount + intervalIncrease;
            counter.innerHTML = totalAmaount;

            return totalAmaount;
        }

    this.update = function () {

    }
    };


}

let cookie1 = new Cookie();










// cookie clickable and saves number
    let image = document.getElementById("clickImage");
    upgradeOne.addEventListener("click", function () {
            cookie1.autoIncrease();
    });

    image.addEventListener("click", function (){
        cookie1.click();
        //store
        localStorage.setItem("lastCount", totalAmaount);

    });


    // Retrieve
    counter.innerHTML = localStorage.getItem("lastCount");



document.getElementById("reset").addEventListener("click", function () {
    localStorage.clear();
});
