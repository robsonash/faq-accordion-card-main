export default function initAccordion() {

    const item = document.querySelectorAll('h3');
    const paragrafo = document.querySelectorAll('p');
    const icone = document.querySelectorAll('svg');

    const arrayItem = Array.from(item);
    const arrayParagrafo = Array.from(paragrafo);
    const arrayIcone = Array.from(icone);

    arrayItem.forEach((itens) => {

        const img = itens.firstElementChild.firstElementChild;

        itens.addEventListener('click', () => {

            if (itens.nextElementSibling.classList.contains('ativo')) {

                limpa();

            } else {
                limpa();
                itens.style.fontWeight = "bold";
                itens.nextElementSibling.classList.add('ativo')
                rotacao(img)

            }
        });
    });

    function rotacao(img) {
        img.classList.add('rotate')
    }


    function limpa() {
        arrayParagrafo.forEach((p) => {
            p.classList.remove('ativo');
        });
        arrayItem.forEach((h3) => {
            h3.style.fontWeight = '100'
        });
        arrayIcone.forEach((icone) => {
            icone.classList.remove('rotate')
        });

    }

}