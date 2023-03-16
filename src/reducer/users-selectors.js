import {createSelector} from 'reselect';

const getUsersSelector = (state) => {
    return state.UsersPage.users      
}

export const getUsers =  createSelector(getUsersSelector, (user) => {
    return user.filter(u => true);
})

export const getPageSize = (state) => {
    return state.UsersPage.pageSize      
}

export const getTotalCountUsers = (state) => {
    return state.UsersPage.totalCountUsers       
}

export const getCurrentPage = (state) => {
    return state.UsersPage.currentPage       
}

export const getIsFetching = (state) => {
    return state.UsersPage.isFetching       
}

export const getFollowingInProgress = (state) => {
    return state.UsersPage.followingInProgress       
}
