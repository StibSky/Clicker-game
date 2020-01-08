
let upgradeCost = document.querySelectorAll(".cost");
let counter = document.querySelector("#counter");

function Cookie(clicks, autoincrease) {

    this.clicks = clicks;
    this.autoincrease = autoincrease;

    this.autoIncrease = function test() {

        this.amount = this.amount * + 1 * autoincrease;
        setInterval()

    }

}

new Cookie(0, 0);


    let image = document.getElementById("clickImage");
    let counter = document.getElementById("counter");

    image.addEventListener("click", function (){
        counter.innerHTML++;
        //store
        localStorage.setItem("lastCount", counter.innerHTML);

    });


    // Retrieve
    counter.innerHTML = localStorage.getItem("lastCount");


})();
