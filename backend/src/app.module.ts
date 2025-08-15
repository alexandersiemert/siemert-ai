import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule } from '@nestjs/throttler';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// Core Modules
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { CustomersModule } from './customers/customers.module';
import { CalculationsModule } from './calculations/calculations.module';
import { KnowledgeModule } from './knowledge/knowledge.module';
import { FilesModule } from './files/files.module';
import { AiModule } from './ai/ai.module';

// Database Configuration
import { databaseConfig } from './database/database.config';

// Global Configuration
import configuration from './config/configuration';

@Module({
  imports: [
    // Configuration Module
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: ['.env.local', '.env'],
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),

    // Database Module  
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.name'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/database/migrations/*{.ts,.js}'],
        synchronize: configService.get('NODE_ENV') === 'development',
        logging: configService.get('NODE_ENV') === 'development',
        ssl: configService.get('NODE_ENV') === 'production' ? { rejectUnauthorized: false } : false,
        retryAttempts: 3,
        retryDelay: 3000,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),

    // Rate Limiting
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ttl: configService.get('throttle.ttl', 60),
        limit: configService.get('throttle.limit', 100),
      }),
      inject: [ConfigService],
    }),

    // Static File Serving
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),

    // Feature Modules
    HealthModule,
    AuthModule,
    UsersModule,
    ProjectsModule,
    CustomersModule,
    CalculationsModule,
    KnowledgeModule,
    FilesModule,
    AiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private configService: ConfigService) {
    console.log('🤖 SiemertAI Neural Core initialized');
    console.log(`📊 Database: ${this.configService.get('database.host')}:${this.configService.get('database.port')}`);
    console.log(`🔐 JWT Secret: ${this.configService.get('jwt.secret') ? '✅ Configured' : '❌ Missing'}`);
    console.log(`🤖 OpenAI: ${this.configService.get('openai.apiKey') ? '✅ Connected' : '⚠️ Offline Mode'}`);
  }
}