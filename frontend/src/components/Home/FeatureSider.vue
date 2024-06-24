<template>
  <a-layout-sider style="width: 48px; height: 100%;">
    
    
    <n-layout>
      <n-layout-header>He</n-layout-header>
      <n-layout-content style="height: 80%">
        <n-menu :options="menuOptions" :collapsed="true"/>
      </n-layout-content>
      <n-layout-footer>
        <n-button strong secondary type="tertiary" @click="changeTheme">
          <template #icon>
            <n-icon>
              <icon-sun-fill v-show="arco_theme === 'dark'"/>
              <icon-moon-fill v-show="arco_theme === ''"/>
            </n-icon>
          </template>
        </n-button>
      </n-layout-footer>
    </n-layout>
  </a-layout-sider>
</template>
<script setup lang="ts">
import {h, Component, ref, onBeforeMount} from 'vue'
import {NIcon} from 'naive-ui'
import type {MenuOption} from 'naive-ui'
import {RouterLink} from 'vue-router'
import {
  LaptopOutline as WorkIcon,
  LogOutOutline as HomeIcon
} from '@vicons/ionicons5'

import router_config from "@/router"

function renderIcon(icon: Component) {
  return () => h(NIcon, null, {default: () => h(icon)})
}

const menuOptions = ref([])

const arco_theme = ref("")

const changeTheme = () => {
  if (arco_theme.value === "") {
    arco_theme.value = "dark"
    document.body.setAttribute('arco-theme', 'dark')
  } else {
    arco_theme.value = ""
    document.body.removeAttribute('arco-theme');
  }
}


onBeforeMount(() => {
  router_config.getRoutes().map(route => {
    if (route.name === "home_page") {
      menuOptions.value = route.children.map(child => {
        return {
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  path: child.path
                }
              },
              { default: () => child.meta.title }
            ),
          key: child.name,
          disabled: !child.meta.label ?? false,
          icon: renderIcon(child.meta.icon)
        }
      })
    }
  })
})



</script>
<style scoped>

</style>
