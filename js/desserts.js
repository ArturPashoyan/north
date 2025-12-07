
document.addEventListener("DOMContentLoaded", () => {
  fetch("json/desserts.json")
    .then(response => response.json())
    .then(data => {
      renderProducts("desserts-grid", data["Քաղցրավենիք"]); 
    })
    .catch(error => console.error("Error loading JSON:", error));
});


function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; 

  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>${product.price} AMD</strong></p>
    `;

    container.appendChild(productCard);
  });
}
