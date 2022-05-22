"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[621],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,d=u["".concat(m,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75963:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={description:"Author: @heiheihang | https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/"},m="2193 - Minimum Number of Moves to Make Palindrome (Hard)",l={unversionedId:"2100-2199/minimum-number-of-moves-to-make-palindrome-hard",id:"2100-2199/minimum-number-of-moves-to-make-palindrome-hard",title:"2193 - Minimum Number of Moves to Make Palindrome (Hard)",description:"Author: @heiheihang | https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/",source:"@site/solutions/2100-2199/2193-minimum-number-of-moves-to-make-palindrome-hard.md",sourceDirName:"2100-2199",slug:"/2100-2199/minimum-number-of-moves-to-make-palindrome-hard",permalink:"/leetcode-the-hard-way/solutions/2100-2199/minimum-number-of-moves-to-make-palindrome-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2193-minimum-number-of-moves-to-make-palindrome-hard.md",tags:[],version:"current",sidebarPosition:2193,frontMatter:{description:"Author: @heiheihang | https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/"},sidebar:"tutorialSidebar",previous:{title:"2192 - All Ancestors of a Node in a Directed Acyclic Graph (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/all-ancestors-of-a-node-in-a-directed-acyclic-graph-medium"},next:{title:"2194 - Cells in a Range on an Excel Sheet (Easy)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/cells-in-a-range-on-an-excel-sheet-easy"}},p={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2193---minimum-number-of-moves-to-make-palindrome-hard"},"2193 - Minimum Number of Moves to Make Palindrome (Hard)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given a string ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," consisting only of lowercase English letters."),(0,o.kt)("p",null,"In one ",(0,o.kt)("strong",{parentName:"p"},"move"),", you can select any two ",(0,o.kt)("strong",{parentName:"p"},"adjacent")," characters of ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," and swap them."),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the ",(0,o.kt)("strong",{parentName:"em"},"minimum number of moves")," needed to make")," ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," ",(0,o.kt)("em",{parentName:"p"},"a palindrome"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," that the input will be generated such that ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," can always be converted to a palindrome."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "aabb"\nOutput: 2\nExplanation:\nWe can obtain two palindromes from s, "abba" and "baab". \n- We can obtain "abba" from s in 2 moves: "aabb" -> "abab" -> "abba".\n- We can obtain "baab" from s in 2 moves: "aabb" -> "abab" -> "baab".\nThus, the minimum number of moves needed to make s a palindrome is 2.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Input: s = "letelt"\nOutput: 2\nExplanation:\nOne of the palindromes we can obtain from s in 2 moves is "lettel".\nOne of the ways we can obtain it is "letelt" -> "letetl" -> "lettel".\nOther palindromes such as "tleelt" can also be obtained in 2 moves.\nIt can be shown that it is not possible to obtain a palindrome in less than 2 moves.\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= s.length <= 2000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s")," consists only of lowercase English letters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s")," can be converted to a palindrome using a finite number of moves.")),(0,o.kt)("h2",{id:"approach-1-brute-force"},"Approach 1: Brute Force"),(0,o.kt)("p",null,"The first solution solves it in ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("msup",{parentName:"mrow"},(0,o.kt)("mi",{parentName:"msup"},"N"),(0,o.kt)("mn",{parentName:"msup"},"2")),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N^2)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord"},(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,o.kt)("span",{parentName:"span",className:"msupsub"},(0,o.kt)("span",{parentName:"span",className:"vlist-t"},(0,o.kt)("span",{parentName:"span",className:"vlist-r"},(0,o.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,o.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,o.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,o.kt)("span",{parentName:"span",className:"mclose"},")")))))," time brute force. The general logic is the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Count the number of occurrences of each character"),(0,o.kt)("li",{parentName:"ol"},"Start iterating rightward from the left character, skip if it does not have an available matching character"),(0,o.kt)("li",{parentName:"ol"}," ","Start iterating leftward from the right-most unmatched character, and find the first matching character"),(0,o.kt)("li",{parentName:"ol"},"When found, swap the characters in between to its appropriate position"),(0,o.kt)("li",{parentName:"ol"},"If we have skipped the odd character, we need to add its disposition from the middle position to the result")),(0,o.kt)("p",null,"This greedy approach is hard to justify that it produces the smallest amount of move, perhaps a harder analysis is needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def minMovesToMakePalindrome(self, s: str) -> int:\n        \n        #initialize the number of counts\n        res = 0\n        \n        #keep track of the right pointer of unused character\n        rp = len(s) - 1\n        \n        #count the frequency of characters\n        d = defaultdict(int)\n        \n        #change the string to a list for swapping\n        s = list(s)\n        \n        #calculate the frequency of characters\n        for i in range(len(s)):\n            c = s[i]\n            d[c] += 1\n            \n        #initialize the position of the odd character (middle)\n        odd_position = -1\n        \n        #we only need to look up to the middle of the palindrome form left side\n        for i in range((len(s)+1)//2):\n            \n            left_character = s[i]\n            \n            #we skip if the character is the odd one\n            if(d[left_character] == 1):\n                odd_position = i\n                continue\n                \n            #we find the matching \n            for j in range(rp, -1, -1):\n                \n                #stop when we find a matching character\n                if(s[j] == left_character):\n                    \n                    #swap the characters until the target position\n                    for k in range(j, rp):\n                        s[k] = s[k+1]\n                    #set the character at the target position\n                    s[rp] = left_character\n                    \n                    #add the distance travelled for the target character\n                    res += rp - j\n                    break\n            #decrease the count of that character by 2\n            d[left_character] -= 2\n            \n            #decrease right pointer by 1\n            rp -= 1\n            # print(s, res, i)\n            \n        #if there is an odd character\n        if(odd_position != -1):\n            \n            #add its distance to the center position\n            res += (len(s)) // 2 - left_over\n            \n        return res\n")))}h.isMDXComponent=!0}}]);