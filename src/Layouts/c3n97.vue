<script setup>
defineProps({
  bc1: { type: String, required: false },
  bc2: { type: String, required: false },
  showCopyright: { type: Number, required: true },
  showHead: { type: Number, required: true },
  selectedMenuItem: { type: String, required: true },
})
</script>

<template>
  <a-layout class="main-layout" :style="componentStyle">
    <a-layout-sider collapsible breakpoint="lg">
      <div class="logo" />
      <a-menu
          :default-selected-keys=selectedMenuItem
          :style="{ width: '100%' }"
      >
        <a-menu-item key="0_1">
          <template #icon><icon-home /></template>
          <router-link to="/">主页</router-link>
        </a-menu-item>
        <a-menu-item key="0_2">
          <template #icon><icon-play-arrow /></template>
          <a href="//run.oldsquaw.cn">启动 Oldsquaw</a>
        </a-menu-item>
        <a-menu-item key="0_3">
          <template #icon><icon-attachment /></template>
          <router-link to="/Lab/Experiences">OExperience</router-link>
        </a-menu-item>
        <a-menu-item key="0_4">
          <template #icon><icon-code /></template>
          <router-link to="/Lab/Studio">OStudio</router-link>
        </a-menu-item>
        <a-menu-item key="0_5">
          <template #icon><icon-apps /></template>
          OLabs
        </a-menu-item>
      </a-menu>
      <!-- trigger -->
      <template #trigger="{ collapsed }">
        <IconCaretRight v-if="collapsed"></IconCaretRight>
        <IconCaretLeft v-else></IconCaretLeft>
      </template>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="padding-left: 20px;" v-if="showHead === 1">
        <div>
          <a-page-header
              title="Oldsquaw"
              subtitle="奥德思阔 中国官方网站"
              :show-back="false"
          >
            <template #breadcrumb>
              <a-breadcrumb>
                <a-breadcrumb-item>主屏幕</a-breadcrumb-item>
                <a-breadcrumb-item v-if="bc1 !== null && bc1 !== undefined" :prop="bc1" >{{ bc1 }}</a-breadcrumb-item>
                <a-breadcrumb-item v-if="bc2 !== null && bc2 !== undefined" :prop="bc2" >{{ bc2 }}</a-breadcrumb-item>
              </a-breadcrumb>
            </template>
          </a-page-header>
        </div>
      </a-layout-header >
      <a-layout style="padding: 0 24px;" class="content1">
        <a-layout-content>
          <slot class="content-slot"/>
        </a-layout-content>
        <a-layout-footer v-if="showCopyright === 1" class="content-copyright">©️Copyright 2023-2024 Oldsquaw, All right reserved.</a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import { defineComponent } from 'vue';
import { IconCaretRight, IconCaretLeft } from '@arco-design/web-vue/es/icon';

export default defineComponent({
  data() {
    return {
        componentStyle: {
          height: '100vh' // 默认使用 100vh 单位
        }
    }
  },
  mounted() {
    // 在组件挂载后更新组件的高度
    this.updateComponentHeight();

    // 监听窗口大小变化
    window.addEventListener('resize', this.updateComponentHeight);
  },
  beforeUnmount() {
    // 在组件卸载前移除事件监听器
    window.removeEventListener('resize', this.updateComponentHeight);
  },
  components: {
    IconCaretRight,
    IconCaretLeft

  },
  methods: {
    updateComponentHeight() {
      // 使用 window.innerHeight 设置组件的高度
      this.componentStyle.height = `${window.innerHeight}px`;
    }
  }
});
</script>
<style scoped>
.main-layout {
  height: 500px;
}
.main-layout :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
}
.main-layout :deep(.arco-layout-sider-light) .logo{
  background: var(--color-fill-2);
}
.logo{
  display: none;
  background: var(--color-fill-2);
}
.main-layout :deep(.arco-layout-header)  {
  height: 112px;
  line-height: 64px;
  background: var(--color-bg-3);
}
.main-layout :deep(.arco-layout-footer) {
  height: 48px;
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}
.main-layout :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
}
.main-layout :deep(.arco-layout-footer),
.main-layout :deep(.arco-layout-content)  {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
  padding: 20px;
}
@media(prefers-color-scheme: dark) {
  .content1 {
    background: #2a2a2b;
  }
  .content-copyright {
    color: #ffffff;
  }
}
</style>
