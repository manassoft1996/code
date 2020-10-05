//a function inside a function is called clouser function.
//EX: 
//outer function         
//var x = 40;
//iner function
//from inner function we can access the outer function.
//A Closure is a innerFunction that has accessthe outer function variable.
//  1. LOCAL SCOPE(OWN SCOPE)
//  2. outerFunction scope
//  3. Global scope.
//inner scope is equal to local scope.
//outer scope is equal to global scope.
//OUTERFUNTION can not access innerFunction variable.
function outerFunction() {
    var x = 100;
    //console.log(x + " " + y);//outer function can not access inner function.
    function innerFunction() {
        var y = 2000;
        console.log(x + " " + y);//inner function can access outer function.
    }
    innerFunction();
}
outerFunction();

