import { Request, Response } from 'express';
import {severityDao} from '../dao/severityDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let severity = new severityDao();

export class severityService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GpCreate')
     let  severityData = req.body;
     severity.GpCreate(severityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}