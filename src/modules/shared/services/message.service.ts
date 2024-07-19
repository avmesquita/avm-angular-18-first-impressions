import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { uuid } from 'uuidv4';

@Injectable()
export class MessageService { 
    private _message: string = '';

    public readonly message: string = this._message;    

    constructor(private _snackBar: MatSnackBar) { }
  
    public sendSnackMessage(msg: string) {
        if (this._message != msg) {
            this._message = msg;
            this._snackBar.open(this.message);
        }
    }
}