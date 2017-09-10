<template>

  <q-layout ref="layout">

    <!-- A Toolbar with a title and subtitle -->
    <q-toolbar slot="header">

      <!-- collapse/expand -->
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>

      <!-- title -->
      <q-toolbar-title color="deep-orange">
        {{title}}
        <span slot="subtitle">
          {{subTitle}}
        </span>
      </q-toolbar-title>

    </q-toolbar>

    <!-- Left Drawer -->
    <div slot="left">
      Left side layout
    </div>

    <!-- Navigation -->
    <div slot="navigation">
      Main content
    </div>

  </q-layout>  


</template>


<script lang="ts">

import Quasar, { QLayout, QToolbar, QToolbarTitle, QBtn, QIcon } from 'quasar'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'Main',
  components: { QLayout, QToolbar, QToolbarTitle, QBtn, QIcon }
})
export default class Main extends Vue {

  title: string = 'Symbiotics SA'
  subTitle: string = 'TA - Project Management System'
}

</script>

<style lang="stylus">


</style>
