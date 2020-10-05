var Bike = {};
Bike.brand = "Honda";
Bike.name = "splender";
Bike.price = 1200000;
Bike.ride = function () {
    console.log("it is a good bike.");
    console.log("---------------------------------------");
}
Bike.other = stunt;
function stunt() {
    console.log("stunt is done by me.....");
}
Bike.data = function () {
    console.log("brand is: " + Bike.brand);
    console.log("name is: " + Bike.name);
    console.log("price is: " + Bike.price);
    console.log("-------------------------------------");
}
Bike.data();
Bike.ride();
Bike.other();
