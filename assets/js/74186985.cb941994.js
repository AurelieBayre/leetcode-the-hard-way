"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1070],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),i=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=i(e.components);return n.createElement(m.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=i(a),u=r,k=c["".concat(m,".").concat(u)]||c[u]||h[u]||s;return a?n.createElement(k,o(o({ref:t},l),{},{components:a})):n.createElement(k,o({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=c;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var i=2;i<s;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},15931:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return h}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=["components"],p={description:"Author: @heiheihang"},m="Heap",i={unversionedId:"basic-topics/heap",id:"basic-topics/heap",title:"Heap",description:"Author: @heiheihang",source:"@site/tutorials/basic-topics/heap.md",sourceDirName:"basic-topics",slug:"/basic-topics/heap",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/heap",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tutorials/basic-topics/heap.md",tags:[],version:"current",frontMatter:{description:"Author: @heiheihang"},sidebar:"tutorialSidebar",previous:{title:"Hash Map",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/hash-map"},next:{title:"Queue & Stack",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/queue-and-stack"}},l={},h=[{value:"Suggested Problem",id:"suggested-problem",level:3}],c={toc:h};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"heap"},"Heap"),(0,s.kt)("p",null,"A heap, or a priority queue, is a data structure that efficiently stores elements in a particular order. It is very efficient in inserting an element to the heap (",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mi",{parentName:"mrow"},"N"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(logN)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"), and very efficient in removing the first element of the heap (",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mi",{parentName:"mrow"},"N"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(logN)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"). To know the details of heap, we recommend you to look at ",(0,s.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=t0Cq6tVNRBA"},"this"),"."),(0,s.kt)("p",null,"By default, when we refer to heap, most implementations are min-heaps. This means the first element is always the smallest element."),(0,s.kt)("p",null,"In Python, you can use the following functions to interact with a heap:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"heap = [] #to initialize a heap, it is just a list\n\nheappush(heap, 3) # to add an element to the heap, we can use heappush\n#heap = [3] \n\nheappush(heap, 5)\n#heap = [3, 5] , the heap always keeps the smallest element in front!\n\nsmallest_element_from_heap = heappop(heap) #we can remove the first element from heap with heappop\n#heap = [5] , 3 is removed\n#smallest_element_from_heap = 3  #after heappop, it is stored in the variable\n")),(0,s.kt)("p",null,"That's it! These are the operations you need for using heap in LeetCode."),(0,s.kt)("p",null,"There is one more trick to learn for using heap. How do we tweak the heap to make it a max-heap?"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"max_heap = []\n\n#we want to store 10, but change it to -10 for max-heap\nheappush(max_heap, -10)\n#max_heap = [-10]\n\n\n#we want to store 7, but change it to -7 for max-heap\nheappush(max_heap, -7)\n#max_heap = [-10, -7]\n\nmax_element_from_heap = -1 * heappop(heap)\n#heap = [-7], -10 is removed\n#max_element_from_heap = 10, we have retrieved the largest element from the heap\n")),(0,s.kt)("p",null,"Let's work on a problem (",(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/last-stone-weight/"},"LeetCode Link"),")"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"You are given an array of integers ",(0,s.kt)("inlineCode",{parentName:"p"},"stones")," where ",(0,s.kt)("inlineCode",{parentName:"p"},"stones[i]")," is the weight of the ",(0,s.kt)("inlineCode",{parentName:"p"},"ith")," stone."),(0,s.kt)("p",{parentName:"blockquote"},"We are playing a game with the stones. On each turn, we choose the ",(0,s.kt)("strong",{parentName:"p"},"heaviest two stones")," and smash them together. Suppose the heaviest two stones have weights ",(0,s.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"y")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"x <= y"),". The result of this smash is:"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"If ",(0,s.kt)("inlineCode",{parentName:"li"},"x == y"),", both stones are destroyed, and"),(0,s.kt)("li",{parentName:"ul"},"If ",(0,s.kt)("inlineCode",{parentName:"li"},"x != y"),", the stone of weight ",(0,s.kt)("inlineCode",{parentName:"li"},"x")," is destroyed, and the stone of weight ",(0,s.kt)("inlineCode",{parentName:"li"},"y")," has new weight ",(0,s.kt)("inlineCode",{parentName:"li"},"y - x"),".")),(0,s.kt)("p",{parentName:"blockquote"},"At the end of the game, there is ",(0,s.kt)("strong",{parentName:"p"},"at most one")," stone left."),(0,s.kt)("p",{parentName:"blockquote"},"Return ",(0,s.kt)("em",{parentName:"p"},"the smallest possible weight of the left stone"),". If there are no stones left, return ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),".")),(0,s.kt)("p",null,"I want you to think about these questions before working on it:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Should we use a min-heap or a max-heap?"),(0,s.kt)("li",{parentName:"ul"},'If it is a max-heap, how to we "store" the numbers?'),(0,s.kt)("li",{parentName:"ul"},"What do we have to check before retrieving the two heaviest stones?")),(0,s.kt)("p",null,"As we need to get the two heaviest stones in every iteration, we should use a max-heap for quick access of the largest elements. To use a max-heap, we can store the negative of the integer. We have to check if there are at least two more stones in the heap before retrieving the two heaviest stones."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def lastStoneWeight(self, stones: List[int]) -> int:\n        \n        #initialize the max_heap\n        max_heap = []\n        \n        #add elements to max_heap\n        for stone in stones:\n            #store its negative to keep the most positive stone in front\n            heappush(max_heap, -stone)\n            \n        #we have to check if there are at least two stones in the heap\n        while(len(max_heap) > 1):\n            \n            #pop the largest element from max_heap, multiplied by -1\n            largest_stone = -1 * heappop(max_heap)\n            \n            #pop the second largest element (now largest) from max_heap, multiplied by -1\n            second_largest_stone = -1 * heappop(max_heap)\n            \n            #push the new stone if they are not equal\n            if(largest_stone != second_largest_stone):\n                new_stone = largest_stone - second_largest_stone\n                #remember to store its negative\n                heappush(max_heap, -new_stone)\n        \n        #if there is a stone left, return the stone, its positive value\n        if(max_heap):\n            return -max_heap[0]\n            \n        #if no stone left, return 0\n        return 0\n")),(0,s.kt)("h3",{id:"suggested-problem"},"Suggested Problem"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"0703 - Kth Largest Element in a Stream (Easy) ",(0,s.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/kth-largest-element-in-a-stream/"},"(LeetCode Link)")),(0,s.kt)("li",{parentName:"ul"},"0215 - Kth Largest Element in an Array (Medium) ",(0,s.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/kth-largest-element-in-an-array/"},"(LeetCode Link)")),(0,s.kt)("li",{parentName:"ul"},"0973 - K Closest Points to Origin (Medium) ",(0,s.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/k-closest-points-to-origin/"},"(LeetCode Link)"))))}u.isMDXComponent=!0}}]);