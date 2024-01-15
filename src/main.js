import './assets/style.scss'
import "./assets/typography.scss"

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

library.add(faPhone, faLongArrowRight, faPlus, faBars, faAngleDown, faAngleUp, faXmark);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon)

app.use(router)

app.mount('#app')
