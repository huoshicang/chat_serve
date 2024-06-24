import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

import {
  ChatbubbleOutline as Chat,
  ImageOutline as Image,
  InfiniteOutline as Infinite,
} from '@vicons/ionicons5'

const routes: readonly RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home_page',
    children: [
      {
        path: 'chat',
        name: 'chat',
        components: {
          main_entrance: import("@/view/chat/ChatView.vue")
        },
        meta: {
          title: '聊天',
          label: true,
          icon: Chat
        }
      },
      {
        path: 'complete',
        name: 'complete',
        components: {
          main_entrance: import("@/view/complete/CompleteView.vue")
        },
        meta: {
          title: '补全',
          label: true,
          icon: Infinite
        }
      },
      {
        path: 'picture',
        name: 'picture',
        components: {
          main_entrance: import("@/view/picture/PictureView.vue")
        },
        meta: {
          title: '图片',
          label: true,
          icon: Image
        }
      },

    ]
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router as router_config;
