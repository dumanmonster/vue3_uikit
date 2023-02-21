<script setup>
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  helpers,
  minLength,
  email,
  numeric,
  maxLength,
  sameAs,
} from "@vuelidate/validators";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

const nameField = ref("");
const emailField = ref("");
const luckyField = ref("");
const passwordField = ref("");
const confirmPasswordField = ref("");
const frontendField = ref("");

const mustBeFrontend = (value) => value.includes("frontend");

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(
      "Минимальная длинна 3 символа",
      minLength(3)
    ),
  },
  emailField: {
    email: helpers.withMessage("Вы ввели неверный email", email),
  },
  luckyField: {
    maxLength: helpers.withMessage(
      "Максимальная длинна 2 символа",
      maxLength(2)
    ),
    numeric: helpers.withMessage("Вы можете ввести только цифры", numeric),
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(
      "Пороли не совпадают",
      sameAs(passwordField.value)
    ),
  },
  frontendField: {
    frontendField: helpers.withMessage(
      "Строка должна содержать слово фронтенд",
      mustBeFrontend
    ),
  },
}));

const v = useVuelidate(rules, {
  nameField,
  emailField,
  luckyField,
  confirmPasswordField,
  frontendField,
});

const submitForm = (e) => {

  v.value.$touch();

  if (v.value.$error) return;
  alert("Form Submitted");
};
</script>
<template>
  <h1 class="heading-1">Input</h1>

  <h2 class="heading-2">Validation</h2>
  <form @submit.prevent="submitForm">
    <Input
      label="Your name"
      name="name"
      placeholder="Input your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"
    />
    <Input
      label="Your email"
      name="email"
      placeholder="Input your email"
      v-model:value="v.emailField.$model"
      :error="v.emailField.$errors"
    />
    <Input
      label="Your lucky number"
      name="lucky"
      placeholder="Input your lucky number"
      v-model:value="v.luckyField.$model"
      :error="v.luckyField.$errors"
    />
    <Input
      label="Your password"
      name="password"
      placeholder="Please, input password"
      v-model:value="passwordField"
      type="password"
    />
    <Input
      label="Confirm password"
      name="confirm"
      placeholder="Please, confirm password"
      type="password"
      v-model:value="v.confirmPasswordField.$model"
      :error="v.confirmPasswordField.$errors"
    />
    <Input
      label="Frontend string"
      name="frontend"
      placeholder="Please, input frontend"
      v-model:value="v.frontendField.$model"
      :error="v.frontendField.$errors"
    />
    <Button label="Submit" color="primary" />
  </form>
</template>
