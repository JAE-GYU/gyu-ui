<template>
  <h1>{{ count }}</h1>
  <div class="g-button__wrap">
    <h2>Basic Button</h2>
    <g-button
      kind="default"
      prefix-icon="fa fa-plus-square"
      size="medium"
      @click="handleClick"
      @mouseover="() => (count += 1)"
      >default</g-button
    >

    <g-button
      kind="primary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      @click="handleClick"
      >primary</g-button
    >

    <g-button
      kind="secondary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      @click="handleClick"
      >secondary</g-button
    >

    <g-button
      kind="success"
      prefix-icon="fa fa-plus-square"
      size="medium"
      @click="handleClick"
      >success</g-button
    >

    <g-button
      kind="warning"
      prefix-icon="fa fa-plus-square"
      size="medium"
      @click="handleClick"
      >warning</g-button
    >

    <g-button
      kind="danger"
      prefix-icon="fa fa-plus-square"
      size="medium"
      @click="handleClick"
      >danger</g-button
    >
  </div>

  <div class="g-button__wrap">
    <h2>Button Size</h2>
    <g-button
      kind="primary"
      prefix-icon="fa fa-plus-square"
      size="mini"
      @click="handleClick"
      >mini</g-button
    >

    <g-button
      kind="primary"
      prefix-icon="fa fa-plus-square"
      size="small"
      @click="handleClick"
      >small</g-button
    >

    <g-button
      kind="primary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      @click="handleClick"
      >medium</g-button
    >

    <g-button
      kind="primary"
      prefix-icon="fa fa-plus-square"
      size="large"
      @click="handleClick"
      >large</g-button
    >
  </div>

  <div class="g-button__wrap">
    <h2>rounded Button</h2>
    <g-button
      kind="default"
      prefix-icon="fa fa-plus-square"
      size="mini"
      rounded
      @click="handleClick"
      >default</g-button
    >

    <g-button
      kind="primary"
      prefix-icon="fa fa-plus-square"
      size="small"
      rounded
      @click="handleClick"
      >primary</g-button
    >

    <g-button
      kind="secondary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      rounded
      @click="handleClick"
      >secondary</g-button
    >

    <g-button
      kind="success"
      prefix-icon="fa fa-plus-square"
      size="large"
      rounded
      @click="handleClick"
      >success</g-button
    >

    <g-button
      kind="warning"
      prefix-icon="fa fa-plus-square"
      size="medium"
      rounded
      @click="handleClick"
      >warning</g-button
    >

    <g-button
      kind="danger"
      prefix-icon="fa fa-plus-square"
      size="medium"
      rounded
      @click="handleClick"
      >danger</g-button
    >
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
      size="mini"
      circle
      @click="handleClick"
    ></g-button>

    <g-button
      kind="success"
      prefix-icon="fa fa-plus-square"
      size="small"
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
      kind="danger"
      prefix-icon="fa fa-plus-square"
      size="large"
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
      >default</g-button
    >

    <g-button
      kind="primary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      ghost
      @click="handleClick"
      >primary</g-button
    >

    <g-button
      kind="secondary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      ghost
      @click="handleClick"
      >secondary</g-button
    >

    <g-button
      kind="success"
      prefix-icon="fa fa-plus-square"
      size="medium"
      ghost
      @click="handleClick"
      >success</g-button
    >

    <g-button
      kind="warning"
      prefix-icon="fa fa-plus-square"
      size="medium"
      ghost
      @click="handleClick"
      >warning</g-button
    >

    <g-button
      kind="danger"
      prefix-icon="fa fa-plus-square"
      size="medium"
      ghost
      @click="handleClick"
      >danger</g-button
    >
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
      >default</g-button
    >

    <g-button
      kind="primary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      link
      @click="handleClick"
      >primary</g-button
    >

    <g-button
      kind="secondary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      link
      @click="handleClick"
      >secondary</g-button
    >

    <g-button
      kind="success"
      prefix-icon="fa fa-plus-square"
      size="medium"
      link
      @click="handleClick"
      >success</g-button
    >

    <g-button
      kind="warning"
      prefix-icon="fa fa-plus-square"
      size="medium"
      link
      @click="handleClick"
      >warning</g-button
    >

    <g-button
      kind="danger"
      prefix-icon="fa fa-plus-square"
      size="medium"
      link
      @click="handleClick"
      >danger</g-button
    >
  </div>

  <div class="g-button__wrap">
    <h2>Mixed</h2>
    <g-button
      kind="default"
      prefix-icon="fa fa-plus-square"
      size="large"
      circle
      ghost
      @click="handleClick"
    ></g-button>
  </div>

  <div class="g-button__wrap">
    <h2>Button Status</h2>
    <g-button
      kind="primary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      disabled
      @click="handleClick"
      >disabled</g-button
    >

    <g-button
      kind="primary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      :skeleton="skeleton"
      @click="handleClick"
      >skeleton</g-button
    >

    <g-button
      kind="primary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      loading
      @click="handleClick"
      >skeleton</g-button
    >

    <g-button
      kind="primary"
      prefix-icon="fa fa-plus-square"
      size="medium"
      circle
      loading
      @click="handleClick"
      >skeleton</g-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const count = ref(0);

    const handleClick = (e: MouseEvent): void => {
      count.value += 1;
      console.log("Click", e.target);
    };

    const skeleton = ref(true);

    onMounted(() => {
      setInterval(() => {
        skeleton.value = !skeleton.value;
      }, 3000);
    });

    return {
      handleClick,
      skeleton,
      count
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

.g-button__wrap .g-button {
  margin: 0 8px;
}
</style>
