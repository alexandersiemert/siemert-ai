# 🤖 SiemertAI - KI-gestütztes Projektmanagement für Elektrokonstruktion

> **Zukunftsweisende Lösung mit 10 Jahren technologischem Vorsprung**

Ein intelligentes Projektmanagement-System speziell für Elektrokonstrukteure im Maschinen- und Anlagenbau. SiemertAI kombiniert modernste KI-Technologie mit bewährten Engineering-Praktiken.

## ✨ Features

### 🎯 Core Funktionen
- **Intelligentes Projektmanagement** - KI-optimierte Ressourcenplanung
- **Elektro-Berechnungstools** - VDE-konforme Kabel-, Leistungs- und Schutzberechnungen
- **Wissensdatenbank** - Semantische Suche in technischen Dokumenten
- **Kundenverwaltung** - Automatische Integration kundenspezifischer Anforderungen
- **Live-Kollaboration** - Echtzeit-Updates via WebSockets

### 🤖 KI-Integration
- **Projekt-Analyse** - Automatische Risikoerkennung und Optimierungsvorschläge
- **Ressourcen-Optimierung** - KI erkennt Engpässe und schlägt Lösungen vor
- **Normen-Prüfung** - Automatische Validierung gegen DIN VDE, UL, CE
- **Chat-Assistent** - Natürlichsprachige Bedienung des Systems

### 🔮 Zukunfts-Features
- EPLAN-Integration
- Predictive Analytics
- AR-gestützte Montage
- Vollautomatisierte Dokumentation

## 🏗️ Architektur

```
📁 SiemertAI/
├── 🌐 frontend/          # Next.js + Tailwind CSS + Glassmorphism
├── ⚡ backend/           # NestJS + PostgreSQL + MongoDB
├── 🤖 ai-service/        # Python + TensorFlow + OpenAI
├── 🗄️ database/          # SQL Schemas + MongoDB Collections
├── 🐳 docker-compose.yml # Komplette Infrastruktur
└── 📚 docs/             # Dokumentation & Spezifikationen
```

## 🚀 Quick Start

### Voraussetzungen
- Docker & Docker Compose
- Git
- Node.js 18+ (für lokale Entwicklung)

### 1. Repository klonen
```bash
git clone https://github.com/IhrUsername/siemert-ai.git
cd siemert-ai
```

### 2. Environment Setup
```bash
# .env Datei erstellen
cp .env.example .env

# OpenAI API Key hinzufügen (optional)
echo "OPENAI_API_KEY=your_key_here" >> .env
```

### 3. System starten
```bash
# Alle Services starten
docker-compose up -d

# Logs verfolgen
docker-compose logs -f
```

### 4. Anwendung öffnen
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:4000
- **Keycloak Admin:** http://localhost:8080
- **MinIO Console:** http://localhost:9001
- **pgAdmin:** http://localhost:5050

## 🎨 Tech Stack

### Frontend
- **Next.js 14** - React Framework mit App Router
- **Tailwind CSS** - Utility-first Styling
- **shadcn/ui** - Moderne UI-Komponenten
- **Framer Motion** - Animationen
- **Glassmorphism** - Futuristisches Design

### Backend
- **NestJS** - Enterprise Node.js Framework
- **PostgreSQL** - Strukturierte Daten
- **MongoDB** - Wissensdatenbank
- **Keycloak** - Identity & Access Management
- **MinIO** - S3-kompatible Dateispeicherung
- **Redis** - Caching & Sessions

### KI & Berechnungen
- **Python** - Berechnungs-Engine
- **TensorFlow** - Lokale KI-Modelle
- **OpenAI API** - Cloud-KI (optional)
- **NumPy/Pandas** - Wissenschaftliche Berechnungen

### Infrastructure
- **Docker** - Containerisierung
- **Traefik** - Reverse Proxy (Produktion)
- **GitHub Actions** - CI/CD Pipeline

## 🔐 Sicherheit

- **Zero-Trust Architektur**
- **Rollenbasierte Zugriffskontrolle (RBAC)**
- **JWT + OAuth2/OIDC Authentifizierung**
- **End-to-End Verschlüsselung**
- **Audit-Logs für alle Aktionen**

## 📊 Monitoring & Observability

- **Prometheus** - Metriken
- **Grafana** - Dashboards
- **Jaeger** - Distributed Tracing
- **ELK Stack** - Logging (optional)

## 🛠️ Development

### Entwicklungsumgebung starten
```bash
# Frontend Development Server
cd frontend && npm run dev

# Backend Development Server
cd backend && npm run start:dev

# KI-Service Development
cd ai-service && python app.py
```

### Datenbank Migrations
```bash
# PostgreSQL Schema Update
docker-compose exec backend npm run migration:run

# MongoDB Seed Data
docker-compose exec mongodb mongosh /scripts/seed.js
```

## 🎯 Roadmap

### Phase 1: MVP (Q1 2025)
- [x] Grundlegende Projektstruktur
- [x] Docker-Setup
- [ ] Basis UI/UX Implementation
- [ ] Authentifizierung & Rollen
- [ ] CRUD-Operationen für Projekte/Aufgaben

### Phase 2: Core Features (Q2 2025)
- [ ] Berechnungstools
- [ ] Wissensdatenbank
- [ ] KI-Chat-Assistent
- [ ] File-Upload & -Management

### Phase 3: Advanced KI (Q3 2025)
- [ ] Projekt-Analyse
- [ ] Ressourcen-Optimierung
- [ ] Predictive Analytics
- [ ] Normen-Automatisierung

### Phase 4: Enterprise (Q4 2025)
- [ ] EPLAN-Integration
- [ ] Enterprise SSO
- [ ] Multi-Tenant Architektur
- [ ] Mobile Apps

## 🤝 Contributing

1. Fork das Repository
2. Feature Branch erstellen (`git checkout -b feature/amazing-feature`)
3. Änderungen committen (`git commit -m 'Add amazing feature'`)
4. Branch pushen (`git push origin feature/amazing-feature`)
5. Pull Request erstellen

## 📄 Lizenz

Dieses Projekt ist unter der MIT Lizenz veröffentlicht. Siehe [LICENSE](LICENSE) für Details.

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/IhrUsername/siemert-ai/issues)
- **Discussions:** [GitHub Discussions](https://github.com/IhrUsername/siemert-ai/discussions)
- **Email:** support@siemert.ai

---

**Made with ❤️ for the future of electrical engineering**