function candle(){
    var candleNumber = parseInt(prompt('Inpput candle Number'));
    var makenew = parseInt(prompt('Input Make New'));


    if (candleNumber == 0) {
        alert('candle must >= 1');
    }
    else if (makenew < 2 || makenew > 5) {
        alert('make new must >= 2 and <= 5');
    }
    else if (candleNumber <= 15 && makenew >= 2 && makenew <= 5) {
        var burn = 0;
        var re_burn = 0;
        
        while ( candleNumber > 0 ){
            burn += candleNumber;
            re_burn += candleNumber;
            candleNumber = Math.floor(re_burn/makenew);
            re_burn %= makenew;
        }
    }
    else {
        alert('max candle Number Is 15');
    }
    document.write('Candle is' + burn);
}
candle ();