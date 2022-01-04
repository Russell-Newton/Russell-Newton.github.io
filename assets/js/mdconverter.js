/*
    An auto-running script to replace <md src="..." /> elements with html.
*/

(function($) {
    const root = "";

    var showdown = window.showdown,
        mdConverter = new showdown.Converter();

    $("md").each(function () {
        let src = $(this).attr("src");
        $(this).removeAttr("src");
        let attrs = $(this).prop("attributes");
        let attrsString = "";
        $.each(attrs, function() {
            attrsString += `${this.name}="${this.value}" `;
        });

        let toReplace = $(this);
        let replacement = `<div ${attrsString}>`;
        $.get(root + src, function(data) {
            let converted = mdConverter.makeHtml(data);
            replacement += converted;
            replacement += "</div>"
            toReplace.replaceWith(replacement);
        }, "text");
    })
})(jQuery);
