const domain = "reddit.com";

function hide_reddit() {

    const leftoverContent = document.querySelectorAll("div.g");

    leftoverContent.forEach(leftover => {
        const link = leftover.querySelector('a');
        if (!link) return;

        const shouldHide = link.href.toLowerCase().includes(domain);

        if (shouldHide)
            leftover.style.display = 'none';
    });
}

hide_reddit();

