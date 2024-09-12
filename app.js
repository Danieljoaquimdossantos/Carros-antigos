function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor do campo de pesquisa e remove espaços em branco no início e no fim
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();
  
    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. você não buscou por um veículo.</p>";
      return; // Sai da função para evitar a execução do restante do código
    }
  
    // Cria uma expressão regular insensível a case para a pesquisa
    const regex = new RegExp(campoPesquisa, 'i');
  
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
  
    // Itera sobre cada item da lista de dados
    for (let dado of dados) {
      // Verifica se o título ou descrição contém o termo de pesquisa
      if (regex.test(dado.titulo) || regex.test(dado.descrição)) {
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="https://www.youtube.com/watch?v=LOMTqU8DxUU" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descrição-meta">${dado.descrição}</p>
            <a href="${dado.link}" target="_blank">Acesse para maiores informações</a>
          </div>
        `;
      }
    }
  
    // Verifica se não há resultados e exibe a mensagem apropriada
    if (!resultados) {
      resultados = "<p>Nada foi encontrado.</p>";
    }
  
    // Atualiza o conteúdo da seção HTML com os resultados construídos
    section.innerHTML = resultados;
  }