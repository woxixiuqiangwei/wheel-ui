import{r as g,d as k,a as c,o as e,g as o,H as l,I as s,c as m,w as p,h as a,z as i,y as f,R as u,b as y}from"./vendor.c0366ad2.js";const w=g([{title:"\u57FA\u672C\u7528\u6CD5",desc:`\u8BBE\u7F6E height \u5C5E\u6027\uFF0C\u4FEE\u6539\u6EDA\u52A8\u9AD8\u5EA6\u8FBE\u5230\u6B64\u53C2\u6570\u503C\u624D\u51FA\u73B0\u8FD4\u56DE\u9876\u90E8\u3002<br>
      \u8BBE\u7F6E bottom \u5C5E\u6027\uFF0C\u4FEE\u6539\u8FD4\u56DE\u9876\u90E8\u5230\u9875\u9762\u5E95\u90E8\u7684\u8DDD\u79BB\u3002(\u9ED8\u8BA4\u662F40px)<br>
      \u8BBE\u7F6E right \u5C5E\u6027\uFF0C\u4FEE\u6539\u8FD4\u56DE\u9876\u90E8\u5230\u9875\u9762\u53F3\u8FB9\u7684\u8DDD\u79BB\u3002(\u9ED8\u8BA4\u662F40px)`,components:[{label:"\u53F3\u4E0B\u89D2\u7B2C\u4E00\u4E2A\u662F \u81EA\u5B9A\u4E49\u5C5E\u6027 bottom (260px)",bottom:260}],template:`    <template>
      <w-back-top :bottom='240' />
    </template> `},{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9",desc:"\u8FD4\u56DE\u9876\u90E8\u7684\u5185\u5BB9\u53EF\u4F7F\u7528\u9ED8\u8BA4\u63D2\u69FD\u81EA\u5B9A\u4E49\u3002 (\u6587\u5B57\u6216\u8005\u56FE\u7247)",components:[{label:"\u53F3\u4E0B\u89D2\u7B2C\u4E8C\u4E2A\u662F \u81EA\u5B9A\u4E49\u5185\u5BB9 (\u6587\u5B57\u5185\u5BB9)\uFF0C\u8FD4\u56DE\u6301\u7EED3\u79D2",bottom:180,content:"\u8FD4\u56DE\u9876\u90E8(3\u79D2)",duration:3},{label:"\u53F3\u4E0B\u89D2\u7B2C\u4E09\u4E2A\u662F \u81EA\u5B9A\u4E49\u5185\u5BB9 (\u56FE\u7247\u5706\u5F62\u5C55\u793A)",bottom:100,img:"https://cdn.onlinewebfonts.com/svg/img_270690.png",circle:!0}],template:`    <template>
      <w-back-top :bottom='180'>
        \u8FD4\u56DE\u9876\u90E8(3\u79D2)
      </w-back-top>
      <w-back-top :bottom='100' :circle='true'>
        <img src='https://cdn.onlinewebfonts.com/svg/img_270690.png' />
      </w-back-top>
    </template> `}]),v={attribute:[{name:"target",desc:"\u89E6\u53D1\u6EDA\u52A8\u7684\u76EE\u6807\u5BF9\u8C61",type:"string",optional:"\u2014\u2014",default:"window"},{name:"bottom",desc:"BackTop \u5143\u7D20\u8DDD\u79BB\u9875\u9762\u5E95\u90E8\u8DDD\u79BB",type:"number",optional:"\u2014\u2014",default:40},{name:"right",desc:"BackTop \u5143\u7D20\u5230\u9875\u9762\u53F3\u8FB9\u7684\u8DDD\u79BB",type:"number",optional:"\u2014\u2014",default:40},{name:"height",desc:"\u6EDA\u52A8\u6761\u7684\u9AD8\u5EA6\u8FBE\u5230\u6B64\u53C2\u6570\u503C\u624D\u51FA\u73B0",type:"number",optional:"\u2014\u2014",default:220},{name:"circle",desc:"\u662F\u5426\u5706\u5F62",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"duration",desc:"\u6EDA\u52A8\u52A8\u753B\u6301\u7EED\u65F6\u95F4\uFF0C\u5355\u4F4D \u79D2",type:"number",optional:"\u2014\u2014",default:.5}],event:[{name:"click",desc:"\u70B9\u51FB BackTop \u5143\u7D20\u89E6\u53D1\u7684\u4E8B\u4EF6",callbackParams:"event"}]};const x={class:"backTop-demo-list"},B=a("br",null,null,-1),T=["src"],V=k({setup(h){return(D,L)=>{const r=c("w-back-top"),b=c("DemoItem"),d=c("TableList");return e(),o("div",x,[(e(!0),o(l,null,s(u(w),(n,C)=>(e(),m(b,{item:n,key:n.title},{default:p(()=>[(e(!0),o(l,null,s(n.components,(t,I)=>(e(),o("div",{key:t},[a("h3",null,i(t.label),1),B,(e(),o(l,null,s(20,_=>a("p",{key:_},"\u5360\u4F4D\u7B26\u3002\u3002")),64)),t.img||t.content?(e(),m(r,{key:0,circle:t.circle,bottom:t.bottom,duration:t.duration},{default:p(()=>[a("img",{src:t.img},null,8,T),f(" "+i(t.content),1)]),_:2},1032,["circle","bottom","duration"])):(e(),m(r,{key:1,bottom:t.bottom},null,8,["bottom"]))]))),128))]),_:2},1032,["item"]))),128)),y(d,{data:u(v)},null,8,["data"])])}}});export{V as default};
