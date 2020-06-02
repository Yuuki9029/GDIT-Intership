function phuong_trinh(){
    var a = parseInt(prompt('input a'));
    var b = parseInt(prompt('input b'));

    if (a == 0 && b == 0) {
        alert('vo vo nghiem');
    }
    else if (a != 0 && b == 0){
        alert('nghiem la 0')
    }
    else if (a == 0 && b != 0) {
        alert('vo nghiem');
    }
    else if (a != 0 && b != 0){
        alert('nghiem pt la' + -b/a);
    }
}
phuong_trinh();