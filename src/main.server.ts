import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './root/app.config.server';

import { RootComponent } from './root/components/root/root.component';

const bootstrap = () => bootstrapApplication(RootComponent, config);

export default bootstrap;
