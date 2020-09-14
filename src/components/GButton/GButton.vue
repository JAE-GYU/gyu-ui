<template>
  <button :class="[sizableClasses, statusClasses, btnClasses]">
    <i v-if="prefixIcon" :class="prefixIcon"></i>
    <slot></slot>
    <i v-if="suffixIcon" :class="suffixIcon"></i>
  </button>
</template>

<script lang="ts">
import {
  sizeProps,
  kindProps,
  statusProps,
  useComponentClasses,
} from "../../composables/commonComponent";
import { defineComponent, PropType, computed } from "vue";
export default defineComponent({
  name: "g-button",
  props: {
    ...sizeProps,
    ...kindProps,
    ...statusProps,
    nativeType: {
      type: String,
      default: "button",
      validator: (val: string) => {
        return ["button", "submit", "reset"].includes(val);
      },
    },
    prefixIcon: {
      type: String,
      default: undefined,
    },
    suffixIcon: {
      type: String,
      default: undefined,
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const { sizableClasses, statusClasses } = useComponentClasses(props);

    const btnClasses = computed(
      (): Record<string, boolean> => {
        return {
          "g-btn-ghost": props.ghost,
          "g-btn-circle": props.circle,
          "g-btn-rounded": props.rounded,
        };
      }
    );

    return {
      sizableClasses,
      statusClasses,
      btnClasses,
    };
  },
});
</script>

<style lang="scss" scoped></style>
