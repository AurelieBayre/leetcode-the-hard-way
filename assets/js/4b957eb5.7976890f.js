"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6923],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=m(t),c=a,h=d["".concat(s,".").concat(c)]||d[c]||p[c]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13612:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={description:"Author: @TBC | https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/"},s="2170 - Minimum Operations to Make the Array Alternating (Medium)",m={unversionedId:"2100-2199/minimum-operations-to-make-the-array-alternating-medium",id:"2100-2199/minimum-operations-to-make-the-array-alternating-medium",title:"2170 - Minimum Operations to Make the Array Alternating (Medium)",description:"Author: @TBC | https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/",source:"@site/solutions/2100-2199/2170-minimum-operations-to-make-the-array-alternating-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/minimum-operations-to-make-the-array-alternating-medium",permalink:"/leetcode-the-hard-way/solutions/2100-2199/minimum-operations-to-make-the-array-alternating-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2170-minimum-operations-to-make-the-array-alternating-medium.md",tags:[],version:"current",sidebarPosition:2170,frontMatter:{description:"Author: @TBC | https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/"},sidebar:"tutorialSidebar",previous:{title:"2169 - Count Operations to Obtain Zero (Easy)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/count-operations-to-obtain-zero-easy"},next:{title:"2171 - Removing Minimum Number of Magic Beans (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/removing-minimum-number-of-magic-beans-medium"}},u={},p=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Frequency Table",id:"approach-1-frequency-table",level:2}],d={toc:p};function c(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2170---minimum-operations-to-make-the-array-alternating-medium"},"2170 - Minimum Operations to Make the Array Alternating (Medium)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given a ",(0,o.kt)("strong",{parentName:"p"},"0-indexed")," array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," consisting of ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," positive integers."),(0,o.kt)("p",null,"The array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums")," is called ",(0,o.kt)("strong",{parentName:"p"},"alternating")," if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nums[i - 2] == nums[i]"),", where ",(0,o.kt)("inlineCode",{parentName:"li"},"2 <= i <= n - 1"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nums[i - 1] != nums[i]"),", where ",(0,o.kt)("inlineCode",{parentName:"li"},"1 <= i <= n - 1"),".")),(0,o.kt)("p",null,"In one ",(0,o.kt)("strong",{parentName:"p"},"operation"),", you can choose an index ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," and ",(0,o.kt)("strong",{parentName:"p"},"change")," ",(0,o.kt)("inlineCode",{parentName:"p"},"nums[i]")," into ",(0,o.kt)("strong",{parentName:"p"},"any")," positive integer."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the ",(0,o.kt)("strong",{parentName:"em"},"minimum number of operations")," required to make the array alternating"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [3,1,3,2,4,3]\nOutput: 3\nExplanation:\nOne way to make the array alternating is by converting it to [3,1,3,1,3,1].\nThe number of operations required in this case is 3.\nIt can be proven that it is not possible to make the array alternating in less than 3 operations. \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,2,2,2,2]\nOutput: 2\nExplanation:\nOne way to make the array alternating is by converting it to [1,2,1,2,1].\nThe number of operations required in this case is 2.\nNote that the array cannot be converted to [2,2,2,2,2] because in this case nums[0] == nums[1] which violates the conditions of an alternating array.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 10^5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 10^5"))),(0,o.kt)("h2",{id:"approach-1-frequency-table"},"Approach 1: Frequency Table"),(0,o.kt)("p",null,"First, we need to separate the numbers at odd positions (",(0,o.kt)("inlineCode",{parentName:"p"},"odd"),") and even positions (",(0,o.kt)("inlineCode",{parentName:"p"},"even"),")."," "),(0,o.kt)("p",null,"We are only interested in the top 2 most frequent elements in ",(0,o.kt)("inlineCode",{parentName:"p"},"odd")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"even"),". We have the following cases:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The most frequent element from ",(0,o.kt)("inlineCode",{parentName:"li"},"odd")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"even")," are different"),(0,o.kt)("li",{parentName:"ol"},"The most frequent element from ",(0,o.kt)("inlineCode",{parentName:"li"},"odd")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"even")," are the same")),(0,o.kt)("p",null,"Case 1 is simple, we just change all other elements from the original list to those 2 elements."),(0,o.kt)("p",null,"Case 2 is trickier, because we have two possibilities now. As we cannot pick the two top 1 frequent elements from ",(0,o.kt)("inlineCode",{parentName:"p"},"odd")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"even"),", we need to inspect the second most frequent element as well. We then have the following two combination:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"mostFrequentOdd + secondMostFrequentEven"),(0,o.kt)("li",{parentName:"ol"},"mostFrequentEven + secondMostFrequentOdd")),(0,o.kt)("p",null,"We pick the larger of the two, and change all other elements to those numbers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def minimumOperations(self, nums: List[int]) -> int:\n    if(len(nums) == 1):\n        return 0\n    \n    #create frequency table for odd and even\n    odd = defaultdict(int)\n    even = defaultdict(int)\n        \n    #populate the frequency tables\n    for i in range(len(nums)):\n        if(i % 2 == 0):\n            even[nums[i]] += 1\n        else:\n            odd[nums[i]] += 1\n    \n    #store the [frequency, value] pair to the lists\n    evens = []\n    odds = []\n    for k in odd:\n        odds.append([odd[k], k])\n    for k in even:\n        evens.append([even[k] , k])\n        \n    #reverse to access the largest elements        \n    odds.sort(reverse = True)\n    evens.sort(reverse = True)\n    \n    #case 1: most frequent elements are not equal, then take both\n    if(odds[0][1] != evens[0][1]):\n        return len(nums) - odds[0][0] - evens[0][0]\n    else:\n    \n        #case 2: find second most frequent element\n        odd_second = 0\n        even_second = 0\n        if(len(odds) > 1):\n            odd_second = odds[1][0]\n        if(len(evens) > 1):\n            even_second = evens[1][0]\n            \n        #return the larger result\n        return min(len(nums) - odds[0][0] - even_second, len(nums) - evens[0][0] - odd_second)\n")))}c.isMDXComponent=!0}}]);