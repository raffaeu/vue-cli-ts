<template>
  <button @click="onClick">Click Me</button>
</template>


<script lang="ts">

import Quasar from 'quasar'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    props: {
        propMessage: String
    }
})
export default class Hello extends Vue {
  onClick(): void {
    alert('Hello World')
  }
}
</script>

<style lang="stylus">


</style>
