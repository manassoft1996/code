//passing anonymous function as argument.
function display(myFunc) {//myFunc is the anonymous function and it is used as argument that is called.
    return myFunc();
}
console.log(display(function () { return "anonymous function"; }));//display method with anonymous function.