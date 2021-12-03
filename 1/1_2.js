const fs = require("fs");

var measurements = fs.readFileSync("1.txt", {encoding: "utf8"}).split("\n").map(Number);
var count = 0;

for (i = 1; i < measurements.length; i++) {
    if (measurements[i] > measurements[i - 1]) {
        count++;
    }
}

console.log(count);