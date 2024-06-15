<script setup>
import Layout from "@/Views/Auth/Layout.vue";
import { checkFormData } from "./checkInfo.js";
import { reactive, ref } from 'vue';

let visible = ref(true);

const form = reactive({
  username: '',
  passwd: '',
  passwdAgain: ''
});

const handleSubmit = () => {
  if (checkFormData(form)) {
    model('open')
  }
};

function model(action) {
  if (action === 'open') {
    visible.value = true;
  } else if (action === 'close') {
    visible.value = false;
  }
}


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
      <a-form-item field="passwd-again" label="再次输入密码">
        <a-input-password placeholder="请再次输入密码" v-model="form.passwdAgain" allow-clear/>
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit" type="primary" @click="handleSubmit">注册并登录</a-button>
      </a-form-item>
    </a-form>
  </Layout>
  <a-modal v-model:visible="visible" @ok="model('close')" @cancel="model('close')">
    <template #title>
      警告
    </template>
    <div>注册暂不可用！</div>
  </a-modal>
</template>

<style scoped>

</style>
