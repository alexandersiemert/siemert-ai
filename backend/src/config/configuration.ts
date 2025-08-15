export default () => ({
  // Application
  port: parseInt(process.env.PORT, 10) || 4000,
  environment: process.env.NODE_ENV || 'development',
  
  // Database
  database: {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    username: process.env.POSTGRES_USER || 'siemert_user',
    password: process.env.POSTGRES_PASSWORD || 'siemert_secure_2025',
    name: process.env.POSTGRES_DB || 'siemert_ai',
  },

  // JWT
  jwt: {
    secret: process.env.JWT_SECRET || 'siemert_ai_super_secret_2025',
    expiresIn: process.env.JWT_EXPIRES_IN || '24h',
  },

  // Redis
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
    password: process.env.REDIS_PASSWORD,
  },

  // OpenAI
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    model: process.env.OPENAI_MODEL || 'gpt-4',
    maxTokens: parseInt(process.env.OPENAI_MAX_TOKENS, 10) || 2000,
  },

  // MinIO S3
  minio: {
    endPoint: process.env.MINIO_ENDPOINT || 'localhost',
    port: parseInt(process.env.MINIO_PORT, 10) || 9000,
    useSSL: process.env.MINIO_USE_SSL === 'true',
    accessKey: process.env.MINIO_ACCESS_KEY || 'siemert_minio_key',
    secretKey: process.env.MINIO_SECRET_KEY || 'siemert_minio_secret_2025',
    bucketName: process.env.MINIO_BUCKET_NAME || 'siemert-files',
  },

  // Rate Limiting
  throttle: {
    ttl: parseInt(process.env.THROTTLE_TTL, 10) || 60,
    limit: parseInt(process.env.THROTTLE_LIMIT, 10) || 100,
  },

  // CORS
  cors: {
    origin: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3000'],
  },

  // Logging
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    format: process.env.LOG_FORMAT || 'json',
  },

  // File Upload
  upload: {
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE, 10) || 10 * 1024 * 1024, // 10MB
    allowedTypes: process.env.ALLOWED_FILE_TYPES?.split(',') || [
      'image/jpeg',
      'image/png', 
      'image/gif',
      'application/pdf',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
      'application/zip',
      'application/x-zip-compressed',
    ],
  },

  // VDE Standards & Calculations
  vde: {
    apiUrl: process.env.VDE_API_URL,
    apiKey: process.env.VDE_API_KEY,
    updateInterval: parseInt(process.env.STANDARDS_UPDATE_INTERVAL, 10) || 86400, // 24h
  },

  // AI Processing
  ai: {
    offlineMode: process.env.KI_OFFLINE_MODE === 'true',
    modelPath: process.env.KI_MODEL_PATH || '/app/models',
    confidenceThreshold: parseFloat(process.env.KI_CONFIDENCE_THRESHOLD) || 0.85,
  },
});