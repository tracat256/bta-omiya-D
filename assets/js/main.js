$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン
	setTimeout(function(){
		$('.start').fadeOut(500);
	},3200); //3.2秒後にロゴ含め真っ白背景をフェードアウト
});

$(function(){
    var effect_pos = 150; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

    // フェードする前のcssを定義
    $('.scroll-fade-1').css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.scroll-fade-1').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });
});

$(function(){
    var effect_pos = -160; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

    // フェードする前のcssを定義
    $('.scroll-fade-2').css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.scroll-fade-2').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });
});

$(function(){
    var effect_pos = -400; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

    // フェードする前のcssを定義
    $('.scroll-fade-3').css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.scroll-fade-3').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });
});

//　再読み込みする時に上に来るようにする
$(function() {
	$('html,body').animate({ scrollTop: 0 }, '1');
});

$(document).ready(function(){
	$('html,body').animate({ scrollTop: 0 }, '1');
});
