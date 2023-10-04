delete Array.prototype.flat;

Array.prototype.flat = function (depth = 1) {

    let result = [];
    this.forEach(element =>{
        if (Array.isArray(element) && depth > 0) {
            result.push(...element.flat(depth-1));
        }
        else{
            result.push(element);
        }
    });
    return result;
}