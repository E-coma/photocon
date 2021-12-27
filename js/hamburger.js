$(function() {
    $("#drawer-toggle").on("click", function() {
        $(this).toggleClass("open");
        $("#header-nav-sp").fadeToggle(500);
    });

    $("nav li").on("click", function() {
        $("#drawer-toggle").toggleClass("open");
        $("#header-nav-sp").hide();

    });
});