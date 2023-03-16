import React from "react";
import Pagination from "../Common/Pogination/Pagination.jsx";
import User from "./User.jsx";

const Users = ({currentPage, onPageChenge, totalCountUsers, pageSize, follow, unfollow, followingInProgress, users}) => {
    return (
        <div>
               
            <User follow={follow} unfollow={unfollow} followingInProgress={followingInProgress} users={users} />
            <Pagination currentPage={currentPage} onPageChenge={onPageChenge} totalCountUsers={totalCountUsers} pageSize={pageSize} />

        </div>
    )
}

export default Users