let str = require('../src/stringCalculator');

let strCalc = new str;

console.log(strCalc.Add("-//1\n-2,101%-3"));

describe("StringCalculator()", () => {
	it("should should return zero if the string is empty", () => {
		expect(strCalc.Add("")).toEqual(0);
	});

	it("should be able to add two string values", () => {
		expect(strCalc.Add("1,2")).toEqual(3);
	});

	it("should return result if input is: '1\n2,3'", () => {
		expect(strCalc.Add("1\n2,3")).toEqual(6);
    });
    
    it("should support different delimeters", () => {
        expect(strCalc.Add("//;n1;2")).toEqual(3);
    });

    it("should ignore numbers bigger than 1000", () => {
        expect(strCalc.Add("2,1001")).toEqual(2);
    });

    it("should support delimeters of any length", () => {
        expect(strCalc.Add("//[**][%%]\n1**2%%3")).toEqual(6);
    });
});