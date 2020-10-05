function display(a, b) {
    //console.log(arguments.length);
    console.log("---------------------------");
    //for (i = 0; i < arguments.length; i++) {
    console.log("A value is: " + a + " , " + "B value is:= " + b);
}
display(1, 44);
//----------------------------------------
console.log("default parameter--------------------------------------------");
function add(a, b, c = 12) {
    console.log(a + " " + b + " " + c);//12 34 45
    //console.log(a + " " + b + " " + c);
}
add(12, 34, 45);//12 34 45
add(12, 34);//12 34 12

console.log("default parameter--------------------------------------------");
function add(a = 78, b = 23, c = 12) {
    console.log(a + " " + b + " " + c);//78 23 12
    //console.log(a + " " + b + " " + c);
}
add();