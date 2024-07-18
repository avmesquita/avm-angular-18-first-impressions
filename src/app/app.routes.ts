import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AddressFormComponent } from '../components/address-form/address-form.component';
import { TableComponent } from '../components/table/table.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { TreeComponent } from '../components/tree/tree.component';
import { DragDropComponent } from '../components/drag-drop/drag-drop.component';
import { MoreSamplesComponent } from '../components/more-samples/more-samples.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'address-form', component: AddressFormComponent },
    { path: 'table', component: TableComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tree', component: TreeComponent },
    { path: 'drag-drop', component: DragDropComponent },
    { path: 'more-samples', component: MoreSamplesComponent }
];
