document.getElementById('notice').addEventListener('click', () => {
    document.getElementById('notice-contact').style.display ='block';
    document.getElementById('notice').style.background='#ffdd02';
});


$(document).mouseup(function (e) { 
    if ($(e.target).closest("#notice-contact").length 
                === 0) { 
        $("#notice-contact").hide();
        $('#notice').css('background', '#2f2f2f' );
    } 
});