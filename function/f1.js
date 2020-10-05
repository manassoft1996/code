console.log("default parameter--------------------------------------------");
function add(a, b = 23, c) {
    console.log(a + " " + b + " " + c);//33 78 undefined
    //console.log(a + " " + b + " " + c);
}
add(33, 78);

console.log("default parameter--------------------------------------------");
function add(a, b, c = 90) {
    console.log(a + " " + b + " " + c);//33 78 undefined
    //console.log(a + " " + b + " " + c);
}
add(33, 78);