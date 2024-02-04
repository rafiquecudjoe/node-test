import { Test, TestingModule } from '@nestjs/testing';
import { RepositoriesModule } from '../../../repositories/repositories.module';
import { UsersService } from '../users.service';
import { UsersValidator } from '../users.validator';
import { ResponseWithData } from '../../../common/entities/response.entity';
import { KindagooseModule } from 'kindagoose';
import { User } from '../schema/users.schema';
import { AppModule } from '../../../app.module';

describe('UsersService', () => {
    let service: UsersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [RepositoriesModule, KindagooseModule.forFeature([
                User,AppModule
            ]),],
            providers: [UsersService,UsersValidator],
        }).compile();

        service = module.get<UsersService>(UsersService);
    });


    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should not retrieve user with invalid id', async () => {
        const data: ResponseWithData = await service.getUserId("65be9e4fa383cbef9e59e0e0");

        expect(data.status).toEqual(201);
        expect(data.message).toEqual('Request completed successfully.');
    });
});