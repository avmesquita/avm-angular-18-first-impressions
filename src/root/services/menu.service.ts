import { Injectable } from '@angular/core';
import { IMenu } from '../interfaces/imenu.interface';
import { Observable, of } from 'rxjs';


@Injectable()
export class MenuService { 

    private  _items: IMenu[] = [
        {
            caption: 'Address Form',
            tooltip: 'Angular Material Schematics',
            link: '/address-form',                
            icon: 'person',
        },
        {
            caption: 'Table',
            tooltip: 'Angular Material Schematics',
            link: '/table',                
            icon: 'table',
        },
        {
            caption: 'Dashboard',
            tooltip: 'Angular Material Schematics',
            link: '/dashboard',                
            icon: 'dashboard',
        },
        {
            caption: 'Tree',
            tooltip: 'Angular Material Schematics',
            link: '/tree',                
            icon: 'account_tree',
        },
        {
            caption: 'Drag n` Drop',
            tooltip: 'Angular Material Schematics',
            link: '/drag-drop',                
            icon: 'low_priority',
        },
        {
            caption: 'More Samples',
            tooltip: 'Angular Material More Samples',
            link: '/more-samples',                
            icon: 'engineering',
        }
    ];

    public readonly items: IMenu[] = this._items;

    constructor() {}

    getItems(): Observable<IMenu[]> {        
        return of(this._items);
    }
}