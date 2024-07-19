import { Routes } from '@angular/router';

import { MoreSamplesComponent } from '../modules/more-samples/components/more-samples/more-samples.component';
import { AddressFormComponent } from './components/standalone/address-form/address-form.component';
import { DashboardComponent } from './components/standalone/dashboard/dashboard.component';
import { DragDropComponent } from './components/standalone/drag-drop/drag-drop.component';
import { HomeComponent } from './components/standalone/home/home.component';
import { TableComponent } from './components/standalone/table/table.component';
import { TreeComponent } from './components/standalone/tree/tree.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'address-form', component: AddressFormComponent },
    { path: 'table', component: TableComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tree', component: TreeComponent },
    { path: 'drag-drop', component: DragDropComponent },
    { 
        path: 'more-samples', 
        loadChildren: () => import('../modules/more-samples/more-samples.module').then(m => m.MoreSamplesModule) 
    }
];
