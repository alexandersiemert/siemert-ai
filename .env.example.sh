# SiemertAI Environment Configuration

# ===========================================
# SECURITY & AUTHENTICATION
# ===========================================
JWT_SECRET=siemert_ai_super_secret_2025_change_in_production
KEYCLOAK_ADMIN_PASSWORD=siemert_keycloak_admin_2025

# ===========================================
# DATABASE CONFIGURATION
# ===========================================
# PostgreSQL
POSTGRES_HOST=postgres
POSTGRES_PORT=5432
POSTGRES_DB=siemert_ai
POSTGRES_USER=siemert_user
POSTGRES_PASSWORD=siemert_secure_2025

# MongoDB
MONGODB_URI=mongodb://siemert_admin:siemert_mongo_2025@mongodb:27017/siemert_knowledge?authSource=admin

# ===========================================
# FILE STORAGE (MinIO S3)
# ===========================================
MINIO_ENDPOINT=minio
MINIO_PORT=9000
MINIO_ACCESS_KEY=siemert_minio_key
MINIO_SECRET_KEY=siemert_minio_secret_2025
MINIO_BUCKET_NAME=siemert-files

# ===========================================
# KI INTEGRATION
# ===========================================
# OpenAI (optional - für Cloud-KI)
OPENAI_API_KEY=your_openai_api_key_here

# Lokale KI Einstellungen
KI_OFFLINE_MODE=true
KI_MODEL_PATH=/app/models
KI_CONFIDENCE_THRESHOLD=0.85

# ===========================================
# EXTERNAL SERVICES
# ===========================================
# Keycloak
KEYCLOAK_URL=http://keycloak:8080
KEYCLOAK_REALM=siemert-ai
KEYCLOAK_CLIENT_ID=siemert-backend
KEYCLOAK_CLIENT_SECRET=your_keycloak_client_secret

# Redis
REDIS_URL=redis://redis:6379

# ===========================================
# APPLICATION SETTINGS
# ===========================================
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
BACKEND_URL=http://localhost:4000
AI_SERVICE_URL=http://localhost:5000

# ===========================================
# NORMEN & STANDARDS (für Berechnungen)
# ===========================================
VDE_API_URL=https://api.vde.com
VDE_API_KEY=your_vde_api_key
STANDARDS_UPDATE_INTERVAL=86400

# ===========================================
# MONITORING & LOGGING
# ===========================================
LOG_LEVEL=debug
PROMETHEUS_ENABLED=true
JAEGER_ENABLED=false

# ===========================================
# SECURITY SETTINGS
# ===========================================
CORS_ORIGINS=http://localhost:3000,http://localhost:8080
RATE_LIMIT_MAX=1000
RATE_LIMIT_WINDOW=900000

# ===========================================
# DEVELOPMENT SETTINGS
# ===========================================
# Hot Reload für Development
FRONTEND_HOT_RELOAD=true
BACKEND_HOT_RELOAD=true

# Debug Modes
DEBUG_SQL=false
DEBUG_KI=true
DEBUG_CALCULATIONS=true