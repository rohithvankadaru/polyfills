let obj = {
    nam : "Krishna",

    innerObj : {
        nam : ["ram", 5, 9],
    }
}

function deepClone(obj) {

    if (typeof obj !== "object" || obj === null) return obj;
    if (Array.isArray(obj)) return obj.map(element => deepClone(element));

    let arrayObj = Object.entries(obj);
    let clonedArrayObj = arrayObj.map(([key, value]) => [key, deepClone(value)]);
    return Object.fromEntries(clonedArrayObj);
}