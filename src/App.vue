<template>
  <g-button
    prefix-icon="fa fa-user"
    suffix-icon="fa fa-plus-square"
    size="medium"
    @click="handleClick"
  >TEST BTN</g-button>
  <!-- <g-input></g-input> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const handleClick = (e: MouseEvent) => {
      alert("Button Clicked!");
    };

    return {
      handleClick
    };
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
