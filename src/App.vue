<template>
  <g-input placeholder="Username" v-model="inputVal"></g-input>
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

.g-button__wrap .g-button {
  margin: 0 8px;
}
</style>
