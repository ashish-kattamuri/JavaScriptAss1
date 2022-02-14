let n = prompt("Enter number of people: ");
var birthyears = new Array;
for(var i=0;i<parseInt(n);i++)
{
    let d = prompt("Enter birthyear: ");
    birthyears.push(parseInt(d));
}

function getAge(arr,func)
{
    let result = [];
    for(var i=0;i<arr.length;i++)
    result.push(func(arr[i]));
    return result;
}

function calAge(t)
{
    return 2022-t;
}

let ages = getAge(birthyears,calAge);

console.log(ages);


