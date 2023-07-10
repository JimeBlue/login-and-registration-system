<template>
  <button v-bind="$attrs" v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  name: "AppButton",
};
</script>
