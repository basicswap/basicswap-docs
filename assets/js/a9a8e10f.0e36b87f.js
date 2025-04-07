"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[854],{3607:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"user-guides/enable-disable-coins","title":"Enable or Disable Coins","description":"How to enable or disable coins on your BasicSwap DEX instance","source":"@site/docs/user-guides/enable-disable-coins.md","sourceDirName":"user-guides","slug":"/user-guides/enable-disable-coins","permalink":"/docs/user-guides/enable-disable-coins","draft":false,"unlisted":false,"editUrl":"https://github.com/basicswap/basicswap-docs/tree/main/docs/docs/user-guides/enable-disable-coins.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Enable or Disable Coins","description":"How to enable or disable coins on your BasicSwap DEX instance"},"sidebar":"tutorialSidebar","previous":{"title":"Update Guide","permalink":"/docs/user-guides/update"},"next":{"title":"Manage Enabled Coins","permalink":"/docs/user-guides/manage-enabled-coins"}}');var i=a(4848),t=a(8453),r=a(5537),o=a(9329);a(6540);const l={sidebar_position:3,title:"Enable or Disable Coins",description:"How to enable or disable coins on your BasicSwap DEX instance"},c="Enable or Disable Coins",d={},u=[{value:"BasicSwap on Docker",id:"basicswap-on-docker",level:2},{value:"BasicSwap Without Docker",id:"basicswap-without-docker",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"enable-or-disable-coins",children:"Enable or Disable Coins"})}),"\n",(0,i.jsx)(n.p,{children:"By default, BasicSwap only comes with Particl enabled as it is required to run the SecureMessaging Network (SMSG), but you can easily enable other coins."}),"\n",(0,i.jsx)(n.p,{children:"This guide will show you how to enable and disable coins on BasicSwap."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Currently, each coin you add has to be added ",(0,i.jsx)(n.strong,{children:"one by one"}),". Repeat the following step for each coin you want to enable."]})}),"\n",(0,i.jsx)(n.h2,{id:"basicswap-on-docker",children:"BasicSwap on Docker"}),"\n",(0,i.jsx)(n.p,{children:"If you've built BasicSwap using the Docker method, follow these steps to enable or disable coins on your instance."}),"\n",(0,i.jsxs)(r.A,{groupId:"coin-management-docker",children:[(0,i.jsxs)(o.A,{value:"enable-coins-docker",label:"Enable Coins",children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Stop the Docker image (this will shut down all BasicSwap processes)."}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"docker-compose stop\n"})}),(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Add a cryptocurrency to your BasicSwap instance by running the command below, replacing bitcoin with the specific coin you wish to enable after the ",(0,i.jsx)(n.code,{children:"--addcoin"})," parameter."]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"docker-compose run --rm swapclient basicswap-prepare --datadir=/coindata --addcoin=bitcoin\n"})}),(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can copy an existing pruned datadir (excluding ",(0,i.jsx)(n.code,{children:"bitcoin.conf"})," and any wallets) over to ",(0,i.jsx)(n.code,{children:"$COINDATA_PATH/bitcoin"}),". Remove any existing wallets after copying over a pruned chain, or the Bitcoin daemon won't start."]})})]}),(0,i.jsxs)(o.A,{value:"disable-coins-docker",label:"Disable Coins",children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Stop BasicSwap completely."}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"docker-compose stop\n"})}),(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Disable a coin by running the command below, replacing bitcoin with the specific coin you wish to enable after the ",(0,i.jsx)(n.code,{children:"--disablecoin"})," parameter."]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"docker-compose run --rm swapclient basicswap-prepare --datadir=/coindata --disablecoin=bitcoin\n"})}),(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Launch BasicSwap normally."}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"docker-compose up\n"})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"basicswap-without-docker",children:"BasicSwap Without Docker"}),"\n",(0,i.jsx)(n.p,{children:"If you installed BasicSwap directly from source rather than using Docker containers, follow the steps below to add  prevent or remove coins from your BasicSwap instance."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Linux users can simplify the process of adding and removing coins with community-maintained automation scripts available in ",(0,i.jsx)(n.a,{href:"https://github.com/nahuhh/basicswap-bash/releases",children:"here on Github"}),"."]})}),"\n",(0,i.jsxs)(r.A,{groupId:"coin-management-no-docker",children:[(0,i.jsxs)(o.A,{value:"enable-coins-no-docker",label:"Enable Coins",children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Stop BasicSwap completely."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add a cryptocurrency to your BasicSwap instance by running the command below, replacing bitcoin with the specific coin you wish to enable after the ",(0,i.jsx)(n.code,{children:"--addcoin"})," parameter."]}),"\n"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal" ',children:"basicswap-prepare --usebtcfastsync --datadir=$SWAP_DATADIR --addcoin=bitcoin\n"})}),(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Apply the changes to your BasicSwap instance."}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal" ',children:". $SWAP_DATADIR/venv/bin/activate && python -V\n"})}),(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can copy an existing pruned datadir (excluding ",(0,i.jsx)(n.code,{children:"bitcoin.conf"})," and any wallets) over to ",(0,i.jsx)(n.code,{children:"$COINDATA_PATH/bitcoin"}),". Remove any existing wallets after copying over a pruned chain, or the Bitcoin daemon won't start."]})})]}),(0,i.jsxs)(o.A,{value:"disable-coins-no-docker",label:"Disable Coins",children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Stop BasicSwap completely."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Remove the coin's record in your ",(0,i.jsx)(n.code,{children:"basicswap.json"})," config file."]}),"\n"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"sudo nano /Users/$USER/coinswaps/basicswap.json\n"})}),(0,i.jsxs)(n.p,{children:["In this example, here is what you would remove from ",(0,i.jsx)(n.code,{children:"basicswap.json"})," to disable Monero."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="basicswap.json"',children:'"monero": {\n        "connection_type": "rpc",\n        "manage_daemon": true,\n        "manage_wallet_daemon": true,\n        "rpcport": 29798,\n        "zmqport": 30898,\n        "walletrpcport": 29998,\n        "rpchost": "127.0.0.1",\n        "walletrpchost": "127.0.0.1",\n        "walletrpcuser": "xmr_wallet_user",\n        "walletrpcpassword": "xmr_wallet_pwd",\n        "walletfile": "swap_wallet",\n        "datadir": "/coindata/monero",\n        "bindir": "/coindata/bin/monero",\n        "restore_height": 2731435,\n        "blocks_confirmed": 7,\n        "walletsdir": "/coindata/monero"\n},\n'})}),(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Save the changes with ",(0,i.jsx)(n.code,{children:"CTRL + X"}),", followed by an ",(0,i.jsx)(n.code,{children:"ENTER"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Launch BasicSwap normally."}),"\n"]}),"\n"]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5537:(e,n,a)=>{a.d(n,{A:()=>v});var s=a(6540),i=a(4164),t=a(5627),r=a(6347),o=a(372),l=a(604),c=a(1861),d=a(8749);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:s,default:i}}=e;return{value:n,label:a,attributes:s,default:i}}))}(a);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:a}=e;const i=(0,r.W6)(),t=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})}),[t,i])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:i}=e,t=h(e),[r,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[c,u]=b({queryString:a,groupId:i}),[m,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,t]=(0,d.Dv)(a);return[i,(0,s.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:i}),w=(()=>{const e=c??m;return p({value:e,tabValues:t})?e:null})();(0,o.A)((()=>{w&&l(w)}),[w]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,t]),tabValues:t}}var x=a(9136);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(4848);function f(e){let{className:n,block:a,selectedValue:s,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),d=e=>{const n=e.currentTarget,a=l.indexOf(n),i=o[a].value;i!==s&&(c(n),r(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...t,className:(0,i.A)("tabs__item",w.tabItem,t?.className,{"tabs__item--active":s===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:t}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",w.tabList),children:[(0,g.jsx)(f,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function v(e){const n=(0,x.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var s=a(6540);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}},9329:(e,n,a)=>{a.d(n,{A:()=>r});a(6540);var s=a(4164);const i={tabItem:"tabItem_Ymn6"};var t=a(4848);function r(e){let{children:n,hidden:a,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,r),hidden:a,children:n})}}}]);