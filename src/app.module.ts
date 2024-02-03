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

@Module({
  imports: [
    KindagooseModule.forRoot(config.databaseUrl, {
      dbName: config.databaseName,
      authSource: config.dbAuth,
    }),
    TerminusModule,
    UsersModule,
    ScheduleModule.forRoot(),
    RepositoriesModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MorganMiddleware).forRoutes('*');
  }
}

