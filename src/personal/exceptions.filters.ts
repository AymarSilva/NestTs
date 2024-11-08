import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response, Request } from "express";

// Decorator to catch somethings off ocurred at httpException
@Catch(HttpException) 
export class HttpFilter implements ExceptionFilter {
    catch(exceptions: HttpException, host: ArgumentsHost){
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        const statusCode = exceptions.getStatus();

        response.status(statusCode).json({
            statusCode: statusCode,
            message: exceptions.message,
            caminho: request.url
        });

    };
};