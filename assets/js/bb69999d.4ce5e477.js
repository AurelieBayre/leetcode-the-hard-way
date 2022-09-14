"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3106],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(n),m=o,f=g["".concat(c,".").concat(m)]||g[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},13473:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return g}});var r,o=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],c={description:"Author: @wingkwong | https://leetcode.com/problems/percentage-of-letter-in-string"},p="2278 - Percentage of Letter in String (Easy)",s={unversionedId:"2200-2299/percentage-of-letter-in-string",id:"2200-2299/percentage-of-letter-in-string",title:"2278 - Percentage of Letter in String (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/percentage-of-letter-in-string",source:"@site/solutions/2200-2299/2278-percentage-of-letter-in-string.md",sourceDirName:"2200-2299",slug:"/2200-2299/percentage-of-letter-in-string",permalink:"/leetcode-the-hard-way/solutions/2200-2299/percentage-of-letter-in-string",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2278-percentage-of-letter-in-string.md",tags:[],version:"current",sidebarPosition:2278,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/percentage-of-letter-in-string"},sidebar:"tutorialSidebar",previous:{title:"2276 - Count Integers in Intervals (Hard)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/count-integers-in-intervals-hard"},next:{title:"2279 - Maximum Bags With Full Capacity of Rocks (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/maximum-bags-with-full-capacity-of-rock-medium"}},u={},g=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Counting",id:"approach-1-counting",level:2}],m=(r="SolutionAuthor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:g};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2278---percentage-of-letter-in-string-easy"},"2278 - Percentage of Letter in String (Easy)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/percentage-of-letter-in-string"},"https://leetcode.com/problems/percentage-of-letter-in-string")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s = "foobar", letter = "o"\nOutput: 33\nExplanation:\nThe percentage of characters in s that equal the letter \'o\' is 2 / 6 * 100% = 33% when rounded down, so we return 33.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Input: s = "jjjj", letter = "k"\nOutput: 0\nExplanation:\nThe percentage of characters in s that equal the letter \'k\' is 0%, so we return 0.\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 <= s.length <= 100"),(0,i.kt)("li",{parentName:"ul"},"s consists of lowercase English letters."),(0,i.kt)("li",{parentName:"ul"},"letter is a lowercase English letter.")),(0,i.kt)("h2",{id:"approach-1-counting"},"Approach 1: Counting"),(0,i.kt)(m,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int percentageLetter(string s, char letter) {\n        int cnt = 0, n = s.size();\n        // counting\n        for (char& c : s) cnt += (c == letter);\n        // return the percentage of characters in s \n        // that equal letter rounded down to the nearest whole percent\n        return ((double) cnt / n) * 100;\n    }\n};\n")))}d.isMDXComponent=!0}}]);