<script>

  import Calc from '../components/calc.vue'
  import Sum from '../components/sum.vue'

  export default {
    components: {
      Calc,
      Sum,
    },
    data() {
      return {
      }
    },
    computed: {
      num() {
        return this.$store.getters['number']
      }
    },
    methods: {

    }
  }

</script>

<template>

  <div>
      <b-container fluid>
        <b-row>
          <b-col>
            <h1>Home</h1>
            <b-alert show>Today's date is {{ this.formatDate(new Date()) }}</b-alert>
            Here's your number: {{ num }}
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <Calc class="my-2"></Calc>
            <Sum class="my-2"></Sum>
            <Calc class="my-2"></Calc>
          </b-col>
        </b-row>
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
