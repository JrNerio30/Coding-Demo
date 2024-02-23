var helloWorld = function (greet) {
    return greet;
};
console.log(helloWorld("What's up World"));
var math = function (add, multiply) {
    var equals = 1;
    for (var counting = 0; counting < multiply; counting++) {
        equals *= add;
    }
    return equals;
};
console.log(math(2, 10));
/*
Trying to figure out how to do the problem
where how many bigmacs can I get with the amount of money I have.
*/
var dollars = function (money) {
    var bigMac = 15;
    if (money < bigMac) {
        return money;
    }
    var bigMacs = function (amount, bigmacs) {
        var howManyBigMacs = money + amount;
        if (howManyBigMacs > 1) {
            bigmacs += "s";
        }
        console.log("".concat(howManyBigMacs, " ").concat(bigmacs));
    };
    bigMacs(0, "BigMac");
};
console.log(dollars(20));
