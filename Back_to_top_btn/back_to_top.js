var btn = document.querySelector('#back_top_top_btn');
    var height = window.pageYOffset;
    // var length = btn.getTotalLength();
    var scrollpos = 0;

    // btn.style.strokeDasharray = length;
    // btn.style.strokeDashoffset = length;

    window.onscroll = () => {
        var windowY = window.scrollY;
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 
            // && windowY > scrollpos
            ) {
            // btn.style.display = 'block';
            var scrollHeight = document.pageYOffset;
            var scrollPossion = window.pageYOffset + window.scrollTop;
            var footHeight = window.innerHeight;

            btn.classList.add('block');
            btn.classList.remove('hidden');
            // btn.classList.add('fix');
            if (window.scrollBy(0,scrollHeight - 100)) {
                btn.classList.add('fix');
                btn.classList.remove('absolute');

            }
            else{
                btn.classList.add('absolute');
                btn.classList.remove('fix');
            }
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



    // if($('.pnavi').length){
	// 	var backTop = function (scroll) {

	// 		winH = $(window).height(),
	// 			posFooter = $('#tmp_footer').position().top + 40,
	// 			scrollTop = scroll + winH,
	// 			pTop = $('.pnavi');
		
	// 		if (scrollTop <= posFooter && scroll > 100) {
	// 			pTop.css({
	// 				'position': 'fixed',
	// 				'bottom': 10,
	// 				'right': posBTop,
	// 				'top': 'inherit'
	// 			})
	// 		} else {
	// 			pTop.removeAttr('style');
	// 		}
	// 	}
	// 	$(window).on('resize scroll', function () {
	// 		backTop($(this).scrollTop());
	// 	})
    // }
    

// $(window).on("scroll", function() {
//     if ($(this).scrollTop() > 100) {
//         $(".pagetop").stop().fadeIn("fast");
//     } else {
//         $(".pagetop").stop().fadeOut("fast");
//     }
//     scrollHeight = $(document).height();
//     scrollPosition = $(window).height() + $(window).scrollTop();
//     footHeight = $("#tmp_footer").innerHeight();
//     if (scrollHeight - scrollPosition + 72 <= footHeight) {
//         $(".pagetop").removeClass('fixTop');
//     } else {
//         $(".pagetop").addClass('fixTop');
//     }
//     });