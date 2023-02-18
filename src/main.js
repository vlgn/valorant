import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import unofficialValorantApi from "unofficial-valorant-api";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.use(unofficialValorantApi);
