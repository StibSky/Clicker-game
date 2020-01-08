

let cookie1 = new Cookie();


let upgradeCost = 0;
let counter = document.querySelector("#counter");
let clickAmount = 0;
let intervalIncrease = 0;
let totalAmaount = 0;

let upgradeOne = document.getElementById("upgradeOne");


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

function updateVegan() {
    totalAmaount = intervalIncrease + clickAmount - upgradeCost;
    counter.innerHTML = totalAmaount;
    document.getElementById("debugClick").innerHTML = "ClickAmount= "+ clickAmount;
    document.getElementById("debugTotal").innerHTML = "TotalAmount= "+ totalAmaount;
    document.getElementById("debugUpdate").innerHTML= "UpdateAmount= " + intervalIncrease;
}
