<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header flex" elevated>
      <q-toolbar class="flex-center">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title class="text-h5">
          My todoList
        </q-toolbar-title>
        <div class="text-subtitle1">{{dateNow}}</div>
      </q-toolbar>
      <q-img class="header-img absolute-top" src="../assets/rife.jpg" />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="240"
      :breakpoint="610"
    >
      <q-scroll-area style="height: calc(100% - 110px); margin-top: 110px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item clickable v-ripple to="/" exact>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section>
              Todos
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/help" exact>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section>
              Help
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/about" exact>
            <q-item-section avatar>
              <q-icon name="link" />
            </q-item-section>

            <q-item-section>
              About us
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/contacts" exact>
            <q-item-section avatar>
              <q-icon name="contacts" />
            </q-item-section>

            <q-item-section>
              Contacts
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top image-bg" style="height: 110px">
        <div class="absolute-bottom bg-transparent flex justify-between items-center">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="../assets/avatar.jpg" class="border">
          </q-avatar>
          <div>
            <div class="text-weight-bold">Ramzan Osminogovich</div>
            <div class="text-weight-bold mail">@octopussy</div>
          </div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component, route }">
        <Transition>
          <keep-alive>
            <component :is="Component" :key="route.path" />
          </keep-alive>
        </Transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { date } from 'quasar'

defineOptions({
  name: 'MainLayout'
})

const leftDrawerOpen = ref(false)

const dateNow = computed(() => {
  const dateNow = Date.now()
  const formatedString = date.formatDate(
    dateNow,
    "dddd D MMMM YYYY"
  )

  return formatedString
})

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>


<style scoped>
  .header-img {
    height: 100%;
    z-index: -1;
    filter: grey;
    opacity: 0.4;
  }
  .image-bg {
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgb(2, 0, 39) 0%, rgba(9,9,121,1) 26%, rgba(0,212,255,1) 100%);
  }
  .border {
    border: 2px solid white;
  }
  .header {
    min-height: 110px;
  }
  .mail {
    cursor: pointer;
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>