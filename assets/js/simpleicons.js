/*
    An auto-running script to convert all <si-icon slug="..." /> elements into images to be converted into svg elements
    by SVGInject.
*/

(function ($) {
    const baseSrc = "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons";

    $("si-icon").each(function () {
        let slug = $(this).attr("slug");
        let attrs = $(this).prop("attributes");
        let attrsString = "";
        $.each(attrs, function() {
            attrsString += `${this.name}="${this.value}" `;
        })
        let replacement = `<img src="${baseSrc}/${slug}.svg" onload="SVGInject(this, {copyAttributes: true})" ${attrsString}/>`;
        $(this).replaceWith(replacement);
    });
})(jQuery);
