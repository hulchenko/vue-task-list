(function(e){function t(t){for(var r,o,s=t[0],u=t[1],i=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0305":function(e,t,n){"use strict";n("d4e9")},"04f8":function(e,t,n){},"21b0":function(e,t,n){},3444:function(e,t,n){"use strict";n("21b0")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"};function c(e,t,n,c,o,s){var u=Object(r["v"])("Header"),i=Object(r["v"])("router-view"),d=Object(r["v"])("Footer");return Object(r["o"])(),Object(r["d"])("div",a,[Object(r["f"])(u,{onToggleAddTask:s.toggleAddTask,title:"Task List",showAddTask:o.showAddTask},null,8,["onToggleAddTask","showAddTask"]),Object(r["f"])(i,{showAddTask:o.showAddTask},null,8,["showAddTask"]),Object(r["f"])(d)])}var o=Object(r["E"])("data-v-1020f655"),s=o((function(e,t,n,a,c,o){var s=Object(r["v"])("Button");return Object(r["o"])(),Object(r["d"])("header",null,[Object(r["f"])("h1",null,Object(r["x"])(n.title),1),Object(r["D"])(Object(r["f"])(s,{onBtnClick:t[1]||(t[1]=function(t){return e.$emit("toggle-add-task")}),text:n.showAddTask?"Close":"Add",color:n.showAddTask?"red":"#333"},null,8,["text","color"]),[[r["B"],o.homePage]])])}));function u(e,t,n,a,c,o){return Object(r["o"])(),Object(r["d"])("button",{onClick:t[1]||(t[1]=function(e){return o.onClick()}),style:{background:n.color},class:"btn"},Object(r["x"])(n.text),5)}var i={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}};i.render=u;var d=i,l={name:"Header",props:{title:String,showAddTask:Boolean},components:{Button:d},computed:{homePage:function(){return"/"===this.$route.path}}};n("9834");l.render=s,l.__scopeId="data-v-1020f655";var f=l,b=Object(r["E"])("data-v-5bb6c960");Object(r["r"])("data-v-5bb6c960");var p=Object(r["f"])("p",null,"Copyright © 2021",-1),j=Object(r["e"])("About");Object(r["p"])();var O=b((function(e,t){var n=Object(r["v"])("router-link");return Object(r["o"])(),Object(r["d"])("footer",null,[p,Object(r["f"])(n,{to:"/about"},{default:b((function(){return[j]})),_:1})])}));n("ffe0");const m={};m.render=O,m.__scopeId="data-v-5bb6c960";var k=m,h={name:"App",components:{Header:f,Footer:k},data:function(){return{showAddTask:!1}},methods:{toggleAddTask:function(){this.showAddTask=!this.showAddTask}}};n("7cde");h.render=c;var v=h,g=n("6c02"),T=Object(r["E"])("data-v-3cdbbca7");Object(r["r"])("data-v-3cdbbca7");var w={class:"about"},x=Object(r["f"])("h5",null," Created with Vue js ",-1),y=Object(r["f"])("h3",null,[Object(r["f"])("a",{target:"_blank",href:"https://github.com/hulchenko"},"Contact")],-1),A=Object(r["e"])("Go Back");Object(r["p"])();var R=T((function(e,t){var n=Object(r["v"])("router-link");return Object(r["o"])(),Object(r["d"])("div",w,[x,y,Object(r["f"])(n,{to:"/"},{default:T((function(){return[A]})),_:1})])}));n("c6e8");const S={};S.render=R,S.__scopeId="data-v-3cdbbca7";var _=S,D=Object(r["f"])("p",{class:"note"},"*double click to set/remove a reminder*",-1);function P(e,t,n,a,c,o){var s=Object(r["v"])("AddTask"),u=Object(r["v"])("Tasks");return Object(r["o"])(),Object(r["d"])(r["a"],null,[Object(r["D"])(Object(r["f"])("div",null,[Object(r["f"])(s,{onAddTask:o.addTask},null,8,["onAddTask"])],512),[[r["B"],n.showAddTask]]),Object(r["f"])(u,{onToggleReminder:o.toggleReminder,onDeleteTask:o.deleteTask,tasks:c.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"]),D],64)}var C=n("5530"),B=n("2909"),E=n("1da1");n("96cf"),n("d3b7"),n("99af"),n("4de4"),n("d81d");function $(e,t,n,a,c,o){var s=Object(r["v"])("Task");return Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(n.tasks,(function(t){return Object(r["o"])(),Object(r["d"])("div",{key:t.id},[Object(r["f"])(s,{onToggleReminder:function(n){return e.$emit("toggle-reminder",t.id)},onDeleteTask:function(n){return e.$emit("delete-task",t.id)},task:t},null,8,["onToggleReminder","onDeleteTask","task"])])})),128)}function H(e,t,n,a,c,o){return Object(r["o"])(),Object(r["d"])("div",{onDblclick:t[2]||(t[2]=function(t){return e.$emit("toggle-reminder",n.task.id)}),class:[n.task.reminder?"reminder":"","task"]},[Object(r["f"])("h3",null,[Object(r["e"])(Object(r["x"])(n.task.text),1),Object(r["f"])("i",{onClick:t[1]||(t[1]=function(t){return e.$emit("delete-task",n.task.id)}),class:"fas fa-times"})]),Object(r["f"])("p",null,Object(r["x"])(n.task.day),1)],34)}var I={name:"Task",props:{task:Object}};n("0305");I.render=H;var J=I,M={name:"Tasks",props:{tasks:Array},components:{Task:J},emits:["delete-task","toggle-reminder"]};M.render=$;var U=M,V=Object(r["E"])("data-v-6d73f2cd");Object(r["r"])("data-v-6d73f2cd");var F={class:"form-control"},L=Object(r["f"])("label",null,"Task",-1),N={class:"form-control"},z=Object(r["f"])("label",null,"Day & Time",-1),G={class:"form-control form-control-check"},q=Object(r["f"])("label",null,"Set Reminder",-1),K=Object(r["f"])("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1);Object(r["p"])();var Q=V((function(e,t,n,a,c,o){return Object(r["o"])(),Object(r["d"])("form",{onSubmit:t[4]||(t[4]=function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),class:"add-form"},[Object(r["f"])("div",F,[L,Object(r["D"])(Object(r["f"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.text=e}),name:"text",placeholder:"Add Task"},null,512),[[r["A"],c.text]])]),Object(r["f"])("div",N,[z,Object(r["D"])(Object(r["f"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.day=e}),name:"day",placeholder:"Add Day & Time"},null,512),[[r["A"],c.day]])]),Object(r["f"])("div",G,[q,Object(r["D"])(Object(r["f"])("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.reminder=e}),name:"reminder"},null,512),[[r["z"],c.reminder]])]),K],32)})),W={name:"AddTask",data:function(){return{text:"",day:"",reminder:!1}},methods:{onSubmit:function(e){if(e.preventDefault(),this.text){var t={text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",t),this.text="",this.day="",this.reminder=!1}else alert("Please add a task")}}};n("3444");W.render=Q,W.__scopeId="data-v-6d73f2cd";var X=W,Y={name:"Home",props:{showAddTask:Boolean},components:{Tasks:U,AddTask:X},data:function(){return{tasks:[]}},methods:{addTask:function(e){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("api/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 2:return r=n.sent,n.next=5,r.json();case 5:a=n.sent,t.tasks=[].concat(Object(B["a"])(t.tasks),[a]);case 7:case"end":return n.stop()}}),n)})))()},deleteTask:function(e){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!confirm("Are you sure?")){n.next=5;break}return n.next=3,fetch("api/tasks/".concat(e),{method:"DELETE"});case 3:r=n.sent,200===r.status?t.tasks=t.tasks.filter((function(t){return t.id!==e})):alert("Error");case 5:case"end":return n.stop()}}),n)})))()},toggleReminder:function(e){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.fetchTask(e);case 2:return r=n.sent,a=Object(C["a"])(Object(C["a"])({},r),{},{reminder:!r.reminder}),n.next=6,fetch("api/tasks/".concat(e),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 6:return c=n.sent,n.next=9,c.json();case 9:o=n.sent,t.tasks=t.tasks.map((function(t){return t.id===e?Object(C["a"])(Object(C["a"])({},t),{},{reminder:o.reminder}):t}));case 11:case"end":return n.stop()}}),n)})))()},fetchTasks:function(){return Object(E["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()},fetchTask:function(e){return Object(E["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("api/tasks/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchTasks();case 2:e.tasks=t.sent;case 3:case"end":return t.stop()}}),t)})))()}};Y.render=P;var Z=Y,ee=[{path:"/",name:"Home",component:Z},{path:"/about",name:"About",component:_}],te=Object(g["a"])({history:Object(g["b"])("/"),routes:ee}),ne=te;Object(r["c"])(v).use(ne).mount("#app")},"76eb":function(e,t,n){},"7cde":function(e,t,n){"use strict";n("76eb")},9834:function(e,t,n){"use strict";n("c201")},c201:function(e,t,n){},c6e8:function(e,t,n){"use strict";n("04f8")},d4e9:function(e,t,n){},e55e:function(e,t,n){},ffe0:function(e,t,n){"use strict";n("e55e")}});
//# sourceMappingURL=app.a4584941.js.map