document.addEventListener('DOMContentLoaded', function() {
    const botoesAdicionar = document.querySelectorAll('.adicionar-ao-carrinho');
    const listaCarrinho = document.querySelector('.lista-carrinho');
    const totalCarrinho = document.querySelector('.total');
    let carrinho = [];
  
    botoesAdicionar.forEach(botao => {
      botao.addEventListener('click', function() {
        const produto = this.parentNode;
        const nome = produto.dataset.nome;
        const preco = parseFloat(produto.dataset.preco);
  
        adicionarAoCarrinho(nome, preco);
        atualizarCarrinho();
      });
    });
  
    listaCarrinho.addEventListener('click', function(event) {
      if (event.target.classList.contains('remover-do-carrinho')) {
        const itemIndex = event.target.dataset.index;
        removerDoCarrinho(itemIndex);
        atualizarCarrinho();
      }
    });
  
    function adicionarAoCarrinho(nome, preco) {
      carrinho.push({ nome, preco });
    }
  
    function removerDoCarrinho(index) {
      carrinho.splice(index, 1);
    }
  
    function atualizarCarrinho() {
      listaCarrinho.innerHTML = '';
      let total = 0;
  
      carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - $${item.preco.toFixed(2)}`;
        
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.classList.add('remover-do-carrinho');
        botaoRemover.dataset.index = index;
        
        li.appendChild(botaoRemover);
        
        listaCarrinho.appendChild(li);
        total += item.preco;
      });
  
      totalCarrinho.textContent = `O valor total de sua compra foi: R$ ${total.toFixed(2)}`;
    }
  });
  