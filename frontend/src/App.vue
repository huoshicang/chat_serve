<template>
  <a-layout class="layout-demo">
    <FeatureSider/>
    <a-layout>
      <a-layout>
        <a-layout-content>
          <router-view name="main_entrance" v-slot="{ Component }">
            <transition name="fade">
              <keep-alive>
                <component :is="Component"/>
              </keep-alive>
            </transition>
          </router-view>
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup>
import FeatureSider from "@/components/Home/FeatureSider.vue";




</script>
<style scoped>
.layout-demo {
  height: 100vh;
  background: var(--color-bg-1);
}

.layout-demo :deep(.arco-layout-sider) {
  border-right: 1px solid var(--color-text-4);
}


.layout-demo :deep(.arco-layout-content),
.layout-demo :deep(.arco-layout-sider) {
  color: var(--color-text-1);
  background: var(--color-bg-1);
}

.layout-demo :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-fill-1);
}

.layout-demo :deep(.arco-layout-footer) {
  border-top: 1px solid var(--color-text-4);
  height: 30px;
  line-height: 30px;
  color: var(--color-text-3);
  background: var(--color-bg-3);
  font-weight: 400;
  font-size: 14px;
  text-align: center;
}

.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
}
</style>



