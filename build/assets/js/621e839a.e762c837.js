"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5829],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},321:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),a=["components"],i={title:"Centos",id:"Centos"},p=void 0,s={unversionedId:"os/Centos",id:"os/Centos",title:"Centos",description:"\u67e5\u8be2\u7aef\u53e3\u5360\u7528",source:"@site/fe/2-os/2-centos.md",sourceDirName:"2-os",slug:"/os/Centos",permalink:"/fe/os/Centos",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Centos",id:"Centos"},sidebar:"tutorialSidebar",previous:{title:"Macos",permalink:"/fe/os/Macos"},next:{title:"Ubuntu",permalink:"/fe/os/Ubuntu"}},u=[{value:"\u67e5\u8be2\u7aef\u53e3\u5360\u7528",id:"\u67e5\u8be2\u7aef\u53e3\u5360\u7528",children:[],level:3},{value:"crontab(\u5b9a\u65f6\u4efb\u52a1)",id:"crontab\u5b9a\u65f6\u4efb\u52a1",children:[],level:3},{value:"gitlab \u6d4b\u8bd5\u90ae\u4ef6\u901a\u77e5\u7684\u65f6\u5019\u62a5\u9519",id:"gitlab-\u6d4b\u8bd5\u90ae\u4ef6\u901a\u77e5\u7684\u65f6\u5019\u62a5\u9519",children:[],level:3},{value:"\u5b9a\u65f6\u4efb\u52a1\u542f\u52a8\u5bb9\u5668\u62a5\u9519",id:"\u5b9a\u65f6\u4efb\u52a1\u542f\u52a8\u5bb9\u5668\u62a5\u9519",children:[],level:3},{value:"ssh \u514d\u5bc6\u767b\u5f55\u540e\u767b\u5f55\u4ecd\u7136\u9700\u8981\u5bc6\u7801",id:"ssh-\u514d\u5bc6\u767b\u5f55\u540e\u767b\u5f55\u4ecd\u7136\u9700\u8981\u5bc6\u7801",children:[],level:3}],c={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u67e5\u8be2\u7aef\u53e3\u5360\u7528"},"\u67e5\u8be2\u7aef\u53e3\u5360\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"lsof -i:80\nnetstat -nlpt | grep 80\nps -ef | grep 8246\nps -x | grep 8246\n\n# \u6b63\u5e38\u6740\u6b7b\nkill -1 pid\n# \u5f3a\u5236\u6740\u6b7b\nkill -9 pid\n#\npkill -9 pid\n")),(0,o.kt)("h3",{id:"crontab\u5b9a\u65f6\u4efb\u52a1"},"crontab(\u5b9a\u65f6\u4efb\u52a1)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"* * * * * commond")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/sbin/service crond start\n/sbin/service crond stop\n/sbin/service crond restart\n/sbin/service crond reload\n\n#\n crontab -l\uff1b\n crontab -e\uff1b\n crontab -r\n service crond status\n")),(0,o.kt)("h3",{id:"gitlab-\u6d4b\u8bd5\u90ae\u4ef6\u901a\u77e5\u7684\u65f6\u5019\u62a5\u9519"},"gitlab \u6d4b\u8bd5\u90ae\u4ef6\u901a\u77e5\u7684\u65f6\u5019\u62a5\u9519"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 gitlab \u6d4b\u8bd5\u90ae\u4ef6\u901a\u77e5\u7684\u65f6\u5019\u62a5\u9519")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"sendmail: fatal: parameter inet_interfaces: no local interface >found for ::1")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539\u8fd9\u4e2a\u6587\u4ef6")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vim /etc/postfix/main.cf")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u628a\u4e0b\u9762\u4e24\u884c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-config"},"inet_interfaces = localhost\ninet_protocols = all\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6539\u4e3a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-config"},"inet_interfaces = all\ninet_protocols = all\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u518d\u91cd\u542f postfix")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"service postfix start")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u67e5\u770b\u4efb\u52a1\u65e5\u5fd7")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vim /var/spool/mail/root")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/github_37673306/java/article/details/84755551"},"\u539f\u6587\u94fe\u63a5")),(0,o.kt)("h3",{id:"\u5b9a\u65f6\u4efb\u52a1\u542f\u52a8\u5bb9\u5668\u62a5\u9519"},"\u5b9a\u65f6\u4efb\u52a1\u542f\u52a8\u5bb9\u5668\u62a5\u9519"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"15 8 * * * docker run --shm-size 1G -i -t --rm -v /root/popu/index.js:/app/index.js alekzonder/puppeteer:latest"),"\n\u5b9a\u65f6\u4efb\u52a1 docker \u542f\u52a8\u5bb9\u5668\u62a5\u9519\n\u62a5\u9519\uff1athe input device is not a TTY")),(0,o.kt)("p",null,"\u65b9\u6848: \u4efb\u52a1\u542f\u52a8\u5bb9\u5668\u547d\u4ee4\u4e2d\u53bb\u6389 ",(0,o.kt)("inlineCode",{parentName:"p"},"-t")," \u53c2\u6570\n",(0,o.kt)("inlineCode",{parentName:"p"},"15 8 * * * docker run --shm-size 1G -i --rm -v /root/popu/index.js:/app/index.js alekzonder/puppeteer:latest")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/killall007/p/9494189.html"},"\u539f\u6587\u94fe\u63a5")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"docker \u4efb\u52a1")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"15 8 * * * docker run --shm-size 1G -i --rm -v /root/popu/index.js:/app/index.js alekzonder/puppeteer:latest")),(0,o.kt)("p",null,"\u4fee\u6539\u76ee\u5f55\u7ed3\u6784"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker run --shm-size 1G --rm -v /root/popu:/app alekzonder/puppeteer:latest node my_script.js"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker run --shm-size 1G --rm -v /root/mydocker/popp:/app alekzonder/puppeteer:latest node app.js")),(0,o.kt)("h3",{id:"ssh-\u514d\u5bc6\u767b\u5f55\u540e\u767b\u5f55\u4ecd\u7136\u9700\u8981\u5bc6\u7801"},"ssh \u514d\u5bc6\u767b\u5f55\u540e\u767b\u5f55\u4ecd\u7136\u9700\u8981\u5bc6\u7801"),(0,o.kt)("p",null,"\u5173\u4e8e\u914d\u7f6e ssh \u514d\u5bc6\u767b\u5f55\u540e\u4ecd\u7136\u9700\u8981\u5bc6\u7801\u7684\u89e3\u51b3\u95ee\u9898"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sshd_config \u7981\u7528 root \u8d26\u6237\u767b\u5f55")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vim  /etc/ssh/sshd_config\nPermitRootLogin yes #\u5141\u8bb8root \u514d\u5bc6\u767b\u5f55\nPubkeyAuthentication yes # \u5141\u8bb8\u514d\u5bc6\u767b\u5f55\nAuthorizedKeysFile .ssh/authorized_keys  # \u5bc6\u94a5\u4f4d\u7f6e\nAuthorizedPrincipalsFile none\nAuthorizedKeysCommand none\nAuthorizedKeysCommandUser nobody\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/.ssh \u6743\u9650\u95ee\u9898")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 700 ~/.ssh/\nchmod 600 ~/.ssh/authorized_keys\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u91cd\u542f ssd \u670d\u52a1")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"service sshd restart")))}d.isMDXComponent=!0}}]);