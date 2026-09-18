let cart = [];
let total = 0;

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total = total + price;

    document.getElementById("cartCount").innerText = cart.length;

    displayCart();
}

function displayCart() {

    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach(function(item, index) {

        cartItems.innerHTML += `
            <div class="cart-item">
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById("total").innerText = total;
}

function removeItem(index) {

    total = total - cart[index].price;

    cart.splice(index, 1);

    document.getElementById("cartCount").innerText = cart.length;

    displayCart();

    document.getElementById("total").innerText = total;
}

function placeOrder() {

    if (cart.length === 0) {
        alert("Please add food to cart!");
    } else {
        alert("🎉 Order placed successfully!");
        
        cart = [];
        total = 0;

        document.getElementById("cartCount").innerText = 0;
        displayCart();
        document.getElementById("total").innerText = 0;
    }
}
