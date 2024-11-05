function filterProducts() {
    const category = document.getElementById("filterCategory").value;
    document.querySelectorAll(".product").forEach(product => {
        product.style.display = category === "all" || product.dataset.category === category ? "block" : "none";
    });
}

function sortProducts() {
    const criteria = document.getElementById("sortCriteria").value;
    const products = Array.from(document.querySelectorAll(".product"));

    products.sort((a, b) => {
        return criteria === "price"
            ? a.dataset.price - b.dataset.price
            : b.dataset.rating - a.dataset.rating;
    });

    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    products.forEach(product => productList.appendChild(product));
}
