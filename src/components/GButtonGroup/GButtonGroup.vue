<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import "./GButtonGroup.scss";
import { defineComponent } from "vue";
export default defineComponent({
  name: "g-button-group"
});
</script>
