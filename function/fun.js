function display(a, b) {
    console.log(arguments.length);
    console.log("---------------------------");
    for (i = 0; i < arguments.length; i++) {
        console.log("arguments of " + i + " = " + arguments[i]);
    }
}
display(1, 44, 78, 65, 34, 89, 44);