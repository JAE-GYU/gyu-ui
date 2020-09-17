import { GyuUIOptions } from "@/types/gyu-ui";

import { App } from "vue";
import * as components from "./components";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

declare global {
  interface Window {
    Vue: App;
  }
}

const install = (app: App, options?: GyuUIOptions) => {
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
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default install;
