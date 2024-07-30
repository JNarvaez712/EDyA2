function NumberOddorEven(x){
    if (x % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

const NumberOddorEven = function(x){
    return x % 2 === 0? "Even" : "Odd";
}

console.log(NumberOddorEven(10)); // Output: Even
console.log(NumberOddorEven(7)); // Output: Odd