// typecasting

// &Explicit type casting
// let data="10"
// console.log(data)
// console.log(typeof data)

// //&string to number-->nan
// let data1='somu'
// console.log(Number(data1));
// console.log(typeof(Number(data1)));

 // &space to number-->
// let data2=''
// console.log(Number(data2));
// console.log(typeof(Number(data2)));

// &boolean conversion
// let data1=true
// console.log(Number(data1));
// console.log(typeof(Number(data2)));


// ~parseInt()-->converting data into number and it will exract only number if thier with string
// let data='10'
// console.log(parseInt(data));
// console.log(typeof parseInt(data));

// let data='10.89'
// console.log(parseInt(data))//10

// let data1='1080abc'
// console.log(parseInt(data1));//1080

// let data=true //nan
// let data=''  //nan
// let data='2 4 5'  //nan
// console.log(parseInt(data));
// console.log(type(parseInt(data)));


//~parseFloat
// let data='10.89'
// console.log(parseFloat(data));
// console.log(typeof(parseFloat(data)));//number 


//&converting data to string
// ~String
// let data=100
// console.log(String(data));
// data=String(data)
// console.log(typeof data);

// ~boolean
// let data=true
// console.log(typeof String(data));


//~ !toString()-->only non primitive datatype to the string
// let data=10
// console.log(data.toString());


// let data1=new String("10")
// console.log(data1);
// console.log(data1.toString());

// &BOOLEAN
// let data="true"
// console.log(Boolean(data));

// ~truthy and falsy

//~falsy--->we have only 8 falsy values
/*
1.false
2.0
3.-0
4.0n
5.null
6.undefined
7.NAN
8.""
*/

// let data=false
// console.log(Boolean(data));

// let data1=0
// console.log(Boolean(data1));

// let data=-0
// console.log(Boolean(data));

// let data=0n
// console.log(Boolean(data));

// let data=null
// console.log(Boolean(data));

// let data=undefined
// console.log(Boolean(data));

// let data=NaN
// console.log(Boolean(data));

// let data=""
// console.log(Boolean(data));

// ~truthy-->apart from falsy 8 values evrything will be truthy values
// let data=[]
// console.log(Boolean(data));

// !logical operator-->short circuiting operator

//~ and operator &&
// let data=true && false
// let data=true && "somu" //somu
// let data="somu" && true //true
// let data=false && "somu"//false
// let data="rani" && "ramu" //ramu
// console.log(data);

// ~or operator ||
// let data=true || false //true
// let data=true || "somu" //true
// let data="somu" || true //somu
// let data=false || "somu"//somu
// let data="rani" || "ramu" //rani
// console.log(data);


// ~ not operator !!
// console.log(!!!"somu") //true!-->false!-->true!-->false
// console.log(!"somu")//false






















