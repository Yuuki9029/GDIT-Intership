var btn = document.querySelector('#back_top_top_btn');
    var height = window.pageYOffset;

    var scrollpos = 0;
    window.onscroll = () => {
        var windowY = window.scrollY;
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 
            && windowY < scrollpos) {
            btn.style.display = 'block';
        }
        else{
            btn.style.display = 'none'
        }
        scrollpos = windowY;
    }
    btn.onclick = () => {
        var possion = height;
        var run = setInterval(() => {
            height = height - 0.1*possion;
            window.scroll(0, height);
            if (height <= 0){
                clearInterval(run);
            }
        },50);
    }

