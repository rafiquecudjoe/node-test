import { ApiHideProperty } from '@nestjs/swagger';

export class RequestResponse {
  statusCode: number;
  message: string;
  data?: any;
}

export class CaughtError {
  code: number;
  message: string;
  stack?: string;
}

export class DocsResponseWithoutData {
  @ApiHideProperty()
  status: number;
  message: string;
}

export class DocsResponseWithData extends DocsResponseWithoutData {
  data?: any;
}
