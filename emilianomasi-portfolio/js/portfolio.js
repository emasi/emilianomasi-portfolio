//Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-34599580-3', 'emilianomasi.com');
ga('send', 'pageview');

//Simple lazy loading
$("img[data-original]").css('visibility', 'hidden');
$("img[data-original]").lazyload({
    effect : "fadeIn",
    threshold : -30
});