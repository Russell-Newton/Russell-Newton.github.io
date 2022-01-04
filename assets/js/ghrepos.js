(function ($) {

    const baseHref = "https://github.com";
    const baseSvgRef = "https://gh-card.dev/repos";
    const baseMDRef = "https://raw.githubusercontent.com/Russell-Newton/Russell-Newton.github.io/main/assets/markdown";

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