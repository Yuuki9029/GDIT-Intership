var h = null;
var m = null;
var s = null;

var timeout = null;

function start(){
    //get data from form
    if (h == null) {
        h = parseInt(document.getElementById('h_val').value);
        m = parseInt(document.getElementById('m_val').value);
        s = parseInt(document.getElementById('s_val').value);
    }

    // if set = -1 , down minute by 1 and reset set = 59

    if (s == -1) {
        m -= 1;
        s = 59;
    }

    // if minute = -1 , down hour by 1 and reset minute = 59

    if (m == -1) {
        h -= 1;
        m = 59;
    }

    // if hour = -1 we have time our, stop count down clock
    if (h == -1) {
        clearTimeout(timeout);
        alert('Time Out');
        return false;
    }
    // show clock
    document.getElementById('h').innerText = h.toString();
    document.getElementById('m').innerText = m.toString();
    document.getElementById('s').innerText = s.toString();

    timeout = setTimeout(function(){
        s--;
        start();
    }, 1000);

    function stop(){
        clearTimeout(timeout);
    }
}