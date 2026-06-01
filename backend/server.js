const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Catalogue Sport & Fitness
const products = [
  { id: 1, name: "Ballon de Football", price: 15000, category: "Football", image: "⚽" },
  { id: 2, name: "Maillot de Football", price: 29500, category: "Football", image: "👕" },
  { id: 3, name: "Crampons Nike", price: 58000, category: "Football", image: "👟" },
  { id: 4, name: "Raquette de Tennis", price: 78500, category: "Tennis", image: "🎾" },
  { id: 5, name: "Ballon de Basketball", price: 22900, category: "Basketball", image: "🏀" },
  { id: 6, name: "Gants de Boxe", price: 36000, category: "Boxe", image: "🥊" },
  { id: 7, name: "Tapis de Yoga", price: 19500, category: "Fitness", image: "🧘" },
  { id: 8, name: "Haltères 10kg", price: 26000, category: "Fitness", image: "🏋️" },
  { id: 9, name: "Vélo Statique", price: 195000, category: "Fitness", image: "🚴" },
  { id: 10, name: "Corde à Sauter", price: 7900, category: "Fitness", image: "🪢" },
  { id: 11, name: "Chaussures Running", price: 64900, category: "Running", image: "👟" },
  { id: 12, name: "Montre GPS Sport", price: 130000, category: "Running", image: "⌚" }
];

// Obtenir tous les produits
app.get('/products', (req, res) => {
  res.json(products);
});

// Obtenir un produit par ID
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Produit non trouvé" });
  res.json(product);
});

// Obtenir produits par catégorie
app.get('/products/category/:category', (req, res) => {
  const filtered = products.filter(p => p.category === req.params.category);
  res.json(filtered);
});

// Route de test
app.get('/', (req, res) => {
  res.json({ message: "🏋️ API Sport & Fitness fonctionne !" });
});

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});