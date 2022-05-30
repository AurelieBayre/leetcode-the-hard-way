"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[8283],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},l=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=o(a),h=r,k=u["".concat(i,".").concat(h)]||u[h]||c[h]||s;return a?n.createElement(k,m(m({ref:t},l),{},{components:a})):n.createElement(k,m({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,m=new Array(s);m[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,m[1]=p;for(var o=2;o<s;o++)m[o]=a[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},40738:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},suggestedProblems:function(){return k},toc:function(){return h}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),m=a(92194),p=a(85423),i=["components"],o={title:"Hash Map",description:"Hash Map provides quick lookup of certain values in O(1) time.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","hash map","algorithm"]},l=void 0,c={unversionedId:"basic-topics/hash-map",id:"basic-topics/hash-map",title:"Hash Map",description:"Hash Map provides quick lookup of certain values in O(1) time.",source:"@site/tutorials/basic-topics/hash-map.md",sourceDirName:"basic-topics",slug:"/basic-topics/hash-map",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/hash-map",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tutorials/basic-topics/hash-map.md",tags:[],version:"current",frontMatter:{title:"Hash Map",description:"Hash Map provides quick lookup of certain values in O(1) time.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","hash map","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Binary Search",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/binary-search"},next:{title:"Heap / Priority Queue",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/heap"}},u={},h=[],k=[{problemName:"0217 - Contains Duplicate",difficulty:"Easy",LeetCodeLink:"https://leetcode.com/problems/contains-duplicate/",SolutionLink:"../../solutions/0200-0299/contains-duplicate-easy"},{problemName:"0219 - Contains Duplicate II",difficulty:"Easy",LeetCodeLink:"https://leetcode.com/problems/contains-duplicate-ii/",SolutionLink:"../../solutions/0200-0299/contains-duplicate-ii-easy"},{problemName:"0003 - Longest Substring Without Repeating Characters",difficulty:"Medium",LeetCodeLink:"https://leetcode.com/problems/longest-substring-without-repeating-characters/",SolutionLink:"../../solutions/0000-0099/longest-substring-without-repeating-characters-medium"}],N={toc:h,suggestedProblems:k};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(m.Z,{names:"@heiheihang",mdxType:"Authors"}),(0,s.kt)("p",null,"Hash Map provides quick lookup of certain values in ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," time, and it is very useful in many LeetCode questions. Let's take a look at the classic Two Sum question"),(0,s.kt)("p",null,"0001 - Two Sum (Easy) (",(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/two-sum/"},"LeetCode Link"),")"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Given an array of integers ",(0,s.kt)("inlineCode",{parentName:"p"},"nums")," and an integer ",(0,s.kt)("inlineCode",{parentName:"p"},"target"),", return ",(0,s.kt)("em",{parentName:"p"},"indices of the two numbers such that they add up to ",(0,s.kt)("inlineCode",{parentName:"em"},"target")),"."),(0,s.kt)("p",{parentName:"blockquote"},"You may assume that each input would have ",(0,s.kt)("em",{parentName:"p"},(0,s.kt)("strong",{parentName:"em"},"exactly")),(0,s.kt)("strong",{parentName:"p"}," one solution"),", and you may not use the ",(0,s.kt)("em",{parentName:"p"},"same")," element twice."),(0,s.kt)("p",{parentName:"blockquote"},"You can return the answer in any order.")),(0,s.kt)("p",null,"For example, given the following input:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"nums = [2,7,11,15], target = 9\n")),(0,s.kt)("p",null,"We can see that the first two elements (",(0,s.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"7")," ) add up to the target (",(0,s.kt)("inlineCode",{parentName:"p"},"9)"),". So we need to return ",(0,s.kt)("inlineCode",{parentName:"p"},"[0,1]")," , as these two indices refer to ",(0,s.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"7")," ."),(0,s.kt)("p",null,"The naive way to solve this problem is to use a nested for-loop:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def twoSum(self, nums: List[int], target: int) -> List[int]:\n        \n        #locate the first element\n        for i in range(len(nums)):\n            \n            #search the second element from i+1\n            for j in range(i+1, len(nums)):\n                \n                #check if they add up to target\n                if(nums[i] + nums[j] == target):\n                    \n                    #return the two indices if they do\n                    return [i, j]\n                \n        return -1\n")),(0,s.kt)("p",null,"We observe that with a nested for-loop, the runtime complexity is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),". Let us look at how hash map can help us here."),(0,s.kt)("p",null,"Hash Map basically is a label. For example, if we want to store the (value, index) pair from the example above in a Hash Map."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"#we use {} to initialize a hash map\nhash_map = {}\n\n#we want to map the (value, index) pair in this list\ninput_1 = [2,7,11,15]\n\n#we put the (value, index) pair to the hash map\nhash_map[2] = 0 \nhash_map[7] = 1\nhash_map[11] = 2\nhash_map[15] = 3\n")),(0,s.kt)("p",null,"The special feature of hash map is that, from now on, if we want to know a value exists in ",(0,s.kt)("inlineCode",{parentName:"p"},"input_1")," or not, we can just perform:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'if( 7 in hash_map):\n    print("7 is in input_1")\nelse:\n    print("7 is not in input_1")\n')),(0,s.kt)("p",null,"This operation only takes ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," time! Without hash map, we would need to iterate the input to search for a specific element."),(0,s.kt)("p",null,"After understanding Hash Map, are you able to solve ",(0,s.kt)("a",{parentName:"p",href:"../../solutions/0000-0099/two-sum"},"Two Sum")," in ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"N"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," time?"),(0,s.kt)(p.Z,{title:"Suggested Problems",data:k,mdxType:"Table"}))}d.isMDXComponent=!0},92194:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.names.split(",");return n.createElement("div",{className:"author-wrapper"},t.length>1?"Authors":"Author",":",t.map((function(e,t){return n.createElement("span",{key:t,className:"author-tag"},e)})))}},85423:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.title,a=e.data,r={Easy:0,Medium:1,Hard:2},s=a.sort((function(e,t){return r[e.difficulty]-r[t.difficulty]})).map((function(e){return n.createElement("tr",null,n.createElement("td",null,n.createElement("a",{href:e.LeetCodeLink,target:"_blank"},e.problemName)),n.createElement("td",null,e.difficulty),n.createElement("td",null,e.SolutionLink&&n.createElement("a",{href:e.SolutionLink,target:"_blank"},"View Solutions")))}));return n.createElement(n.Fragment,null,n.createElement("h3",null,t),n.createElement("table",null,n.createElement("th",null,"Problem Name"),n.createElement("th",null,"Difficulty"),n.createElement("th",null,"Solution Link"),s))}}}]);