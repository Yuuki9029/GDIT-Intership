function check(n){
    var sum = 0;
    var index = 0;
    // vòng lặp while
    while (index <= n){
        if (index % 2 == 0) {
            sum += index;
        }
        index++;
    }
    return sum;
    return index;
}
function print_number(){
    var number = document.getElementById('number').nodeValue;

    number = parseInt('number');

    var html = '';
    for (var i = 1; i <= number; i++){
        if (check(i)) {
            html += i + "tổng số chắn từ 1 tới " + n + "là :" ;
        }
    }
    document.getElementById('result').innerHTML.html;
}