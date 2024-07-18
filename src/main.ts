import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MainComponent } from './components/main/main.component';

bootstrapApplication(MainComponent, appConfig)
  .catch((err) => console.error(err));