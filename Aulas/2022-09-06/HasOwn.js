myObj = {
    prop: {}
};
console.log(Object.prototype.hasOwnProperty.call(myObj, 'prop'))

console.log(Object.prototype.hasOwnProperty.call(myObj, 'toString'))


console.log(Object.hasOwn(myObj, "prop"))
console.log(Object.hasOwn(myObj, "toString"))