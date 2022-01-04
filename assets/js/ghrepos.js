/*
    An auto-running script to populate the projects section according to ghrepos.json.

    ghrepos.json is structured like:
    {
        "repos": [
            {
                ...Repository data...
            },
            {
                ...Respository data...
            },
            ...
        ]
    }

    Repository items are populated as follows:
        The title shown above the repository card is set by "title"
        The repository title set by "repo" is used to acquire the repository card and to provide a link to the repository.
        The description shown under the card is converted from markdown into HTML. The markdown is saved in a file
            with the title set by "md" located in assets/markdown. Any path will be relative to assets/markdown.
            The .md extension will be added and shouldn't be included.
        There is an option to include an additional, centered link at the bottom of the item by including the following:
            "altLink": {
                "title": "The text the hyperlink should display",
                "link": "The address it should point to"
            }

    Repository items are added in the order they appear in the json file.
*/

(function ($) {

    const baseHref = "https://github.com";
    const baseSvgRef = "https://gh-card.dev/repos";
    const baseMDRef = "assets/markdown";

    var $window = $(window),
        $repos = $('#repos');

    $.getJSON("assets/json/ghrepos.json", function (result) {
    var showdown = window.showdown,
        mdConverter = new showdown.Converter();
        let repoData = result;

        for (const repo of repoData.repos) {
            let repoSection = document.createElement("section");

            let repoTitle = document.createElement("h3");
            repoTitle.innerHTML = repo.title;
            repoSection.appendChild(repoTitle);

            let repoCard = document.createElement("a");
            repoCard.href = `${baseHref}/${repo.repo}`;
            repoCard.target = "_blank";
            repoCard.rel = "noopener noreferrer";
            repoCard.innerHTML = `<img src="${baseSvgRef}/${repo.repo}.svg" width="100%">`;
            repoSection.appendChild(repoCard);

            let repoDesc = document.createElement("p");
            repoDesc.style.textAlign = "left";
            // repoDesc.innerHTML = repo.blurb.join("\n");
            $.get(`${baseMDRef}/${repo.md}.md`, data => repoDesc.innerHTML = mdConverter.makeHtml(data), "text");
            repoSection.appendChild(repoDesc);

            if ("altLink" in repo) {
                let repoAltLink = document.createElement("a");
                repoAltLink.href = repo.altLink.link;
                repoAltLink.target = "_blank";
                repoAltLink.rel = "noopener noreferrer";
                repoAltLink.innerHTML = repo.altLink.title;
                repoSection.appendChild(repoAltLink);
            }

            document.getElementById("repos").appendChild(repoSection);
        }
    });
})(jQuery);