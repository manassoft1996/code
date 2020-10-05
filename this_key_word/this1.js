var Mobile = function (model_no, sprice) {
    this.model = model_no;
    this.price = 10000;
    //var price = 10000; //privbate property we cannot accesssing outside by using var.
    this.sp = sprice;
    this.SellingPrice = function () {
        return (this.price + this.sp);
    }
    this.data = function () {
        console.log("model is:=" + this.model + "," + "selling price is:= " + this.sp + ", total price is:= " + this.SellingPrice())
    }
}
var samsung = new Mobile("samsung-galexy", 12000);
//console.log(samsung.model + " " + samsung.SellingPrice());//samsung-galexy 22000.
samsung.data();
//outside the bracket we can not access var variable value and method.