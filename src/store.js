import { defineStore } from "pinia";

export const useAccountStore = defineStore('account', () => {
    let nowUser = null
    let userInfo = null
    function updateUserInfo(newInfo) {
        userInfo = newInfo
    }

    return { nowUser, userInfo, updateUserInfo }
})
