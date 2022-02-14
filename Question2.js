//Question-2

function arrow(firstname, lastname){
    let s1 = firstname.slice(0,1);
    let s2 = lastname.slice(0,1);
    return s1+s2;
}
let ans = arrow("Ashish","Khaja");
console.log(ans);