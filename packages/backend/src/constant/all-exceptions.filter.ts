import {
  Catch,
  ArgumentsHost,
  HttpStatus,
  ExceptionFilter,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof Error ? exception.message : exception.message.error;

    if (exception.status === HttpStatus.NOT_FOUND) {
      status = HttpStatus.NOT_FOUND;
    }

    if (exception.status === HttpStatus.SERVICE_UNAVAILABLE) {
      status = HttpStatus.SERVICE_UNAVAILABLE;
    }

    if (exception.status === HttpStatus.NOT_ACCEPTABLE) {
      status = HttpStatus.NOT_ACCEPTABLE;
    }

    if (exception.status === HttpStatus.EXPECTATION_FAILED) {
      status = HttpStatus.EXPECTATION_FAILED;
    }

    if (exception.status === HttpStatus.BAD_REQUEST) {
      status = HttpStatus.BAD_REQUEST;
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      success: false,
      data: [],
      error: message,
      message:
        status === HttpStatus.INTERNAL_SERVER_ERROR
          ? 'Sorry we are experiencing technical problems.'
          : '',
    });
  }
}
