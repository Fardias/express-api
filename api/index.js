const express = require('express');
const serverless = require('serverless-http');

const app = express();

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

// Root endpoint
app.get('/', (req, res) => {
  res.send('Halo, ini API produk clothing sederhana!');
});

// Produk endpoint
app.get('/produk', (req, res) => {
  res.json(produk);
});

// Export the handler for Vercel serverless function
module.exports.handler = serverless(app);
