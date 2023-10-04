


delete Function.prototype.bind;

Function.prototype.bind = function (obj, ...fixedArgs) {
    
    let myFn = this;

    return function (...nonFixedArgs) {
        return myFn.call(obj, ...fixedArgs, ...nonFixedArgs);
    }
}

let obj = {
    x:5
}

function fun() {
    console.log(this);
    return this;
}

let newFn = fun.bind(obj);
console.log(newFn());