import {
  PropType,
  computed,
} from "vue";
import { GYU_UI_SIZE, GYU_UI_KIND } from "@/types/gyu-ui";

const kindProps = {
  kind: {
    type: String as PropType<GYU_UI_KIND>,
    default: "default",
    validator: (val: GYU_UI_KIND) => {
      return Object.values(GYU_UI_KIND).includes(val);
    }
  },
}

const sizeProps = {
  size: {
    type: String as PropType<GYU_UI_SIZE>,
    default: "medium",
    validator: (val: GYU_UI_SIZE) => {
      return Object.values(GYU_UI_SIZE).includes(val);
    }
  },
}

const statusProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  skeleton: {
    type: Boolean,
    default: false
  }
}

const useComponentClasses = (props: any) => {
  const sizableClasses = computed((): Record<string, boolean> => {
    return {
      'g-size-mini': props.size === GYU_UI_SIZE.MINI,
      'g-size-small': props.size === GYU_UI_SIZE.SMALL,
      'g-size-medium': props.size === GYU_UI_SIZE.MEDIUM,
      'g-size-large': props.size === GYU_UI_SIZE.LARGE,
    }
  });

  const statusClasses = computed((): Record<string, boolean> => {
    return {
      'g-status-disabled': props.disabled,
      'g-status-loading': props.loading,
      'g-status-skeleton': props.skeleton,
    }
  });

  return {
    sizableClasses,
    statusClasses,
  }
}

export {
  sizeProps,
  kindProps,
  statusProps,
  useComponentClasses
}