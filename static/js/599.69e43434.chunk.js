"use strict";(self.webpackChunksoc_net=self.webpackChunksoc_net||[]).push([[599],{531:function(n,e,s){s.r(e),s.d(e,{default:function(){return L}});var r=s(5671),o=s(3144),t=s(136),i=s(7277),a=s(2791),l=s(9101),u=s(1386),c=s(9439),g="Pagination_selectedPage__iIg7c",f="Pagination_paginationPrevies__emmQF",p="Pagination_paginationNext__s1vAZ",h="Pagination_pagination__a-E0c",d=s(3853),P=s(184),v=function(n){for(var e=n.totalCountUsers,s=n.pageSize,r=n.currentPage,o=n.onPageChenge,t=n.portionSize,i=void 0===t?10:t,l=Math.ceil(e/s),u=[],v=1;v<=l;v++)u.push(v);var _=Math.ceil(l/i),j=(0,a.useState)(1),m=(0,c.Z)(j,2),w=m[0],x=m[1],C=(w-1)*i+1,U=w*i;return(0,P.jsxs)("div",{className:h,children:[w>1&&(0,P.jsx)(d.lV_,{className:f,onClick:function(){x(w-1)}}),u.filter((function(n){return n>=C&&n<=U})).map((function(n){return(0,P.jsxs)("span",{className:r===n&&g,onClick:function(e){o(n)},children:["-",n,"-"]})})),_>w&&(0,P.jsx)(d.iUL,{className:p,onClick:function(){x(w+1)}})]})},_="Users_users__WebZj",j="Users_imgName__R1DcA",m="Users_location__ZcQA9",w="Users_but__5zmD6",x="Users_status__ONAZ9",C=s.p+"static/media/avatar.046a69984c6e86df92fa.png",U=s(1087),Z=function(n){var e=n.follow,s=n.unfollow,r=n.followingInProgress,o=n.users;return(0,P.jsx)("div",{children:o.map((function(n){return(0,P.jsxs)("div",{className:_,children:[(0,P.jsx)(U.OL,{to:"/profile/"+n.id,children:(0,P.jsxs)("div",{className:j,children:[(0,P.jsx)("img",{src:null!=n.photos.small?n.photos.small:C,alt:"img"}),(0,P.jsx)("h3",{children:n.name})]})}),(0,P.jsxs)("div",{className:m,children:[(0,P.jsx)("div",{children:n.lookingForAJobDescription}),(0,P.jsx)("div",{children:"u.location.city"})]}),(0,P.jsx)("div",{className:w,children:n.followed?(0,P.jsx)("button",{disabled:r.some((function(e){return e===n.id})),onClick:function(){s(n.id)},children:"Unfollow"}):(0,P.jsx)("button",{disabled:r.some((function(e){return e===n.id})),onClick:function(){e(n.id)},children:"Follow"})}),(0,P.jsx)("h4",{className:x,children:n.status})]},n.id)}))})},N=function(n){var e=n.currentPage,s=n.onPageChenge,r=n.totalCountUsers,o=n.pageSize,t=n.follow,i=n.unfollow,a=n.followingInProgress,l=n.users;return(0,P.jsxs)("div",{children:[(0,P.jsx)(Z,{follow:t,unfollow:i,followingInProgress:a,users:l}),(0,P.jsx)(v,{currentPage:e,onPageChenge:s,totalCountUsers:r,pageSize:o})]})},k=s(6700),z=s(9776),S=s(7781),b=(0,s(6916).P1)((function(n){return n.UsersPage.users}),(function(n){return n.filter((function(n){return!0}))})),A=function(n){return n.UsersPage.pageSize},F=function(n){return n.UsersPage.totalCountUsers},y=function(n){return n.UsersPage.currentPage},I=function(n){return n.UsersPage.isFetching},D=function(n){return n.UsersPage.followingInProgress},M=function(n){(0,t.Z)(s,n);var e=(0,i.Z)(s);function s(){var n;(0,r.Z)(this,s);for(var o=arguments.length,t=new Array(o),i=0;i<o;i++)t[i]=arguments[i];return(n=e.call.apply(e,[this].concat(t))).onPageChenge=function(e){var s=n.props.pageSize;n.props.getUsers(e,s)},n}return(0,o.Z)(s,[{key:"componentDidMount",value:function(){var n=this.props,e=n.currentPage,s=n.pageSize;this.props.getUsers(e,s)}},{key:"render",value:function(){return(0,P.jsxs)(P.Fragment,{children:[this.props.isFetching?(0,P.jsx)(k.Z,{}):null,(0,P.jsx)(N,{totalCountUsers:this.props.totalCountUsers,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChenge:this.onPageChenge,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress})]})}}]),s}(a.Component),L=(0,S.qC)(z.Z,(0,l.$j)((function(n){return{users:b(n),pageSize:A(n),totalCountUsers:F(n),currentPage:y(n),isFetching:I(n),followingInProgress:D(n)}}),{follow:u.ZN,unfollow:u.fv,setUsers:u.HM,setCurrentPage:u.D4,toggelFollowingProgress:u.DN,getUsers:u.ny}))(M)},9776:function(n,e,s){var r=s(1413),o=s(5671),t=s(3144),i=s(136),a=s(7277),l=s(2791),u=s(9101),c=s(7689),g=s(184),f=function(n){return{isAuth:n.auth.isAuth}};e.Z=function(n){var e=function(e){(0,i.Z)(l,e);var s=(0,a.Z)(l);function l(){return(0,o.Z)(this,l),s.apply(this,arguments)}return(0,t.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,g.jsx)(n,(0,r.Z)({},this.props)):(0,g.jsx)(c.Fg,{to:"/login"})}}]),l}(l.Component);return(0,u.$j)(f)(e)}}}]);
//# sourceMappingURL=599.69e43434.chunk.js.map