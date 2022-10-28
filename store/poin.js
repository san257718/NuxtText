export const state = () => ({
  weathers: {},
});

export const mutations = {
  weathers(state, weathers = {}) {
    state.weathers = {
      ...weathers,
    };
  },
};

export const actions = {
  async fetchWeather({ commit }) {
    try {
      const { data } = await this.$api.getWeather();

      commit("weathers", data);
      return { data };
    } catch (e) {
      console.log('error')
      return {};
    }
  },
};
