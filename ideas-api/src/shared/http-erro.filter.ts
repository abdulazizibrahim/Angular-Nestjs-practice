import { ArgumentsHost, Catch, HttpException } from "@nestjs/common";


@Catch()
export class HttpErrorFilter{
    
    catch(exception : HttpException, host: ArgumentsHost){

        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const status = exception.getStatus();

        const errorResponse ={
            code : status,
            Timestamp : new Date().toLocaleDateString(),
            path : request.url,
            method : response.method,
            message : exception.message || null
                
        };
        response.status(404).json(errorResponse); 
    }
    
}