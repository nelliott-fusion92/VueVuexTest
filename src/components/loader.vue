<script>
  export default {
    props: {
      module: {
        type: String,
        default: '',
      },
    },
    computed: {
      loadStatus() {
        if(this.module == '') {
          return this.$store.getters['loadStatus']
        }
        return this.$store.getters[`${ this.module }/loadStatus`]
      }
    },
  }

</script>

<template>
  <div>
    <slot></slot>
    <div v-if="loadStatus.status == 'LOADING'" class="container">
      <b-spinner variant="primary" label="Text Centered"></b-spinner>
      <div class="loading-text">{{ loadStatus.detail }}</div>
    </div>
    <div v-else-if="loadStatus.status == 'ERROR'" class="container">
      <div class="error-text">{{ loadStatus.detail }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    text-align: center;
  }
  .loader-text {
    font-size: .7em;
    color: var(--blue);
  }
  .error-text {
    color: var(--danger);
  }
</style>
