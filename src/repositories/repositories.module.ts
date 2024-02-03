import { Module } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { KindagooseModule } from 'kindagoose';
import { User } from 'src/api/users/schema/users.schema';


@Module({
  imports: [
    KindagooseModule.forFeature([
      User
    ]),
  ],
  providers: [
    UsersRepository,
  ],
  exports: [
    UsersRepository,
  ],
})
export class RepositoriesModule {}
