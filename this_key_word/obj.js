//var object_name = {.};
var person = {};
person["name"] = "manas";
person["age"] = 23;
person["place"] = "odisha";
person["study"] = function () {
    console.log("this is study method.");
}
person["data"] = function () {
    console.log(person["name"] + " " + person["age"] + " " + person["place"]);
}
person["study"]();
person["data"]();
