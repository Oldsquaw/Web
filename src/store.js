import { defineStore } from "pinia";

export const useAccountStore = defineStore('account', () => {
    let nowUser = null
    let userInfo = null
    function updateUserInfo(newInfo) {
        userInfo = newInfo
    }
    function updateNowUser(newUser) {
        nowUser = newUser
    }
    function updateUser(newUser, newInfo) {
        updateNowUser(newUser)
        updateUserInfo(newInfo)
    }
    function signOut() {
        nowUser = null
        userInfo = null
    }
    function signIn(user){
        nowUser = user['user']
        userInfo = user['info']
    }

    return { nowUser, userInfo, updateUserInfo, updateNowUser, updateUser, signIn, signOut }
})
