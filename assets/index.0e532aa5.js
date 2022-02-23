import{r as k,d as D,m as o,a as s,o as t,g as e,H as f,I as l,c as x,w as n,b as p,y as b,z as c,h as _,R as w}from"./vendor.c0366ad2.js";const T=k([{title:"\u56FA\u5B9A\u5728\u9876\u90E8",desc:"\u8BBE\u7F6E offset-top \u5C5E\u6027\uFF0C\u4FEE\u6539\u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u8FBE\u5230\u6307\u5B9A\u503C\u540E\u56FA\u5B9A\u3002",components:[{top:100,label:"\u56FA\u5B9A\u5728\u8DDD\u79BB\u9876\u90E8 100px \u7684\u4F4D\u7F6E",type:"primary"}],template:`    <template>
      <w-affix :offset='120'>
        <w-button type="primary">\u8DDD\u79BB\u9876\u90E8 120px</w-button>
      </w-affix>
    </template>`},{title:"\u6307\u5B9A\u5BB9\u5668",desc:"\u8BBE\u7F6E target \u5C5E\u6027\uFF0C\u4FEE\u6539\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u9ED8\u8BA4\u4E3A window\u3002",components:[{top:50,label:"\u56FA\u5B9A\u5BB9\u5668\u9876\u90E8 50px \u7684\u4F4D\u7F6E",type:"success"}],effect:"dark",template:`    <template>
      <div class='affix-custom-target-demo'>
        <p v-for='i in 20'> 1 - {{ i }} </p>
        <w-affix target='#affix-demo' :offset-top='50'>
          <w-button>Top 50px \u3002</w-button>
        </w-affix>
        <p v-for='i in 20'> 2 - {{ i }} </p>
      </div>
    </template>
    <style lang='scss'>
      #affix-custom-target-demo {
        max-width: 500px;
        height: 350px;
        overflow: auto;
        border: 2px solid pink;
        background: url('https://cdn.pixabay.com/photo/2020/08/10/09/29/mountains-5477320_960_720.jpg') no-repeat center/cover;
        color: #fff;
        > p {
          padding: 1em;
        }
      }
    </style>`},{title:"\u56FA\u5B9A\u5728\u5E95\u90E8",desc:`\u8BBE\u7F6E offset-bottom \u5C5E\u6027\uFF0C\u4FEE\u6539\u8DDD\u79BB\u7A97\u53E3\u5E95\u90E8\u8FBE\u5230\u6307\u5B9A\u503C\u540E\u56FA\u5B9A\u3002<br>
      \u6CE8\u610F\uFF0Coffset-top \u548C offset-bottom \u53EA\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A\uFF0C\u5982\u679C\u90FD\u8BBE\u7F6E\uFF0C\u5219\u4F1A\u4F7F\u7528 offset-top\u3002`,components:[{bottom:50,label:"\u56FA\u5B9A\u5728\u8DDD\u79BB\u5E95\u90E8 50px \u7684\u4F4D\u7F6E",type:"warning",change:!0}],effect:"dark",template:`    <template>
      <w-affix :offset='50'>
        <w-button type='primary'>\u56FA\u5B9A\u5728\u8DDD\u79BB\u5E95\u90E8 50px \u7684\u4F4D\u7F6E</w-button>
      </w-affix>
    </template>`}]),B={attribute:[{name:"offset-top",desc:"\u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"offset-bottom",desc:"\u8DDD\u79BB\u7A97\u53E3\u5E95\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"target",desc:"\u8BBE\u7F6E Affix \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u503C\u4E3A\u4E00\u4E2A\u5BF9\u5E94 DOM \u5143\u7D20\u7684\u5B57\u7B26\u4E32",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"z-index",desc:"\u8BBE\u7F6E Affix \u7684\u5806\u53E0\u987A\u5E8F",type:"number",optional:"\u2014\u2014",default:100}],event:[{name:"change",desc:"\u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570",callbackParams:"true || false"},{name:"scroll",desc:"\u6EDA\u52A8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6",callbackParams:"scrolltop , fixed \u72B6\u6001"}]};const C={class:"affix-demo-list"},L={key:1,id:"w-affix-bottom-demo"},A=b("Top 50px \u3002"),j=D({setup(I){const y=m=>console.log("change Affix ......",m);return o(100),o(-100),o([{title:"Downloads",value:66580},{title:"Uploads",value:2680},{title:"Growth Rate",value:60.686,precision:2}]),o(!1),o(0),o(2e3),(m,N)=>{const d=s("w-button"),u=s("w-affix"),g=s("DemoItem"),v=s("TableList");return t(),e("div",C,[(t(!0),e(f,null,l(w(T),(r,h)=>(t(),x(g,{item:r,key:r.title},{default:n(()=>[(t(!0),e(f,null,l(r.components,a=>(t(),e("div",{key:a.label},[h!=1?(t(),x(u,{key:0,"offset-top":a.top,"offset-bottom":a.bottom,onChange:y},{default:n(()=>[p(d,{type:a.type},{default:n(()=>[b(c(a.label),1)]),_:2},1032,["type"])]),_:2},1032,["offset-top","offset-bottom"])):(t(),e("div",L,[(t(),e(f,null,l(20,i=>_("p",null,"1 - "+c(i),1)),64)),p(u,{"offset-top":50,target:"#w-affix-bottom-demo"},{default:n(()=>[p(d,null,{default:n(()=>[A]),_:1})]),_:1}),(t(),e(f,null,l(20,i=>_("p",null,"2 - "+c(i),1)),64))]))]))),128))]),_:2},1032,["item"]))),128)),p(v,{data:w(B)},null,8,["data"])])}}});export{j as default};
