import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { defineCustomElements } from "@ionic/pwa-elements/loader";

import { AppModule } from "./app/app.module";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => defineCustomElements(window))
  .catch(e => console.error(e));
