// morgan.middleware.ts

import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as morgan from 'morgan';

@Injectable()
export class MorganMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Define the desired format for request logging
    const logFormat = ':method :url :status :res[content-length] - :response-time ms';

    // Use morgan middleware with the specified log format
    morgan(logFormat)(req, res, next);
  }
}
