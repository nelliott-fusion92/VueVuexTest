<script>

  export default {

    computed: {
      num: {
        get() {
          return this.$store.getters['number']
        },
        set(n) {
          this.$store.dispatch('SET_NUMBER', n)
        },
      },
      add: {
        get() {
          return this.$store.getters['add']
        },
        set(n) {
          this.$store.dispatch('SET_ADD', n)
        },
      },
      sum() {
        return this.num + this.add
      },
    },
    methods: {

    }
  }

</script>

<template>

  <div>
    <div><h2>Calc component</h2></div>
    <b-form-input v-model="num" placeholder=""></b-form-input>
    Add:
    <b-form-input v-model="add" placeholder=""></b-form-input>
    <div class="my-2">Add this number: {{ add }}</div>
    <div class="my-2">Do the math: {{ num }} + {{ add }} = {{ sum }}</div>

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
