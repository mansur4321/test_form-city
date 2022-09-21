import { createStore } from 'vuex'

export default createStore({
  state: {
    cityId: 1,
    htmlResponse: null,
    respMessage: '',
  },
  mutations: {
    gettingCityId(store, id) {
        store.cityId = id;
    },

    gettingMessageOfResp(store, mes) {
        store.respMessage = mes;
    }
  },
  actions: {
  },
  getters: {
  }
})

