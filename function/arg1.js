function display(a, b) {
    console.log(a + " " + b);
}
display(1, 0.5);//1 5

///---------------
function display(a, b) {
    arguments[0] = 23;
    console.log(a + " " + b);//23 , 5
}
display(1, 0.5);