import { Injectable } from '@angular/core';
import { uuid } from 'uuidv4';

@Injectable()
export class authenticationService { 
    
    public getAuthenticationToken(): string {

        return uuid();

    }
}