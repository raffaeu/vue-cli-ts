<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" class="glossy">
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        Quasar App
        <div slot="subtitle">Running on Quasar v{{$q.version}}</div>
      </q-toolbar-title>
    </q-toolbar>

    <div slot="left">
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->

      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-item @click="launch('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click="launch('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click="launch('https://gitter.im/quasarframework/Lobby')">
          <q-item-side icon="chat" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-item>
        <q-item @click="launch('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </div>

    <!--
      Replace following <div> with
      <router-view /> component
      if using subRoutes
    -->
    <div class="layout-padding logo-container non-selectable no-pointer-events">
      <div class="logo" :style="position">
        <img src="~assets/quasar-logo-full.svg">
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts">
var moveForce = 30
var rotateForce = 40

import * as Quasar from 'quasar'
import * as Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    props: {
        propMessage: String
    }
})
export default class Index extends Vue {
    quasarVersion = Quasar.version
    moveX = 0
    moveY = 0
    rotateY = 0
    rotateX = 0
    get position() {

        let transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg)`
        return {
            top: this.moveY + 'px',
            left: this.moveX + 'px',
            '-webkit-transform': transform,
            '-ms-transform': transform,
            transform
        }
    }

    move(event) {
        const {width, height} = Quasar.Utils.dom.viewport()
        const {top, left} = Quasar.Utils.event.position(event)
        const halfH = height / 2
        const halfW = width / 2

        this.moveX = (left - halfW) / halfW * -moveForce
        this.moveY = (top - halfH) / halfH * -moveForce
        this.rotateY = (left / width * rotateForce * 2) - rotateForce
        this.rotateX = -((top / height * rotateForce * 2) - rotateForce)
    }
    mounted() {
        this.$nextTick(() => {
            document.addEventListener('mousemove', this.move)
            document.addEventListener('touchmove', this.move)
        })
    }
    beforeDestroy() {
        document.removeEventListener('mousemove', this.move)
        document.removeEventListener('touchmove', this.move)
    }
}
</script>

<style lang="stylus">
.logo-container
  width 255px
  height 242px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d
</style>
