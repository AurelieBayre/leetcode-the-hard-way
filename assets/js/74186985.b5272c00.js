"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1070],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,d=c["".concat(m,".").concat(u)]||c[u]||h[u]||o;return a?n.createElement(d,s(s({ref:t},l),{},{components:a})):n.createElement(d,s({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},15931:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return h},suggestedProblems:function(){return d},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=a(92194),i=a(85423),m=["components"],p={title:"Heap / Priority Queue",description:"A heap, or a priority queue, is a data structure that efficiently stores elements in a particular order.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","heap","priority queue","algorithm"]},l=void 0,h={unversionedId:"basic-topics/heap",id:"basic-topics/heap",title:"Heap / Priority Queue",description:"A heap, or a priority queue, is a data structure that efficiently stores elements in a particular order.",source:"@site/tutorials/basic-topics/heap.md",sourceDirName:"basic-topics",slug:"/basic-topics/heap",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/heap",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tutorials/basic-topics/heap.md",tags:[],version:"current",frontMatter:{title:"Heap / Priority Queue",description:"A heap, or a priority queue, is a data structure that efficiently stores elements in a particular order.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","heap","priority queue","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Hash Map",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/hash-map"},next:{title:"Queue & Stack",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/queue-and-stack"}},c={},u=[],d=[{problemName:"0703 - Kth Largest Element in a Stream",difficulty:"Easy",LeetCodeLink:"https://leetcode.com/problems/kth-largest-element-in-a-stream/",SolutionLink:"../../solutions/0700-0799/kth-largest-element-in-a-stream-easy"},{problemName:"0215 - Kth Largest Element in an Array",difficulty:"Medium",LeetCodeLink:"https://leetcode.com/problems/kth-largest-element-in-an-array/",SolutionLink:"../../solutions/0200-0299/kth-largest-element-in-an-array-medium"},{problemName:"0973 - K Closest Points to Origin",difficulty:"Medium",LeetCodeLink:"https://leetcode.com/problems/k-closest-points-to-origin/",SolutionLink:"../../solutions/0900-0999/k-closest-points-to-origin-medium"}],k={toc:u,suggestedProblems:d};function f(e){var t=e.components,a=(0,r.Z)(e,m);return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{names:"@heiheihang",mdxType:"Authors"}),(0,o.kt)("p",null,"A heap, or a priority queue, is a data structure that efficiently stores elements in a particular order. It is very efficient in inserting an element to the heap (",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mi",{parentName:"mrow"},"l"),(0,o.kt)("mi",{parentName:"mrow"},"o"),(0,o.kt)("mi",{parentName:"mrow"},"g"),(0,o.kt)("mi",{parentName:"mrow"},"N"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(logN)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")"))))),"), and very efficient in removing the first element of the heap (",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mi",{parentName:"mrow"},"l"),(0,o.kt)("mi",{parentName:"mrow"},"o"),(0,o.kt)("mi",{parentName:"mrow"},"g"),(0,o.kt)("mi",{parentName:"mrow"},"N"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(logN)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")"))))),"). To know the details of heap, we recommend you to look at ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=t0Cq6tVNRBA"},"this"),"."),(0,o.kt)("p",null,"By default, when we refer to heap, most implementations are min-heaps. This means the first element is always the smallest element."),(0,o.kt)("p",null,"In Python, you can use the following functions to interact with a heap:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"heap = [] #to initialize a heap, it is just a list\n\nheappush(heap, 3) # to add an element to the heap, we can use heappush\n#heap = [3] \n\nheappush(heap, 5)\n#heap = [3, 5] , the heap always keeps the smallest element in front!\n\nsmallest_element_from_heap = heappop(heap) #we can remove the first element from heap with heappop\n#heap = [5] , 3 is removed\n#smallest_element_from_heap = 3  #after heappop, it is stored in the variable\n")),(0,o.kt)("p",null,"That's it! These are the operations you need for using heap in LeetCode."),(0,o.kt)("p",null,"There is one more trick to learn for using heap. How do we tweak the heap to make it a max-heap?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"max_heap = []\n\n#we want to store 10, but change it to -10 for max-heap\nheappush(max_heap, -10)\n#max_heap = [-10]\n\n\n#we want to store 7, but change it to -7 for max-heap\nheappush(max_heap, -7)\n#max_heap = [-10, -7]\n\nmax_element_from_heap = -1 * heappop(heap)\n#heap = [-7], -10 is removed\n#max_element_from_heap = 10, we have retrieved the largest element from the heap\n")),(0,o.kt)("p",null,"Let's work on a problem (",(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/last-stone-weight/"},"LeetCode Link"),")"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You are given an array of integers ",(0,o.kt)("inlineCode",{parentName:"p"},"stones")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"stones[i]")," is the weight of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ith")," stone."),(0,o.kt)("p",{parentName:"blockquote"},"We are playing a game with the stones. On each turn, we choose the ",(0,o.kt)("strong",{parentName:"p"},"heaviest two stones")," and smash them together. Suppose the heaviest two stones have weights ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"x <= y"),". The result of this smash is:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"x == y"),", both stones are destroyed, and"),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"x != y"),", the stone of weight ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," is destroyed, and the stone of weight ",(0,o.kt)("inlineCode",{parentName:"li"},"y")," has new weight ",(0,o.kt)("inlineCode",{parentName:"li"},"y - x"),".")),(0,o.kt)("p",{parentName:"blockquote"},"At the end of the game, there is ",(0,o.kt)("strong",{parentName:"p"},"at most one")," stone left."),(0,o.kt)("p",{parentName:"blockquote"},"Return ",(0,o.kt)("em",{parentName:"p"},"the smallest possible weight of the left stone"),". If there are no stones left, return ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),".")),(0,o.kt)("p",null,"I want you to think about these questions before working on it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Should we use a min-heap or a max-heap?"),(0,o.kt)("li",{parentName:"ul"},'If it is a max-heap, how to we "store" the numbers?'),(0,o.kt)("li",{parentName:"ul"},"What do we have to check before retrieving the two heaviest stones?")),(0,o.kt)("p",null,"As we need to get the two heaviest stones in every iteration, we should use a max-heap for quick access of the largest elements. To use a max-heap, we can store the negative of the integer. We have to check if there are at least two more stones in the heap before retrieving the two heaviest stones."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def lastStoneWeight(self, stones: List[int]) -> int:\n        \n        #initialize the max_heap\n        max_heap = []\n        \n        #add elements to max_heap\n        for stone in stones:\n            #store its negative to keep the most positive stone in front\n            heappush(max_heap, -stone)\n            \n        #we have to check if there are at least two stones in the heap\n        while(len(max_heap) > 1):\n            \n            #pop the largest element from max_heap, multiplied by -1\n            largest_stone = -1 * heappop(max_heap)\n            \n            #pop the second largest element (now largest) from max_heap, multiplied by -1\n            second_largest_stone = -1 * heappop(max_heap)\n            \n            #push the new stone if they are not equal\n            if(largest_stone != second_largest_stone):\n                new_stone = largest_stone - second_largest_stone\n                #remember to store its negative\n                heappush(max_heap, -new_stone)\n        \n        #if there is a stone left, return the stone, its positive value\n        if(max_heap):\n            return -max_heap[0]\n            \n        #if no stone left, return 0\n        return 0\n")),(0,o.kt)(i.Z,{title:"Suggested Problem",data:d,mdxType:"Table"}))}f.isMDXComponent=!0},92194:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.names.split(",");return n.createElement("div",{className:"author-wrapper"},t.length>1?"Authors":"Author",":",t.map((function(e,t){return n.createElement("span",{key:t,className:"author-tag"},e)})))}},85423:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.title,a=e.data.map((function(e){return n.createElement("tr",null,n.createElement("td",null,n.createElement("a",{href:e.LeetCodeLink,target:"_blank"},e.problemName)),n.createElement("td",null,e.difficulty),n.createElement("td",null,e.SolutionLink&&n.createElement("a",{href:e.SolutionLink,target:"_blank"},"View Solutions")))}));return n.createElement(n.Fragment,null,n.createElement("h3",null,t),n.createElement("table",null,n.createElement("th",null,"Problem Name"),n.createElement("th",null,"Difficulty"),n.createElement("th",null,"Solution Link"),a))}}}]);