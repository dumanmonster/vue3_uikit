<script setup>
import ProgressBar from "@/components/Progress/ProgressBar.vue";
import { ref } from "vue";
import ProgressCircle from "@/components/Progress/ProgressCircle.vue";
import Button from "@/components/Button.vue";
const percentBar = ref(40);
const percentCircle = ref(60);
const addPercentBar = () => {
  percentBar.value += 10;
  if (percentBar.value > 100) {
    percentBar.value = 100;
  }
};
const removePercentBar = () => {
  percentBar.value -= 10;
  if (percentBar.value < 0) {
    percentBar.value = 0;
  }
};
const addPercentCircle = () => {
  percentCircle.value += 10;
  if (percentCircle.value > 100) {
    percentCircle.value = 100;
  }
};
const removePercentCircle = () => {
  percentCircle.value -= 10;
  if (percentCircle.value < 0) {
    percentCircle.value = 0;
  }
};
</script>
<template>
  <h1 class="heading-1">Progress</h1>
  <h2 class="heading-2">Progress Bar</h2>
  <div class="line line_block">
    <progress-bar maxWidth="400px" :percent="percentBar" color="danger" />
    <Button label="Add 10%" @click="addPercentBar" />
    <Button label="Remove 10%" @click="removePercentBar" />
  </div>
  <h2 class="heading-2">Progress Circle</h2>
  <div class="line line_block">
    <ProgressCircle :percent="percentCircle" color="warning" />
    <Button label="Add 10%" @click="addPercentCircle" />
    <Button label="Remove 10%" @click="removePercentCircle" />
  </div>
</template>
