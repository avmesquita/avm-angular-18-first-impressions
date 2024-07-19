import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { MessageComponent } from './components/message/message.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MessageComponent,    
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,    
    MessageComponent
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class SharedModule {
  
 }