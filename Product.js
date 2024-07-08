document.addEventListener('DOMContentLoaded', function () {
  // Temukan semua tombol "Add to Cart"
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

  // Tambahkan event listener untuk setiap tombol "Add to Cart"
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', addToCartClicked);
  });

  // Fungsi untuk menangani klik tombol "Add to Cart"
  function addToCartClicked(event) {
    // Dapatkan ID produk dari atribut data pada tombol
    const productId = event.target.dataset.productId;

    // Kirim ID produk ke fungsi tambah ke keranjang
    addToCart(productId);
  }

  // Fungsi untuk menambahkan produk ke keranjang
  function addToCart(productId) {
    // Simpan informasi produk ke dalam objek (di sini, kita hanya menggunakan ID produk sebagai contoh)
    const product = {
      id: productId,
      name: 'Product Name',
      price: XX.XX,
    };

    // Simpan informasi produk ke dalam sessionStorage atau localStorage
    // Di sini, kita menggunakan sessionStorage sebagai contoh
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.push(product);
    sessionStorage.setItem('cart', JSON.stringify(cart));

    // Tampilkan pesan sukses atau lakukan tindakan lainnya (seperti memperbarui tampilan keranjang)
    alert('Product added to cart!');
  }
});
