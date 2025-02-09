const domain = "reddit.com";

function hide_reddit() {

    const results = document.querySelectorAll("div.g");

    results.forEach(result => {
        const link = result.querySelector('a');
        if (!link) return;

        const shouldHide = link.href.toLowerCase().includes(domain);

        if (shouldHide)
            result.style.display = 'none';
    });
}

hide_reddit();

