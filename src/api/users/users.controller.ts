import { Controller, Get, Param, Res, } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ResponseWithData, ResponseWithoutData } from '../../common/entities/response.entity';

@ApiTags("Users")
@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get('/:userId')
  @ApiOperation({
    summary: 'Used to retrieve user by id',
  })
  @ApiOkResponse({
    description: 'Retrieved successfully',
    type: ResponseWithData,
  })
  @ApiBadRequestResponse({
    description: 'Bad Request: Validation error',
    type: ResponseWithoutData,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
    type: ResponseWithoutData,
  })
  async getUserById(@Param('userId') userId: string, @Res() res: Response) {
    const { status, ...responseData } = await this.usersService.getUserId(userId)
    return res.status(status).send(responseData);
  }


}
