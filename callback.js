
function ashramSchool(res){
    if(res >= 30){
        console.log("APassed");
    }else{
        console.log("AFailed")
    }
    //30 passss
}

function newHighSchool(res){
    //40 passs
    if(res >= 40){
        console.log("NPassed");
    }else{
        console.log("NFailed")
    }
}

function sscResult(fn){
   let result = 30;
   fn(result)
}

//sscResult(newHighSchool)



let array = [10,20];

function divBy_5(value){
    return value / 5;
}

let diviedArray = array.map(divBy_5);   //divby_5(10,0,[10,20]) //divBy_5(20,1,[10,20]);
console.log(diviedArray);

//console.log(divBy_5(100))

