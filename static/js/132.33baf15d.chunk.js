"use strict";(self.webpackChunksoc_net=self.webpackChunksoc_net||[]).push([[132],{5221:function(t,s,e){e.r(s),e.d(s,{default:function(){return G},withRouter:function(){return Y}});var n=e(5671),a=e(3144),r=e(136),i=e(7277),o=e(1413),c=e(2791),u="Profile_content__TOYUv",l=e(6700),d="ProfileInfo_avatar__3yBhv",h="ProfileInfo_avatar_box__GM48q",p="ProfileInfo_aboutMe__Nv-rC",f="ProfileInfo_contacts__U2SwF",x="ProfileInfo_motoImg__7Basn",j="ProfileInfo_avatarImg__BKnby",m=e.p+"static/media/ava.553024e1e15427e432cd.png",v=e(9439),_=e(184),g=function(t){var s=(0,c.useState)(!1),e=(0,v.Z)(s,2),n=e[0],a=e[1],r=(0,c.useState)(t.status),i=(0,v.Z)(r,2),o=i[0],u=i[1];(0,c.useEffect)((function(){u(t.status)}),[t.status]);return(0,_.jsxs)("div",{children:[!n&&(0,_.jsx)("div",{children:(0,_.jsx)("span",{onDoubleClick:function(){a(!0)},children:t.status||"No status"})}),n&&(0,_.jsx)("div",{children:(0,_.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),t.updateUserStatus(o)},value:o})})]})},P=function(t){var s=t.profile,e=t.status,n=t.updateUserStatus;return s?(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{children:(0,_.jsx)("img",{className:x,src:"https://img4.goodfon.ru/original/2560x1024/3/db/chernyi-fon-mototsikl-mototsiklist.jpg",alt:"moto"})}),(0,_.jsxs)("div",{className:h,children:[(0,_.jsx)("div",{className:d,children:s.photos.large?(0,_.jsx)("img",{className:j,src:s.photos.large,alt:"ava"}):(0,_.jsx)("img",{className:j,src:m,alt:"ava"})}),(0,_.jsxs)("div",{className:p,children:[(0,_.jsx)("h2",{children:s.fullName}),(0,_.jsx)(g,{status:e,updateUserStatus:n}),(0,_.jsx)("p",{children:s.aboutMe}),(0,_.jsxs)("p",{children:["\u0420\u0430\u0431\u043e\u0442\u0430: ",s.contacts.lookingForAJob?"\u0412 \u043f\u043e\u0438\u0441\u043a\u0435":"\u0415\u0441\u0442\u044c"]})]}),(0,_.jsxs)("ul",{className:f,children:["Contacts",s.contacts.vk?(0,_.jsx)("li",{children:s.contacts.vk}):null,s.contacts.facebook?(0,_.jsx)("li",{children:s.contacts.facebook}):null,s.contacts.instagram?(0,_.jsx)("li",{children:s.contacts.instagram}):null,s.contacts.website?(0,_.jsx)("li",{children:s.contacts.website}):null,s.contacts.twitter?(0,_.jsx)("li",{children:s.contacts.twitter}):null,s.contacts.youtube?(0,_.jsx)("li",{children:s.contacts.youtube}):null,s.contacts.github?(0,_.jsx)("li",{children:s.contacts.github}):null,s.contacts.mainLink?(0,_.jsx)("li",{children:s.contacts.mainLink}):null]})]})]}):(0,_.jsx)(l.Z,{})},k=e(9101),Z=e(2088),b=e(4165),N=e(5861),y=e(3433),C="MyPost_posts__90WAF",S="MyPost_errors__2zdy+",w="Post_item__c1yqt",U="Post_name_user__0jAXy",I="Post_like_icon__Wd5qN",A="Post_icon__V7wCf",q="Post_num_like__ellVg",F=e(8820),M=function(t){return(0,_.jsx)("div",{children:(0,_.jsxs)("div",{className:w,children:[(0,_.jsx)("img",{src:"https://cdn.flamp.ru/b497df0c38f9d53c49e5c10665326e9c_1920.jpg",alt:"ava"}),(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:U,children:t.name}),(0,_.jsx)("div",{children:t.message})]}),(0,_.jsxs)("div",{className:I,children:[(0,_.jsx)(F.lo,{className:A}),(0,_.jsx)("div",{className:q,children:t.likeCount})]})]})]})})},T=e(5705),B=e(6727),J=B.Ry().shape({textarea:B.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required")}),L=c.memo((function(t){return(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:C,children:(0,_.jsx)(R,{addPost:t.addPost,onPostChange:t.updatePostActionCreated})}),(0,y.Z)(t.post).reverse().map((function(t){return(0,_.jsx)(M,{name:t.name,message:t.message,likeCount:t.likeCount},t.id)}))]})})),R=function(t){return(0,_.jsx)(T.J9,{initialValues:{textarea:""},onSubmit:function(){var s=(0,N.Z)((0,b.Z)().mark((function s(e){return(0,b.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:t.onPostChange(e.textarea),t.addPost();case 2:case"end":return s.stop()}}),s)})));return function(t){return s.apply(this,arguments)}}(),validationSchema:J,children:function(t){var s=t.errors,e=t.touched;return(0,_.jsxs)(T.l0,{children:[(0,_.jsx)("div",{className:s.textarea&&e.textarea?S:null,children:(0,_.jsx)(T.gN,{placeholder:"your news...",name:"textarea",type:"textarea"})}),s.textarea&&e.textarea?(0,_.jsx)("div",{className:S,children:s.textarea}):null,(0,_.jsx)("div",{children:(0,_.jsx)("button",{type:"submit",children:"Send"})})]})}})},z=L,O=(0,k.$j)((function(t){return{post:t.ProfilePage.post,newText:t.ProfilePage.newPostText}}),(function(t){return{updatePostActionCreated:function(s){var e=(0,Z.Fu)(s);t(e)},addPost:function(){t((0,Z.JJ)())}}}))(z),V=function(t){var s=t.profile,e=t.store,n=t.status,a=t.updateUserStatus;return(0,_.jsxs)("div",{className:u,children:[(0,_.jsx)(P,{profile:s,status:n,updateUserStatus:a}),(0,_.jsx)(O,{store:e})]})},$=e(7689),D=e(9776),W=e(7781);function Y(t){return function(s){var e={params:(0,$.UO)()};return(0,_.jsx)(t,(0,o.Z)((0,o.Z)({},s),{},{match:e}))}}var E=function(t){(0,r.Z)(e,t);var s=(0,i.Z)(e);function e(){return(0,n.Z)(this,e),s.apply(this,arguments)}return(0,a.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId),this.props.profileUser(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,_.jsx)(V,(0,o.Z)((0,o.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))}}]),e}(c.Component),G=(0,W.qC)(D.Z,(0,k.$j)((function(t){return{profile:t.ProfilePage.profile,status:t.ProfilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{profileUser:Z.Yw,getStatus:Z.lR,updateUserStatus:Z.OL}),Y)(E)},9776:function(t,s,e){var n=e(1413),a=e(5671),r=e(3144),i=e(136),o=e(7277),c=e(2791),u=e(9101),l=e(7689),d=e(184),h=function(t){return{isAuth:t.auth.isAuth}};s.Z=function(t){var s=function(s){(0,i.Z)(c,s);var e=(0,o.Z)(c);function c(){return(0,a.Z)(this,c),e.apply(this,arguments)}return(0,r.Z)(c,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(t,(0,n.Z)({},this.props)):(0,d.jsx)(l.Fg,{to:"/login"})}}]),c}(c.Component);return(0,u.$j)(h)(s)}}}]);
//# sourceMappingURL=132.33baf15d.chunk.js.map