class Bike {
    constructor(name, brand, price, color) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.color = color;
    }
    show() {
        console.log("bike name is:=" + this.name + " , " + "bike brand is:=" + this.brand + " , " + "bike price is:=" + this.price + " , " + "bike color is:=" + this.color);
    }
}
var b1 = new Bike("R 15", "Yamaha", 1000000, "blue");
var b2 = new Bike("pulsre", "honda", 100000, "black");
var b3 = new Bike("hero", "hero", 80000, "red");
b1.show();
b2.show();
b3.show();
