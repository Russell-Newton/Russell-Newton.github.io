(function ($) {
    const baseSrc = "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons";

    $("si-icon").each(function () {
        let slug = $(this).attr("slug");
        let attrs = $(this).prop("attributes");
        let attrsString = "";
        $.each(attrs, function() {
            attrsString += `${this.name}="${this.value}" `;
        })
        // [...$(this).attributes].forEach(attr => {
        //     attrsString += `${attr.nodeName}="${attr.nodeValue}" `
        // })
        // for (let attr in attrs) {
        //     attrsString += `${this.name}="${this.value}" `;
        // }
        let replacement = `<img src="${baseSrc}/${slug}.svg" onload="SVGInject(this, {copyAttributes: true})" ${attrsString}/>`;
        $(this).replaceWith(replacement);
    });
})(jQuery);