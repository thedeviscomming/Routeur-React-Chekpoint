const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let films = [];

app.use(cors());
app.use(bodyParser.json());

// Route pour obtenir tous les films
app.get('/api/films', (req, res) => {
    res.json(films);
});

// Route pour ajouter un nouveau film
app.post('/api/films', (req, res) => {
    const { titre, description, posterURL, note, bandeAnnonce } = req.body;
    const nouveauFilm = { titre, description, posterURL, note, bandeAnnonce };
    films.push(nouveauFilm);
    res.status(201).json(nouveauFilm);
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
