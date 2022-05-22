"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[4142],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81199:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-score-of-a-node-sequence/"},u="2242 - Maximum Score of a Node Sequence (Hard)",l={unversionedId:"2200-2299/maximum-score-of-a-node-sequence-hard",id:"2200-2299/maximum-score-of-a-node-sequence-hard",title:"2242 - Maximum Score of a Node Sequence (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-score-of-a-node-sequence/",source:"@site/solutions/2200-2299/2242-maximum-score-of-a-node-sequence-hard.md",sourceDirName:"2200-2299",slug:"/2200-2299/maximum-score-of-a-node-sequence-hard",permalink:"/leetcode-the-hard-way/solutions/2200-2299/maximum-score-of-a-node-sequence-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2200-2299/2242-maximum-score-of-a-node-sequence-hard.md",tags:[],version:"current",sidebarPosition:2242,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-score-of-a-node-sequence/"},sidebar:"tutorialSidebar",previous:{title:"2241 - Design an ATM Machine (Medium)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/design-an-atm-machine-medium"},next:{title:"2243 - Calculate Digit Sum of a String (Easy)",permalink:"/leetcode-the-hard-way/solutions/2200-2299/calculate-digit-sum-of-a-string-easy"}},c={},p=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Find the neighbours",id:"approach-1-find-the-neighbours",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2242---maximum-score-of-a-node-sequence-hard"},"2242 - Maximum Score of a Node Sequence (Hard)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"There is an ",(0,a.kt)("strong",{parentName:"p"},"undirected")," graph with ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," nodes, numbered from ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"n - 1"),"."),(0,a.kt)("p",null,"You are given a ",(0,a.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"scores")," of length ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"scores[i]")," denotes the score of node ",(0,a.kt)("inlineCode",{parentName:"p"},"i"),". You are also given a 2D integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"edges")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"edges[i] = [ai, bi]")," denotes that there exists an ",(0,a.kt)("strong",{parentName:"p"},"undirected")," edge connecting nodes ",(0,a.kt)("inlineCode",{parentName:"p"},"ai")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"bi"),"."),(0,a.kt)("p",null,"A node sequence is ",(0,a.kt)("strong",{parentName:"p"},"valid")," if it meets the following conditions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There is an edge connecting every pair of ",(0,a.kt)("strong",{parentName:"li"},"adjacent")," nodes in the sequence."),(0,a.kt)("li",{parentName:"ul"},"No node appears more than once in the sequence.")),(0,a.kt)("p",null,"The score of a node sequence is defined as the ",(0,a.kt)("strong",{parentName:"p"},"sum")," of the scores of the nodes in the sequence."),(0,a.kt)("p",null,"Return ",(0,a.kt)("em",{parentName:"p"},"the ",(0,a.kt)("strong",{parentName:"em"},"maximum score")," of a valid node sequence with a length of")," ",(0,a.kt)("inlineCode",{parentName:"p"},"4"),(0,a.kt)("em",{parentName:"p"},".")," If no such sequence exists, return __ ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/04/15/ex1new3.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: scores = [5,2,9,8,4], edges = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]\nOutput: 24\nExplanation: The figure above shows the graph and the chosen node sequence [0,1,2,3].\nThe score of the node sequence is 5 + 2 + 9 + 8 = 24.\nIt can be shown that no other node sequence has a score of more than 24.\nNote that the sequences [3,1,2,0] and [1,0,2,3] are also valid and have a score of 24.\nThe sequence [0,3,2,4] is not valid since no edge connects nodes 0 and 3.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/03/17/ex2.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: scores = [9,20,6,4,11,12], edges = [[0,3],[5,3],[2,4],[1,3]]\nOutput: -1\nExplanation: The figure above shows the graph.\nThere are no valid node sequences of length 4, so we return -1.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n == scores.length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"4 <= n <= 5 * 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= scores[i] <= 10^8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= edges.length <= 5 * 10^4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edges[i].length == 2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= ai, bi <= n - 1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ai != bi")),(0,a.kt)("li",{parentName:"ul"},"There are no duplicate edges.")),(0,a.kt)("h2",{id:"approach-1-find-the-neighbours"},"Approach 1: Find the neighbours"),(0,a.kt)("p",null,"The key idea is to find the best three neighbours for each node. We need to keep the order based on the scores. We can use priority queue but in C++ it is not convenient to iterate it at the end, instead we use set as it is sorted internally. After that, we just need to iterate them to find out all the combinations. However, we need to check if they are duplicate before updating the answer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int maximumScore(vector<int>& scores, vector<vector<int>>& edges) {\n        int n = scores.size();\n        // find the best neighbours (at most 3)\n        vector<set<pair<int, int>>> m(n);\n        for(auto x : edges) {\n            int u = x[0], v = x[1];\n            m[u].insert({scores[v], v});\n            m[v].insert({scores[u], u});\n            if (m[u].size() > 3) m[u].erase(m[u].begin());\n            if (m[v].size() > 3) m[v].erase(m[v].begin());\n        }\n        // iterate each combination to find the answer\n        int ans = -1;\n        for (auto x : edges) {\n            int u = x[0], v = x[1];\n            for (auto x1 : m[u]) {\n                for (auto x2 : m[v]) {\n                    // skip some cases\n                    if (x1.second != x2.second && x1.second != v && x2.second != u) {\n                        ans = max(ans, scores[u] + scores[v] + x1.first + x2.first);\n                    }\n                }\n            }\n        }\n        return ans;\n    }\n};\n")))}m.isMDXComponent=!0}}]);