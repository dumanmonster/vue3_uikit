<script setup>
import Checkbox from "@/components/Checkbox/Checkbox.vue";
import CheckboxGroup from "@/components/Checkbox/CheckboxGroup.vue";
import { ref } from "vue";

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);

const listOfHeroes = ref([
  {
    name: "Spider Man",
    id: "h1",
  },
  {
    name: "Batman",
    id: "h2",
  },
  {
    name: "Thor",
    id: "h3",
  },
  {
    name: "Loki",
    id: "h4",
  },
]);

const selectedHeroes = ref(["h1", "h3"]);

const switchProfessional = ref(false);
</script>
<template>
  <h1 class="heading-1">Checkbox</h1>
  <h2 class="heading-2">Checkbox Active</h2>
  <div class="line">
    <checkbox
      label="Checkbox Active"
      id="Checkbox Active"
      name="Checkbox Active"
      value="I like it"
      v-model:checked="checkboxActive"
    />
  </div>
  <h2 class="heading-2">Checkbox Disabled</h2>
  <div class="line">
    <checkbox
      label="Checkbox Disabled"
      id="Checkbox Disabled"
      name="Checkbox Disabled"
      value="I like it"
      :disabled="checkboxDisabled"
      v-model:checked="checkboxDisabledChecked"
    />
  </div>
  <h2 class="heading-2">Checkbox Group</h2>
  <div class="line line_block">
    <p>Selected Heroes: {{ selectedHeroes }}</p>
    <checkbox-group
      v-model:value="selectedHeroes"
      name="heroes"
      :options="listOfHeroes"
    />
  </div>
  <h2 class="heading-2">Switch</h2>
  <div class="line">
    <checkbox
      label="I'm a professional"
      id="Switch"
      name="Switch"
      value="I'm a professional"
      v-model:checked="switchProfessional"
      type="switch"
    />
  </div>
</template>
<style lang="scss" scoped></style>
