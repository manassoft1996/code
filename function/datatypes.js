//*DATA TYPES*//
//"NUMBER"
//"STRING"
//"UNDEFIND"
//"NULL"
//"BOOLEAN"
//"OBJECT"
//"ARRAY"
//SYMBOL === nonprimitive.
//--------------*Number datatypes*-----------------------------
var x = 12;// NUMBER DATATYPES.
console.log(x);
//--------------*VARIABLES    *-----------------------------
var x = 12; //var variable.
let p = 13; //let variable.


let msg = "hello"; // it will not print. it will deleted.
msg = 1245; // in this case (let) latest value will print. i.e  1234.(ans)
console.log(msg);
//---------------- -----------
let y = 17;
y = 23.56;
console.log(y);// 23.56.

let w = 1 / 0;
console.log(w);//Infinity

//----------------
let v = "manas" / 12;
console.log(v);//NaN    (-2 to the power 53 - 1)  to (+2 to the power 53 -1)
// BIGINT ------------------some huge number that case we use BIGINT.
// BIGINT can store huge number.

//---------------STRINGS-----------------------------------
var str = "hello";
var str1 = 'java';
let s3 = `BACKTICKS ${str}`  //attach any of the string. BACKTICKS
console.log(str + "," + str1 + "," + s3);

//-----------------------BOOLEAN----------------------------
let a = true;
let e = false;
let s = 4 > 5;//false.

//-------------------------NULL---------------------------------
let name = null;
console.log(name);

//----------------------------UNDEFIND-----------------------------
let b; // which value which ic not defind or intialized is called UNDEFIND.
console.log(b);