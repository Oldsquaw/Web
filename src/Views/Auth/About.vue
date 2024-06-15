<script setup>
import Layout from "@/Views/Auth/Layout.vue";
</script>

<template>
  <Layout selected-menu-item="4" show-image="f">
    <iframe src="https://blog.oldsquaw.cn/?post=2" :style="{ width: '100%', height: '1500px', border: 'none'}" class="iframe"></iframe>
  </Layout>
</template>

<style scoped>
.iframe {
  background-color: var(--color-neutral-2);
}
</style>
