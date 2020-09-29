$(".toggle").click(function (e) {
    e.preventDefault();
    $('.toggle').toggleClass('active');
    $('nav').toggleClass('active');
});