function Cookie() {


    this.click = function () {

        clickAmount++;
        updateVegan();

        return totalAmaount;

    };

    this.autoIncrease = function () {
        if (totalAmaount - upgradeCost <= 0){
            console.log("fuck off mate");
        } else {
            setInterval(this.increase(), 1000);
            upgradeCost += 10;
            updateVegan();


            return totalAmaount;
        }

        this.update = function () {

        };


        this.upgrade = function Upgrade(cost) {

        }
    };


}

//upgrade

function UpgradeClass(cost) {

    this.cost = cost;

    this.increaseCost = function () {



    };

    this.increase = function oneUp() {
        if (totalAmaount >= cost)
        {
            intervalIncrease++;


            updateVegan();
        }
        return intervalIncrease;

    }
}




