import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: null,
    },

    mutations: {
      setToken(state, token) {
        state.token = token;
      },

      clearToken(state, token) {
        state.token = null;
      },
    },
    actions: {
      authenticateUser(vuexContext, authData) {
        let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.APPLICATION_KEY}`;

        if (!authData.isLogin) {
          authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.APPLICATION_KEY}`;
        }

        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          })
          .then((result) => {
            vuexContext.commit("setToken", result.idToken);

            vuexContext.dispatch("setLogoutTimer", result.expiresIn * 1000);
          })
          .catch(
            (
              error // Handle error
            ) => console.error("Error:", error.response.data)
          );
      },

      setLogoutTimer(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit("clearToken");
        }, duration);
      },
    },
    getters: {
      isAuthenticated(state) {
        return state.token != null;
      },
    },
  });
};

export default createStore;
