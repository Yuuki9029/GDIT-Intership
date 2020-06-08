var btn = document.querySelector('#back_top_top_btn');
    var height = window.pageYOffset;
    // var length = btn.getTotalLength();
    var scrollpos = 0;

    // btn.style.strokeDasharray = length;
    // btn.style.strokeDashoffset = length;

    window.onscroll = () => {
        var windowY = window.scrollY;
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 
            && windowY < scrollpos) {
            // btn.style.display = 'block';
            btn.classList.add('block');
            btn.classList.remove('hidden');
            // () => {
            //     var scrollpersent = (document.body.scrollTop + document.documentElement.scrollTop) /
            //     (document.documentElement.scrollHeight - document.documentElement.clientHeight);
                
            //     var move = length * scrollpersent;
            //     btn.style.strokeDashoffset = length - move;
            // }
        }
        else{
            // btn.style.display = 'none';
            btn.classList.add('hidden');
            btn.classList.remove('block');
            // () => {
            //     var scrollpersent = (document.body.scrollTop + document.documentElement.scrollTop) /
            //     (document.documentElement.scrollHeight - document.documentElement.clientHeight);
                
            //     var move = length * scrollpersent;
            //     btn.style.strokeDashoffset = length - move;
            // }
        }
        window.removeEventListener('scroll',()=>{});
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
