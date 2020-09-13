import { GyuUIOptions } from "@/types/gyu-ui";

import { App } from "vue";
import * as components from "./components";

export default {
  install(app: App, options: GyuUIOptions) {
    if (options == undefined) {
      Object.entries(components).forEach(c => {
        app.component(c[1].name, c[1]);
      });
    } else {
      if (options.components) {
        if (!(options.components instanceof Array)) {
          throw TypeError("components option should be Array");
        }

        const regComponents = Object.entries(components).filter(component =>
          options.components.includes(component[0])
        );
        regComponents.forEach(c => {
          app.component(c[1].name, c[1]);
        });
      }
    }
  }
};
