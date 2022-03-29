const numbers = [12,3,7,20,25];
var avg = 0
function avgNum(num){
    for(var i = 0; i < 5; i++ ){
        avg = avg + num[i]
    }

    return avg
    
}

const m = avgNum(numbers)

console.log(m)

if(m < 100 & m >= 90){
    console.log("A")
}
else if(m < 90 & m >= 80){
    console.log("B")
}

else if(m < 80 & m >= 70){
    console.log("C")
}

else if(m < 70 & m >= 60){
    console.log("D")
}

else if(m < 60){
    console.log("F")
}
else{
    console.log("Error")
}
