# 🏋️ Sport & Fitness Shop — Dakar

Site e-commerce de vente d'équipements sportifs, développé dans le cadre d'un projet DevOps CI/CD.

## 🌐 Site en ligne
👉 https://ecommerce-sport-fitness.onrender.com

## 📋 Pipeline DevOps

| Étape | Outil | Statut |
|-------|-------|--------|
| Code | VS Code | ✅ |
| Commit | GitHub | ✅ |
| Build CI | GitHub Actions | ✅ |
| Docker | Docker Desktop | ✅ |
| Deploy | Render | ✅ |
| Monitor | Grafana + Prometheus | ✅ |

## 🛠️ Technologies utilisées

- **Frontend** : HTML, CSS, JavaScript
- **Backend** : Node.js, Express
- **CI/CD** : GitHub Actions
- **Conteneur** : Docker
- **Monitoring** : Grafana, Prometheus
- **Hébergement** : Render

## 🚀 Lancer le projet en local

### Backend
```bash
cd backend
npm install
node server.js
```

### Avec Docker
```bash
docker-compose up --build
```

## 📍 Accès aux services

| Service | URL |
|---------|-----|
| Site web | http://localhost:4000 |
| API | http://localhost:4000/products |
| Prometheus | http://localhost:9090 |
| Grafana | http://localhost:3001 |

## 👨‍💻 Auteur
**KarlZK15** — Projet Administration Système & DevOps
