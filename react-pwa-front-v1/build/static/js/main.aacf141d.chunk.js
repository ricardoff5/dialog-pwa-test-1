(this["webpackJsonpdialog-react-pwa-front-v1"]=this["webpackJsonpdialog-react-pwa-front-v1"]||[]).push([[0],{116:function(e,n,t){"use strict";var a=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"filter"}],n=[{alias:null,args:[{kind:"Variable",name:"name",variableName:"filter"}],concreteType:"User",kind:"LinkedField",name:"list",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"company",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"age",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"eyeColor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"picture",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"ListUsersQuery",selections:n,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"ListUsersQuery",selections:n},params:{cacheID:"b730cd957172fb0d01785b8d47448e44",id:null,metadata:{},name:"ListUsersQuery",operationKind:"query",text:"query ListUsersQuery(\n  $filter: String\n) {\n  list(name: $filter) {\n    _id\n    name\n    company\n    age\n    eyeColor\n    email\n    picture\n  }\n}\n"}}}();a.hash="417bf72098db2a98e0620da8fe28e05f",e.exports=a},117:function(e,n,t){"use strict";var a=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"_id"}],n={alias:null,args:null,kind:"ScalarField",name:"_id",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"age",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"picture",storageKey:null},i=[{alias:null,args:[{kind:"Variable",name:"_id",variableName:"_id"}],concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[n,t,a,r,l,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"friends",plural:!0,selections:[n,t,{alias:null,args:null,kind:"ScalarField",name:"company",storageKey:null},a,{alias:null,args:null,kind:"ScalarField",name:"eyeColor",storageKey:null},r,l],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"getSingleUserByIdQuery",selections:i,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"getSingleUserByIdQuery",selections:i},params:{cacheID:"6f4f819e7827182287bf5f8102d357f1",id:null,metadata:{},name:"getSingleUserByIdQuery",operationKind:"query",text:"query getSingleUserByIdQuery(\n  $_id: ID\n) {\n  user(_id: $_id) {\n    _id\n    name\n    age\n    email\n    picture\n    friends {\n      _id\n      name\n      company\n      age\n      eyeColor\n      email\n      picture\n    }\n  }\n}\n"}}}();a.hash="e0537768c889033292009f93a130c38f",e.exports=a},118:function(e,n,t){},119:function(e,n,t){},120:function(e,n,t){},121:function(e,n,t){},126:function(e,n,t){},127:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(66),i=t.n(l),s=t(28),o=t(3),c=(t(74),t(16)),u=t(17),d=t(24),m=t(25),f=(t(75),function(e){var n=e.children;return r.a.createElement("div",{className:"container"},n)}),g=(t(76),function(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",null,"Sample Footer for Dialog sample test PWA Application"))}),h=t(18),p=t(2),k=t.n(p),v=t(5),y=t(14);function w(){return(w=Object(v.a)(k.a.mark((function e(n,t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Hostname: ",window.location.hostname),e.next=3,fetch("http://".concat(window.location.hostname,":4000/graphql"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:n,variables:t})});case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=function(e,n){return w.apply(this,arguments)};function C(){return(C=Object(v.a)(k.a.mark((function e(n,t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching query ".concat(n.name," with ").concat(JSON.stringify(t))),e.abrupt("return",b(n.text,t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x,E,S=new y.Environment({network:y.Network.create((function(e,n){return C.apply(this,arguments)})),store:new y.Store(new y.RecordSource)}),O=void 0!==x?x:x=t(116),j=void 0!==E?E:E=t(117),L=t(68),F=Object(L.a)("dialog-pwa-test",1,{upgrade:function(e){e.createObjectStore("keyval")}}),N={get:function(e){return Object(v.a)(k.a.mark((function n(){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F;case 2:return n.abrupt("return",n.sent.get("keyval",e));case 3:case"end":return n.stop()}}),n)})))()},set:function(e,n){return Object(v.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Val",n),t.next=3,F;case 3:return t.abrupt("return",t.sent.put("keyval",n,e));case 4:case"end":return t.stop()}}),t)})))()},delete:function(e){return Object(v.a)(k.a.mark((function n(){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F;case 2:return n.abrupt("return",n.sent.delete("keyval",e));case 3:case"end":return n.stop()}}),n)})))()},clear:function(){return Object(v.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F;case 2:return e.abrupt("return",e.sent.clear("keyval"));case 3:case"end":return e.stop()}}),e)})))()},keys:function(){return Object(v.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F;case 2:return e.abrupt("return",e.sent.getAllKeys("keyval"));case 3:case"end":return e.stop()}}),e)})))()}},U=new(function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,[{key:"getAll",value:function(){var e=Object(v.a)(k.a.mark((function e(){var n,t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.t0=console,e.next=4,N.get("network-status");case 4:return e.t1=e.sent,e.t0.log.call(e.t0,"Network Status: ",e.t1),e.next=8,N.get("network-status");case 8:if(!e.sent){e.next=14;break}return e.next=11,Object(y.fetchQuery)(S,O,{filter:""});case 11:return n=e.sent,e.next=14,N.set("users",n);case 14:if(n&&0!==n.length){e.next=19;break}return e.next=17,N.get("users");case 17:t=e.sent,n=t||[];case 19:return e.abrupt("return",n);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(v.a)(k.a.mark((function e(n){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,N.get("network-status");case 3:if(!e.sent){e.next=9;break}return e.next=6,Object(y.fetchQuery)(S,j,{_id:n});case 6:return t=e.sent,e.next=9,N.set(n,t);case 9:if(t){e.next=14;break}return e.next=12,N.get(n);case 12:a=e.sent,t=a||{};case 14:return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"getAllFilterByName",value:function(){var e=Object(v.a)(k.a.mark((function e(n){var t,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.t0=console,e.next=4,N.get("network-status");case 4:return e.t1=e.sent,e.t0.log.call(e.t0,"Network Status: ",e.t1),e.next=8,N.get("network-status");case 8:if(!e.sent){e.next=14;break}return e.next=11,Object(y.fetchQuery)(S,O,{filter:n});case 11:return t=e.sent,e.next=14,N.set("users",t);case 14:if(t&&0!==t.length){e.next=20;break}return e.next=17,N.get("users");case 17:a=e.sent,r=new RegExp("".concat(n.toLowerCase()),"g"),t=a?a.filter((function(e){return r.test(e.name.toLowerCase())})):[];case 20:return e.abrupt("return",t);case 21:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}]),e}()),K=(t(118),function(e){var n=e.children,t=e.additionalClassName;return r.a.createElement("div",{className:"row ".concat(t)},n)}),A=(t(119),function(e){var n=e.sm,t=e.md,a=e.lg,l=e.xl,i=e.xll,s=e.children;return r.a.createElement("div",{className:"col "+(n?"cols-sm-".concat(n," "):"")+(t?"cols-md-".concat(t," "):"")+(a?"cols-lg-".concat(a," "):"")+(l?"cols-xl-".concat(l," "):"")+(i?"cols-xll-".concat(i," "):"")},s)}),_=(t(120),function(e){var n=e.user,t=e.handleClick;return r.a.createElement("div",{className:"UserCard",onClick:function(){return t(n._id)}},r.a.createElement("img",{src:n.picture,alt:"User"}),r.a.createElement("p",null,"Name: ",n.name," ",r.a.createElement("br",null),"Age: ",n.age,r.a.createElement("br",null),"EyeColor: ",n.eyeColor,r.a.createElement("br",null),"Company: ",n.company,r.a.createElement("br",null),"Email: ",n.email))}),D=(t(121),function(e){var n=e.value,t=e.onChange;return r.a.createElement("input",{className:"CustomInput",type:"text",value:n,onChange:t})}),Q=function(e){var n=e.value,t=e.onChange,a=e.handleLogoClick;return r.a.createElement(K,null,r.a.createElement(A,{sm:"1",md:"5",lg:"6",xl:"6",xll:"6"},r.a.createElement("h1",{onClick:a}," MySocial")),r.a.createElement(A,{sm:"1",md:"4",lg:"4",xl:"4",xll:"4"},r.a.createElement(D,{value:n,onChange:t})))},I=function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).handleFilterChange=function(e){a.setState({filter:e.target.value}),a.refreshUserContent(e.target.value)},a.state={users:[],filter:""},a.handleCardClick=a.handleCardClick.bind(Object(h.a)(a)),a.handleLogoClick=a.handleLogoClick.bind(Object(h.a)(a)),a}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.refreshUserContent("")}},{key:"renderCards",value:function(e){var n=this;return e?e.map((function(e){return r.a.createElement(A,{sm:"1",md:"1",lg:"4",xl:"4",xll:"4",key:e._id},r.a.createElement(_,{user:e,handleClick:n.handleCardClick}))})):null}},{key:"handleCardClick",value:function(e){this.props.history.push("/adm/users/view/".concat(e))}},{key:"handleLogoClick",value:function(){this.props.history.push("/adm/users")}},{key:"refreshUserContent",value:function(e){var n=this;U.getAllFilterByName(e).then((function(e){console.log("Data: ",e),n.setState({users:e.list})}))}},{key:"render",value:function(){var e=this.state,n=e.users,t=e.filter;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{value:t,onChange:this.handleFilterChange,handleLogoClick:this.handleLogoClick}),r.a.createElement(K,null,this.renderCards(n)))}}]),t}(a.Component),W=Object(o.g)(I),q=(t(126),function(e){var n=e.user;return r.a.createElement(K,{additionalClassName:"UserProfile"},r.a.createElement(A,{sm:"1",md:"1",lg:"6",xl:"6",xll:"6"},r.a.createElement("img",{src:n.picture,alt:"User Profile"})),r.a.createElement(A,{sm:"1",md:"1",lg:"2",xl:"2",xll:"2"},r.a.createElement("p",null,"Name: ",n.name," ",r.a.createElement("br",null),"Age: ",n.age," ",r.a.createElement("br",null),"Email: ",n.email)))}),B=function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).handleFilterChange=function(e){a.setState({filter:e.target.value})},a.state={user:{},users:[],filter:"",routeId:e.match.params.id},a.handleCardClick=a.handleCardClick.bind(Object(h.a)(a)),a.handleLogoClick=a.handleLogoClick.bind(Object(h.a)(a)),a}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.routeId;this.refreshUserContent(e)}},{key:"renderCards",value:function(e){var n=this;return e?e.map((function(e){return r.a.createElement(A,{sm:"1",md:"1",lg:"4",xl:"4",xll:"4",key:e._id},r.a.createElement(_,{user:e,handleClick:n.handleCardClick}))})):null}},{key:"handleCardClick",value:function(e){console.log("handleCardClick",e)}},{key:"handleLogoClick",value:function(){this.props.history.push("/adm/users")}},{key:"refreshUserContent",value:function(e){var n=this;U.get(e).then((function(e){console.log("ViewUserPage Data: ",e),n.setState({user:e.user})}))}},{key:"filteredFriendsList",value:function(e,n){var t=new RegExp("".concat(n.toLowerCase()),"g");return e?e.filter((function(e){return t.test(e.name.toLowerCase())})):[]}},{key:"render",value:function(){var e=this.state,n=e.filter,t=e.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{value:n,onChange:this.handleFilterChange,handleLogoClick:this.handleLogoClick}),r.a.createElement(q,{user:t}),r.a.createElement(K,null,r.a.createElement(A,{sm:"1",md:"1",lg:"1",xl:"1",xll:"1"},r.a.createElement("h1",null," Friends:")),this.renderCards(this.filteredFriendsList(t.friends,n))))}}]),t}(a.Component),R=Object(o.g)(B),P=function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).storeNetworkStatus=function(e){N.set("network-status","offline"===e.type?0:1)},N.set("network-status",1),a}return Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("offline",this.storeNetworkStatus),window.addEventListener("online",this.storeNetworkStatus)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("online",this.storeNetworkStatus),window.removeEventListener("offline",this.storeNetworkStatus)}},{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/adm/users",component:W}),r.a.createElement(o.b,{path:"/adm/users/view/:id",component:R})),r.a.createElement(g,null))}}]),t}(a.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/adm",render:function(e){return r.a.createElement(P,e)}}),r.a.createElement(o.a,{from:"*",to:"/adm/users"})))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");T?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):V(n,e)}))}}()},69:function(e,n,t){e.exports=t(127)},74:function(e,n,t){},75:function(e,n,t){},76:function(e,n,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.aacf141d.chunk.js.map