import { PropType } from "vue";
import { LabelPosition, InputType } from "@/types/input";

const inputProps = {
  type: {
    type: String as PropType<InputType>,
    default: "text",
    validator: (val: InputType) => {
      if (["date", "datetime-local", "month", "time", "week"].includes(val)) {
        console.warn("Use 'g-datetime-picker' instead");
      } else if (val === "file") {
        console.warn("Use 'g-upload' instead");
      }
      return Object.values(InputType).includes(val);
    }
  },
  modelValue: {
    default: undefined
  },
  placeholder: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: ""
  },
  labelPosition: {
    type: String as PropType<LabelPosition>,
    default: "left",
    validator: (val: LabelPosition) => {
      return Object.values(LabelPosition).includes(val);
    }
  },
  fluid: {
    type: Boolean,
    default: false
  }
};

/* selectbox, checkbox, radio */
const selectableProps = {
  options: {
    type: Object
  }
};

export { inputProps };
