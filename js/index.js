$(document).ready(function(){
    $('.parallax').parallax({
      height: "20px"
    });

    $(".button-collapse").sideNav({
        menuWidth: 300,
        edge: 'left',
        closeOnClick: true,
        draggable: true
    });

    $("nav").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        });
    });
    document.querySelector("#who-am-i img").src = imagesObject.me;
    document.querySelector("#node-parallax").src = imagesObject.node_parallax;
    document.querySelector("#js-parallax").src = imagesObject.js_parallax;
});
