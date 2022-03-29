var pow = 1
function powerOfNum(num, power){
    for(var i = 0; i < power; i++){
        pow = pow*num
    }
    return pow
    
}
number = 3;
power = 4;
const m = powerOfNum(number, power)
console.log(m)