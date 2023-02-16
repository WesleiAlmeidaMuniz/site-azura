const formulario = document.querySelector('.produtos');

function cadastrarProdutos(link, titulo, img, imgalt, descricao, preco){
    
    formulario.innerHTML += `
    <a href="${link}">
        <li>
            <div class="produto-lista">
                <h2 class="produto-titulo">${titulo}</h2>
                <img src="${img}" alt="${imgalt}">
                <p class="produto-descricao">${descricao}</p>
                <p class="produto-preco">${preco}</p>
            </div>
        </li>
    </a>`

}


console.log(formulario);