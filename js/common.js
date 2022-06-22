$(document).ready(function () {

    var $icon = [
        ["./img/sns/iconfinder_facebook_square_gray_107118.png"],
        ["./img/sns/iconfinder_linkedin_square_gray_107090.png"],
        ["./img/sns/iconfinder_twitter_square_gray_107067.png"],
        ["./img/sns/iconfinder_dribbble_square_gray_107127.png"],
    ];

    var $cont =`
    <div class="icon_bx">
    <img src="../img/sns/iconfinder_facebook_square_gray_107118.png" alt="페이스북">
    </div>`

    for(i=0; i<$icon.length; i++){
        $(".icon_part").append($cont);
    }

    $(".icon_part .icon_bx").each(function(idx){
        $(this).find("img").attr(`src`,`${$icon[idx][0]}`);
        console.log(idx);
    });

    $(".icon_bx").click(function(){
        location.href = 'https://ko-kr.facebook.com';
    });
    $(".icon_bx").eq(1).click(function(){
        location.href = 'https://kr.linkedin.com';
    });
    $(".icon_bx").eq(2).click(function(){
        location.href = 'https://twitter.com/?lang=ko';
    });
    $(".icon_bx").eq(3).click(function(){
        location.href = 'https://dribbble.com';
    });

});