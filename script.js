
let upgradeCost = document.querySelectorAll(".cost");
let counter = document.querySelector("#counter");
let i = 0;
function oneUp() {
    i++;
    document.getElementById("countUp").innerHTML = i;
}

document.getElementById("upgradeOne").addEventListener("click", function () {
    setInterval(oneUp, 1000);
});




function Cookie(clicks, autoincrease) {

    this.clicks = clicks;

    this.autoIncrease = function test() {

        this.clicks += autoincrease;

        setInterval(test, 1000)
    };

}

new Cookie(0, 0);










// cookie clickable and saves number
    let image = document.getElementById("clickImage");

    image.addEventListener("click", function (){
        counter.innerHTML++;
        //store
        localStorage.setItem("lastCount", counter.innerHTML);

    });


    // Retrieve
    counter.innerHTML = localStorage.getItem("lastCount");



document.getElementById("reset").addEventListener("click", function () {
    localStorage.clear();
});
