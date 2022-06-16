$(".toggle").click(function (e) {
    e.preventDefault();
    $('.toggle').toggleClass('active');
    $('nav').toggleClass('active');
});
$(".home").click(function (e) {
    e.preventDefault();
    $('nav').removeClass('active');
    $('.toggle').removeClass('active');
    var valor= $(this).html();
    $(location).attr('href',"#home");
});
$(".about-me").click(function (e) {
    e.preventDefault();
    $('nav').removeClass('active');
    $('.toggle').removeClass('active');
    var valor= $(this).html();
    $(location).attr('href',"#about-me");
});
$(".footer").click(function (e) {
    e.preventDefault();
    $('nav').removeClass('active');
    $('.toggle').removeClass('active');
    var valor= $(this).html();
    $(location).attr('href',"#footer");
});
