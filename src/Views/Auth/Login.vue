<script setup>
import Layout from "@/Views/Auth/Layout.vue";
import { checkFormData } from "./checkInfo.js";
import { reactive } from 'vue';

const form = reactive({
  username: '',
  passwd: '',
});

const handleSubmit = () => {
  if (checkFormData(form)) {

  }
};

</script>

<template>
  <Layout selected-menu-item="2">
    <a-form layout="vertical" :model="form">
      <a-form-item field="username" label="邮箱">
        <a-input placeholder="请输入用户名" type="text" v-model="form.username"/>
      </a-form-item>
      <a-form-item field="passwd" label="密码">
        <a-input-password placeholder="请输入密码" v-model="form.passwd" allow-clear/>
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit" type="primary" @click="handleSubmit">登录</a-button>
      </a-form-item>
    </a-form>
  </Layout>
</template>
