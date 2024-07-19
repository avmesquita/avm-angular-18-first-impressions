import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './root/app.config';

import { RootComponent } from './root/components/root/root.component';

bootstrapApplication(RootComponent, appConfig)
  .catch((err) => console.error(err));
