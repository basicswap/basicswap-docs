"use strict";(self.webpackChunkmy_documentation=self.webpackChunkmy_documentation||[]).push([[385],{2417:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"user-guides/make-offer","title":"Make an Offer","description":"How to make and manage trading offers on BasicSwap DEX","source":"@site/docs/user-guides/make-offer.md","sourceDirName":"user-guides","slug":"/user-guides/make-offer","permalink":"/docs/user-guides/make-offer","draft":false,"unlisted":false,"editUrl":"https://github.com/basicswap/basicswap-docs/tree/main/docs/docs/user-guides/make-offer.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"Make an Offer","description":"How to make and manage trading offers on BasicSwap DEX"},"sidebar":"tutorialSidebar","previous":{"title":"Manage Enabled Coins","permalink":"/docs/user-guides/manage-enabled-coins"},"next":{"title":"Take an Offer","permalink":"/docs/user-guides/take-offer"}}');var i=t(4848),a=t(8453);t(5537),t(9329),t(6540);const s={sidebar_position:5,title:"Make an Offer",description:"How to make and manage trading offers on BasicSwap DEX"},o="Create an Offer",l={},c=[{value:"Create an Offer",id:"create-an-offer-1",level:2},{value:"Configure Offer Settings",id:"configure-offer-settings",level:2},{value:"Confirm and Place Your Offer",id:"confirm-and-place-your-offer",level:2},{value:"Monitor Your Active Offers",id:"monitor-your-active-offers",level:2},{value:"Managing Incoming Bids",id:"managing-incoming-bids",level:2},{value:"Monitoring Swap Progress",id:"monitoring-swap-progress",level:2}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"create-an-offer",children:"Create an Offer"})}),"\n",(0,i.jsx)(n.p,{children:"BasicSwap is a cross-chain, privacy-focused decentralized exchange that eliminates intermediaries from cryptocurrency trading. Its distinctive distributed order book system allows you to create and accept trading offers without any third-party involvement."}),"\n",(0,i.jsx)(n.p,{children:"This comprehensive guide will walk you through the complete process of creating an offer, configuring its parameters, and successfully placing it on the BasicSwap order book."}),"\n",(0,i.jsx)(n.h2,{id:"create-an-offer-1",children:"Create an Offer"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the BasicSwap interface and click the blue ",(0,i.jsx)(n.code,{children:"New Offer"})," button."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Specify the cryptocurrency and amount you wish to sell in the ",(0,i.jsx)(n.strong,{children:"You Send"})," field."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter your desired receiving cryptocurrency and amount in the ",(0,i.jsx)(n.strong,{children:"You Get"})," field"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Set the current market rate by clicking the ",(0,i.jsx)(n.code,{children:"Fetch Rate"})," button. This will automatically adjust the number of coins your offer will request, though you can adjust it manually after."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure your offer parameters."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Lock Rate"}),": When enabled, maintains your specified exchange rate by automatically adjusting the receiving amount. When disabled, the system recalculates the rate based on your entered ",(0,i.jsx)(n.strong,{children:"You Get"})," value."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Amount Variable"}),": Allows partial fills by accepting bids for portions of your total offered amount."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Rate Variable"}),": Permits incoming bids at rates that differ from your specified rate."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Proceed to the next configuration screen by clicking the blue ",(0,i.jsx)(n.code,{children:"Continue"})," button."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configure-offer-settings",children:"Configure Offer Settings"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set your offer's duration by adjusting the ",(0,i.jsx)(n.strong,{children:"Offer valid (hrs)"})," value, which determines how long your offer remains active on the order book."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure the ",(0,i.jsx)(n.strong,{children:"Contract Locked (Mins)"})," parameter to establish the atomic swap timeout period. This critical setting defines how long the system waits before determining a swap has failed and returning funds to both parties."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select your bid acceptance preference; ",(0,i.jsx)(n.strong,{children:"Accept All"})," automatically accepts any incoming bid that matches your offer parameters while ",(0,i.jsx)(n.strong,{children:"Accept Known"})," only automatically accepts bids from traders you've previously completed swaps with"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Completed swaps do not automatically remove your offer from the order book. If using ",(0,i.jsx)(n.strong,{children:"Accept All"})," or ",(0,i.jsx)(n.strong,{children:"Accept Known"}),", remember that your offer remains active and may receive additional bids until it expires."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Proceed to the final confirmation step by clicking the blue ",(0,i.jsx)(n.code,{children:"Continue"})," button."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"confirm-and-place-your-offer",children:"Confirm and Place Your Offer"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Carefully review your order details on the confirmation screen, then click the ",(0,i.jsx)(n.code,{children:"Confirm Offer"})," button to publish your order to the BasicSwap network."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"monitor-your-active-offers",children:"Monitor Your Active Offers"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Track all your current and historical offers by navigating to the ",(0,i.jsx)(n.strong,{children:"Your Offers"})," tab, which displays their status and detailed information."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"managing-incoming-bids",children:"Managing Incoming Bids"}),"\n",(0,i.jsxs)(n.p,{children:["If you selected ",(0,i.jsx)(n.strong,{children:"Accept All"}),", the system will automatically process matching bids without requiring your intervention."]}),"\n",(0,i.jsx)(n.p,{children:"However, if you disabled automatic acceptance, you'll need to manually review and approve incoming bids."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Monitor the ",(0,i.jsx)(n.strong,{children:"Bids"})," page regularly to check for incoming bid notifications."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When a bid arrives, click on the ",(0,i.jsx)(n.code,{children:"Accept"})," button to view the complete swap request details."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["After reviewing the bid information, click ",(0,i.jsx)(n.code,{children:"Accept Bid"})," to initiate the atomic swap process."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once accepted, the swap executes automatically through the atomic swap protocol with no further action required."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"monitoring-swap-progress",children:"Monitoring Swap Progress"}),"\n",(0,i.jsxs)(n.p,{children:["Track the real-time status of your ongoing swaps through the comprehensive ",(0,i.jsx)(n.strong,{children:"Events"})," section of each bid's detail page."]}),"\n",(0,i.jsx)(n.p,{children:"This page displays every step of the atomic swap process, including network confirmations, cryptographic verification stages, and payment broadcasts, giving you complete visibility into the swap's execution."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5537:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),i=t(4164),a=t(5627),s=t(6347),o=t(372),l=t(604),c=t(1861),u=t(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=p({queryString:t,groupId:i}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,u.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),b=(()=>{const e=c??m;return f({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=t(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==r&&(c(n),s(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...a,className:(0,i.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,x.jsx)(y,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(6540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}},9329:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4164);const i={tabItem:"tabItem_Ymn6"};var a=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:n})}}}]);