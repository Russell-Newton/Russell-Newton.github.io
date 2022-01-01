(function ($) {
    const baseSrc = "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons";

    $("si-icon").each(function () {
        let slug = $(this).attr("slug");
        console.log(slug);
        let replacement = `<img src="${baseSrc}/${slug}.svg" onload="SVGInject(this)" />`;
        $(this).replaceWith(replacement);
    });
})(jQuery);