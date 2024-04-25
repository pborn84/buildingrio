// Seleciona o elemento de botão de alternância
const languageToggle = document.getElementById('languageToggle');

// Adiciona um ouvinte de clique ao botão
languageToggle.addEventListener('click', function() {
  // Verifica se o botão está marcado (checked)
  if (languageToggle.checked) {
    // Se está marcado, definimos o idioma como inglês
    alterarIdioma('en');
  } else {
    // Se não está marcado, definimos o idioma como português
    alterarIdioma('pt');
  }
});

// Função para alternar idiomas
function alterarIdioma(idioma) {
  // Código para alterar os textos da sua aplicação com base no idioma selecionado
  // Exemplo: você pode ter uma lógica aqui para alterar os textos da interface
  // Pode envolver a troca de classes, atualização de conteúdo, etc.
    const traducoes={
        'pt': {
            'txt02-hbox': 'Seja bem-vindo ao informativo Cidade Arte Botânica fase 2 - online! Estamos aqui para lhe dá as informações quentinhas sobre esse empreendimento e como você pode adquirir lojas nesse paraíso arquitetônico!',
            'btn': 'Entrar em contato!',
            'btn01': 'Entrar em contato!',
            'btn02': 'Entrar em contato!',
            'txtQuem' : 'O Paraíso Arquitetônico!',
            'txtDesi' : 'Arte | Natureza | Oportunidade | Valorização',
            'txtSeja' : 'Imagine-se fazendo parte deste vibrante cenário, onde a arte e a natureza se fundem para criar um ambiente único e inspirador. Seja você um investidor experiente ou esteja buscando sua primeira incursão no mercado imobiliário, nossas lojas oferecem uma oportunidade imperdível de valorização e retorno garantido.',
            'txtProf' : 'Atenção investidores!',
            'txtSati' : 'Se você busca uma oportunidade única, não deixe escapar a chance de adquirir uma das nossas exclusivas lojas no Cidade Arte - Arte Botânica, um empreendimento premium na Barra Olímpica, à beira do Arco Metropolitano. Apenas 4 unidades disponíveis!'

        },
        'en':{
			'txt02-hbox': 'Welcome to the informative City Botanical Art phase 2 - online! We are here to give you the warm information about this venture and how you can acquire shops in this architectural paradise!',
            'btn': 'Get in touch!',
            'btn01': 'Get in touch!',
            'btn02': 'Get in touch!',
            'txtQuem' : 'The Architectural Paradise!',
            'txtDesi' : 'Art | Nature | Opportunity | Appreciation',
            'txtSeja' : 'Imagine being part of this vibrant setting, where art and nature merge to create a unique and inspiring environment. Whether you are an experienced investor or you are seeking your first foray into the real estate market, our stores offer an unmissable opportunity for value and guaranteed return.',
            'txtProf' : 'Attention investors!',
            'txtSati' : 'If you are looking for a unique opportunity, do not miss the chance to acquire one of our exclusive stores in Cidade Arte - Arte Botânica, a premium development in Barra Olímpica, on the edge of the Arco Metropolitano. Only 4 units available!'

        }

    }

  console.log(`Idioma alterado para: ${idioma}`);
    // Adicione aqui a lógica para atualizar os textos na sua aplicação
        // Obtém todas as chaves de tradução para o idioma selecionado
    const chavesTraducao = Object.keys(traducoes[idioma]);

    // Itera sobre as chaves e atualiza o texto de cada elemento
    chavesTraducao.forEach(chave => {
        const elemento = document.getElementById(chave);
        if (elemento) {
            elemento.textContent = traducoes[idioma][chave];
        }
    });





}
