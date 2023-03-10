import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faAddressBook,
    faCreditCard, faHand, faHeart, faHourglass, faLemon
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([
  faHeart,
  faHand,
  faAddressBook,
  faCreditCard,
  faLemon,
  faHourglass,
]);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
