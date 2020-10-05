var i = 20; // GLOBAL VARIABLE
function display() {
    var j = 30;// LOCAL VARIBALE
    j = 34;// GLOBAL VARIABLE.
}
display();
console.log(i);//20
console.log(j);// this local variable thats why it will not accessable.