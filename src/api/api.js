import axios from "axios";

export const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '326b0522-c61e-4d4e-a7df-aae77c6de2db'}
})


const userAPI = {
    getUser(currentPage = 1, pageSize = 10)  {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },

    follow(id) {
        return instans.post(`follow/${id}`)
    },

    unfollow(id) {
        return instans.delete(`follow/${id}`)
    },

    authMe() {
        return instans.get(`auth/me`)
    },

    profile(userId) {
        console.log("Old params, chenge new params profileAPI")
        return profileAPI.profile(userId)
    }
} 

export const profileAPI = {
    profile(userId) {
        return instans.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return instans.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instans.put(`profile/status/`, {status: status})
    }
} 


export const authAPI = {

    loginUser(email, password, rememberMe=false) {
        return instans.post('auth/login/', {email, password, rememberMe} );
    },

    logout() {
        return instans.delete('auth/login/' );
    }
} 



export default userAPI
