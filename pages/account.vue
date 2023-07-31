<template>
  <section>
    <div>
      <form @submit.prevent="onSubmit">
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
  name: "AccountPage",

  layout: "guest",
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
  methods: {
    onSubmit() {
      this.$store
        .dispatch("authenticateUser", {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push("/content");
        });
    },
  },
};
</script>
