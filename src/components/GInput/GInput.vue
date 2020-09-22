<template>
  <label class="g-input__wrap" :class="inputClasses">
    <span class="g-input__label-text" v-if="label">{{ label }}</span>
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
import { inputProps } from "@/composables/formComponent";

import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "g-input",
  inheritAttrs: false,
  props: {
    ...inputProps
  },
  setup(props, { emit, attrs }) {
    const inputValue = computed({
      get: () => props.modelValue,
      set: value => emit("update:modelValue", value)
    });

    const inputClasses = computed(
      (): Record<string, boolean> => {
        return {
          "is-fluid": props.fluid,
          [`label-${props.labelPosition}`]: true
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
