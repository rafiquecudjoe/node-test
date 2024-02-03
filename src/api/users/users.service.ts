import { HttpStatus, Injectable } from '@nestjs/common';
import { generateErrorResponse, generateSuccessResponse, throwError } from '../../utils/util';
import { UsersRepository } from '../../repositories/users.repository';
import { UsersValidator } from './users.validator';
import { ResponseWithData } from 'src/common/entities/response.entity';

@Injectable({})
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository,
    private readonly usersValidator: UsersValidator
  ) { }

  async getUserId(userId: string): Promise<ResponseWithData> {
    try {

      await this.usersValidator.validateGetUserById(userId)

      const user = await this.usersRepository.getUserById(userId);
      if (!user) {
        throwError('User not found', HttpStatus.NOT_FOUND);
      }

      return generateSuccessResponse({
        statusCode: HttpStatus.OK,
        message: 'User updated successfully',
        data: user,
      });

    } catch (error) {
      return generateErrorResponse(error);
    }
  }
}
