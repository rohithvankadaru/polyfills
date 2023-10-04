delete Function.prototype.call;

Function.prototype.call = function (obj, ...args) {

    obj.tempFun = this;
    const ans = obj.tempFun(...args);
    delete obj.tempFun;
    return ans;
}

let obj = {
    x : 5,
}

function fun() {
    console.log(this);
}

fun.call(obj);