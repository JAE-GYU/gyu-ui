<template>
  <div class="g-button__wrap">
    <h2>Basic Button</h2>
    <g-button
      kind="default"
      prefix-icon="fa fa-plus-square"
      size="medium"
      @click="handleClick"
    >default</g-button>

    <g-button
      kind="primary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      @click="handleClick"
    >primary</g-button>

    <g-button
      kind="secondary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      @click="handleClick"
    >secondary</g-button>

    <g-button
      kind="success"
      prefix-icon="fa fa-plus-square"
      size="medium"
      @click="handleClick"
    >success</g-button>

    <g-button
      kind="warning"
      prefix-icon="fa fa-plus-square"
      size="medium"
      @click="handleClick"
    >warning</g-button>

    <g-button kind="error" prefix-icon="fa fa-plus-square" size="medium" @click="handleClick">error</g-button>
  </div>

  <div class="g-button__wrap">
    <h2>rounded Button</h2>
    <g-button
      kind="default"
      prefix-icon="fa fa-plus-square"
      size="medium"
      rounded
      @click="handleClick"
    >default</g-button>

    <g-button
      kind="primary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      rounded
      @click="handleClick"
    >primary</g-button>

    <g-button
      kind="secondary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      rounded
      @click="handleClick"
    >secondary</g-button>

    <g-button
      kind="success"
      prefix-icon="fa fa-plus-square"
      size="medium"
      rounded
      @click="handleClick"
    >success</g-button>

    <g-button
      kind="warning"
      prefix-icon="fa fa-plus-square"
      size="medium"
      rounded
      @click="handleClick"
    >warning</g-button>

    <g-button
      kind="error"
      prefix-icon="fa fa-plus-square"
      size="medium"
      rounded
      @click="handleClick"
    >error</g-button>
  </div>

  <div class="g-button__wrap">
    <h2>Circle Button</h2>
    <g-button
      kind="default"
      prefix-icon="fa fa-plus-square"
      size="medium"
      circle
      @click="handleClick"
    ></g-button>

    <g-button
      kind="primary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      circle
      @click="handleClick"
    ></g-button>

    <g-button
      kind="secondary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      circle
      @click="handleClick"
    ></g-button>

    <g-button
      kind="success"
      prefix-icon="fa fa-plus-square"
      size="medium"
      circle
      @click="handleClick"
    ></g-button>

    <g-button
      kind="warning"
      prefix-icon="fa fa-plus-square"
      size="medium"
      circle
      @click="handleClick"
    ></g-button>

    <g-button
      kind="error"
      prefix-icon="fa fa-plus-square"
      size="medium"
      circle
      @click="handleClick"
    ></g-button>
  </div>

  <div class="g-button__wrap">
    <h2>Ghost Button</h2>
    <g-button
      class="ghost"
      kind="default"
      prefix-icon="fa fa-plus-square"
      size="medium"
      ghost
      @click="handleClick"
    >default</g-button>

    <g-button
      kind="primary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      ghost
      @click="handleClick"
    >primary</g-button>

    <g-button
      kind="secondary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      ghost
      @click="handleClick"
    >secondary</g-button>

    <g-button
      kind="success"
      prefix-icon="fa fa-plus-square"
      size="medium"
      ghost
      @click="handleClick"
    >success</g-button>

    <g-button
      kind="warning"
      prefix-icon="fa fa-plus-square"
      size="medium"
      ghost
      @click="handleClick"
    >warning</g-button>

    <g-button
      kind="error"
      prefix-icon="fa fa-plus-square"
      size="medium"
      ghost
      @click="handleClick"
    >error</g-button>
  </div>

  <div class="g-button__wrap">
    <h2>Link Button</h2>
    <g-button
      class="ghost"
      kind="default"
      prefix-icon="fa fa-plus-square"
      size="medium"
      link
      @click="handleClick"
    >default</g-button>

    <g-button
      kind="primary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      link
      @click="handleClick"
    >primary</g-button>

    <g-button
      kind="secondary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      link
      @click="handleClick"
    >secondary</g-button>

    <g-button
      kind="success"
      prefix-icon="fa fa-plus-square"
      size="medium"
      link
      @click="handleClick"
    >success</g-button>

    <g-button
      kind="warning"
      prefix-icon="fa fa-plus-square"
      size="medium"
      link
      @click="handleClick"
    >warning</g-button>

    <g-button
      kind="error"
      prefix-icon="fa fa-plus-square"
      size="medium"
      link
      @click="handleClick"
    >error</g-button>
  </div>

  <div class="g-button__wrap">
    <h2>Mixed</h2>
    <g-button
      kind="default"
      prefix-icon="fa fa-plus-square"
      size="medium"
      circle
      ghost
      @click="handleClick"
    ></g-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const handleClick = (): void => {
      alert("Button Clicked!");
    };

    return {
      handleClick,
    };
  },
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

.g-button__wrap .g-button {
  margin: 0 8px;
}
</style>
