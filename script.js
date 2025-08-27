//Bootstrap carousel with play button
window.addEventListener("load",e=>{
    $(function() {
        /* Initialize Carousel */
        var paused = false;
        $('#myDesktopCarousel').carousel('dispose')
        $('#myDesktopCarousel').carousel({
            interval: 5000,
            pause: false
        });

        /* Play trigger */
        $('#btnPause').click(function() {
            var state = (paused) ? 'cycle' : 'pause';
            paused = (paused) ? false : true;
            $('#myDesktopCarousel').carousel(state);
            $(this).toggleClass('play pause');
        });
    });
})