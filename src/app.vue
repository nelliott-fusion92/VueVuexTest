<script>
  import (/* webpackMode: "eager" */  /* webpackPreload: true */ `../assets/css/theme.scss`)
  export default {
    name: 'app',
    components: {
    },
    methods: {
      active: function(n) {
        return this.$router.currentRoute.name == n
      },
    },
    computed: {
      routes() {
        return this.$router.options.routes.filter((route)=> {
          return route.meta.nav == true
        })
      },
    },

  }
</script>

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="bg-dark mb-2 fixed-top">
      <b-navbar-brand>
        <b-link class="logo" :to="{ name: 'home' }">
          <div class="brand-title">
            VueVuexTest
          </div>
        </b-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            v-for="nav in routes"
            :key="nav.name"
            :to="{ name: nav.name }"
            :active="active(nav.name)"
          >
            {{ nav.meta.label }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container class="content" fluid>
      <b-row>
        <b-col>
          <!-- YOUR ROUTER VIEWS END UP HERE -->
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
    <footer variant="info" class="bg-dark page-footer font-small fixed-bottom">
      Footer.
    </footer>
  </div>

</template>

<style lang="scss">

  .content {
    padding: 80px 0 40px 0;
  }


</style>
