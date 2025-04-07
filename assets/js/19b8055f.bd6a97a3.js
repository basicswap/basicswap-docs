"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[871],{5537:(e,t,a)=>{a.d(t,{A:()=>y});var n=a(6540),s=a(4164),r=a(5627),i=a(6347),o=a(372),l=a(604),c=a(1861),u=a(8749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}(a);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const s=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:s}=e,r=p(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,d]=m({queryString:a,groupId:s}),[b,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,u.Dv)(a);return[s,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),x=(()=>{const e=c??b;return h({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=a(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(4848);function w(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),s=o[a].value;s!==n&&(c(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function f(e){let{lazy:t,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function v(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,j.jsx)(w,{...t,...e}),(0,j.jsx)(f,{...t,...e})]})}function y(e){const t=(0,g.A)();return(0,j.jsx)(v,{...e,children:d(e.children)},String(t))}},6288:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"user-guides/update","title":"Update Guide","description":"How to update your BasicSwap DEX instance","source":"@site/docs/user-guides/update.md","sourceDirName":"user-guides","slug":"/user-guides/update","permalink":"/docs/user-guides/update","draft":false,"unlisted":false,"editUrl":"https://github.com/basicswap/basicswap-docs/tree/main/docs/docs/user-guides/update.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Update Guide","description":"How to update your BasicSwap DEX instance"},"sidebar":"tutorialSidebar","previous":{"title":"Installation Guide","permalink":"/docs/user-guides/install"},"next":{"title":"Enable or Disable Coins","permalink":"/docs/user-guides/enable-disable-coins"}}');var s=a(4848),r=a(8453),i=a(5537),o=a(9329);a(6540);const l={sidebar_position:2,title:"Update Guide",description:"How to update your BasicSwap DEX instance"},c="BasicSwap Update Guide",u={},d=[{value:"Update a Docker Image",id:"update-a-docker-image",level:2},{value:"Update Without Docker",id:"update-without-docker",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"basicswap-update-guide",children:"BasicSwap Update Guide"})}),"\n",(0,s.jsx)(t.p,{children:"BasicSwap DEX is under active open-source development, with frequent releases introducing new features, improvements, and critical bug fixes. Maintaining your installation with regular updates ensures optimal performance and security."}),"\n",(0,s.jsx)(t.p,{children:"This guide provides step-by-step instructions for properly updating your BasicSwap instance to the latest version."}),"\n",(0,s.jsx)(t.h2,{id:"update-a-docker-image",children:"Update a Docker Image"}),"\n",(0,s.jsx)(t.p,{children:"If you've built BasicSwap using the Docker method, follow these steps to update your instance to the most up-to-date version."}),"\n",(0,s.jsxs)(i.A,{groupId:"update-method",children:[(0,s.jsxs)(o.A,{value:"update-basicswap",label:"Update BasicSwap",children:[(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Navigate to your BasicSwap's Docker folder (where BasicSwap is installed)."}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"cd basicswap/docker\n"})}),(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Stop the BasicSwap Docker image."}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"docker-compose stop\n"})}),(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Make sure you're on the correct repository."}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"git remote set-url origin https://github.com/basicswap/basicswap\n"})}),(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"Pull the latest BasicSwap updates from Github."}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"git pull\n"})}),(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsx)(t.li,{children:"Apply the updates to your Docker image."}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"docker-compose build --no-cache\n"})}),(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsx)(t.li,{children:"Launch BasicSwap"}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"docker-compose up\n"})})]}),(0,s.jsxs)(o.A,{value:"update-coin-cores",label:"Update Coin Core Versions",children:[(0,s.jsx)(t.p,{children:"To update the core versions of cryptocurrencies enabled in your BasicSwap installation, first ensure BasicSwap itself is running the latest version. This prerequisite is essential, as the coin core update process depends on components from the main BasicSwap codebase."}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Update your BasicSwap instance to the latest version."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Navigate to your BasicSwap docker folder (where your BasicSwap docker image is located)."}),"\n"]}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"cd basicswap/docker\n"})}),(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Stop the BasicSwap Docker image."}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"docker-compose stop\n"})}),(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["Apply coin core updates to your docker image. Make sure to write what coin core(s) you want to update using the ",(0,s.jsx)(t.code,{children:"--withcoins"})," argument."]}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal" showLineNumbers',children:"docker-compose run --rm swapclient \\ \nbasicswap-prepare --datadir=/coindata --preparebinonly --withcoins=monero,bitcoin\n"})})]})]}),"\n",(0,s.jsx)(t.h2,{id:"update-without-docker",children:"Update Without Docker"}),"\n",(0,s.jsx)(t.p,{children:"If you installed BasicSwap directly from source rather than using Docker containers, follow the steps below to update your installation to the latest version."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Linux users can simplify the update process with community-maintained automation scripts available in the ",(0,s.jsx)(t.a,{href:"https://github.com/nahuhh/basicswap-bash",children:"basicswap-bash repository"}),"."]})}),"\n",(0,s.jsxs)(i.A,{groupId:"update-method-no-docker",children:[(0,s.jsxs)(o.A,{value:"update-basicswap-no-docker",label:"Update BasicSwap",children:[(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Properly shutdown BasicSwap."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Initialize the update environment by executing the following commands sequentially (",(0,s.jsx)(t.strong,{children:"one by one"}),")."]}),"\n"]}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal" showLineNumbers',children:"export SWAP_DATADIR=$HOME/coinswaps\n. $SWAP_DATADIR/venv/bin/activate && python3 -V\n"})}),(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Navigate to your BasicSwap folder and clear build cache."}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal" showLineNumbers',children:"cd $SWAP_DATADIR/basicswap\nrm -rf $SWAP_DATADIR/basicswap/build\n"})}),(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"Make sure you're on the correct repository."}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"git remote set-url origin https://github.com/basicswap/basicswap\n"})}),(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsx)(t.li,{children:"Pull the latest BasicSwap updates from Github."}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"git pull\n"})}),(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsx)(t.li,{children:"Apply the updates to your BasicSwap instance."}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal" showLineNumbers',children:"pip3 install --require-hashes -r requirements.txt\npip3 install .\n"})})]}),(0,s.jsxs)(o.A,{value:"update-coin-cores-no-docker",label:"Update Coin Core Versions",children:[(0,s.jsx)(t.p,{children:"To update the core versions of cryptocurrencies enabled in your BasicSwap installation, first ensure BasicSwap itself is running the latest version. This prerequisite is essential, as the coin core update process depends on components from the main BasicSwap codebase."}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Properly shutdown BasicSwap."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Update your BasicSwap instance to the latest version."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Apply coin core updates to your BasicSwap instance. Make sure to input what coin core(s) you want to update using the ",(0,s.jsx)(t.code,{children:"--withcoins"})," argument."]}),"\n"]}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"basicswap-prepare --datadir=$SWAP_DATADIR --preparebinonly --withcoins=monero,bitcoin\n"})})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var n=a(6540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}},9329:(e,t,a)=>{a.d(t,{A:()=>i});a(6540);var n=a(4164);const s={tabItem:"tabItem_Ymn6"};var r=a(4848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:a,children:t})}}}]);