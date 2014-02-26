$("img[data-original]").css('visibility', 'hidden');
$("img[data-original]").lazyload({
    effect : "fadeIn",
    threshold : -30
});