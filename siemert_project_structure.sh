# SiemertAI - Komplette Projekt-Ordnerstruktur

# Hauptverzeichnis erstellen
mkdir -p SiemertAI
cd SiemertAI

# Frontend (Next.js)
mkdir -p frontend/{src,public,components,pages,styles,utils,hooks,types,contexts}
mkdir -p frontend/src/{app,components,lib,hooks,types,styles}
mkdir -p frontend/src/components/{ui,layout,forms,charts,calculations}
mkdir -p frontend/src/app/{dashboard,projects,customers,knowledge,calculations,settings}

# Backend (NestJS)
mkdir -p backend/{src,test,migrations,seeds}
mkdir -p backend/src/{auth,users,projects,tasks,customers,knowledge,calculations,files,ai}
mkdir -p backend/src/{common,config,database,guards,interceptors,pipes,decorators}

# KI-Service (Python)
mkdir -p ai-service/{src,models,calculations,standards,tests}
mkdir -p ai-service/src/{api,core,services,utils}
mkdir -p ai-service/calculations/{cable,power,protection,shortcircuit,temperature}

# Datenbank
mkdir -p database/{postgres,mongodb,schemas,migrations,seeds}
mkdir -p database/postgres/{tables,views,functions,triggers}
mkdir -p database/mongodb/{collections,indexes,aggregations}

# Dokumentation
mkdir -p docs/{api,user-guide,admin-guide,development}
mkdir -p docs/{architecture,specifications,requirements}

# DevOps & Infrastructure
mkdir -p infrastructure/{docker,kubernetes,terraform,scripts}
mkdir -p .github/{workflows,templates,ISSUE_TEMPLATE}

# Tests
mkdir -p tests/{e2e,integration,load,security}

# Shared
mkdir -p shared/{types,utils,constants,schemas}

# Scripts
mkdir -p scripts/{setup,deployment,migration,backup}

# Config
mkdir -p config/{development,production,staging,testing}

# Monitoring
mkdir -p monitoring/{prometheus,grafana,alerts}

echo "✅ Ordnerstruktur erstellt!"
echo "📁 Nächster Schritt: Git Repository initialisieren"