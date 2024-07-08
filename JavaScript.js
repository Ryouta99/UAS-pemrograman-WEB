// Ini adalah contoh JavaScript untuk memuat produk dari server dan menampilkannya di halaman web
// Anda bisa menambahkan logika lainnya sesuai kebutuhan

document.addEventListener('DOMContentLoaded', function () {
  // Mendapatkan elemen #products
  const productsSection = document.getElementById('products');

  // Contoh data produk (bisa diganti dengan data dari server)
  const productsData = [
    { name: 'Hoodie New Balance', price: 'Rp.249.000' },
    { name: 'Adidas', price: 'Rp.330.000' },
    { name: 'Nike', price: 'Rp.350.000' },
    { name: 'Gucci', price: 'Rp.370.000' },
    { name: 'Vans', price: 'Rp.159.000' },
    { name: 'Stussy', price: 'Rp.279.000' },
    { name: 'Uniqlo', price: 'Rp.299.000' },
  ];
});
