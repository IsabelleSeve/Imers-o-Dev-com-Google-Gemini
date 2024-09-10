
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    // section.innerHTML = "";
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(!campoPesquisa){
        section.innerHTML = "<p>Nenhum valor introduzido</p>";
        return
    }
    let resultados = "";
    campoPesquisa = campoPesquisa.toLowerCase()

    for (let dado of dados) {
        jogo = dado.jogo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        genero = dado.genero.toLowerCase();
        if(jogo.includes(campoPesquisa) || descricao.includes(campoPesquisa))
        {
            resultados += 
            `
                <div class="item-resultado">
                <h2><a href="#">${dado.jogo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">${dado.genero}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
                </div>

            `;
            
        }        
    }

    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados;

}
