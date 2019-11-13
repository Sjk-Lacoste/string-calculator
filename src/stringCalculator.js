'use strict';

module.exports = class StringCalculator {
    constructor() {
        this.reg = /[\n\,]/;
    }

    Add(string) {
        let sum = 0;
        let str = string.split(this.reg);

        if(str == "") {
            return 0;
        } else {
            for(let i = 0; i < str.length; i++) {
                let num = parseInt(str[i]);
                sum += num;
            }

            return sum;
        }
    }
}


// let stringCalc = new StringCalculator();
// console.log(stringCalc.Add("1,2"));