<script setup>
import LayoutHeader from "@/components/layout/Header.vue";
import LayoutSidebar from "@/components/layout/Sidebar.vue";
</script>

<template>
  <div class="container">
    <layout-header />
    <layout-sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/global.scss";
#app {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;
  &._full {
    margin-left: 0;
  }
}
</style>
