delete Array.prototype.reduce;


Array.prototype.reduce = function (callBackFn, initialValue) {

    let accumulator = initialValue;

    for (let index = 0; index < this.length; index++) {
        if (accumulator === undefined) {
            accumulator = this[index];
        } else {
            accumulator = callBackFn(accumulator, this[index], index, this);
        }
    }
    return accumulator;
}


let arr = [1, 2, 99, 5];


let value = arr.reduce((prev, element, index)=> prev+element);

console.log(value);