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
          })
          .catch(
            (
              error // Handle error
            ) => console.error("Error:", error.response.data)
          );
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
