import {Message} from "@arco-design/web-vue";

export function checkFormData(form) {
    console.log(form);
    if (form.passwd !== form.passwdAgain) {
        Message.error('两次密码不匹配！')
        return false
    } else if (form.username === '' || form.passwd === '' || form.passwdAgain === '') {
        Message.error('请填写完整信息！')
        return false
    } else {
        return true
    }
}
