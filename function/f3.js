console.log("default parameter------------array is created--------------------------------");
function add(a, ...args) {
    console.log(a + " " + args);//[ 33, 78, 74 ]...array is getting created.
    //args[0]=33;
    //args[1]=78;
    //args[2]=74
}
add(33, 78, 74, 89);