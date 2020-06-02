var min = null;
var max = null;

var value = '';

while (value != null){
    value = prompt('input value');

    if (value != null) {
        if (min == null){
            min = value;
            max = value;
        }
        else{
            if (min > value){
                min = value;
            }
            if (max < value){
                max = value;
            }
        }
    }
}

document.write('min is ' + min + 'max is ' + max);