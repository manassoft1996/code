//function with parameter
function display(p1, p2) {
    console.log("love u")
}
display(12);

//--------------------------
function details(name, age, place) {
    this.name = name;
    this.age = age;
    this.place = place;
    console.log(name + " " + age + " " + place);
    console.log(arguments[0]);
}
details();//undefined undefined undefined
details("manas", 23, "odisha");//manas 23 odisha
details("manas", 23);//manas 23 undefined
details("manas", 93, "odisha", 666, 777777777777, "uuuuuuuuuuuuu", 8888888888888888888888);//manas 23 odisha
//
// if the no of argument will 3 then it will take three rest are stored i a OBJECT.
//extra argument why?
//ans.it will not check with past 
//it will not worry about arguments.
//if we given 3 arguments and we asign 2 arguments value in output section it will show 2 value and one undefind value.
//EXTRA Aguments are stored in ARGUMENT OBJECT.