'use strict';

module.exports = class StringCalculator {
    constructor() {
        this.reg = /\d{1,}/gm;

        this.extractNegative = (string) => {
            let str = '';
            for(let i = 0; i < string.length; i++) {
                if(string[i] == '-' && !isNaN(string[i+1])) {
                    str += string[i+1] + ', ';
                }
            }
            return str;
        }
    }

    Add(string) {
        let sum = 0;
        let str = string.match(this.reg, '');
        let negatives = this.extractNegative(string);
        
        try {
            if(string.includes("-")) throw ("negative " + negatives + "not allowed.");
        } catch (err) {
            return err;
        }

        if(string == "") {
            return 0;
        } else {
            for(let i = 0; i < str.length; i++) {
                if(str[i] >= 1000){
                    continue;
                } else {
                    let num = parseInt(str[i]);
                    sum += num;
                }
            }

            return sum;
        }
    }
}


// let stringCalc = new StringCalculator();
// console.log(stringCalc.Add("1,2"));