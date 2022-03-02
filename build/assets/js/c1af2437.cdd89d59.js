"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6576],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var o=t(7294);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,d=function(e,n){if(null==e)return{};var t,o,d={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(d[t]=e[t]);return d}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}var i=o.createContext({}),s=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,d=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=d,f=m["".concat(i,".").concat(u)]||m[u]||p[u]||a;return t?o.createElement(f,r(r({ref:n},c),{},{components:t})):o.createElement(f,r({ref:n},c))}));function u(e,n){var t=arguments,d=n&&n.mdxType;if("string"==typeof e||d){var a=t.length,r=new Array(a);r[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:d,r[1]=l;for(var s=2;s<a;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5390:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var o=t(7462),d=t(3366),a=(t(7294),t(3905)),r=["components"],l={title:"Vnode && Diff",id:"vnodeanddiff"},i=void 0,s={unversionedId:"vue/vnodeanddiff",id:"vue/vnodeanddiff",title:"Vnode && Diff",description:"updateChildren && patchVnode",source:"@site/fe/1-vue/1-Vnode&diff.md",sourceDirName:"1-vue",slug:"/vue/vnodeanddiff",permalink:"/fe/vue/vnodeanddiff",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Vnode && Diff",id:"vnodeanddiff"},sidebar:"tutorialSidebar",previous:{title:"Vue",permalink:"/fe/vue/Vue"},next:{title:"Vue3",permalink:"/fe/vue/Vue3"}},c=[{value:"updateChildren &amp;&amp; patchVnode",id:"updatechildren--patchvnode",children:[],level:2},{value:"data-&gt; view",id:"data--view",children:[{value:"Vnode",id:"vnode",children:[],level:3},{value:"\u904d\u5386\u7b97\u6cd5",id:"\u904d\u5386\u7b97\u6cd5",children:[],level:3},{value:"patch()",id:"patch",children:[],level:3},{value:"patchVnode()",id:"patchvnode",children:[],level:3},{value:"sameVnode()",id:"samevnode",children:[],level:3},{value:"updateChildren",id:"updatechildren",children:[],level:3}],level:2},{value:"exapmple",id:"exapmple",children:[{value:"example1",id:"example1",children:[],level:3},{value:"example2",id:"example2",children:[],level:3},{value:"example3",id:"example3",children:[],level:3},{value:"example4",id:"example4",children:[],level:3},{value:"example5",id:"example5",children:[],level:3}],level:2},{value:"dom \u64cd\u4f5c",id:"dom-\u64cd\u4f5c",children:[{value:"addVnodes",id:"addvnodes",children:[],level:3},{value:"createElm",id:"createelm",children:[],level:3},{value:"removeVnodes",id:"removevnodes",children:[],level:3},{value:"domApi",id:"domapi",children:[],level:3}],level:2}],p={toc:c};function m(e){var n=e.components,l=(0,d.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"updatechildren--patchvnode"},"updateChildren && patchVnode"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{alt:"updateChildren",src:t(5105).Z})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{alt:"patchVnode",src:t(5789).Z}))),(0,a.kt)("h2",{id:"data--view"},"data-> view"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"createElm"),(0,a.kt)("li",{parentName:"ul"},"removeVnodes"),(0,a.kt)("li",{parentName:"ul"},"addVnodes"),(0,a.kt)("li",{parentName:"ul"},"setTextContent")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Mermaid"},'graph TB\n\nid1["_update"] --\x3e print2["__patch"]\nprint2 --\x3e print3["patch"]\nprint3 --\x3e print4["patchVnode"]\nprint4 --\x3e print5["updateChildren"]\n\nprint4 --\x3e view2("patchRealDom")\nview2 --\x3e print4\n\n\nprint5 --\x3eview("patchRealDom")\nview --\x3e print5\nprint5 --\x3e print3["patch"]\n\n')),(0,a.kt)("h3",{id:"vnode"},"Vnode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default class VNode {\n    tag: string | void\n    data: VNodeData | void\n    children: ?Array<VNode>\n    text: string | void\n    elm: Node | void\n    ns: string | void\n    context: Component | void // rendered in this component's scope\n    key: string | number | void\n    componentOptions: VNodeComponentOptions | void\n    componentInstance: Component | void // component instance\n    parent: VNode | void // component placeholder node\n\n    // strictly internal\n    raw: boolean // contains raw HTML? (server only)\n    isStatic: boolean // hoisted static node\n    isRootInsert: boolean // necessary for enter transition check\n    isComment: boolean // empty comment placeholder?\n    isCloned: boolean // is a cloned node?\n    isOnce: boolean // is a v-once node?\n    asyncFactory: Function | void // async component factory function\n    asyncMeta: Object | void\n    isAsyncPlaceholder: boolean\n    ssrContext: Object | void\n    fnContext: Component | void // real context vm for functional nodes\n    fnOptions: ?ComponentOptions // for SSR caching\n    devtoolsMeta: ?Object // used to store functional render context for devtools\n    fnScopeId: ?string // functional scope id support\n\n    constructor(\n        tag?: string,\n        data?: VNodeData,\n        children?: ?Array<VNode>,\n        text?: string,\n        elm?: Node,\n        context?: Component,\n        componentOptions?: VNodeComponentOptions,\n        asyncFactory?: Function\n    ) {\n        this.tag = tag\n        this.data = data\n        this.children = children\n        this.text = text\n        this.elm = elm\n        this.ns = undefined\n        this.context = context\n        this.fnContext = undefined\n        this.fnOptions = undefined\n        this.fnScopeId = undefined\n        this.key = data && data.key\n        this.componentOptions = componentOptions\n        this.componentInstance = undefined\n        this.parent = undefined\n        this.raw = false\n        this.isStatic = false\n        this.isRootInsert = true\n        this.isComment = false\n        this.isCloned = false\n        this.isOnce = false\n        this.asyncFactory = asyncFactory\n        this.asyncMeta = undefined\n        this.isAsyncPlaceholder = false\n    }\n\n    // DEPRECATED: alias for componentInstance for backwards compat.\n    /* istanbul ignore next */\n    get child(): Component | void {\n        return this.componentInstance\n    }\n}\n")),(0,a.kt)("h3",{id:"\u904d\u5386\u7b97\u6cd5"},"\u904d\u5386\u7b97\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mermaid"}," graph TB\n1((1)) --\x3e 2((2))\n1((1)) --\x3e 3((3))\n2 --\x3e 4((4))\n2 --\x3e 11((11))\n2 --\x3e 5((5))\n\n3 --\x3e 6((6))\n3 --\x3e 7((7))\n\n4 --\x3e 8((8))\n7 --\x3e 9((9))\n7 --\x3e 10((10))\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"DFS \u6df1\u5ea6\u4f18\u5148\u904d\u5386(Depth First Search)"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u6808\n1 2 4 8 11 5 3 6 7 9 10"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"BFS \u5e7f\u5ea6\u4f18\u5148\u904d\u5386(Breath First Search)"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u961f\u5217\n1 2 3 4 11 5 6 7 8 9 10"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e8c\u53c9\u6a39"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5148\u5e8f"),(0,a.kt)("li",{parentName:"ul"},"\u4e2d\u5e8f"),(0,a.kt)("li",{parentName:"ul"},"\u540e\u5e8f")))),(0,a.kt)("h3",{id:"patch"},"patch()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'return function patch(oldVnode, vnode, hydrating, removeOnly) {\n    if (isUndef(vnode)) {\n        /*vnode\u4e0d\u5b58\u5728\u5219\u76f4\u63a5\u8c03\u7528\u9500\u6bc1\u94a9\u5b50*/\n        if (isDef(oldVnode)) invokeDestroyHook(oldVnode)\n        return\n    }\n\n    let isInitialPatch = false\n    const insertedVnodeQueue = []\n\n    if (isUndef(oldVnode)) {\n        // root\n        // empty mount (likely as component), create new root element\n        isInitialPatch = true\n        createElm(vnode, insertedVnodeQueue)\n    } else {\n        /*\u6807\u8bb0\u65e7\u7684VNode\u662f\u5426\u6709nodeType*/\n        const isRealElement = isDef(oldVnode.nodeType)\n        if (!isRealElement && sameVnode(oldVnode, vnode)) {\n            // patch existing root node\n            // \u662f\u540c\u4e00\u4e2a\u8282\u70b9  \u6df1\u5165\u6bd4\u8f83\u66ff\u6362\n            patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly)\n        } else {\n            if (isRealElement) {\n                // mounting to a real element\n                // check if this is server-rendered content and if we can perform\n                // a successful hydration.\n                if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {\n                    oldVnode.removeAttribute(SSR_ATTR)\n                    hydrating = true\n                }\n                if (isTrue(hydrating)) {\n                    if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {\n                        invokeInsertHook(vnode, insertedVnodeQueue, true)\n                        return oldVnode\n                    } else if (process.env.NODE_ENV !== "production") {\n                        warn(\n                            "The client-side rendered virtual DOM tree is not matching " +\n                                "server-rendered content. This is likely caused by incorrect " +\n                                "HTML markup, for example nesting block-level elements inside " +\n                                "<p>, or missing <tbody>. Bailing hydration and performing " +\n                                "full client-side render."\n                        )\n                    }\n                }\n                // either not server-rendered, or hydration failed.\n                // create an empty node and replace it\n                // \u5408\u5e76\u5230\u771f\u5b9eDOM\u5931\u8d25\uff0c\u5219\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684VNode\u8282\u70b9\u66ff\u6362\u5b83\n                oldVnode = emptyNodeAt(oldVnode)\n            }\n\n            // replacing existing element\n            // \u771f\u5b9e\u76ee\u6807dom\n            const oldElm = oldVnode.elm\n            const parentElm = nodeOps.parentNode(oldElm)\n\n            // create new node\n            createElm(\n                vnode,\n                insertedVnodeQueue,\n                // extremely rare edge case: do not insert if old element is in a\n                // leaving transition. Only happens when combining transition +\n                // keep-alive + HOCs. (#4590)\n                oldElm._leaveCb ? null : parentElm,\n                nodeOps.nextSibling(oldElm)\n            )\n\n            // update parent placeholder node element, recursively\n            if (isDef(vnode.parent)) {\n                let ancestor = vnode.parent\n                const patchable = isPatchable(vnode)\n                while (ancestor) {\n                    for (let i = 0; i < cbs.destroy.length; ++i) {\n                        cbs.destroy[i](ancestor)\n                    }\n                    ancestor.elm = vnode.elm\n                    if (patchable) {\n                        for (let i = 0; i < cbs.create.length; ++i) {\n                            cbs.create[i](emptyNode, ancestor)\n                        }\n                        // #6513\n                        // invoke insert hooks that may have been merged by create hooks.\n                        // e.g. for directives that uses the "inserted" hook.\n                        const insert = ancestor.data.hook.insert\n                        if (insert.merged) {\n                            // start at index 1 to avoid re-invoking component mounted hook\n                            for (let i = 1; i < insert.fns.length; i++) {\n                                insert.fns[i]()\n                            }\n                        }\n                    } else {\n                        registerRef(ancestor)\n                    }\n                    ancestor = ancestor.parent\n                }\n            }\n\n            // destroy old node\n            if (isDef(parentElm)) {\n                removeVnodes([oldVnode], 0, 0)\n            } else if (isDef(oldVnode.tag)) {\n                invokeDestroyHook(oldVnode)\n            }\n        }\n    }\n\n    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)\n    return vnode.elm\n}\n')),(0,a.kt)("h3",{id:"patchvnode"},"patchVnode()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {\n    //  Same memory address\n    if (oldVnode === vnode) {\n        return\n    }\n\n    if (isDef(vnode.elm) && isDef(ownerArray)) {\n        // clone reused vnode\n        vnode = ownerArray[index] = cloneVNode(vnode)\n    }\n\n    const elm = (vnode.elm = oldVnode.elm)\n\n    if (isTrue(oldVnode.isAsyncPlaceholder)) {\n        if (isDef(vnode.asyncFactory.resolved)) {\n            hydrate(oldVnode.elm, vnode, insertedVnodeQueue)\n        } else {\n            vnode.isAsyncPlaceholder = true\n        }\n        return\n    }\n\n    // reuse element for static trees.\n    // note we only do this if the vnode is cloned -\n    // if the new node is not cloned it means the render functions have been\n    // reset by the hot-reload-api and we need to do a proper re-render.\n    if (\n        isTrue(vnode.isStatic) &&\n        isTrue(oldVnode.isStatic) &&\n        vnode.key === oldVnode.key &&\n        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))\n    ) {\n        vnode.componentInstance = oldVnode.componentInstance\n        return\n    }\n\n    let i\n    const data = vnode.data\n    if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {\n        i(oldVnode, vnode)\n    }\n\n    const oldCh = oldVnode.children\n    const ch = vnode.children\n    if (isDef(data) && isPatchable(vnode)) {\n        for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)\n        if (isDef((i = data.hook)) && isDef((i = i.update))) {\n            i(oldVnode, vnode)\n        }\n    }\n    if (isUndef(vnode.text)) {\n        // no text\n        if (isDef(oldCh) && isDef(ch)) {\n            // both has children    dps   || true  && true\n            if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)\n        } else if (isDef(ch)) {\n            // node has child\n            if (process.env.NODE_ENV !== "production") {\n                checkDuplicateKeys(ch)\n            }\n            if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, "") // if old has text  ,we set it as \'\'\n            addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue) // add Vnode children node\n        } else if (isDef(oldCh)) {\n            //oldVnode  has children and delete it\n            removeVnodes(oldCh, 0, oldCh.length - 1)\n        } else if (isDef(oldVnode.text)) {\n            nodeOps.setTextContent(elm, "") // TODO 566\n        }\n    } else if (oldVnode.text !== vnode.text) {\n        // Replace content\n        nodeOps.setTextContent(elm, vnode.text)\n    }\n    if (isDef(data)) {\n        if (isDef((i = data.hook)) && isDef((i = i.postpatch))) i(oldVnode, vnode)\n    }\n}\n')),(0,a.kt)("h3",{id:"samevnode"},"sameVnode()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function sameVnode(a, b) {\n    return (\n        a.key === b.key &&\n        ((a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b)) ||\n            (isTrue(a.isAsyncPlaceholder) && //\u662f\u5426\u5f02\u6b65\u7684\u9884\u8d4b\u503c\n                a.asyncFactory === b.asyncFactory && // \u5f02\u6b65\u7ec4\u4ef6\u7684\u5de5\u5382\u65b9\u6cd5\n                isUndef(b.asyncFactory.error)))\n    )\n}\n")),(0,a.kt)("h3",{id:"updatechildren"},"updateChildren"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53cc\u7aef\u6bd4\u8f83\u7b97\u6cd5\uff0c\u4e24\u4e2a Vnode \u6570\u7ec4\n\u627e\u51fa\u5dee\u5f02\u7684\u540c\u65f6\uff0c\u5b8c\u6210\u9700\u8981\u4fee\u6539\u7684 dom \u89c6\u56fe\u64cd\u4f5c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {\n    let oldStartIdx = 0\n    let newStartIdx = 0\n    let oldEndIdx = oldCh.length - 1\n    let oldStartVnode = oldCh[0]\n    let oldEndVnode = oldCh[oldEndIdx]\n    let newEndIdx = newCh.length - 1\n    let newStartVnode = newCh[0]\n    let newEndVnode = newCh[newEndIdx]\n    let oldKeyToIdx, idxInOld, vnodeToMove, refElm\n\n    // removeOnly is a special flag used only by <transition-group>\n    // to ensure removed elements stay in correct relative positions\n    // during leaving transitions\n    const canMove = !removeOnly\n\n    // debugger\n    if (process.env.NODE_ENV !== "production") {\n        checkDuplicateKeys(newCh)\n    }\n\n    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {\n        if (isUndef(oldStartVnode)) {\n            oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left\n        } else if (isUndef(oldEndVnode)) {\n            oldEndVnode = oldCh[--oldEndIdx]\n        } else if (sameVnode(oldStartVnode, newStartVnode)) {\n            patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)\n            oldStartVnode = oldCh[++oldStartIdx]\n            newStartVnode = newCh[++newStartIdx]\n        } else if (sameVnode(oldEndVnode, newEndVnode)) {\n            patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)\n            oldEndVnode = oldCh[--oldEndIdx]\n            newEndVnode = newCh[--newEndIdx]\n        } else if (sameVnode(oldStartVnode, newEndVnode)) {\n            // Vnode moved right SO real dom move right\n            patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)\n            canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm)) // move real dom\n            oldStartVnode = oldCh[++oldStartIdx]\n            newEndVnode = newCh[--newEndIdx]\n        } else if (sameVnode(oldEndVnode, newStartVnode)) {\n            // Vnode moved left\n            patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)\n            canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm) // move real dom\n            oldEndVnode = oldCh[--oldEndIdx]\n            newStartVnode = newCh[++newStartIdx]\n        } else {\n            // [1,2,3]\n            if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx) //    old    {  1: 0  ,  2:1  , 3:2}\n\n            idxInOld = isDef(newStartVnode.key)\n                ? oldKeyToIdx[newStartVnode.key]\n                : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)\n\n            if (isUndef(idxInOld)) {\n                // New element\n                //  [2]\n                //  [3]\n                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)\n            } else {\n                // different index\n                //  [5,2,3,6],\n                //  [4,3,2,1]\n                vnodeToMove = oldCh[idxInOld]\n                if (sameVnode(vnodeToMove, newStartVnode)) {\n                    patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)\n                    oldCh[idxInOld] = undefined\n                    canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)\n                } else {\n                    // same key but different element. treat as new element\n                    //   old  li  key =3\n                    //   now   div key = 3\n                    createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)\n                }\n            }\n            newStartVnode = newCh[++newStartIdx]\n        }\n    }\n    if (oldStartIdx > oldEndIdx) {\n        //  [1\uff0c2]\n        //  [4,2,1,3]\n        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm\n        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue) // dom\n    } else if (newStartIdx > newEndIdx) {\n        removeVnodes(oldCh, oldStartIdx, oldEndIdx) // remove real dom\n    }\n}\n')),(0,a.kt)("h2",{id:"exapmple"},"exapmple"),(0,a.kt)("h3",{id:"example1"},"example1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Mermaid"},"graph TB\n E>old]\n C((1))\n d((''))\n f((''))\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Mermaid"},"graph TB\n E>new]\n C((1))\n d((''))\n g((''))\n")),(0,a.kt)("h3",{id:"example2"},"example2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Mermaid"},"\ngraph TB\n E>old]\n C((''))\n f((''))\n e((2))\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Mermaid"},"graph TB\n E>new]\n C((''))\n d((''))\n g((2))\n")),(0,a.kt)("h3",{id:"example3"},"example3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Mermaid"},"graph TB\n E>old]\n C((1))\n f((''))\n e((''))\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Mermaid"},"graph TB\n E>new]\n C((''))\n d((''))\n g((1))\n")),(0,a.kt)("h3",{id:"example4"},"example4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Mermaid"},"graph TB\n E>old]\n C((''))\n d((''))\n e((1))\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Mermaid"},"graph TB\n E>new]\n C((1))\n d((''))\n g((''))\n")),(0,a.kt)("h3",{id:"example5"},"example5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Mermaid"},"graph TB\n E>old]\n e((1))\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Mermaid"},"graph TB\n E>new]\n C((2))\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bd4\u8f83\u524d")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"docker\u64cd\u4f5c\u5bfc\u5411",src:t(7121).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"patch \u4e4b\u540e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"docker\u64cd\u4f5c\u5bfc\u5411",src:t(8897).Z})))),(0,a.kt)("h2",{id:"dom-\u64cd\u4f5c"},"dom \u64cd\u4f5c"),(0,a.kt)("h3",{id:"addvnodes"},"addVnodes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {\n    for (; startIdx <= endIdx; ++startIdx) {\n        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx)\n    }\n}\n")),(0,a.kt)("h3",{id:"createelm"},"createElm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {\n    if (isDef(vnode.elm) && isDef(ownerArray)) {\n        // This vnode was used in a previous render!\n        // now it\'s used as a new node, overwriting its elm would cause\n        // potential patch errors down the road when it\'s used as an insertion\n        // reference node. Instead, we clone the node on-demand before creating\n        // associated DOM element for it.\n        vnode = ownerArray[index] = cloneVNode(vnode)\n    }\n\n    vnode.isRootInsert = !nested // for transition enter check\n    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {\n        return\n    }\n\n    const data = vnode.data\n    const children = vnode.children\n    const tag = vnode.tag\n    if (isDef(tag)) {\n        if (process.env.NODE_ENV !== "production") {\n            if (data && data.pre) {\n                creatingElmInVPre++\n            }\n            if (isUnknownElement(vnode, creatingElmInVPre)) {\n                warn(\n                    "Unknown custom element: <" +\n                        tag +\n                        "> - did you " +\n                        "register the component correctly? For recursive components, " +\n                        \'make sure to provide the "name" option.\',\n                    vnode.context\n                )\n            }\n        }\n\n        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode)\n        setScope(vnode)\n\n        /* istanbul ignore if */\n        if (__WEEX__) {\n            // in Weex, the default insertion order is parent-first.\n            // List items can be optimized to use children-first insertion\n            // with append="tree".\n            const appendAsTree = isDef(data) && isTrue(data.appendAsTree)\n            if (!appendAsTree) {\n                if (isDef(data)) {\n                    invokeCreateHooks(vnode, insertedVnodeQueue)\n                }\n                insert(parentElm, vnode.elm, refElm)\n            }\n            createChildren(vnode, children, insertedVnodeQueue)\n            if (appendAsTree) {\n                if (isDef(data)) {\n                    invokeCreateHooks(vnode, insertedVnodeQueue)\n                }\n                insert(parentElm, vnode.elm, refElm)\n            }\n        } else {\n            createChildren(vnode, children, insertedVnodeQueue)\n            if (isDef(data)) {\n                invokeCreateHooks(vnode, insertedVnodeQueue)\n            }\n            insert(parentElm, vnode.elm, refElm)\n        }\n\n        if (process.env.NODE_ENV !== "production" && data && data.pre) {\n            creatingElmInVPre--\n        }\n    } else if (isTrue(vnode.isComment)) {\n        vnode.elm = nodeOps.createComment(vnode.text)\n        insert(parentElm, vnode.elm, refElm)\n    } else {\n        vnode.elm = nodeOps.createTextNode(vnode.text)\n        insert(parentElm, vnode.elm, refElm)\n    }\n}\n')),(0,a.kt)("h3",{id:"removevnodes"},"removeVnodes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function removeVnodes(vnodes, startIdx, endIdx) {\n    for (; startIdx <= endIdx; ++startIdx) {\n        const ch = vnodes[startIdx]\n        if (isDef(ch)) {\n            if (isDef(ch.tag)) {\n                removeAndInvokeRemoveHook(ch)\n                invokeDestroyHook(ch)\n            } else {\n                // Text node\n                removeNode(ch.elm)\n            }\n        }\n    }\n}\n")),(0,a.kt)("h3",{id:"domapi"},"domApi"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{alt:"dom\u64cd\u4f5c",src:t(9036).Z}))))}m.isMDXComponent=!0},9036:function(e,n,t){n.Z=t.p+"assets/images/dom-adf6cc213b3111b97a2fa5e13c0eca5f.png"},8897:function(e,n,t){n.Z=t.p+"assets/images/patch-4231b9fe59de44118274ae7865f59bc4.png"},5789:function(e,n,t){n.Z=t.p+"assets/images/patchVnode-5db830b452c7bde310833318dff41855.png"},7121:function(e,n,t){n.Z=t.p+"assets/images/pre_patch-f1ce08256de542546df1f00aeab08c2a.png"},5105:function(e,n,t){n.Z=t.p+"assets/images/updatechildren-8bcf3041d7071e9ade3edbf2f112fa42.png"}}]);