"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9351],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(n),h=r,d=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30435:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/buildings-with-an-ocean-view/"},l="1762 - Buildings With an Ocean View (Medium)",m={unversionedId:"1700-1799/buildings-with-an-ocean-view-medium",id:"1700-1799/buildings-with-an-ocean-view-medium",title:"1762 - Buildings With an Ocean View (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/buildings-with-an-ocean-view/",source:"@site/solutions/1700-1799/1762-buildings-with-an-ocean-view-medium.md",sourceDirName:"1700-1799",slug:"/1700-1799/buildings-with-an-ocean-view-medium",permalink:"/leetcode-the-hard-way/solutions/1700-1799/buildings-with-an-ocean-view-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1700-1799/1762-buildings-with-an-ocean-view-medium.md",tags:[],version:"current",sidebarPosition:1762,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/buildings-with-an-ocean-view/"},sidebar:"tutorialSidebar",previous:{title:"1751 - Maximum Number of Events That Can Be Attended II (Hard)",permalink:"/leetcode-the-hard-way/solutions/1700-1799/maximum-number-of-events-that-can-be-attended-ii-hard"},next:{title:"1768 - Merge Strings Alternately (Easy)",permalink:"/leetcode-the-hard-way/solutions/1700-1799/merge-strings-alternately-easy"}},p={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Backwards",id:"approach-1-backwards",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1762---buildings-with-an-ocean-view-medium"},"1762 - Buildings With an Ocean View (Medium)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"There are ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," buildings in a line. You are given an integer array ",(0,i.kt)("inlineCode",{parentName:"p"},"heights")," of size ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," that represents the heights of the buildings in the line."),(0,i.kt)("p",null,"The ocean is to the right of the buildings. A building has an ocean view if the building can see the ocean without obstructions. Formally, a building has an ocean view if all the buildings to its right have a ",(0,i.kt)("strong",{parentName:"p"},"smaller")," height."),(0,i.kt)("p",null,"Return a list of indices ",(0,i.kt)("strong",{parentName:"p"},"(0-indexed)")," of buildings that have an ocean view, sorted in increasing order."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: heights = [4,2,3,1]\nOutput: [0,2,3]\nExplanation: Building 1 (0-indexed) does not have an ocean view because building 2 is taller.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: heights = [4,3,2,1]\nOutput: [0,1,2,3]\nExplanation: All the buildings have an ocean view.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: heights = [1,3,2,4]\nOutput: [3]\nExplanation: Only building 3 has an ocean view.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= heights.length <= 10^5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= heights[i] <= 10^9"))),(0,i.kt)("h2",{id:"approach-1-backwards"},"Approach 1: Backwards"),(0,i.kt)("p",null,"We iterate ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"h"),(0,i.kt)("mi",{parentName:"mrow"},"e"),(0,i.kt)("mi",{parentName:"mrow"},"i"),(0,i.kt)("mi",{parentName:"mrow"},"g"),(0,i.kt)("mi",{parentName:"mrow"},"h"),(0,i.kt)("mi",{parentName:"mrow"},"t"),(0,i.kt)("mi",{parentName:"mrow"},"s")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"heights")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," from right to left and track the maximum height. If the current building is taller than the maximum height, it means it has an ocean view and we can set it as the new max height."),(0,i.kt)("p",null,"Since we do it backwards, we reverse the answer at the end."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<int> findBuildings(vector<int>& heights) {\n        int n = heights.size(), prev_mx = -1;\n        vector<int> ans;\n        // do it backwards\n        for (int i = n - 1; i >= 0; i--) {\n            // check if the current building is taller than the prev max\n            if (heights[i] > prev_mx) {\n                // if so, then this buildign has an ocean view\n                ans.push_back(i);\n                // update prev_mx\n                prev_mx = heights[i];\n            }\n        }\n        // reverse the order\n        reverse(ans.begin(), ans.end());\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0}}]);