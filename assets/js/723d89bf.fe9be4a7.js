"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[7869],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,y=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64294:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/keep-multiplying-found-values-by-two/"},u="2154 - Keep Multiplying Found Values by Two (Easy)",p={unversionedId:"2100-2199/keep-multiplying-found-values-by-two-easy",id:"2100-2199/keep-multiplying-found-values-by-two-easy",title:"2154 - Keep Multiplying Found Values by Two (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/keep-multiplying-found-values-by-two/",source:"@site/solutions/2100-2199/2154-keep-multiplying-found-values-by-two-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/keep-multiplying-found-values-by-two-easy",permalink:"/leetcode-the-hard-way/solutions/2100-2199/keep-multiplying-found-values-by-two-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2154-keep-multiplying-found-values-by-two-easy.md",tags:[],version:"current",sidebarPosition:2154,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/keep-multiplying-found-values-by-two/"},sidebar:"tutorialSidebar",previous:{title:"2151 - Maximum Good People Based on Statements (Hard)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/maximum-good-people-based-on-statements-hard"},next:{title:"2155 - All Divisions With the Highest Score of a Binary Array (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/all-divisions-with-the-highest-score-of-a-binary-array-medium"}},s={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation with Set",id:"approach-1-simulation-with-set",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2154---keep-multiplying-found-values-by-two-easy"},"2154 - Keep Multiplying Found Values by Two (Easy)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given an array of integers ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),". You are also given an integer ",(0,o.kt)("inlineCode",{parentName:"p"},"original")," which is the first number that needs to be searched for in ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),"."),(0,o.kt)("p",null,"You then do the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"original")," is found in ",(0,o.kt)("inlineCode",{parentName:"li"},"nums"),", ",(0,o.kt)("strong",{parentName:"li"},"multiply")," it by two (i.e., set ",(0,o.kt)("inlineCode",{parentName:"li"},"original = 2 * original"),")."),(0,o.kt)("li",{parentName:"ol"},"Otherwise, ",(0,o.kt)("strong",{parentName:"li"},"stop")," the process."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Repeat")," this process with the new number as long as you keep finding the number.")),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the ",(0,o.kt)("strong",{parentName:"em"},"final")," value of")," ",(0,o.kt)("inlineCode",{parentName:"p"},"original"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [5,3,6,1,12], original = 3\nOutput: 24\nExplanation: \n- 3 is found in nums. 3 is multiplied by 2 to obtain 6.\n- 6 is found in nums. 6 is multiplied by 2 to obtain 12.\n- 12 is found in nums. 12 is multiplied by 2 to obtain 24.\n- 24 is not found in nums. Thus, 24 is returned.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [2,7,9], original = 4\nOutput: 4\nExplanation:\n- 4 is not found in nums. Thus, 4 is returned.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 1000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums[i], original <= 1000"))),(0,o.kt)("h2",{id:"approach-1-simulation-with-set"},"Approach 1: Simulation with Set"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int findFinalValue(vector<int>& nums, int original) {\n        set<int> s(nums.begin(), nums.end());\n        while (s.count(original)) original *= 2;\n        return original;\n    }\n};\n")))}d.isMDXComponent=!0}}]);