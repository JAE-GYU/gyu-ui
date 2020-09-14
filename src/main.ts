import GyuUI from "./index";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.use(GyuUI);
app.mount("#app");
