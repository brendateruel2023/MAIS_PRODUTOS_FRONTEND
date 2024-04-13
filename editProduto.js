function validateAction(action) {
  if (action === 'salvar') {
      const productImage = document.getElementById('product-image').value;
      const productDescription = document.getElementById('product-description').value;
      const productPrice = document.getElementById('product-price').value;

      if (productImage === '' || productDescription === '' || productPrice === '') {
          alert('Preencha todos os campos antes de salvar o produto.');
          return;
      }
  }

  if (confirm(`Você tem certeza que deseja ${action} este produto?`)) {
      if (action === 'salvar') {
          editProduct();
      } else if (action === 'deletar') {
          deleteProduct();
      }
  }
}

function editProduct() {
  alert('Produto salvo!');
  window.location.href = 'produtos.html';
}

function deleteProduct() {
  alert('Produto deletado!');
  window.location.href = 'produtos.html';
}

function cancelAction() {
  alert('Ação cancelada!');
}
