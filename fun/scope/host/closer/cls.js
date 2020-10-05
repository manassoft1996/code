function OuterFunction() {
    var out = 12;
    function InnerFunction() {
        console.log(out);
    }
    return InnerFunction();
}
var InnerFunc = OuterFunction();
//InnerFunc();