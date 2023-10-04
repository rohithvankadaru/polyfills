delete Array.prototype.filter;

Array.prototype.filter = function (callBackFn) {
    if (typeof callBackFn !== "function") return;

    let newArray = [];
    for (let index = 0; index < this.length; index++) {
        callBackFn(this[index], index, this) ? newArray.push(this[index]) : "Do Nothing";
    }

    return newArray;
}


let arr = [1, 2, 3];

let a = arr.filter((x, y, z)=>{
    return x % 2 !== 0; 
})

console.log(a);