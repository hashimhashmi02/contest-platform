import {Response} from 'express';

export const successResponse =(res: Response, data: any, statusCode = 200)=>{
    res.status(statusCode).json({
        success: true,
        data,
        error: null
    });
}

export const errorResponse = (res: Response, errorCode: string, statusCode=400)=>{
    res.status(statusCode).json({
        success:false,
        data:null,
        error:errorCode
    });
};
