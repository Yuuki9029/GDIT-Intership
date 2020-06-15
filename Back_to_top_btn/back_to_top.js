var btn = document.querySelector('#back_top_top_btn');
    var height = window.pageYOffset;
    // var length = btn.getTotalLength();
    var scrollpos = 0;

    // btn.style.strokeDasharray = length;
    // btn.style.strokeDashoffset = length;
var time;
// window.onscroll(() => {
//     if (time) {
//         window.clearTimeout(time);
//     }
//     time = window.setTimeout(() => {},100);
// });
    
    btn.classList.add('hidden_1');
    window.onscroll = () => {
        var windowY = window.scrollY;
        
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 
            // && windowY < scrollpos
            
            )
            
            {
            // btn.style.display = 'block';
            // var scrollHeight = window.height;
            // var scrollPossion = window.pageYOffset + window.scrollTop;
            // var footHeight = window.innerHeight;
            btn.classList.add('block');
            btn.classList.remove('hidden');
            btn.classList.remove('hidden_1');
            // btn.classList.remove('hidden');
            if (windowY <= scrollpos) {
                // btn.classList.remove('block');
                btn.classList.remove('hidden_2');
            //             if(time){
            //     window.clearTimeout(time);
            // }
            // time = window.setTimeout(() =>{},100);
            }
            if (windowY < scrollpos) {
                btn.classList.add('block_2');
                btn.classList.remove('hidden_2');
                btn.classList.remove('hidden_1');

            }
            else if (windowY > scrollpos){
                btn.classList.add('hidden_2');
                btn.classList.remove('block_2');
                btn.classList.remove('hidden_1');

                if (time) {
                window.clearTimeout(time);
            }
            time = window.setTimeout(() => {
                btn.classList.remove('hidden_2');
                btn.classList.add('block');
                btn.classList.remove('block_2');
                btn.classList.remove('hidden_1');

            },500)
            }
            
            
            
            // window.removeEventListener('scroll',()=>{});

            // btn.classList.add('fix');
            // if (window.scrollY < footHeight - 80) {
            //     btn.classList.add('fix');
            //     btn.classList.remove('absolute');

            // }
            // else{
            //     btn.classList.add('absolute');
            //     btn.classList.remove('fix');
            // }
            // if (scrollHeight - scrollPossion <= footHeight) {
                
            //     btn.classList.remove('absolute');
            // }
            // else{
            //     btn.classList.remove('fix');
            //     btn.classList.add('absolute');
            // }
        }
        else{
            // btn.style.display = 'none';
            btn.classList.add('hidden');
            btn.classList.remove('block');
            btn.classList.remove('block_2');
            btn.classList.remove('hidden_2');
        }
        window.removeEventListener('scroll',()=>{});
        scrollpos = windowY;
    };
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