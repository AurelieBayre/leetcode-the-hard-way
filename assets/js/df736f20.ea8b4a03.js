"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[8283],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return u}});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),o=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},l=function(e){var a=o(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),h=o(t),u=s,N=h["".concat(i,".").concat(u)]||h[u]||c[u]||r;return t?n.createElement(N,p(p({ref:a},l),{},{components:t})):n.createElement(N,p({ref:a},l))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,p=new Array(r);p[0]=h;var m={};for(var i in a)hasOwnProperty.call(a,i)&&(m[i]=a[i]);m.originalType=e,m.mdxType="string"==typeof e?e:s,p[1]=m;for(var o=2;o<r;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},40738:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return c}});var n=t(87462),s=t(63366),r=(t(67294),t(3905)),p=["components"],m={description:"Author:@heiheihang"},i="Hash Map",o={unversionedId:"basic-topics/hash-map",id:"basic-topics/hash-map",title:"Hash Map",description:"Author:@heiheihang",source:"@site/tutorials/basic-topics/hash-map.md",sourceDirName:"basic-topics",slug:"/basic-topics/hash-map",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/hash-map",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tutorials/basic-topics/hash-map.md",tags:[],version:"current",frontMatter:{description:"Author:@heiheihang"},sidebar:"tutorialSidebar",previous:{title:"Binary Search",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/binary-search"},next:{title:"Heap",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/heap"}},l={},c=[{value:"Suggested Problems",id:"suggested-problems",level:3}],h={toc:c};function u(e){var a=e.components,t=(0,s.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hash-map"},"Hash Map"),(0,r.kt)("p",null,"Hash Map provides quick lookup of certain values in ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," time, and it is very useful in many LeetCode questions. Let's take a look at the classic Two Sum question"),(0,r.kt)("p",null,"0001 - Two Sum (Easy) (",(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/two-sum/"},"LeetCode Link"),")"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Given an array of integers ",(0,r.kt)("inlineCode",{parentName:"p"},"nums")," and an integer ",(0,r.kt)("inlineCode",{parentName:"p"},"target"),", return ",(0,r.kt)("em",{parentName:"p"},"indices of the two numbers such that they add up to ",(0,r.kt)("inlineCode",{parentName:"em"},"target")),"."),(0,r.kt)("p",{parentName:"blockquote"},"You may assume that each input would have ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"exactly")),(0,r.kt)("strong",{parentName:"p"}," one solution"),", and you may not use the ",(0,r.kt)("em",{parentName:"p"},"same")," element twice."),(0,r.kt)("p",{parentName:"blockquote"},"You can return the answer in any order.")),(0,r.kt)("p",null,"For example, given the following input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"nums = [2,7,11,15], target = 9\n")),(0,r.kt)("p",null,"We can see that the first two elements (",(0,r.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"7")," ) add up to the target (",(0,r.kt)("inlineCode",{parentName:"p"},"9)"),". So we need to return ",(0,r.kt)("inlineCode",{parentName:"p"},"[0,1]")," , as these two indices refer to ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"7")," ."," "),(0,r.kt)("p",null,"The naive way to solve this problem is to use a nested for-loop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def twoSum(self, nums: List[int], target: int) -> List[int]:\n        \n        #locate the first element\n        for i in range(len(nums)):\n            \n            #search the second element from i+1\n            for j in range(i+1, len(nums)):\n                \n                #check if they add up to target\n                if(nums[i] + nums[j] == target):\n                    \n                    #return the two indices if they do\n                    return [i, j]\n                \n        return -1\n")),(0,r.kt)("p",null,"We observe that with a nested for-loop, the runtime complexity is ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"n"),(0,r.kt)("mn",{parentName:"msup"},"2")),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),". Let us look at how hash map can help us here."),(0,r.kt)("p",null,"Hash Map basically is a label. For example, if we want to store the (value, index) pair from the example above in a Hash Map."," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#we use {} to initialize a hash map\nhash_map = {}\n\n#we want to map the (value, index) pair in this list\ninput_1 = [2,7,11,15]\n\n#we put the (value, index) pair to the hash map\nhash_map[2] = 0 \nhash_map[7] = 1\nhash_map[11] = 2\nhash_map[15] = 3\n")),(0,r.kt)("p",null,"The special feature of hash map is that, from now on, if we want to know a value exists in ",(0,r.kt)("inlineCode",{parentName:"p"},"input_1")," or not, we can just perform:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'if( 7 in hash_map):\n    print("7 is in input_1")\nelse:\n    print("7 is not in input_1")\n')),(0,r.kt)("p",null,"This operation only takes ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," time! Without hash map, we would need to iterate the input to search for a specific element."," "),(0,r.kt)("p",null,"After understanding Hash Map, are you able to solve ",(0,r.kt)("a",{parentName:"p",href:"../../solutions/0000-0099/two-sum"},"Two Sum")," in ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," time?"),(0,r.kt)("h3",{id:"suggested-problems"},"Suggested Problems"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"0003 - Longest Substring Without Repeating Characters (Medium) ",(0,r.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/longest-substring-without-repeating-characters/"},"(LeetCode Link)")),(0,r.kt)("li",{parentName:"ul"},"0217 - Contains Duplicate (Easy) ",(0,r.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/contains-duplicate/"},"(LeetCode Link)")),(0,r.kt)("li",{parentName:"ul"},"0219 - Contains Duplicate II (Easy) ",(0,r.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/contains-duplicate-ii/"},"(LeetCode Link)"))))}u.isMDXComponent=!0}}]);