<template>
  <div class="input-group">
    <g-input
      placeholder="Username"
      v-model="inputVal"
      label="Username"
      label-position="top"
    ></g-input>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const count = ref(0);

    const inputVal = ref("");

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
      count,
      inputVal
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

.input-group .g-input__wrap {
  vertical-align: bottom;
  margin-left: 0.5rem;
}
</style>
