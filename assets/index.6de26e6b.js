import{r as _,d as b,a as d,o as a,g as o,H as l,I as c,c as v,w as n,n as p,b as i,P as f,z as r,h as t,R as u,y as x}from"./vendor.c0366ad2.js";const k=_([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u8BBE\u7F6E header \u5C5E\u6027\uFF0C\u4FEE\u6539\u5361\u7247\u7684\u6807\u9898\u3002(\u4E5F\u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD\u6765\u81EA\u5B9A\u4E49\u6807\u9898\u90E8\u5206) \u8BBE\u7F6E\u9ED8\u8BA4\u63D2\u69FD\u6765\u81EA\u5B9A\u4E49\u5361\u7247\u7684\u5185\u5BB9\u3002",components:[{isSlot:!0,header:"\u5934\u90E8\u3002\u3002\u3002\u3002"},{header:"\u5934\u90E8\u533A\u57DF",headStyle:{color:"gold"},bodyStyle:{color:"lightblue"}}],template:`    <template>
      <w-card>
        <template #header> 
          <div class='clearfix'>
            <span>\u5361\u7247\u540D\u79F0</span>
            <a style='float: right;'>\u64CD\u4F5C\u6309\u94AE</a>
          </div>
        </template>
        <div v-for='o in 4' :key='o' class='text'>
          {{'\u5217\u8868\u5185\u5BB9 ' + o }}
        </div>
      </w-card>
      <w-card title='\u5361\u7247\u540D\u79F0'>
        <div v-for="o in 4" :key='o' class='text'>
          {{'\u5217\u8868\u5185\u5BB9 ' + o }}
        </div>
      </w-card>
    </template>
    <style>
      .w-card {
        width: 330px;
        margin: 1em;
      }
      .w-card .text {
        margin-bottom: 1.5em;
      }
    </style>`},{title:"\u7B80\u5355\u5361\u7247",desc:"\u53EF\u4EE5\u4E0D\u8BBE\u7F6E header \u5C5E\u6027\uFF0C\u4F7F\u5361\u7247\u53EA\u6709\u5185\u5BB9\u533A\u57DF\u3002",components:[{}],template:`    <template>
      <w-card style='width: 330px; margin: 1em;'>
        <div v-for='o in 4' :key='o' class='text'>
          {{'\u5217\u8868\u5185\u5BB9 ' + o }}
        </div>
      </w-card>
    </template>
    <style>
      .w-card {
        .text {
          margin-bottom: 1.5em;
        }
      }
    </style>`},{title:"\u5361\u7247\u9634\u5F71",desc:"\u8BBE\u7F6E shadow \u5C5E\u6027\uFF0C\u4FEE\u6539\u5361\u7247\u9634\u5F71\u51FA\u73B0\u7684\u65F6\u673A\u3002(\u9ED8\u8BA4\u603B\u662F\u663E\u793A)",shadow:!0,components:[{label:"\u9ED8\u8BA4\u603B\u662F\u663E\u793A"},{label:"\u9F20\u6807\u60AC\u6D6E\u65F6\u663E\u793A",shadow:"hover"},{label:"\u4ECE\u4E0D\u663E\u793A",shadow:"never"}],template:`    <template>
      <w-card style='margin: 1em;'>
        <div>\u9ED8\u8BA4\u603B\u662F\u663E\u793A</div>
      </w-card>
      <w-card style='margin: 1em;' shadow='hover'>
        <div>\u9F20\u6807\u60AC\u6D6E\u65F6\u663E\u793A</div>
      </w-card>
      <w-card style='margin: 1em;' shadow='never'>
        <div>\u4ECE\u4E0D\u663E\u793A</div>
      </w-card>
    </template>`},{title:"\u5E26\u56FE\u7247",desc:"\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9\u533A\uFF0C\u6BD4\u5982\u5E26\u56FE\u7247\u5C55\u793A\u3002",img:!0,components:[{img:"https://static01.imgkr.com/temp/11e7af90bde94b8cb4b085335ad7c448.jpg",label:"\u4E30\u76DB\u7684\u5348\u9910",time:"2020-08-08"},{img:"https://d9zcttgtmk54p.cloudfront.net/uploads/2020/01/121_Danielle-Hulls-@daniellehulls-Coledale-Beach-Hero-1024x684.jpeg",label:"\u9633\u5149\u548C\u6C99\u6EE9",time:"2020-08-13"}],template:`    <template>
      <w-card style='width:330px;margin:1em;'>
        <img src='https://static01.imgkr.com/temp/11e7af90bde94b8cb4b085335ad7c448.jpg' class='image' />
        <div style="padding-top:14px;">
          <h3>\u4E30\u76DB\u7684\u5348\u9910</h3>
          <div class='bottom'>
            <time class='time'>2020-08-08</time>
            <w-button type='text'>\u8BE6\u60C5</w-button>
          </div>
        </div>
      </w-card>
    </template>
    <style>
      .w-card .image {
        max-width: 100%;
        display: block;
        margin: 0 auto;
      }
      .w-card .bottom {
        padding-top: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .w-card .bottom .w-button {
        padding: 0 1.4em;
        color: #007fff;
      }
    </style>`}]),B={attribute:[{name:"header",desc:"\u8BBE\u7F6E header\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 slot #header \u4F20\u5165 DOM",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"shadow",desc:"\u8BBE\u7F6E\u9634\u5F71\u663E\u793A\u65F6\u673A",type:"string",optional:"always\u3001hover\u3001never",default:"always"},{name:"head-style",desc:"\u81EA\u5B9A\u4E49\u6807\u9898\u533A\u6837\u5F0F",type:"object",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"body-style",desc:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u533A\u6837\u5F0F",type:"object",optional:"\u2014\u2014",default:"\u2014\u2014"}],slot:[{name:"header",desc:"\u81EA\u5B9A\u4E49\u5934\u90E8\u6807\u9898\u90E8\u5206"},{name:"\u2014\u2014",desc:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u90E8\u5206"}]};const C={class:"card-demo-list"},D=t("div",{class:"clearfix"},[t("span",null,"\u5361\u7247\u540D\u79F0"),t("a",{style:{float:"right",color:"#007fff"}},"\u64CD\u4F5C\u6309\u94AE")],-1),S={key:0},j=["src"],L={style:{"padding-top":"14px"}},z={class:"bottom"},E={class:"time"},F=x(" \u8BE6\u60C5 "),A=b({setup(H){return(I,N)=>{const y=d("w-button"),h=d("w-card"),w=d("DemoItem"),g=d("TableList");return a(),o("div",C,[(a(!0),o(l,null,c(u(k),(s,T)=>(a(),v(w,{item:s,key:s.title},{default:n(()=>[(a(!0),o(l,null,c(s.components,e=>(a(),o("div",{key:e,class:p({shadow:s.shadow})},[i(h,{header:e.header,shadow:e.shadow,"head-style":e.headStyle,"body-style":e.bodyStyle,class:p({"have-img":s.img})},f({default:n(()=>[s.shadow?(a(),o("p",S,r(e.label),1)):s.img?(a(),o(l,{key:1},[t("img",{src:e.img,class:"image"},null,8,j),t("div",L,[t("h3",null,r(e.label),1),t("div",z,[t("time",E,r(e.time),1),i(y,{style:{padding:"0 1.4em",color:"#007fff"},type:"text"},{default:n(()=>[F]),_:1})])])],64)):(a(),o(l,{key:2},c(4,m=>t("div",{key:m,class:"text"},r("\u5217\u8868\u5185\u5BB9 "+m),1)),64))]),_:2},[e.isSlot?{name:"header",fn:n(()=>[D])}:void 0]),1032,["header","shadow","head-style","body-style","class"])],2))),128))]),_:2},1032,["item"]))),128)),i(g,{data:u(B)},null,8,["data"])])}}});export{A as default};
