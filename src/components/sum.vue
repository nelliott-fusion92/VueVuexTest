<script>

  export default {

    computed: {

      sum() {
        return this.$store.getters['number'] + this.$store.getters['add']
      },
    },
    methods: {

    }
  }

</script>

<template>

  <div>
    <div><h2>Sum component</h2></div>
    <div class="bignum">{{sum}}</div>
  </div>


</template>

<style lang="scss" scoped>
  .bignum {
    font-size: 2em;
    color: var(--success);
  }
</style>
