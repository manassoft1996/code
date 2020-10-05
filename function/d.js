var v = 123;
v = 145;
console.log(v);

//----------let---------
let b = 12;
b = 23;
console.log(b);
//------------------NAN--------
let str1 = "java" / 23;
console.log(str1);
//-------------BIGINT------------
let i = 222222222222222222222222222222222222222222222222222222222222222222n;
console.log(i + " and type of i =" + typeof i);// -- bigint.

let r = 123;
r = 34.67;
console.log(r);// 34.67

//-------------------------BACKTICKS----------------------
let s1 = "manas";
let s3 = "samu";
let s4 = `backticks ${s1} ${s3}`;
console.log(s4);