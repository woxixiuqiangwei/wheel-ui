import{r as f,d as g,a as s,o as e,g as o,H as r,I as m,c as v,w as n,b as a,P as b,k as B,h as i,z as u,y as c,R as p}from"./vendor.c0366ad2.js";const k=f([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u9ED8\u8BA4\u6709\u56DB\u79CD\u7C7B\u578B,\u53EF\u81EA\u5B9A\u4E49\u7C7B\u578B",components:[{type:"success",title:"\u6210\u529F",description:"\u4FEE\u6539\u4E2A\u4EBA\u4FE1\u606F\u6210\u529F"},{type:"info",title:"\u63D0\u793A",description:"\u786E\u5B9A\u8981\u4FEE\u6539\u4FE1\u606F\u5417"},{type:"warning",title:"\u8B66\u544A",description:"\u6CA1\u6709\u6743\u9650\u4FEE\u6539\u6570\u636E"},{type:"error",title:"\u9519\u8BEF",description:"\u4FEE\u6539\u4E2A\u4EBA\u4FE1\u606F\u5931\u8D25"}],template:`    <template>
      <div class='w-result-demo'>
        <w-result icon='success' title='\u6210\u529F\u3002\u3002\u3002' description='\u4FEE\u6539\u4E2A\u4EBA\u4FE1\u606F\u6210\u529F' />
        <w-result icon='info' title='\u63D0\u793A'' description='\u786E\u5B9A\u8981\u4FEE\u6539\u4FE1\u606F\u5417' />
        <w-result icon='warning' title="\u8B66\u544A" description='\u6CA1\u6709\u6743\u9650\u4FEE\u6539\u6570\u636E' />
        <w-result icon='error' title="\u9519\u8BEF" description='\u4FEE\u6539\u4E2A\u4EBA\u4FE1\u606F\u5931\u8D25' />
      </div>
    </template>
    <style>
      .w-result-demo {
        display: flex;
        margin: 1em;
      }
    </style>`},{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9",desc:"\u56FE\u6807(icon)\u3001\u6807\u9898(title)\u3001\u63CF\u8FF0(description)\u3001\u5E95\u90E8(bottom) \u90FD\u53EF\u4EE5\u7528\u63D2\u69FD\u6765\u81EA\u5B9A\u4E49\u5176\u5185\u5BB9\u3002",components:[{iconSlot:404,title:"404",description:"\u4E0D\u597D\u610F\u601D\uFF0C\u6682\u65F6\u8BF7\u6C42\u4E0D\u5230\u4FE1\u606F\u3002"},{iconSlot:"image-not-found",title:"\u52A0\u8F7D\u5931\u8D25",description:"\u56FE\u7247\u52A0\u8F7D\u5931\u8D25"}],template:`    <template>
      <div class='w-result-custom-demo'>
        <div>
          <w-result title='404'>
            <template #icon>
              <img width='300' src='https://img1.baidu.com/it/u=1800086324,2875766084&fm=26&fmt=auto'>
            </template>
            <template #description>
              <p>\u4E0D\u597D\u610F\u601D\uFF0C\u6682\u65F6\u8BF7\u6C42\u4E0D\u5230\u4FE1\u606F\u3002</p>
              <p>\u53EF\u70B9\u51FB<mark style='padding:0 .2em'>\u91CD\u65B0\u8BF7\u6C42</mark> \u6309\u94AE,\u518D\u6B21\u8BF7\u6C42\u3002</p>
            </template>
            <template #bottom>
              <w-button type='primary'>\u91CD\u65B0\u8BF7\u6C42</w-button>
            </template>
          </w-result>
        </div>
        <div>
          <w-result title='\u52A0\u8F7D\u5931\u8D25'>
            <template #icon>
              <img width='260' src='https://img0.baidu.com/it/u=606394262,1008040175&fm=26&fmt=auto'>
            </template>
            <template #description>
              <p>\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF0C\u539F\u56E0\u5982\u4E0B:</p>
              <ol>
                <li> 1.\u5F53\u524D\u7F51\u7EDC\u4E0D\u597D</li>
                <li> 2.\u8BE5\u56FE\u7247\u5DF2\u88AB\u5220\u9664</li>
              </ol>
            </template>
            <template #bottom>
              <w-button type='primary'>\u5237\u65B0</w-button>
            </template>
          </w-result>
        </div>
      </div>
    </template>`}]),D={attribute:[{name:"title",desc:"\u6807\u9898",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"description",desc:"\u63CF\u8FF0",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"icon",desc:"\u56FE\u6807",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"}],slot:[{name:"title",desc:"\u81EA\u5B9A\u4E49\u6807\u9898"},{name:"description",desc:"\u81EA\u5B9A\u4E49\u63CF\u8FF0"},{name:"icon",desc:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{name:"bottom",desc:"\u81EA\u5B9A\u4E49\u5E95\u90E8\u533A\u57DF"}]};const F={class:"result-demo-list"},S={key:0,width:"300",src:"https://img1.baidu.com/it/u=1800086324,2875766084&fm=26&fmt=auto"},C={key:1,width:"260",src:"https://img0.baidu.com/it/u=606394262,1008040175&fm=26&fmt=auto"},E={key:0},x=i("p",null,[c(" \u53EF\u70B9\u51FB "),i("mark",{style:{padding:"0 0.2em"}},"\u91CD\u65B0\u8BF7\u6C42"),c(" \u6309\u94AE,\u518D\u6B21\u8BF7\u6C42\u3002 ")],-1),h={key:1},L=i("ol",null,[i("li",null,"1.\u5F53\u524D\u7F51\u7EDC\u4E0D\u597D"),i("li",null,"2.\u8BE5\u56FE\u7247\u5DF2\u88AB\u5220\u9664")],-1),j=g({setup(N){return(V,I)=>{const d=s("w-button"),_=s("w-result"),y=s("DemoItem"),w=s("TableList");return e(),o("div",F,[(e(!0),o(r,null,m(p(k),(l,T)=>(e(),v(y,{item:l,key:l.title},{default:n(()=>[(e(!0),o(r,null,m(l.components,t=>(e(),o("div",{key:t},[a(_,{title:t.title,icon:t.type,description:t.description},b({_:2},[t.iconSlot?{name:"icon",fn:n(()=>[t.iconSlot===404?(e(),o("img",S)):t.iconSlot==="image-not-found"?(e(),o("img",C)):B("",!0)])}:void 0,t.iconSlot?{name:"description",fn:n(()=>[t.iconSlot===404?(e(),o("div",E,[i("p",null,u(t.description),1),x])):(e(),o("div",h,[i("p",null,u(t.description)+" \u539F\u56E0\u5982\u4E0B:",1),L]))])}:void 0,t.iconSlot?{name:"bottom",fn:n(()=>[a(d,{type:"primary"},{default:n(()=>[c(u(t.iconSlot===404?"\u91CD\u65B0\u8BF7\u6C42":"\u5237\u65B0"),1)]),_:2},1024)])}:void 0]),1032,["title","icon","description"])]))),128))]),_:2},1032,["item"]))),128)),a(w,{data:p(D)},null,8,["data"])])}}});export{j as default};
