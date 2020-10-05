//var object_name = {.};
var person = {};
person["vijay"] = 1;
person["swati"] = 2;
person["rinky"] = 3;
person["study"] = function () {
    console.log("this is study method.");
}
person["study"]();
console.log(person["rinky"]);//3