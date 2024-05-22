<script setup>
import c3n97 from '@/Layouts/c3n97.vue'
import { Modal } from '@arco-design/web-vue';
import { Notification } from '@arco-design/web-vue';

function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === "QuotaExceededError" ||
            // Firefox
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
    );
  }
}

if (storageAvailable('localStorage')) {
  Notification.success('localStorage 可用。')
  if (!localStorage['initialized']) {
    function onInitModalSuccess() {
      localStorage['initialized'] = 'success';
      location.reload()
      return true
    }
    Modal.info({
      title: '初次使用警告',
      content: 'OStudio 不稳定并处于积极开发阶段，如果您能够接受相关风险，请继续，反之请立即退出此页面。继续使用代表您已详细阅读并理解此通知。',
      maskClosable: false,
      onOk: onInitModalSuccess(),
    });
    Notification.success('成功初始化 OStudio，页面正在重载。')
  } else {

  }
} else {
  Modal.error({
    title: 'localStorage 不可用',
    content: 'OStudio 必须使用 localStorage 来执行某些操作。请检查您的 localStorage 设置，然后重试。错误代码：ERR_STORAGE_NOT_AVAILABLE'
  });
}
</script>

<template>
  <c3n97 selected-menu-item="0_4" bc1="实验室" bc2="OStudio">
    <a-spin loading dot tip="在处理时请等待。"></a-spin>
  </c3n97>
</template>

<style scoped>

</style>
