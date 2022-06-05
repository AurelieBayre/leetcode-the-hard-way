"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2764],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38808:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(92194),s=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/reverse-string/"},p="0344 - Reverse String (Easy)",c={unversionedId:"0300-0399/reverse-string-easy",id:"0300-0399/reverse-string-easy",title:"0344 - Reverse String (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/reverse-string/",source:"@site/solutions/0300-0399/0344-reverse-string-easy.md",sourceDirName:"0300-0399",slug:"/0300-0399/reverse-string-easy",permalink:"/leetcode-the-hard-way/solutions/0300-0399/reverse-string-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0300-0399/0344-reverse-string-easy.md",tags:[],version:"current",sidebarPosition:344,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/reverse-string/"},sidebar:"tutorialSidebar",previous:{title:"0338 - Counting Bits (Easy)",permalink:"/leetcode-the-hard-way/solutions/0300-0399/counting-bits-easy"},next:{title:"0346 - Moving Average from Data Stream (Easy)",permalink:"/leetcode-the-hard-way/solutions/0300-0399/moving-average-from-data-stream-easy"}},u={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: In-place modification",id:"approach-1-in-place-modification",level:2},{value:"C++",id:"c",level:3},{value:"Go",id:"go",level:3},{value:"Approach 2: STL",id:"approach-2-stl",level:2},{value:"C++",id:"c-1",level:3},{value:"Python3",id:"python3",level:3},{value:"Rust",id:"rust",level:3}],d={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0344---reverse-string-easy"},"0344 - Reverse String (Easy)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/reverse-string/"},"https://leetcode.com/problems/reverse-string/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Write a function that reverses a string. The input string is given as an array of characters ",(0,i.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,i.kt)("p",null,"You must do this by modifying the input array ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/In-place_algorithm"},"in-place")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"O(1)")," extra memory."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s = ["h","e","l","l","o"]\nOutput: ["o","l","l","e","h"]\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s = ["H","a","n","n","a","h"]\nOutput: ["h","a","n","n","a","H"] \n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 10^5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s[i]")," is a ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ASCII#Printable_characters"},"printable ascii character"),".")),(0,i.kt)("h2",{id:"approach-1-in-place-modification"},"Approach 1: In-place modification"),(0,i.kt)("p",null,"We iterate the array to process two elements at the same time and swap them. First we swap ",(0,i.kt)("inlineCode",{parentName:"p"},"s[0]")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"s[n - 1]"),". Then swap ",(0,i.kt)("inlineCode",{parentName:"p"},"s[1]")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"s[n - 2]")," and so on. Therefore, we only swap ",(0,i.kt)("inlineCode",{parentName:"p"},"n / 2")," times."),(0,i.kt)("h3",{id:"c"},"C++"),(0,i.kt)(o.Z,{names:"@wingkwong",mdxType:"Authors"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        int n = (int) s.size();\n        for (int i = 0; i < n / 2; i++) {\n            swap(s[i], s[n - 1 - i]);\n        }\n    }\n};\n")),(0,i.kt)("h3",{id:"go"},"Go"),(0,i.kt)(o.Z,{names:"@wingkwong",mdxType:"Authors"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func reverseString(s []byte)  {\n    i, j := 0, len(s) - 1\n    for i < j {\n        s[i], s[j] = s[j], s[i]\n        i += 1\n        j -= 1\n    }\n}\n")),(0,i.kt)("h2",{id:"approach-2-stl"},"Approach 2: STL"),(0,i.kt)("h3",{id:"c-1"},"C++"),(0,i.kt)(o.Z,{names:"@wingkwong",mdxType:"Authors"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    void reverseString(vector<char>& s) {\n        reverse(s.begin(), s.end());\n    }\n};\n")),(0,i.kt)("h3",{id:"python3"},"Python3"),(0,i.kt)(o.Z,{names:"@wingkwong",mdxType:"Authors"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        s.reverse()\n")),(0,i.kt)("h3",{id:"rust"},"Rust"),(0,i.kt)(o.Z,{names:"@wingkwong",mdxType:"Authors"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"impl Solution {\n    pub fn reverse_string(s: &mut Vec<char>) {\n       s.reverse()\n    }\n}\n")))}h.isMDXComponent=!0},92194:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.names.split(",");return r.createElement("div",{className:"author-wrapper"},t.length>1?"Authors":"Author",":",t.map((function(e,t){return r.createElement("span",{key:t,className:"author-tag"},e)})))}}}]);