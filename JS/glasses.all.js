//  -- -  - - 眼鏡網站 - - - - - 


// navbar 漢堡排
$('.mobile-menu-icon').click(function(){
    $(".nav-list").slideToggle();
})


// 產品頁的系列鏡框選項切換
// HW4-Glasses-Product.html
$(".product-type").click(function(){
    $(this).addClass("product-type-active").siblings().removeClass("product-type-active");
})


// FAQ 常見問題的答案 slider
// HW4-Glasses-FAQ.html
$(".qa-item").click(function(){
    $(this).find("p").slideToggle();
    $(this).siblings().find("p").slideUp();
})