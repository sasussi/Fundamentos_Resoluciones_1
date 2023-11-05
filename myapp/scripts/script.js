document.addEventListener("DOMContentLoaded", function() {
    const addProductForm = document.getElementById("add-product-form");
    const editProductForm = document.getElementById("edit-product-form");

    if (addProductForm) {
        addProductForm.addEventListener("submit", function(event) {
            const name = addProductForm.elements["name"].value;
            const price = addProductForm.elements["price"].value;
            const stock = addProductForm.elements["stock"].value;

            if (!name || !price || !stock) {
                event.preventDefault();
                alert("Por favor, complete todos los campos.");
            }
        });
    }

    if (editProductForm) {
        editProductForm.addEventListener("submit", function(event) {
            const name = editProductForm.elements["name"].value;
            const price = editProductForm.elements["price"].value;
            const stock = editProductForm.elements["stock"].value;

            if (!name || !price || !stock) {
                event.preventDefault();
                alert("Por favor, complete todos los campos.");
            }
        });
    }
});
