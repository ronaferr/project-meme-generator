function inputText() {
    let cxTexto = document.querySelector('#text-input');
    let mostraTexto = document.querySelector('#meme-text');
    cxTexto.addEventListener('keyup', function() {
        mostraTexto.innerHTML = cxTexto.value;
    })
}
inputText();