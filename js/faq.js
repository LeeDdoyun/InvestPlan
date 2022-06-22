$(document).ready(function () {
    $("#faq .less, #faq .ask").hide();

    //more
    $("#faq .more").click(function(){
        $(this).closest(".faq").find(".ask").slideDown();
        $(this).hide();
        $(this).siblings(".less").show();
    });
    //less
    $("#faq .less").click(function(){
        $(this).closest(".faq").find(".ask").slideUp();
        $(this).hide();
        $(this).siblings(".more").show();
    });
});