/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let upgradeCost = document.querySelectorAll(".cost");
let counter = document.getElementById("counter");
console.log(counter);

(function() {
    var Buttons = document.querySelectorAll(".upgradeBtn");
    console.log(Buttons);

    document.querySelectorAll(".upgradeBtn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            console.log(btn.id);
            switch (btn) {
                case upgradeOne:
                    upgradeCost[0].innerHTML = Math.floor(Number(upgradeCost[0].innerHTML)*1.1);
                    if (counter.innerHTML > upgradeCost[0]){
                        //let newCounter = counter.value - upgradeCost[0].innerHTML;
                        console.log(counter.value);
                        //counter.innerHTML = newCounter;
                    }
                    break;
                case upgradeTwo:
                    upgradeCost[1].innerHTML = Math.floor(Number(upgradeCost[1].innerHTML)*1.1);
                    break;
                case upgradeThree:
                    upgradeCost[2].innerHTML = Math.floor(Number(upgradeCost[2].innerHTML)*1.1);
                    break;
                case upgradeFour:
                    upgradeCost[3].innerHTML = Math.floor(Number(upgradeCost[3].innerHTML)*1.1);
                    break;
            }

        })
    });



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
