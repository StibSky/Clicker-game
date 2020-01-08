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
            setInterval(oneUp, 1000);
            upgradeCost += 10;
            updateVegan();


            return totalAmaount;
        }

        this.update = function () {

        }
    };


}

//upgrade
function oneUp() {
    if (totalAmaount >= 10)
    {
        intervalIncrease++;


        updateVegan();
    }
    return intervalIncrease;

}