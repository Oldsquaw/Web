<script setup>
defineProps({
  selectedMenuItem: { type: String, required: true }
})
</script>
<template>
  <div class="mainMenu">
    <a-menu mode="horizontal" :default-selected-keys=selectedMenuItem ref="menu">
      <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
        <div
            :style="{
          width: '60px',
          height: '30px',
          borderRadius: '2px',
          background: 'var(--color-fill-3)',
          cursor: 'text',
          textAlign: 'center',
          color: '#FFF',
          fontSize: '10',
        }"
        >
          OAuth
        </div>
      </a-menu-item>
      <a-menu-item key="1">返回</a-menu-item>
      <a-menu-item key="2"><router-link to="/Auth/LogIn">登录</router-link></a-menu-item>
      <a-menu-item key="3"><router-link to="/Auth/Register">注册</router-link></a-menu-item>
      <a-menu-item key="4">关于O互联</a-menu-item>
    </a-menu>
  </div>
  <div class="cover">
    <img src="https://i.pinimg.com/originals/f6/b9/f7/f6b9f7e5f67692524663a0b90956e0ab.jpg" alt="" style="width: 100%; height:100%; object-fit: cover;">
  </div>
  <div class="content">
    <a-typography-title heading="2">
      Oldsquaw 用户鉴权
    </a-typography-title>
    <slot/>
  </div>
</template>

<style>
body {
  background: var(--color-neutral-2);
}
.content {
  padding-left: 40px;
}
.cover {
  height: 250px;
  padding-left: 40px;
  padding-right: 40px;
}
.mainMenu {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  padding-bottom: 0px;
  background-color: var(--color-neutral-2);
}
</style>
