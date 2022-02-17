

function inputText() {
    let cxTexto = document.querySelector('#text-input');
    let mostraTexto = document.querySelector('#meme-text');
    cxTexto.addEventListener('keyup', function() {
        mostraTexto.innerHTML = cxTexto.value;
    })
}
inputText();

    // inserir imagem no contanier
    //onde?
    let botaoImage = document.querySelector('#meme-insert');
    let upImage = '';
    botaoImage.addEventListener('change', function() {
        console.log(botaoImage.value);
        let reader = new FileReader();
        reader.addEventListener('load', () => {
            upImage = reader.result;
            document.querySelector('#meme-image').style.backgroundImage = `url(${upImage})`;
            console.log(upImage);
        })
        reader.readAsDataURL(this.files[0]); //usado esse video como ideia https://www.youtube.com/watch?v=lzK8vM_wdoY
    })