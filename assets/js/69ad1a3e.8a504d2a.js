"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5713],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=i,f=d["".concat(p,".").concat(h)]||d[h]||u[h]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73216:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],s={description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/counting-words-with-a-given-prefix/"},p="2185 - Counting Words With a Given Prefix (Easy)",l={unversionedId:"2100-2199/counting-words-with-a-given-prefix-easy",id:"2100-2199/counting-words-with-a-given-prefix-easy",title:"2185 - Counting Words With a Given Prefix (Easy)",description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/counting-words-with-a-given-prefix/",source:"@site/solutions/2100-2199/2185-counting-words-with-a-given-prefix-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/counting-words-with-a-given-prefix-easy",permalink:"/leetcode-the-hard-way/solutions/2100-2199/counting-words-with-a-given-prefix-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2185-counting-words-with-a-given-prefix-easy.md",tags:[],version:"current",sidebarPosition:2185,frontMatter:{description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/counting-words-with-a-given-prefix/"},sidebar:"tutorialSidebar",previous:{title:"2183 -  Count Array Pairs Divisible by K (Hard)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/count-array-pairs-divisible-by-k-hard"},next:{title:"2186 - Minimum Number of Steps to Make Two Strings Anagram II (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/minimum-number-of-steps-to-make-two-strings-anagram-ii-medium"}},c={},u=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Iteration",id:"approach-1-iteration",level:2},{value:"Python 3 (By @heiheihang)",id:"python-3-by-heiheihang",level:3},{value:"C++ (By @wingkwong)",id:"c-by-wingkwong",level:3}],d={toc:u};function h(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2185---counting-words-with-a-given-prefix-easy"},"2185 - Counting Words With a Given Prefix (Easy)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are given an array of strings ",(0,a.kt)("inlineCode",{parentName:"p"},"words")," and a string ",(0,a.kt)("inlineCode",{parentName:"p"},"pref"),"."),(0,a.kt)("p",null,"Return ",(0,a.kt)("em",{parentName:"p"},"the number of strings in")," ",(0,a.kt)("inlineCode",{parentName:"p"},"words")," ",(0,a.kt)("em",{parentName:"p"},"that contain")," ",(0,a.kt)("inlineCode",{parentName:"p"},"pref")," ",(0,a.kt)("em",{parentName:"p"},"as a ",(0,a.kt)("strong",{parentName:"em"},"prefix")),"."),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"prefix")," of a string ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," is any leading contiguous substring of ",(0,a.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: words = ["pay","attention","practice","attend"], pref = "at"\nOutput: 2\nExplanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: words = ["leetcode","win","loops","success"], pref = "code"\nOutput: 0\nExplanation: There are no strings that contain "code" as a prefix.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= words.length <= 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= words[i].length, pref.length <= 100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"words[i]")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"pref")," consist of lowercase English letters.")),(0,a.kt)("h2",{id:"approach-1-iteration"},"Approach 1: Iteration"),(0,a.kt)("p",null,"We can define the length of the prefix string to be ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," , then we need to grab the first ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," characters of each word and compare their substrings. In the case the word has length less than ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),", we skip the word."),(0,a.kt)("h3",{id:"python-3-by-heiheihang"},"Python 3 (By @heiheihang)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def prefixCount(self, words: List[str], pref: str) -> int:\n        \n        #define the length of prefix\n        n = len(pref)\n        \n        res = 0\n        \n        #iterate each word\n        for s in words:\n        \n            #cannot get first n characters if it is shorter than n, so skip\n            if( len(s) < n):\n                continue\n            #compare the first n characters\n            if(s[:n] == pref):\n                res += 1\n                \n        return res\n")),(0,a.kt)("h3",{id:"c-by-wingkwong"},"C++ (By @wingkwong)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int prefixCount(vector<string>& words, string pref) {\n        int ans = 0;\n        // string::find returns the first position \n        // of the first character of the first match\n        for (auto s: words) ans += s.find(pref) == 0;\n        return ans;\n    }\n};\n")))}h.isMDXComponent=!0}}]);