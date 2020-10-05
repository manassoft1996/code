//Immdiate invoked/called function expression [IIFE]
//function()
//{
//statements................
//}

//case 2:
//(function(p1,p2,p3,........)
//{
//statements...................
//};)();
//IIFE WITH PARAMETERS.
(function (name, place) {
    console.log(name + " " + place);//manas papapa
})("manas", "papapa");

console.log("------------------------------------");
(function () {
    console.log("THIS IS IIFE PARAMETER");
})("lllllllllllllllllllllllllll");
