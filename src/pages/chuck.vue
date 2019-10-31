<script>

  export default {
    async created() {
      this.$store.dispatch('chuck/GET_CATEGORIES')
    },
    data() {
      return {
      };
    },
    computed: {
      categories() {
        return this.$store.getters['chuck/categories'];
      },
      selectedChuck() {
        return this.$store.getters['chuck/chuck'];
      },
      chuckFact() {
        return this.$store.getters['chuck/fact'];
      }
    },
    methods: {
      chooseChuck(category) {
        this.$store.dispatch('chuck/CHOOSE', category)
        //this.$store.dispatch('chuck/GET_FACT', category)
      },
      isSelected(category){
        return category == this.selectedChuck
      }
    }
  }

</script>

<template>

  <div>
      <b-container fluid>
        <b-row>
          <b-col>
            <h1>Chuck</h1>
          </b-col>
        </b-row>
        <Loader module="chuck">
          <b-row class="justify-content-md-left">
            <b-col>
              <h2>Categories</h2>
              <ul>
                <li
                v-for="category in categories"
                @click="chooseChuck(category)"
                :class="{ selected: isSelected(category) }">
                  {{ category}}
                </li>
              </ul>
            </b-col>
            <b-col>
              <h2 class="text-capitalize">{{selectedChuck}}</h2>

              {{ chuckFact }}

            </b-col>
          </b-row>
        </Loader>
      </b-container>
  </div>


</template>

<style lang="scss" scoped>
ul li {
  list-style-type: none;
  cursor: pointer;
  color: var(--purple);
}
.selected {
  text-decoration: underline;
}
</style>
