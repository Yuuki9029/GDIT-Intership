// function summary(a, b){
//     return a + b
// }
// var a = parseInt(prompt("input a"));
// var b = parseInt(prompt("input b"));

// var sum = summary (a, b);

// document.write("sum" + a + b + "is" + sum);

// function summary (){
//     var a = parseInt(prompt("input a"));
//     var b = parseInt(prompt("input b"));

//     var sum = a + b;

//     document.write("sum" + a + "and" +  b + "is" + sum);
// }
// summary();




// sum (1/n)
function calculator (n){
    var sum = 0;

    for (i = 0 ; i <= n ; i++ ){
        sum += (1/i);
    }

    return sum;
}

var n = parseInt(prompt("input n"));

if (n <= 0) {
    alert("input n > 0");
}
else{
    document.write('sum is:' + calculator(n));
}