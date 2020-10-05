//block scope........................................................
if (true) {
    var i = 40;
    console.log(i);//40
}
console.log(i);//40
//it is not a local variable. so that it is called as global variable.

console.log("---------------------------------");
if (true) {
    let k = 20;
    console.log(k);
}
console.log(k);// it is not accessable due to let.