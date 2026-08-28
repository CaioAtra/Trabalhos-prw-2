const LOGOS_MARCAS = {
  'HP': 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg',
  'Dell': 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg',
  'Positivo': 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Positivo_Tecnologia_logo.svg',
  'Asus': 'https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg',
  'Xing Ling genérico': 'https://cdn-icons-png.flaticon.com/512/1216/1216726.png'
};

const form = document.getElementById('formProduto');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const secao = document.getElementById('secao').value;
  const marca = document.getElementById('marca').value;
  const nome = document.getElementById('nome').value;
  const preco = parseFloat(document.getElementById('preco').value).toFixed(2);
  const condicao = document.querySelector('input[name="condicao"]:checked').value;

  // Criar o Card do Produto
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${LOGOS_MARCAS[marca]}" alt="${marca}" class="card-logo">
    <h4>${nome}</h4>
    <p class="preco">R$ ${preco}</p>
    <span class="tag ${condicao.toLowerCase()}">${condicao.toUpperCase()}</span>
  `;

  // Inserir na seção correspondente na parte inferior
  document.getElementById(secao).appendChild(card);

  // Limpar formulário
  form.reset();
});