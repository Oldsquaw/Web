<script setup>
import c3n97 from '@/Layouts/c3n97.vue'
import { useRoute } from 'vue-router';
import { Message } from '@arco-design/web-vue';

const route = useRoute();
const allowedWorks = [
  {
    workId: 'af1c8f5bae84cad6d84696b1007677db',
    cocoId: 224409116,
  }
];
const workId = route.query.id;

let allowed = false;
let workCocoId = 0;
let workLink = '';
for (let i = 0; i < allowedWorks.length; i++) {
  if (allowedWorks[i].workId === workId) {
    allowed = true;
    workCocoId = allowedWorks[i].cocoId;
    workLink = 'https://coco.codemao.cn/http-widget-proxy/https@SEP@run.oldsquaw.cn/share/?id=' + workCocoId;
  }
}

if (!allowed) {
  Message.error(
      '此作品正在审核中或暂不可用，请稍后再试！'
  );
} else {
  Message.info(
      '成功，请稍等进行反审核程序。'
  )
}
</script>

<template>
  <c3n97 selectedMenuItem="0_3" bc1="..." bc2="运行体验">
    <iframe :src=workLink width="100%" height="100%"/>
  </c3n97>
</template>

<style scoped>

</style>
