$(document).ready(function() {
    //Preloader
    preloaderFadeOutTime = 750;
    function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        preloader.delay(2000).fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});