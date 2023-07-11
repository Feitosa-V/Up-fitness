import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import modules from './vuex-modules'

export default createStore({
  plugins: [createPersistedState()],
  modules,
})
