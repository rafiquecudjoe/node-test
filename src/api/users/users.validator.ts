import { HttpStatus, Injectable } from '@nestjs/common';
import * as joi from 'joi';
import { validateJoiSchema } from '../../utils/joi.validator';
import { throwError } from '../../utils/util';


@Injectable()
export class UsersValidator {
    constructor() { }

    async validateGetUserById(userId:string): Promise<any> {
        // joi validation
        const joiSchema = joi.object({
            userId: joi.string().required().label('User id'),
        });
        const joiValidationResults = validateJoiSchema(joiSchema, {userId});

        // check the results from joi validation
        if (joiValidationResults) {
            throwError(joiValidationResults, HttpStatus.BAD_REQUEST);
        }

        // success
        return 'Passed';
    }
}