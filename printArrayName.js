var obj = [
    {
        'name' : 'Sharuk',
        'age' : 22,
        'marks' : 95
    },
    {
        'name' : 'Amit',
        'age' : 22,
        'marks' : 82
    },
    {
        'name' : 'Sumon',
        'age' : 23,
        'marks' : 91
    },
    {
        'name' : 'Surojit',
        'age' : 22,
        'marks' : 71
    },
    {
        'name' : 'Samim',
        'age' : 24,
        'marks' : 90
    }
];

function printName(details){
    var arr_name = [];
    for(var i = 0; i < details.length; i++){
        arr_name.push(details[i].name);
    }

    return arr_name;
}


var name = printName(obj);

for( var i = 0; i < name.length; i++){
    console.log(name[i])
}


