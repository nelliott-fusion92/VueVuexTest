import '@babel/polyfill'

(async () => {
  const { default: Vue } = await import(/* webpackChunkName: "Vue" */ 'vue')
  const { default: App } = await import(/* webpackChunkName: "App" */ './app.vue')
  const { default: BootstrapVue } = await import(/* webpackChunkName: "BootstrapVue" */ 'bootstrap-vue')

  const { default: router } = await import(/* webpackChunkName: "router" */ './router')
  const { default: store } = await import(/* webpackChunkName: "store" */ './store/store')
  const { default: moment } = await import(/* webpackChunkName: "moment" */ 'moment')

  const { default: Loader } = await import(/* webpackChunkName: "Loader" */ './components/loader.vue')

  Vue.use(BootstrapVue)

  Vue.config.productionTip = false

  // Make stuff globally accessible in all vue components
  Vue.mixin({
    components: {
      Loader,
    },
    methods: {
      formatDate: function(date) {
        return moment(date).format('M/DD/YYYY h:mm a')
      },
    },
    computed: {
    }
  })

  new Vue({
    store,
    el: '#app',
    router,
    template: '<app/>',
    components: { App },
  })

})()
