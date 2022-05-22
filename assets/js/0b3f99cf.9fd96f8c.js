"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6097],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||a;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70903:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/edit-distance/"},p="0072 - Edit Distance (Hard)",d={unversionedId:"0000-0099/edit-distance-hard",id:"0000-0099/edit-distance-hard",title:"0072 - Edit Distance (Hard)",description:"Author: @wingkwong | https://leetcode.com/problems/edit-distance/",source:"@site/solutions/0000-0099/0072-edit-distance-hard.md",sourceDirName:"0000-0099",slug:"/0000-0099/edit-distance-hard",permalink:"/leetcode-the-hard-way/solutions/0000-0099/edit-distance-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/0000-0099/0072-edit-distance-hard.md",tags:[],version:"current",sidebarPosition:72,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/edit-distance/"},sidebar:"tutorialSidebar",previous:{title:"0069 - Sqrt(x) (Easy)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/sqrt-x-easy"},next:{title:"0078 - Subsets (Medium)",permalink:"/leetcode-the-hard-way/solutions/0000-0099/subsets-medium"}},s={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Dynamic Programming",id:"approach-1-dynamic-programming",level:2},{value:"C++",id:"c",level:3}],m={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0072---edit-distance-hard"},"0072 - Edit Distance (Hard)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Given two strings ",(0,a.kt)("inlineCode",{parentName:"p"},"word1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"word2"),", return ",(0,a.kt)("em",{parentName:"p"},"the minimum number of operations required to convert ",(0,a.kt)("inlineCode",{parentName:"em"},"word1")," to ",(0,a.kt)("inlineCode",{parentName:"em"},"word2")),"."),(0,a.kt)("p",null,"You have the following three operations permitted on a word:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Insert a character"),(0,a.kt)("li",{parentName:"ul"},"Delete a character"),(0,a.kt)("li",{parentName:"ul"},"Replace a character")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: word1 = \"horse\", word2 = \"ros\"\nOutput: 3\nExplanation: \nhorse -> rorse (replace 'h' with 'r')\nrorse -> rose (remove 'r')\nrose -> ros (remove 'e')\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: word1 = \"intention\", word2 = \"execution\"\nOutput: 5\nExplanation: \nintention -> inention (remove 't')\ninention -> enention (replace 'i' with 'e')\nenention -> exention (replace 'n' with 'x')\nexention -> exection (replace 'n' with 'c')\nexection -> execution (insert 'u')\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= word1.length, word2.length <= 500")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"word1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"word2")," consist of lowercase English letters.")),(0,a.kt)("h2",{id:"approach-1-dynamic-programming"},"Approach 1: Dynamic Programming"),(0,a.kt)("p",null,"Edit distance is a classic DP problem. It is used to quantify the dissimilarity of two given strings by counting the minimum possible number of operations required to transform one string into the other."),(0,a.kt)("p",null,"Given that the constraints, we assume that a O(m ","*"," n) solution would pass."),(0,a.kt)("p",null,"Let's define ",(0,a.kt)("inlineCode",{parentName:"p"},"dp[i][j]")," as the minimum edit distance between the first ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," character of ",(0,a.kt)("inlineCode",{parentName:"p"},"word1")," and the first ",(0,a.kt)("inlineCode",{parentName:"p"},"j")," characters of ",(0,a.kt)("inlineCode",{parentName:"p"},"word2"),". In example 1, ",(0,a.kt)("inlineCode",{parentName:"p"},"dp[3][2]")," would be the edit distance between ",(0,a.kt)("inlineCode",{parentName:"p"},"word1[1..3]")," (HOR) and ",(0,a.kt)("inlineCode",{parentName:"p"},"word2[1..2]"),"(RO)."),(0,a.kt)("p",null,"If the last character is the same, then ",(0,a.kt)("inlineCode",{parentName:"p"},"dp[i][j]")," would be ",(0,a.kt)("inlineCode",{parentName:"p"},"dp[i - 1][j - 1]")," because we don't need to perform any operation. Otherwise, we need to perform either one. There are three possible ways to do the transformation."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We can transform ",(0,a.kt)("inlineCode",{parentName:"li"},"word1[1..i]")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"word2[1..j-1]")," by adding ",(0,a.kt)("inlineCode",{parentName:"li"},"word2[j]")," afterwards to get ",(0,a.kt)("inlineCode",{parentName:"li"},"word2[1..j]"),"."),(0,a.kt)("li",{parentName:"ol"},"We can transform ",(0,a.kt)("inlineCode",{parentName:"li"},"word1[1..i-1]")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"word2[1..j]")," by deleting ",(0,a.kt)("inlineCode",{parentName:"li"},"word1[i]"),"."),(0,a.kt)("li",{parentName:"ol"},"We can transform ",(0,a.kt)("inlineCode",{parentName:"li"},"word1[1..i-1]")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"word2[1..j-1]")," by exchanging the original ",(0,a.kt)("inlineCode",{parentName:"li"},"word1[i]")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"word2[j]"),".")),(0,a.kt)("p",null,"Therefore, the transition would be ",(0,a.kt)("inlineCode",{parentName:"p"},"dp[i][j] = 1 + min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"word1[i]")," is not equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"word2[j]"),"."),(0,a.kt)("p",null,"What is the base case then? The base case is simply an edit distance between the empty string and non-empty string, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"dp[i][0] = i")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dp[0][j] = j"),". The answer would be ",(0,a.kt)("inlineCode",{parentName:"p"},"dp[m][n]"),". This algorithm is also known as Wagner\u2013Fischer algorithm."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/168303382-cadaf726-02e3-400d-a8cc-fd0c7db315c3.png",alt:"image"})),(0,a.kt)("h3",{id:"c"},"C++"),(0,a.kt)("p",null,"Time Complexity: O(m ","*"," n)\\\nSpace Complexity: O(m ","*"," n)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int minDistance(string word1, string word2) {\n        int m = (int) word1.size();\n        int n = (int) word2.size();\n        int dp[m + 1][n + 1];\n        memset(dp, 0, sizeof(dp));\n        for (int i = 1; i <= m; i++) dp[i][0] = i;\n        for (int j = 1; j <= n; j++) dp[0][j] = j;\n        for (int i = 1; i <= m; i++){\n            for(int j = 1; j <= n; j++){\n                if(word1[i - 1] == word2[j - 1]) { // a = b\n                    dp[i][j] = dp[i - 1][j - 1]; \n                } else {\n                    // find out the min cost for all three actions\n                    dp[i][j] = 1 + min({\n                        dp[i - 1][j - 1], // replace a with b\n                        dp[i - 1][j],     // delete a\n                        dp[i][j - 1]      // insert b after a\n                    });\n                }\n            }\n        }\n        return dp[m][n];\n    }\n};\n")))}u.isMDXComponent=!0}}]);