import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MoreSamplesComponent } from './components/more-samples/more-samples.component';
import { SharedModule } from '../shared/shared.module';
import { provideRouter, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: MoreSamplesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatSortModule, 
    MatTableModule, 
    MatTabsModule, 
    MatTooltipModule    
  ],
  declarations: [    
    MoreSamplesComponent
  ],
  exports: [
    
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),    
    provideRouter(routes),
  ]
})
export class MoreSamplesModule { }


