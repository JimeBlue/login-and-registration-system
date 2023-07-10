<template>
  <div>
    <label><slot /></label>
    <input
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "AppInputControl",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
};
</script>
