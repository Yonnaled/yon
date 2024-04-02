import { defineStore } from 'pinia'


export const i18nStore = defineStore('i18n', {
    state: ()=>({
        locale:'EN'
    })
})