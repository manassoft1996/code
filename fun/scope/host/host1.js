var i = "hello";
console.log(i);//hello
function show() {
    console.log(i);//undefind
    var i = "pinky";
    console.log(i);//pinky
}
show();