import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Button from "@/views/Button.vue";
import Typography from "@/views/Typography.vue";
import Checkbox from "@/views/Checkbox.vue";
import RadioButton from "@/views/RadioButton.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/typography",
      name: "Typography",
      component: Typography,
    },
    {
      path: "/button",
      name: "Button",
      component: Button,
    },
    {
      path: "/checkbox",
      name: "Checkbox",
      component: Checkbox,
    },
    {
      path: "/radio-button",
      name: "RadioButton",
      component: RadioButton,
    },
  ],
});

export default router;
