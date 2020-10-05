var Mobile = function (model_no, sprice) {
    this.model = model_no;
    this.price = 10000;
    this.sp = sprice;
    this.SellingPrice = function () {
        return (this.price + this.sp);
    }
}
var samsung = new Mobile("samsung-galexy", 12000);
console.log(samsung.model + " " + samsung.SellingPrice());//samsung-galexy 22000.
