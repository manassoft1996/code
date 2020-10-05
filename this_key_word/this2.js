var Mobile = function (model_no, sprice, color) {
    this.model = model_no;
    this.color = color;
    var price = 10000;
    //var price = 10000; //privbate property we cannot accesssing outside by using var.
    this.sp = sprice;
    this.SellingPrice = function () {
        return (this.price + this.sp);
    }
    var data = function () {
        console.log("model is:=" + this.model + "," + "selling price is:= " + this.sp + ", total price is:= " + this.SellingPrice())
    }
    var show = function () {
        console.log("this is private method");
    }
    this.display = function () {
        show();
        return price;
    }
}
var samsung = new Mobile("samsung-galexy", 12000, "green");
//console.log(samsung.model + " " + samsung.SellingPrice());//samsung-galexy 22000.
//samsung.data();
console.log(samsung.display());//10000
//outside the bracket we can not access var variable value and method.