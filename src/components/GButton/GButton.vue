<template>
  <button
    class="g-button"
    :class="[btnClasses, sizableClasses, statusClasses]"
    :disabled="disabled || loading || skeleton"
    @click.capture="handleClick"
  >
    <template v-if="!skeleton">
      <span v-if="prefixIcon && !loading" class="button__icon prefix-icon">
        <i :class="prefixIcon"></i>
      </span>
      <span v-if="!circle" class="button__text">
        <slot></slot>
      </span>
      <span
        v-if="(suffixIcon && !circle) || loading"
        class="button__icon suffix-icon"
      >
        <i :class="suffixIconClass"></i>
      </span>
    </template>
  </button>
</template>

<script lang="ts">
import "./GButton.scss";
import {
  sizeProps,
  kindProps,
  statusProps,
  useComponentClasses
} from "@/composables/commonComponent";
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "g-button",
  inheritAttrs: false,
  props: {
    ...sizeProps,
    ...kindProps,
    ...statusProps,
    nativeType: {
      type: String,
      default: "button",
      validator: (val: string) => {
        return ["button", "submit", "reset"].includes(val);
      }
    },
    prefixIcon: {
      type: String,
      default: undefined
    },
    suffixIcon: {
      type: String,
      default: undefined
    },
    link: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const { sizableClasses, statusClasses } = useComponentClasses(props);

    const btnClasses = computed(
      (): Record<string, boolean> => {
        return {
          "is-link": props.link,
          "is-ghost": props.ghost,
          "is-circle": props.circle,
          "is-rounded": props.rounded,
          [`g-button--${props.kind}`]: true
        };
      }
    );

    const suffixIconClass = computed((): string => {
      return props.loading ? "fa fa-spinner fa-spin" : props.suffixIcon;
    });

    const handleClick = (ev: MouseEvent) => {
      if (props.disabled || props.loading || props.skeleton) {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();
      } else {
        emit("click", ev);
      }
    };

    return {
      sizableClasses,
      statusClasses,
      btnClasses,
      suffixIconClass,
      handleClick
    };
  }
});
</script>
