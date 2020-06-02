function check_snt(n){
    var flag = true;

    if (n <2) {
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else{
        for (var i = 3; i <= Math.sqrt(n); i += 2){
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
    return flag;
}

function print_number(){
    var number = document.getElementById('number').value;

    number = parseInt(number);

    var html = '';
    for (var i = 1; i <= number; i++) {
        if (check_snt(i)) {
            html += i + '</br>';
        }
    }
    document.getElementById('result').innerHTML = html;
}