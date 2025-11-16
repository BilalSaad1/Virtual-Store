var cart = [];
function toggleCartPopup() {
    var popup = document.getElementById("cart-popup");
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
}

function addToCart(itemId, itemName, itemPrice, itemImage) {
    var existingItem = cart.find(item => item.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: itemId,
            name: itemName,
            price: itemPrice,
            image: itemImage,
            quantity: 1
        });
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    var cartItemsContainer = document.getElementById("cart-items");
    var totalContainer = document.getElementById("cart-total");

    cartItemsContainer.innerHTML = "";
    totalContainer.textContent = "";

    var total = 0; 

    cart.forEach(item => {
        var newItem = document.createElement("div");
        newItem.classList.add("cart-item");

        var itemImage = document.createElement("img");
        itemImage.src = item.image;
        itemImage.alt = item.name;
        newItem.appendChild(itemImage);

        var itemDetails = document.createElement("div");
        itemDetails.innerHTML = `<p>${item.name} x${item.quantity}</p><p>$${(item.price * item.quantity).toFixed(2)}</p>`;
        newItem.appendChild(itemDetails);

        cartItemsContainer.appendChild(newItem);

        total += item.price * item.quantity;
    });

    totalContainer.textContent = `Total: $${total.toFixed(2)}`;
}


function checkout() {
    fetch('http://localhost:3002/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart }),
    })
    .then(response => response.json())  
    .then(({ url }) => {
        window.location = url;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}