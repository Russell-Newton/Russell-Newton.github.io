(function ($) {

    const baseHref = "https://https://github.com/Russell-Newton";
    const baseSvgRef = "https://gh-card.dev/repos/Russell-Newton"

    var $window = $(window),
        $repos = $('#repos');

    $.getJSON("assets/json/ghrepos.json", function (result) {
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
            repoCard.innerHTML = `<img src="${baseSvgRef}/${repo.title}.svg" width="100%">`;
            repoSection.appendChild(repoCard);

            let repoDesc = document.createElement("p");
            repoDesc.innerHTML = repo.blurb.join("\n");
            repoSection.appendChild(repoDesc);

            document.getElementById("repos").appendChild(repoSection);
        }
    });
})(jQuery);