<script setup>
import c3n97 from '@/Layouts/c3n97.vue'
// import iconMore from '@arco-design/web-vue/es/icon/';
</script>

<template>
  <c3n97 selectedMenuItem="0_3" bc1="实验室" bc2="OExperience">
    <a-row justify="space-around">
        <a-col v-for="item in dataList" :key="item.id" :span="8">
          <div :style="{ display: 'flex', textAlign: 'left', paddingBottom: '20px' }">
            <a-card :style="{ width: '360px' }" :title=item.title>
              <template #extra>
                <a-space>
                  <a-dropdown position="bl">
                    <a-button type="outline" size="small"><template #icon><iconMore /></template></a-button>
                    <template #content>
                      <a-doption>在新窗口中打开</a-doption>
                      <a-doption>举报</a-doption>
                      <a-doption>复制此体验</a-doption>
                    </template>
                  </a-dropdown>
                  <a-button type="primary" size="small">启动</a-button>
                </a-space>
              </template>
              {{ item.content }}
              <a-card-meta>
                <template #avatar>
                  <div
                      :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }"
                  >
                    <a-avatar :size="24" :style="{ marginRight: '8px' }">
                      {{ item.avatarText }}
                    </a-avatar>
                    <a-typography-text>{{ item.author }}</a-typography-text>
                  </div>
                </template>
              </a-card-meta>
            </a-card>
          </div>
        </a-col>
    </a-row>
  </c3n97>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        { title: 'col - 1', avatarText:'O' ,author: 'Oldsquaw', content: 'aaaaaa' },
        { title: 'col - 1', avatarText:'O' ,author: 'Oldsquaw', content: 'aaaaaa' },
        { title: 'col - 1', avatarText:'O' ,author: 'Oldsquaw', content: 'aaaaaa' },
        { title: 'col - 1', avatarText:'O' ,author: 'Oldsquaw', content: 'aaaaaa' },
        { title: 'col - 1', avatarText:'O' ,author: 'Oldsquaw', content: 'aaaaaa' },
        { title: 'col - 1', avatarText:'O' ,author: 'Oldsquaw', content: 'aaaaaa' },
        { title: 'col - 1', avatarText:'O' ,author: 'Oldsquaw', content: 'aaaaaa' },
        { title: 'col - 1', avatarText:'O' ,author: 'Oldsquaw', content: 'aaaaaa' },
        { title: 'col - 1', avatarText:'O' ,author: 'Oldsquaw', content: 'aaaaaa' },
      ]
    }
  }
}
</script>
