import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerminusModule } from '@nestjs/terminus';
import { ScheduleModule } from '@nestjs/schedule';
import { MorganMiddleware } from './common/middlewares/morgan.middleware';
import { KindagooseModule } from 'kindagoose';
import { UsersModule } from './api/users/users.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { config } from './config/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler'
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    KindagooseModule.forRoot(config.databaseUrl, {
      dbName: config.databaseName,
      authSource: config.dbAuth,
    }),
    TerminusModule,
    UsersModule,
    ScheduleModule.forRoot(),
    RepositoriesModule,
    ThrottlerModule.forRoot([
      {
        ttl: 10000,
        limit: 3,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService, {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    }

  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MorganMiddleware).forRoutes('*');
  }
}

