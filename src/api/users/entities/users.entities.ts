import { ApiProperty } from '@nestjs/swagger';
export class Users {
    id?: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt?: Date
}

export class GetUserByIdSuccessResponsePayload {
    @ApiProperty()
    _id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}

export class GetUserByIdSuccessResponse {
    @ApiProperty()
    message: string;

    @ApiProperty()
    data: GetUserByIdSuccessResponsePayload
}


