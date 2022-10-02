"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[94631],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65098:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var o,r=n(87462),i=n(63366),a=(n(67294),n(3905)),s=["components"],p={description:"Author: @wingkwong,@heiheihang | https://leetcode.com/problems/k-closest-points-to-origin/"},l="0973 - K Closest Points to Origin (Medium)",c={unversionedId:"0900-0999/k-closest-points-to-origin-medium",id:"0900-0999/k-closest-points-to-origin-medium",title:"0973 - K Closest Points to Origin (Medium)",description:"Author: @wingkwong,@heiheihang | https://leetcode.com/problems/k-closest-points-to-origin/",source:"@site/solutions/0900-0999/0973-k-closest-points-to-origin-medium.md",sourceDirName:"0900-0999",slug:"/0900-0999/k-closest-points-to-origin-medium",permalink:"/leetcode-the-hard-way/solutions/0900-0999/k-closest-points-to-origin-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0973-k-closest-points-to-origin-medium.md",tags:[],version:"current",sidebarPosition:973,frontMatter:{description:"Author: @wingkwong,@heiheihang | https://leetcode.com/problems/k-closest-points-to-origin/"},sidebar:"tutorialSidebar",previous:{title:"0967 - Numbers With Same Consecutive Differences (Medium)",permalink:"/leetcode-the-hard-way/solutions/0900-0999/numbers-with-same-consecutive-differences-medium"},next:{title:"0974 - Subarray Sums Divisible by K (Medium)",permalink:"/leetcode-the-hard-way/solutions/0900-0999/subarray-sums-divisible-by-k-medium"}},u={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: nth_element",id:"approach-1-nth_element",level:2},{value:"Approach 2: Heap (Python)",id:"approach-2-heap-python",level:2}],d=(o="SolutionAuthor",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),h={toc:m};function k(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0973---k-closest-points-to-origin-medium"},"0973 - K Closest Points to Origin (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/k-closest-points-to-origin/"},"https://leetcode.com/problems/k-closest-points-to-origin/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given an array of ",(0,a.kt)("inlineCode",{parentName:"p"},"points")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"points[i] = [xi, yi]")," represents a point on the ",(0,a.kt)("strong",{parentName:"p"},"X-Y")," plane and an integer ",(0,a.kt)("inlineCode",{parentName:"p"},"k"),", return the ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," closest points to the origin ",(0,a.kt)("inlineCode",{parentName:"p"},"(0, 0)"),"."),(0,a.kt)("p",null,"The distance between two points on the ",(0,a.kt)("strong",{parentName:"p"},"X-Y")," plane is the Euclidean distance (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"\u221a(x1 - x2)2 + (y1 - y2)2"),")."),(0,a.kt)("p",null,"You may return the answer in ",(0,a.kt)("strong",{parentName:"p"},"any order"),". The answer is ",(0,a.kt)("strong",{parentName:"p"},"guaranteed")," to be ",(0,a.kt)("strong",{parentName:"p"},"unique")," (except for the order that it is in)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/03/03/closestplane1.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: points = [[1,3],[-2,2]], k = 1\nOutput: [[-2,2]]\nExplanation:\nThe distance between (1, 3) and the origin is sqrt(10).\nThe distance between (-2, 2) and the origin is sqrt(8).\nSince sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.\nWe only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: points = [[3,3],[5,-1],[-2,4]], k = 2\nOutput: [[3,3],[-2,4]]\nExplanation: The answer [[-2,4],[3,3]] would also be accepted.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= k <= points.length <= 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-10^4 < xi, yi < 10^4"))),(0,a.kt)("h2",{id:"approach-1-nth_element"},"Approach 1: nth_element"),(0,a.kt)(d,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<vector<int>> kClosest(vector<vector<int>>& points, int K) {\n        // we don't need to care about the exact order \n        // nth_element approach is enough\n        nth_element(points.begin(), points.begin() + K, points.end(),[](vector<int>& q, vector<int>& p) {\n            // sort by Euclidean distance\n            // dist(q, p) = sqrt( (q1 - p1) * (q1 - p1) + (q2 - p2) * (q2 - p2) )\n            // since we are comparing the points with the origin (0,0)\n            // dist(q, p) = sqrt( (q1) * (q1) + (q2) * (q2) )\n            // and we don't need to perform sqrt as sqrt(a) must be smaller than sqrt(b) if a < b\n            return q[0] * q[0] + q[1] * q[1] < p[0] * p[0] + p[1] * p[1];\n        });\n        // resize points to show K clostest points\n        points.resize(K);\n        return points;\n    }\n};\n")),(0,a.kt)("h2",{id:"approach-2-heap-python"},"Approach 2: Heap (Python)"),(0,a.kt)(d,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,a.kt)("p",null,"We can use a max heap of size ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," to store the ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," points closest to the origin. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:\n        h = []\n        \n        for a, b in points:\n            \n            dist = a ** 2 + b ** 2\n            heappush(h, [-dist, a, b])\n            if len(h) > k:\n                heappop(h)\n        \n        res = []\n        \n        while h:\n            res.append([h[0][1], h[0][2]])\n            heappop(h)\n            \n        return res\n")))}k.isMDXComponent=!0}}]);