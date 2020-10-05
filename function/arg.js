//arguments with respect to functions.
function add(n1, n2) {
    //arguments of 0 = 10;
    //arguments of 1 = 20;
    console.log(n1 + " " + n2);
    console.log(arguments[0] + " " + arguments[1]);
}
add(10, 20);