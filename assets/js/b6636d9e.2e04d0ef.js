"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3370],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},m=Object.keys(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,m=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,N=c["".concat(o,".").concat(k)]||c[k]||u[k]||m;return n?a.createElement(N,s(s({ref:t},l),{},{components:n})):a.createElement(N,s({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=n.length,s=new Array(m);s[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<m;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var a=n(87462),r=n(63366),m=(n(67294),n(3905)),s=n(8539),i=["components"],o={description:"Author: @wingkwong | https://leetcode.com/problems/number-of-excellent-pairs/"},p="2354 - Number of Excellent Pairs (Hard)",l={unversionedId:"2300-2399/number-of-excellent-pairs-hard",id:"2300-2399/number-of-excellent-pairs-hard",title:"2354 - Number of Excellent Pairs (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/number-of-excellent-pairs/",source:"@site/solutions/2300-2399/2354-number-of-excellent-pairs-hard.md",sourceDirName:"2300-2399",slug:"/2300-2399/number-of-excellent-pairs-hard",permalink:"/leetcode-the-hard-way/solutions/2300-2399/number-of-excellent-pairs-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2300-2399/2354-number-of-excellent-pairs-hard.md",tags:[],version:"current",sidebarPosition:2354,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/number-of-excellent-pairs/"},sidebar:"tutorialSidebar",previous:{title:"2331 - Evaluate Boolean Binary Tree (Easy)",permalink:"/leetcode-the-hard-way/solutions/2300-2399/evaluate-boolean-binary-tree-easy"}},u={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach: Bit Manipulation",id:"approach-bit-manipulation",level:2}],k={toc:c};function N(e){var t=e.components,n=(0,r.Z)(e,i);return(0,m.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"2354---number-of-excellent-pairs-hard"},"2354 - Number of Excellent Pairs (Hard)"),(0,m.kt)("h2",{id:"problem-link"},"Problem Link"),(0,m.kt)("p",null,(0,m.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/number-of-excellent-pairs/"},"https://leetcode.com/problems/number-of-excellent-pairs/")),(0,m.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,m.kt)("p",null,"You are given a ",(0,m.kt)("strong",{parentName:"p"},"0-indexed")," positive integer array ",(0,m.kt)("inlineCode",{parentName:"p"},"nums")," and a positive integer ",(0,m.kt)("inlineCode",{parentName:"p"},"k"),"."),(0,m.kt)("p",null,"A pair of numbers ",(0,m.kt)("inlineCode",{parentName:"p"},"(num1, num2)")," is called ",(0,m.kt)("strong",{parentName:"p"},"excellent")," if the following conditions are satisfied:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"Both")," the numbers ",(0,m.kt)("inlineCode",{parentName:"li"},"num1")," and ",(0,m.kt)("inlineCode",{parentName:"li"},"num2")," exist in the array ",(0,m.kt)("inlineCode",{parentName:"li"},"nums"),"."),(0,m.kt)("li",{parentName:"ul"},"The sum of the number of set bits in ",(0,m.kt)("inlineCode",{parentName:"li"},"num1 OR num2")," and ",(0,m.kt)("inlineCode",{parentName:"li"},"num1 AND num2")," is greater than or equal to ",(0,m.kt)("inlineCode",{parentName:"li"},"k"),", where ",(0,m.kt)("inlineCode",{parentName:"li"},"OR")," is the bitwise ",(0,m.kt)("strong",{parentName:"li"},"OR")," operation and ",(0,m.kt)("inlineCode",{parentName:"li"},"AND")," is the bitwise ",(0,m.kt)("strong",{parentName:"li"},"AND")," operation.")),(0,m.kt)("p",null,"Return ",(0,m.kt)("em",{parentName:"p"},"the number of ",(0,m.kt)("strong",{parentName:"em"},"distinct")," excellent pairs"),"."),(0,m.kt)("p",null,"Two pairs ",(0,m.kt)("inlineCode",{parentName:"p"},"(a, b)")," and ",(0,m.kt)("inlineCode",{parentName:"p"},"(c, d)")," are considered distinct if either ",(0,m.kt)("inlineCode",{parentName:"p"},"a != c")," or ",(0,m.kt)("inlineCode",{parentName:"p"},"b != d"),". For example, ",(0,m.kt)("inlineCode",{parentName:"p"},"(1, 2)")," and ",(0,m.kt)("inlineCode",{parentName:"p"},"(2, 1)")," are distinct."),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Note")," that a pair ",(0,m.kt)("inlineCode",{parentName:"p"},"(num1, num2)")," such that ",(0,m.kt)("inlineCode",{parentName:"p"},"num1 == num2")," can also be excellent if you have at least ",(0,m.kt)("strong",{parentName:"p"},"one")," occurrence of ",(0,m.kt)("inlineCode",{parentName:"p"},"num1")," in the array."," "),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 1:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,1], k = 3\nOutput: 5\nExplanation: The excellent pairs are the following:\n- (3, 3). (3 AND 3) and (3 OR 3) are both equal to (11) in binary. The total number of set bits is 2 + 2 = 4, which is greater than or equal to k = 3.\n- (2, 3) and (3, 2). (2 AND 3) is equal to (10) in binary, and (2 OR 3) is equal to (11) in binary. The total number of set bits is 1 + 2 = 3.\n- (1, 3) and (3, 1). (1 AND 3) is equal to (01) in binary, and (1 OR 3) is equal to (11) in binary. The total number of set bits is 1 + 2 = 3.\nSo the number of excellent pairs is 5.\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 2:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: nums = [5,1,1], k = 10\nOutput: 0\nExplanation: There are no excellent pairs for this array.\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Constraints:")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 10^9")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1 <= k <= 60"))),(0,m.kt)("h2",{id:"approach-bit-manipulation"},"Approach: Bit Manipulation"),(0,m.kt)("p",null,"For num1 OR num2, it is equal to the number of set bits of num1. For num1 AND num2, it is equal to the number of set bits of num2. Therefore, the sum of the number of set bits in (num1 OR num2) and (num1 AND num2) is equal to the sum of the number of set bits in num1 and num2. "),(0,m.kt)("p",null,"We can iterate each number and count the frequency of the set bits ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m[bits]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"bi"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"))))),". Then we can try all combinations to check if the sum of the number of set bits in num1 and num2 is greater than or equal to ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"k")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"))))),". If so, the number of pairs would be ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mo",{parentName:"mrow"},"\u2217"),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"j"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m[i] * m[j]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05724em"}},"j"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"))))),"."),(0,m.kt)(s.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    long long countExcellentPairs(vector<int>& nums, int k) {\n        long long ans = 0;\n        // remove duplicate numbers\n        set<int> s(nums.begin(), nums.end());\n        nums.assign(s.begin(), s.end());\n        // hash map to store the frequency of a given set bit count\n        unordered_map<int, int> m;\n        // iterate each number to calculate the set bits\n        for (auto& x : nums) {\n            // count each set bit\n            int cnt = 0;\n            for (int i = 0 ; i < 32; i++) {\n                if ((1 << i) & x) {\n                    cnt += 1;\n                }\n            }\n            m[cnt] += 1;\n            // alternative, we can use __builtin_popcount\n            // i.e. m[__builtin_popcount(x)]++;\n        }\n        // try all possible pairs\n        for (int i = 0; i < 32; i++) {\n            for (int j = 0; j < 32; j++) {\n                if (i + j >= k) {\n                    // if second condition is satisfied, \n                    // then the number of pairs would be m[i] * m[j]\n                    ans += m[i] * m[j] * 1LL;\n                }\n            }\n        }\n        return ans;\n    }\n};\n")))}N.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.name;return a.createElement("div",{className:"solution-author-wrapper"},a.createElement("span",null,"This solution is written by ",t))}}}]);