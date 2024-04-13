const product = {
    title: "Notebook N.A.V.E",
    description: "Os notebooks NAVE Lunar, Estelar e SuperNova ainda vêm equipados com placas gráficas NVIDIA RTX, 4050 e 4060, com 6GB a 8GB de VRAM. As telas dos notebooks contam com resoluções que chegam a 4k e 165hz de atualização.",
    price: 4799.00,
    image: "images/notebook/note1.png" 
};
  
  const titleElement = document.getElementById("product-title");
  const descriptionElement = document.getElementById("product-description");
  const priceElement = document.getElementById("product-price");
  const addToCartButton = document.getElementById("btn-add-to-cart");
  const imageElement = document.getElementById("product-image");
  
  function updateProductDetails() {
    titleElement.textContent = product.title;
    descriptionElement.textContent = product.description;
    priceElement.textContent = `Preço: $${product.price.toFixed(2)}`;
    updateImage();
  }
  
  function updateImage() {
    imageElement.src = product.image;
  }
  
  addToCartButton.addEventListener("click", () => {
    alert(`Produto ${product.title} adicionado ao carrinho!`);
    window.location.href = 'produtos.html';
  });
  
  updateProductDetails();
  
    
    