import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, 
    setUsers, unfollow, toggelFollowingProgress, selectorUsers } from "../../reducer/users-reduser";
import Users from './Users.jsx';
import Preloader from "../Common/Preloader/Preloader";
import withAuthRedirectComponent from "../../hoc/withAuthRedirectComponent";
import { compose } from "redux";
import {getUsers, getPageSize, getTotalCountUsers, getCurrentPage, getIsFetching, getFollowingInProgress} from "../../reducer/users-selectors.js";


class UsersContainer extends React.Component {

    componentDidMount(){
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)

        //Использование thunk позволило перенести этот код в user-reduser
        // this.props.toggelIsFetching(true)
        // userAPI.getUser(this.props.currentPage, this.props.pageSize).then(data => {
        // this.props.toggelIsFetching(false)
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // });
    }

    onPageChenge = (p) => {
        const {pageSize} = this.props
        this.props.getUsers(p, pageSize)

        //Использование thunk позволило перенести этот код в user-reduser
        // this.props.setCurrentPage(p);
        // this.props.toggelIsFetching(true)
        // userAPI.getUser(p, this.props.pageSize).then(data => {
        //     this.props.toggelIsFetching(false)
        //     this.props.setUsers(data.items);
        // });
    }


    render() {
        return (<>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalCountUsers={this.props.totalCountUsers}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChenge={this.onPageChenge}
                        users={this.props.users}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        followingInProgress={this.props.followingInProgress}
            />
            </>)
    }
        
    
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCountUsers: getTotalCountUsers(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}
// Вместо сложного mapDispachToProps записали сразу в connect
// let mapDispachToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggelIsFetchingAC: (isFetching) => {
//             dispatch(toggelIsFetchingAC(isFetching))
//         }
//     }
// }

export default compose (
    withAuthRedirectComponent,
    connect(mapStateToProps, 
        {
            follow,
            unfollow,
            setUsers,
            setCurrentPage,
            toggelFollowingProgress, 
            getUsers: selectorUsers
        })
) (UsersContainer)
    