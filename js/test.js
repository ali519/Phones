$(document).ready(function() {
    $("#con").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#cont").offset().top
        }, 2000);
    })
});