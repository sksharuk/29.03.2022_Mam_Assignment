const numbers = [12,3,7,200,225];
var max = 0
function maxNum(num){
    for(var i = 0; i < 5; i++ ){
        if( num[i] > max){
            max =num[i]
        } 

        else{
            max = max
        }
    }

    return max
}

const m = maxNum(numbers)

console.log(m)