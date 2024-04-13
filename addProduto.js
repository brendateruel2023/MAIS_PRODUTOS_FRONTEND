function validateAction(action) {
    const productImage = document.getElementById('product-image').value;
    const productDescription = document.getElementById('product-description').value;
    const productPrice = document.getElementById('product-price').value;

    if (productImage === '' || productDescription === '' || productPrice === '') {
      alert('Preencha todos os campos antes de adicionar o produto.');
      return;
    }

    if (confirm(`Você tem certeza que deseja ${action} este produto?`)) {
      if (action === 'adicionar') {
        addProduct();
      } else if (action === 'editar') {
        editProduct();
      } else if (action === 'deletar') {
        deleteProduct();
      }
    }
  }

  function addProduct() {
    alert('Produto adicionado!');
    window.location.href = 'produtos.html';
  }

  function cancelAction() {
    alert('Ação cancelada!');
  }