<template>
  <section>
    <div>
      <form>
        <AppInputControl type="email" v-model="email"
          >E-Mail Address</AppInputControl
        >
        <AppInputControl type="password" v-model="password"
          >Password</AppInputControl
        >
        <AppButton type="submit">{{ isLogin ? "Login" : "Sign Up" }}</AppButton>
        <AppButton type="button" @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? "Signup" : "Login" }}</AppButton
        >
      </form>
    </div>
  </section>
</template>

<script>
import AppInputControl from "~/components/UI/AppInputControl.vue";
import AppButton from "~/components/UI/AppButton.vue";
export default {
  name: "IndexPage",
  layout: "admin",
  components: {
    AppInputControl,
    AppButton,
  },
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
    };
  },
};
</script>
