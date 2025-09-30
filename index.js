// index.js

const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  const data = {
    headline: 'Ekosistem Digital Terpusat untuk Komunitas Anda',
    subheadline: 'Sindika adalah solusi end-to-end untuk manajemen anggota dan kegiatan, dilengkapi analitik canggih untuk mendukung pengambilan keputusan strategis dan efisiensi operasional.'
  };
  res.render('index', data);
});


app.get('/solusi', (req, res) => {
    res.render('solusi'); 
});

app.get('/sindi-ai', (req, res) => {
    const data = {
        pageTitle: "SINDI AI - Asisten Analis Data Cerdas Anda"
    };
    res.render('sindi-ai', data); 
});

app.get('/storage-api', (req, res) => {
    res.render('storage-api'); 
});

app.get('/e-warta', (req, res) => {
    res.render('e-warta'); 
});

app.get('/core-platform', (req, res) => {
    res.render('core-platform'); 
});

app.get('/konselor-ai', (req, res) => {
    res.render('konselor-ai'); 
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});