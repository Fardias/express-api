const express = require('express');
const app = express();
const serverLess = require('serverless-http');
const PORT = process.env.PORT || 3000;

// Dummy data produk clothing
const produk = [
  {
    id: 1,
    nama: "Kaos Oversize Hitam",
    harga: 75000,
    kategori: "Kaos",
    stok: 12,
    gambar: "https://example.com/img/kaos1.jpg"
  },
  {
    id: 2,
    nama: "Hoodie Polos Abu",
    harga: 150000,
    kategori: "Hoodie",
    stok: 8,
    gambar: "https://example.com/img/hoodie1.jpg"
  },
  {
    id: 3,
    nama: "Celana Cargo Coklat",
    harga: 120000,
    kategori: "Celana",
    stok: 5,
    gambar: "https://example.com/img/celana1.jpg"
  }
];

// Root
app.get('/', (req, res) => {
  res.send('Halo, ini API produk clothing sederhana!');
});

// Endpoint produk
app.get('/produk', (req, res) => {
  res.json(produk);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});

module.exports = {
  handler: serverLess(app)
};
