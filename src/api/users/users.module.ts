import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { RepositoriesModule } from '../../repositories/repositories.module';
import { KindagooseModule } from 'kindagoose';
import { User } from './schema/users.schema';
import { UsersValidator } from './users.validator';

@Module({
  imports: [
    KindagooseModule.forFeature([
      User
    ]),
    RepositoriesModule
  ],
  controllers: [UsersController],
  providers: [UsersService,UsersValidator],
})
export class UsersModule {}
