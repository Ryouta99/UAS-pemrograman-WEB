// Sample cart items
const cartItems = [
  { name: 'Product 1', price: 19.99, quantity: 1 },
  { name: 'Product 2', price: 24.99, quantity: 2 },
];

// Function to render cart items
function renderCartItems() {
  const cartItemsDiv = document.querySelector('.cart-items');
  cartItemsDiv.innerHTML = '';

  let total = 0;

  cartItems.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    cartItem.innerHTML = `
            <img src="product-placeholder.jpg" alt="${item.name}">
            <div>
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Total: $${itemTotal.toFixed(2)}</p>
            </div>
        `;

    cartItemsDiv.appendChild(cartItem);
  });

  // Update total
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Render cart items when page loads
document.addEventListener('DOMContentLoaded', renderCartItems);
