<script setup>
import Layout from "@/Views/Auth/Layout.vue";
</script>

<template>
  <Layout selected-menu-item="3">
    <a-form layout="vertical" :model="form">
      <a-form-item field="username" label="邮箱">
        <a-input placeholder="请输入用户名" type="text" v-model="form.username"/>
      </a-form-item>
      <a-form-item field="passwd" label="密码">
        <a-input-password placeholder="请输入密码" v-model="form.passwd" allow-clear/>
      </a-form-item>
      <a-form-item field="passwd-again" label="密码">
        <a-input-password placeholder="请再次输入密码" v-model="form.passwd" allow-clear/>
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit" type="primary" @click="handleSubmit">注册并登录</a-button>
      </a-form-item>
    </a-form>
  </Layout>
</template>

<style scoped>

</style>
