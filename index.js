const express = require('express');
const app = express();
const PORT = 3000;

// Endpoint root
app.get('/', (req, res) => {
  res.send('Halo, ini API sederhana!');
});

// Endpoint /halo
app.get('/halo', (req, res) => {
  res.json({ pesan: 'Halo dunia!' });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
