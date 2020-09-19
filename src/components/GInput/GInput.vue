<template>
  <label class="g-input__wrap" :class="inputClasses">
    <span class="g-input__label-text">Username</span>
    <input
      v-bind="attrs"
      class="g-input__inner"
      v-model="inputValue"
      :placeholder="placeholder"
    />
  </label>
</template>

<script lang="ts">
import "./GInput.scss";

import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  name: "g-input",
  inheritAttrs: false,
  props: {
    modelValue: String,
    placeholder: String,
    innerLabel: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit, attrs }) {
    const inputValue = computed({
      get: () => props.modelValue,
      set: value => emit("update:modelValue", value)
    });

    const inputClasses = computed(
      (): Record<string, boolean> => {
        return {
          "is-inner-label": props.innerLabel,
          "is-empty": !props.modelValue
        };
      }
    );

    return {
      inputClasses,
      inputValue,
      attrs
    };
  }
});
</script>

<style lang="scss" scoped></style>
