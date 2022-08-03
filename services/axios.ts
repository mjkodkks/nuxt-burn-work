import { NuxtAxiosInstance } from "@nuxtjs/axios"

let axios: NuxtAxiosInstance

export function getAxiosInstance() {
    return axios
}

export function setAxiosInstance(newInstance: NuxtAxiosInstance) {
    axios = newInstance
}