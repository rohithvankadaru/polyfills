delete Function.prototype.apply;

Function.prototype.apply = function (obj, argsArray) {
    
    obj.tempFunc = this;
    const ans = obj.tempFunc(...argsArray);
    delete obj.tempFunc;
    return ans;
}