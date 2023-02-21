import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Button from "@/views/Button.vue";
import Typography from "@/views/Typography.vue";
import Checkbox from "@/views/Checkbox.vue";
import RadioButton from "@/views/RadioButton.vue";
import Progress from "@/views/Progress.vue";
import Input from "@/views/Input.vue";
import Tabs from "@/views/Tabs.vue";
import Table from "@/views/Table.vue";
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
    {
      path: "/progress",
      name: "Progress",
      component: Progress,
    },
    {
      path: "/input",
      name: "Input",
      component: Input,
    },
    {
      path: "/tabs",
      name: "Tabs",
      component: Tabs,
    },
    {
      path: "/table",
      name: "Table",
      component: Table,
    },
  ],
});

export default router;
