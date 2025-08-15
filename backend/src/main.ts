import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import * as helmet from 'helmet';
import * as compression from 'compression';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT', 4000);
  const environment = configService.get<string>('NODE_ENV', 'development');

  // Security & Performance Middleware
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "https:"],
      },
    },
    crossOriginEmbedderPolicy: false,
  }));
  
  app.use(compression());

  // CORS Configuration
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:8080', 
      'https://siemert.ai',
      configService.get<string>('FRONTEND_URL', 'http://localhost:3000'),
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  });

  // Global Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Global Prefix
  app.setGlobalPrefix('api/v1');

  // Swagger Documentation (nur in Development)
  if (environment === 'development') {
    const config = new DocumentBuilder()
      .setTitle('SiemertAI API')
      .setDescription('KI-gestütztes Projektmanagement für Elektrokonstruktion')
      .setVersion('2035.1.0')
      .addTag('auth', 'Authentifizierung & Autorisierung')
      .addTag('projects', 'Projektmanagement')
      .addTag('calculations', 'Elektrische Berechnungen')
      .addTag('ai', 'KI-Services & Neural Processing')
      .addTag('users', 'Benutzerverwaltung')
      .addTag('customers', 'Kundenverwaltung')
      .addTag('knowledge', 'Wissensdatenbank')
      .addTag('files', 'Dateiverwaltung')
      .addBearerAuth()
      .addServer('http://localhost:4000', 'Development Server')
      .addServer('https://api.siemert.ai', 'Production Server')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document, {
      customSiteTitle: 'SiemertAI API Docs',
      customfavIcon: '/favicon.ico',
      customCss: `
        .swagger-ui .topbar { 
          background: linear-gradient(135deg, #3b82f6, #8b5cf6); 
        }
        .swagger-ui .topbar-wrapper .link {
          color: white;
          font-weight: bold;
        }
      `,
    });

    logger.log(`📚 API Documentation: http://localhost:${port}/docs`);
  }

  // Graceful Shutdown
  const gracefulShutdown = () => {
    logger.log('🔄 Graceful shutdown initiated...');
    app.close().then(() => {
      logger.log('✅ Application closed successfully');
      process.exit(0);
    });
  };

  process.on('SIGTERM', gracefulShutdown);
  process.on('SIGINT', gracefulShutdown);

  await app.listen(port, '0.0.0.0');

  logger.log(`🚀 SiemertAI Backend running on port ${port}`);
  logger.log(`🌍 Environment: ${environment}`);
  logger.log(`📊 Health Check: http://localhost:${port}/api/v1/health`);
  logger.log(`🤖 Neural Systems: Online`);
  logger.log(`⚡ Ready for KI-enhanced engineering!`);
}

// Error Handling
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

bootstrap().catch((error) => {
  console.error('❌ Application failed to start:', error);
  process.exit(1);
});