// ページイベント
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

    $('html,body').animate({
        scrollTop: 0
    }, '1');

    // スライドでheader変化
    $(function (){
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