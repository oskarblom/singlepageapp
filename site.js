(function() {
    var $content = $("#content"),
        currentNavId = $content.find(".active").attr("id");
    $("nav a").on("click", function(event) {
        event.preventDefault();
        var navId = $(this).data("nav");
        if (currentNavId === navId) {
            return;
        }
        $content.find("section").removeClass("active");
        $content.find("#" + navId).addClass("active");
        currentNavId = navId;
    });
})();
