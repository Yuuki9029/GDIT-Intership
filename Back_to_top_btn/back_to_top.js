var btn = document.querySelector('.fa-arrow-up');
    var height = self.pageYOffset;

    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            btn.style.display = 'block';
        }
        else{
            btn.style.display = 'none';
        }
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