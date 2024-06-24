<template>
  <div id="chatView">
    <n-layout style="height: 360px" has-sider>
      <n-layout-sider bordered content-style="padding: 24px;" :native-scrollbar="false">
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
      </n-layout-sider>
      <n-layout-content :native-scrollbar="false">
        <n-layout :native-scrollbar="false" content-style="padding: 24px;">
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
        </n-layout>
        <n-layout-footer position="absolute" bordered>
          成府路
        </n-layout-footer>
      </n-layout-content>
    </n-layout>
    
    
    
    <!--<n-layout style="height: 360px">-->
    <!--  <n-layout-header style="height: 64px; padding: 24px" bordered>-->
    <!--    颐和园路-->
    <!--  </n-layout-header>-->
    <!--  <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>-->
    <!--    <n-layout-sider-->
    <!--      content-style="padding: 24px;"-->
    <!--      :native-scrollbar="false"-->
    <!--      bordered-->
    <!--    >-->
    <!--      <n-h2>海淀桥</n-h2>-->
    <!--      <n-h2>海淀桥</n-h2>-->
    <!--      <n-h2>海淀桥</n-h2>-->
    <!--      <n-h2>海淀桥</n-h2>-->
    <!--      <n-h2>海淀桥</n-h2>-->
    <!--      <n-h2>海淀桥</n-h2>-->
    <!--      <n-h2>海淀桥</n-h2>-->
    <!--      <n-h2>海淀桥</n-h2>-->
    <!--      <n-h2>海淀桥</n-h2>-->
    <!--      <n-h2>海淀桥</n-h2>-->
    <!--      <n-h2>海淀桥</n-h2>-->
    <!--      <n-h2>海淀桥</n-h2>-->
    <!--    </n-layout-sider>-->
    <!--    <n-layout content-style="padding: 24px;" :native-scrollbar="false">-->
    <!--      <n-h2>平山道</n-h2>-->
    <!--      <n-h2>平山道</n-h2>-->
    <!--      <n-h2>平山道</n-h2>-->
    <!--      <n-h2>平山道</n-h2>-->
    <!--      <n-h2>平山道</n-h2>-->
    <!--      <n-h2>平山道</n-h2>-->
    <!--      <n-h2>平山道</n-h2>-->
    <!--      <n-h2>平山道</n-h2>-->
    <!--      <n-h2>平山道</n-h2>-->
    <!--      <n-h2>平山道</n-h2>-->
    <!--      <n-h2>平山道</n-h2>-->
    <!--      <n-h2>平山道</n-h2>-->
    <!--    </n-layout>-->
    <!--  </n-layout>-->
    <!--  <n-layout-footer-->
    <!--    position="absolute"-->
    <!--    style="height: 64px; padding: 24px"-->
    <!--    bordered-->
    <!--  >-->
    <!--    城府路-->
    <!--  </n-layout-footer>-->
    <!--</n-layout>-->
    
    <!--<a-layout class="layout-demo">-->
    <!--  <a-layout-sider-->
    <!--    hide-trigger-->
    <!--    collapsible-->
    <!--    :collapsed="collapsed"-->
    <!--  >-->
    <!--    <a-menu-->
    <!--      :style="{ width: '200px', height: '100%' }"-->
    <!--      :default-open-keys="['0']"-->
    <!--      :default-selected-keys="['0_2']"-->
    <!--      show-collapse-button-->
    <!--      breakpoint="xl"-->
    <!--      @collapse="onCollapse"-->
    <!--      @menuItemClick="onClickMenuItem"-->
    <!--    >-->
    <!--      -->
    <!--      <a-dropdown v-for="(item, index) in lis" trigger="contextMenu" alignPoint>-->
    <!--        <a-menu-item :key="index" :data-obj="index">-->
    <!--          <template #icon>-->
    <!--            <icon-apps></icon-apps>-->
    <!--          </template>-->
    <!--          {{ item.title }}-->
    <!--        </a-menu-item>-->
    <!--        <template #content>-->
    <!--          <a-doption @click="cli('删除', item.id)">删除</a-doption>-->
    <!--          <a-doption @click="cli('重命名', item.id)">重命名</a-doption>-->
    <!--          <a-doption @click="cli('随便写', item.id)">随便写</a-doption>-->
    <!--        </template>-->
    <!--      </a-dropdown>-->
    <!--    -->
    <!--    </a-menu>-->
    <!--  </a-layout-sider>-->
    <!--  <a-layout>-->
    <!--    <a-layout>-->
    <!--      <a-layout-content>-->
    <!--        Chat-->
    <!--      </a-layout-content>-->
    <!--    </a-layout>-->
    <!--  </a-layout>-->
    <!--</a-layout>-->
  </div>
</template>

<script setup>
import {ref} from "vue";
import {Message} from "@arco-design/web-vue";

const collapsed = ref(false);
const onCollapse = () => {
  collapsed.value = !collapsed.value;
};

const onClickMenuItem = (key) => {
  Message.info({content: `You select ${key}`, showIcon: true});
}


const lis = ref([
  {
    title: '555551555551555551555551',
    id: '11',
  },
  {
    title: '2',
    id: '22',
  },
  {
    title: '3',
    id: '33',
  },
  {
    title: '4',
    id: '44',
  },
]);

const renameByTitle = ref('重命名');

const cli = (text, id) => {
  Message.info(text + id);
  if (text === '删除') {
    removeItemById(id);
  } else if (text === '重命名') {
    renameById(id);
  }
};

const removeItemById = (id) => {
  lis.value = lis.value.filter((item) => item.id !== id);
  Message.success('删除成功');
};

const renameById = (id) => {
  lis.value = lis.value.filter((item) => {
    if (item.id === id) {
      return (item.title = renameByTitle.value);
    } else return true;
  });
  Message.success('重命名成功');
};
</script>

<style scoped>
#chatView {
  height: calc(100vh - 30px);;
}

.layout-demo {
  height: 100%;
}
</style>
