const domains = [];

function hide() {
    const results = document.querySelectorAll("div.g");
    results.forEach(result => {
        const link = result.querySelector("a");

        if (!link) return; // se não houver nenhum link na página, encerrar

        for (let i = 0; i < domains.length; i++) {
            const shouldHide = link.href.toLowerCase().includes(domains[i]);
            if (shouldHide)
                result.style.display = 'none';
        }
    });
}

$(function () { // obtém as entradas do usuário e as envia para o array (jQuery)
    $('#site').keyup(function () {
        domains.push($('#site').val());
        hide();
    });
});