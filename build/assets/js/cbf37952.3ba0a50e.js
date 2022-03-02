"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[329],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7503:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={title:"Vue3",id:"Vue3"},u=void 0,p={unversionedId:"vue/Vue3",id:"vue/Vue3",title:"Vue3",description:"\u65b0\u7279\u6027",source:"@site/fe/1-vue/2-vue3.md",sourceDirName:"1-vue",slug:"/vue/Vue3",permalink:"/fe/vue/Vue3",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Vue3",id:"Vue3"},sidebar:"tutorialSidebar",previous:{title:"Vnode && Diff",permalink:"/fe/vue/vnodeanddiff"},next:{title:"index",permalink:"/fe/os/osindex"}},c=[{value:"\u65b0\u7279\u6027",id:"\u65b0\u7279\u6027",children:[{value:"\u5e38\u7528\u7684 Composition API",id:"\u5e38\u7528\u7684-composition-api",children:[],level:4},{value:"script setup Api",id:"script-setup-api",children:[],level:4},{value:"example",id:"example",children:[],level:4}],level:3},{value:"\u65b0\u7684\u7ec4\u4ef6",id:"\u65b0\u7684\u7ec4\u4ef6",children:[{value:"Fragment(\u7247\u65ad)",id:"fragment\u7247\u65ad",children:[],level:4},{value:"Teleport(\u77ac\u79fb)",id:"teleport\u77ac\u79fb",children:[],level:4},{value:"Suspense(\u4e0d\u786e\u5b9a\u7684)",id:"suspense\u4e0d\u786e\u5b9a\u7684",children:[],level:4}],level:3}],s={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u65b0\u7279\u6027"},"\u65b0\u7279\u6027"),(0,a.kt)("h4",{id:"\u5e38\u7528\u7684-composition-api"},"\u5e38\u7528\u7684 Composition API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"getCurrentInstance"),(0,a.kt)("li",{parentName:"ul"},"defineComponent"),(0,a.kt)("li",{parentName:"ul"},"defineAsyncComponent"),(0,a.kt)("li",{parentName:"ul"},"setup"),(0,a.kt)("li",{parentName:"ul"},"ref"),(0,a.kt)("li",{parentName:"ul"},"reactive"),(0,a.kt)("li",{parentName:"ul"},"watchEffect"),(0,a.kt)("li",{parentName:"ul"},"toRef"),(0,a.kt)("li",{parentName:"ul"},"toRefs"),(0,a.kt)("li",{parentName:"ul"},"provide"),(0,a.kt)("li",{parentName:"ul"},"inject"),(0,a.kt)("li",{parentName:"ul"},"readOnly"),(0,a.kt)("li",{parentName:"ul"},"renderList"),(0,a.kt)("li",{parentName:"ul"},"nextTick")),(0,a.kt)("h4",{id:"script-setup-api"},"script setup Api"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"defineProps"),(0,a.kt)("li",{parentName:"ul"},"defineEmit"),(0,a.kt)("li",{parentName:"ul"},"renderSlots"),(0,a.kt)("li",{parentName:"ul"},"useContext"),(0,a.kt)("li",{parentName:"ul"},"h")),(0,a.kt)("h4",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// setup Component\ndefineComponent({\n  setup(props, { attrs, slots, emit, expose }) {\n    ...\n    return {}   // \u5408\u5e76data\n    // return ()=>{}   render\n  },\n})\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- script setup   --\x3e\n\n<script setup>\n    const props = defineProps({\n        title: String\n    })\n    // props.title\n    const { slots, attrs } = useContext()\n    // \u83b7\u53d6 emit\n    const emit = defineEmit(["chang-name"])\n    // \u8c03\u7528 emit\n    emit("chang-name", "Tom")\n<\/script>\n')),(0,a.kt)("h3",{id:"\u65b0\u7684\u7ec4\u4ef6"},"\u65b0\u7684\u7ec4\u4ef6"),(0,a.kt)("h4",{id:"fragment\u7247\u65ad"},"Fragment(\u7247\u65ad)"),(0,a.kt)("h4",{id:"teleport\u77ac\u79fb"},"Teleport(\u77ac\u79fb)"),(0,a.kt)("h4",{id:"suspense\u4e0d\u786e\u5b9a\u7684"},"Suspense(\u4e0d\u786e\u5b9a\u7684)"))}m.isMDXComponent=!0}}]);