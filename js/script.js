// ページイベント

$(function(){
    setTimeout(function(){
        $(".start p").fadeIn(1600);
    }, 500); //0.5秒後にロゴをフェードイン
    setTimeout(function(){
        $(".start").fadeOut(500);
    }, 2500); //2.5秒後にフェードアウト
});


$(function () {
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^="#"]').click(function () {
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href = $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });

    // スライドでheader変化
    $(function () {
        var $win = $(window),
            $fv = $("#fv"),
            $header = $("header"),
            $fvHeight = $fv.outerHeight(),
            fixedClass = "fixed";

        $win.on("load scroll", function () {
            var value = $(this).scrollTop();
            if ($(this).scrollTop() > $fvHeight) {
                $header.addClass(fixedClass);

            } else {
                $header.removeClass(fixedClass);
            }
        });
    });
});

    // $(function(){
    //     $(".sub-copy").each(function () {
    //         var scroll = $(window).height();
    //         var windowHeight = $(window).height();
    //         var target = $(this).offset().top;    
    //         if (scroll > target - windowHeight + 300) {
    //             $(".sub-copy").hide().fadeIn();
    //         }
    //     });
    // })

    $(function(){
        $(window).scroll(function (){
            $('.fadein').each(function(){
                var targetElement = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > targetElement - windowHeight + 150){
                    $(this).css('opacity','1');
                    $(this).css('transform','translateY(0)');
                }
            });
        });
    });      
        

// ハンバーガーメニュー
$(function () {
    $("button").click(function () {
        $(this).toggleClass("active");
        $(".header-nav").slideToggle(200);
    });

    $(".fadeout").click(function () {
        if (window.innerWidth <= 425) {
            // $("button").removeClass("active");
            // $(".header-nav").fadeOut(500);
            $('button').trigger('click');
        }
    });
})