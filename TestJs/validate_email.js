function isEmail (emailStr){
    var emailPat = /^(.+)@(.+)$/;
    var specialChars = "\\(\\)<>@,;:\\\\\\\"\\.\\[\\]";
    var validChars = "\[^\\s" + specialChars + "\]";
    var quotedUser = "(\"[^\"]*\")";
    var ipDomainPat = /^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
    var atom = validChars + '+';
    var word = "(" + atom + "|" + quotedUser + ")";
    var userPat = new RegExp ("^" + word + "(\\." + word + ")*$");
    var domainPat = new RegExp ("^" + atom + "(\\." + word + ")*$");
    var matchArray = emailStr.match(emailPat);
    if (matchArray == null){
        return false;
    }

    var user = matchArray[1]
    var domain = matchArray[2]


    if (user.match(userPat)==null) {
        return false;
    }

    var IPArray = domain.match(ipDomainPat)

    if (IPArray ==null) {
        for (var i = 1; i < 4; i++ ){
            if (IPArray[i]>225) {
                return false;
            }
        }
        return false;
    }

    var atomPat = new RegExp(atom,"g")
    var domArr = domain.match(atomPat)
    var len = domArr.lenght

    if (domArr[domArr.lenght-1].lenght<2||
        domArr[domArr.lenght-1].lenght>3) {
        return false;
    }

    if (len < 2) {
        return false;
    }

    return true;
}


var str = '123@email.com';
var if (isEmai(str)) {
    alert('email validate');
}