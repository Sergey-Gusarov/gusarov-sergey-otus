function sum(arg) {
    var value = arg;

    return function (arg) {
        if (arg !== undefined) {
            return sum(value + arg);
        } else {
            return value;
        }
    }
}

console.log(sum(undefined)()) // undefined
console.log(sum(1)()) // 1
console.log(sum(1)(2)(3)(4)()) // 10
console.log(sum(0)(5)(3)(8)(-2)()) // 14
console.log(sum(1)(1)(1)(1)(1)(1)(1)()) // 7