import { createStore } from 'vuex'

export default createStore({
  state: {
    cityId: 1,
  },
  mutations: {
    gettingCityId(store, id) {
        store.cityId = id;
    }
  },
  actions: {

  },
  getters: {
  }
})

