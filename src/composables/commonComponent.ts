import { PropType, computed } from "vue";
import { GyuUISize, GyuUIKind } from "@/types/gyu-ui";

/* props */
const kindProps = {
  kind: {
    type: String as PropType<GyuUIKind>,
    default: "default",
    validator: (val: GyuUIKind) => {
      return Object.values(GyuUIKind).includes(val);
    }
  }
};

const sizeProps = {
  size: {
    type: String as PropType<GyuUISize>,
    default: "medium",
    validator: (val: GyuUISize) => {
      return Object.values(GyuUISize).includes(val);
    }
  }
};

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
};

/* composables */
const useComponentClasses = (props: any) => {
  const sizableClasses = computed(
    (): Record<string, boolean> => {
      return {
        "g-size--mini": props.size === GyuUISize.MINI,
        "g-size--small": props.size === GyuUISize.SMALL,
        "g-size--medium": props.size === GyuUISize.MEDIUM,
        "g-size--large": props.size === GyuUISize.LARGE
      };
    }
  );

  const statusClasses = computed(
    (): Record<string, boolean> => {
      return {
        "is-disabled": props.disabled,
        "is-loading": props.loading,
        "is-skeleton": props.skeleton
      };
    }
  );

  return {
    sizableClasses,
    statusClasses
  };
};

export { sizeProps, kindProps, statusProps, useComponentClasses };
