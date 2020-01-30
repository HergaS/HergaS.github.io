import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: 1,
        image: 'teskoGallery.png',
        link: 'https://tesko-gallery.firebaseapp.com/'
      },
      {
        id: 2,
        image: 'rgbGame.png',
        link: 'https://hergas.github.io/RGB-Game/'
      },
      {
        id: 3,
        image: 'formSite.png',
        link: 'https://hergas.github.io/form/'
      }
    ]
  },
  getters: {
    projects: state => {
      return state.projects
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
