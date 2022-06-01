"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6436],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24176:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=(r(92194),["components"]),i={description:"Author: @TBC | https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"},p="0103 -  Binary Tree Zigzag Level Order Traversal (Medium)",u={unversionedId:"0100-0199/binary-tree-zigzag-level-order-traversal-medium",id:"0100-0199/binary-tree-zigzag-level-order-traversal-medium",title:"0103 -  Binary Tree Zigzag Level Order Traversal (Medium)",description:"Author: @TBC | https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",source:"@site/solutions/0100-0199/0103-binary-tree-zigzag-level-order-traversal-medium.md",sourceDirName:"0100-0199",slug:"/0100-0199/binary-tree-zigzag-level-order-traversal-medium",permalink:"/leetcode-the-hard-way/solutions/0100-0199/binary-tree-zigzag-level-order-traversal-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0100-0199/0103-binary-tree-zigzag-level-order-traversal-medium.md",tags:[],version:"current",sidebarPosition:103,frontMatter:{description:"Author: @TBC | https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"},sidebar:"tutorialSidebar",previous:{title:"0101 - Symmetric Tree (Easy)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/symmetric-tree-easy"},next:{title:"0104 - Maximum Depth of Binary Tree (Easy)",permalink:"/leetcode-the-hard-way/solutions/0100-0199/maximum-depth-of-binary-tree-easy"}},c={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}],m={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0103----binary-tree-zigzag-level-order-traversal-medium"},"0103 -  Binary Tree Zigzag Level Order Traversal (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"},"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," of a binary tree, return ",(0,o.kt)("em",{parentName:"p"},"the zigzag level order traversal of its nodes' values"),". (i.e., from left to right, then right to left for the next level and alternate between)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root = [3,9,20,null,null,15,7]\nOutput: [[3],[20,9],[15,7]]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root = [1]\nOutput: [[1]]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root = []\nOutput: []\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,o.kt)("inlineCode",{parentName:"li"},"[0, 2000]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-100 <= Node.val <= 100"))),(0,o.kt)("h2",{id:"approach-1-tbc"},"Approach 1: TBC"))}d.isMDXComponent=!0},92194:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);function a(e){var t=e.names.split(",");return n.createElement("div",{className:"author-wrapper"},t.length>1?"Authors":"Author",":",t.map((function(e,t){return n.createElement("span",{key:t,className:"author-tag"},e)})))}}}]);