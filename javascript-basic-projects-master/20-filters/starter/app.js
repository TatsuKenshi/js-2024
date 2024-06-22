let filteredProducts = [...products];

// display products
const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = "<h5>No items match your search.</h5>";
    return;
  }
  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      return ` <article class="product" data-id="${id}">
              <img
              src="${image}"
                alt="${title}"
                class="product-img img"
                />
              <footer>
                <h5 class="product-name">${title}</h5>
                <span class="product-price">$${price}</span>
                </footer>
            </article>
          
          `;
    })
    .join("");
};

displayProducts();

// text filter
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

// button filter
const companiesDOM = document.querySelector(".companies");

// display the buttons
const displayButtons = () => {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];

  companiesDOM.innerHTML = buttons
    .map((company) => {
      return ` <button class="company-btn" data-id="${company}">${company}</button>`;
    })
    .join("");
};

displayButtons();

// attach event listeners to the buttons
companiesDOM.addEventListener("click", (e) => {
  const element = e.target;

  if (element.classList.contains("company-btn")) {
    if (element.dataset.id === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter(
        (product) => product.company === element.dataset.id
      );
    }
    searchInput.value = "";
    displayProducts();
  }
});
