function findlastchar(hello){
    return hello[hello.length-1]
}
//console.log(findlastchar('sachin'))

//let s = "sachin";

// sachin
// h
function searchchar(str,key){
    // str = "shachin"
    // key = h
    return str.lastIndexOf(key)
}

function cal(a,b){
    return a+b*a/b;
}
let result =cal(12,15)

let aa = searchchar("shachin",'n')
console.log(aa);
//sachin

/**
 * 0 - s
 * 1- a
 * 2 - c
 * 3 - h
 * 4 - i
 * 5 - n
 */


function searchchar(str,key){
    return str.lastIndexOf(key)
}
let a=searchchar("sagar",'g')
console.log(a)

function cal(a,b){
    return(a+b)
}
cal(2,2)

function findareaofcircle(r){
    return 1*3.14*r
}
let vv=findareaofcircle(3)
console.log(vv)


let x=true
console.log(typeof x)
console.log(x)

let y=2
console.log(typeof y)
console.log(y)

let z="sagar"
console.log(typeof z)
console.log(z)

let s=22
console.log('s')
console.log(s)


let city='pune'
let city1="gevrai"
let city2=`auranagabad`

console.log(typeof city)
console.log(city,city1,city2)

// javscript 

// number + string  ===> string 
// string + number  ===> string 
// number + number  ===> number 
// string + string  ===> string 

function findareaofsquare(r){
    return r*r
}
let ff=findareaofsquare(5)
console.log(ff)