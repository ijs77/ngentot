!function(t) {
    "use strict";
    t(".btn-search-drop").on("click", function() {
        t("#search-form .search-group").toggleClass("search-group-active"), 
        t(this).toggleClass("btn-search-close")
    }), 
    jQuery("img.svg").each(function() {
        var t = jQuery(this),
            r = t.attr("id"),
            a = t.attr("class"),
            e = t.attr("src");
        jQuery.get(e, function(e) {
            var s = jQuery(e).find("svg");
            void 0 !== r && (s = s.attr("id", r)),
            void 0 !== a && (s = s.attr("class", a + " replaced-svg")),
            !(s = s.removeAttr("xmlns:a")).attr("viewBox") && s.attr("height") && s.attr("width") && s.attr("viewBox", "0 0 " + s.attr("height") + " " + s.attr("width")),
            t.replaceWith(s)
        }, "xml")
    });
}(jQuery);
