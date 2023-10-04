delete Array.prototype.map;


//  MAP METHOD 
Array.prototype.map = function (callBack) {

    if (typeof callBack !== "function") return;

    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray.push(callBack(this[i], i, this));        
    }

    return newArray;
}

let arr = [1, 2, 3];

let a = arr.map((element, index, array)=>{

});