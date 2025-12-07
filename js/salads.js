
document.addEventListener("DOMContentLoaded", () => {
  fetch("./json/salads.json") 
    .then(response => response.json())
    .then(data => {
      renderProducts("salads-grid", data["Աղցաններ"]);
    })
    .catch(error => console.error("Error loading JSON:", error));
});

function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; 

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>${product.price} AMD</strong></p>
    `;

    container.appendChild(card);
  });
}
