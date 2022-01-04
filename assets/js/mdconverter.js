/*
    An auto-running script to replace <md src="..." /> elements with html.
*/

(function($) {
    const root = "";

    var showdown = window.showdown,
        mdConverter = new showdown.Converter();

    $("md").each(function () {
        let src = $(this).attr("src");
        let attrs = $(this).prop("attributes");
        let attrsString = "";
        $.each(attrs, function() {
            attrsString += `${this.name}="${this.value}" `;
        });
        let replacement = `<div ${attrsString}>`;
        $.get(root + src, data => replacement += mdConverter.makeHtml(data), "text");
        replacement += "</div>"

        $(this).replaceWith(replacement);
    })
})(jQuery);
