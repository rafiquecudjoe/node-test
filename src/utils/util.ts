import { HttpStatus} from '@nestjs/common';
import { CaughtError, RequestResponse } from './entities/utils.entity';
import { Constants } from '../common/enums/generic.eum';



export function throwError(message: string, code: number | null = null) {
  const error: any = new Error(message);
  error.code = code;

  throw error;
}

export function generateSuccessResponse(response: RequestResponse) {
  if (!response.data)
    return {
      status: response.statusCode,
      message: response.message,
    };
  return {
    status: response.statusCode,
    message: response.message,
    data: response.data,
  };
}

export function generateErrorResponse(error: CaughtError) {
  if (!error.code || typeof error.code === 'string')
    return {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: Constants.ServerError,
      error: error.message,
    };

  return {
    status: error.code,
    message: error.message,
  };
}

