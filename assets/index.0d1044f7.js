import{r as A,d as B,a as n,o as t,g as s,H as d,I as r,c as E,w as i,b as F,y as p,z as C,k as m,h as e,P as f,n as v,R as D}from"./vendor.c0366ad2.js";const o=`
    <style>
      .empty-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 200px;
        max-width: 600px;
        text-align: center;
        padding: 40px 0px;
        margin:1em;
        border: 2px dashed rgb(232, 191, 191);
      }
    </style>`,h=A([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u7A7A\u72B6\u6001\u9ED8\u8BA4\u4F1A\u5728\u6307\u5B9A\u5BB9\u5668\u4E2D\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\uFF0C\u9ED8\u8BA4\u7684\u63CF\u8FF0\u4E3A \u6682\u65E0\u6570\u636E\u3002",components:[{}],template:`    <template>
      <div class='empty-box'>
        <w-empty />
      </div>
    </template>
    ${o}`},{title:"\u81EA\u5B9A\u4E49\u63CF\u8FF0",desc:"\u8BBE\u7F6E description \u5C5E\u6027 \u6216\u8005 description \u63D2\u69FD\uFF0C \u81EA\u5B9A\u4E49\u63CF\u8FF0\u3002",components:[{description:"\u6682\u65F6\u6CA1\u6709\u4F60\u60F3\u8981\u7684"},{slotDescription:!0,description:"Not Data ..."}],template:`    <template>
      <div class='empty-box'>
        <w-empty description='\u6682\u65F6\u6CA1\u6709\u4F60\u60F3\u8981\u7684' />
      </div>
      <div class='empty-box'>
        <w-empty>
          <template #description>Not Data ...</template>
        </w-empty>
      </div>
    </template>
    ${o}`},{title:"\u81EA\u5B9A\u4E49\u56FE\u7247",desc:"\u8BBE\u7F6E image \u5C5E\u6027\u6216\u8005 image \u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u5360\u4F4D\u56FE\u3002",components:[{image:"https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/85b6c0c8770da19f793bd2546e189e444c4fd7ff.png"},{slotImage:!0,image:"https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/d9152aa9242776a13d8846e522afc41bfb626e2c.png"}],template:`    <template>
      <div class='empty-box'>
        <w-empty image='https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/85b6c0c8770da19f793bd2546e189e444c4fd7ff.png' />
      </div>
      <div class='empty-box'>
        <w-empty>
          <template #image>
            <img :src='https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/d9152aa9242776a13d8846e522afc41bfb626e2c.png'>
          </template>
        </w-empty>
      </div>
    </template>
    ${o}`},{title:"\u56FE\u7247\u6837\u5F0F",desc:"\u8BBE\u7F6E image-style \u5C5E\u6027\uFF0C\u63A7\u5236\u5360\u4F4D\u56FE\u7684\u6837\u5F0F\u3002",components:[{image:"https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/14619184d2b829d3696b610a80bc1ffae50e82b7.png",imageStyle:{width:"150px",height:"150px"}}],template:`    <template>
      <div class='empty-box'>
        <w-empty :image-style='{width:'150px',height:'150px'}' 
          image='https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/14619184d2b829d3696b610a80bc1ffae50e82b7.png' />
      </div>
    </template>
    ${o}`},{title:"\u5E95\u90E8\u5185\u5BB9",desc:"\u4F7F\u7528\u9ED8\u8BA4\u63D2\u69FD\u53EF\u5728\u5360\u4F4D\u56FE\u5E95\u90E8\u63D2\u5165\u5185\u5BB9\u3002\u5982 \u6309\u94AE\u3001\u56FE\u6807\u3001\u56FE\u7247\u7B49\u3002",slotDefault:!0,description:"\u6682\u65F6\u6CA1\u6709\u6570\u636E\u3002",components:[{isEmpty:!0},{isEmpty:!0,src:"https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/b6d2c0778801d7b4b26c5ec863ab7f322c977f33.png"}],template:`    <template>
      <div class='empty-box'>
        <w-empty>
          <div>
            <w-button type='primary'>\u91CD\u65B0\u52A0\u8F7D</w-button>
          </div> 
        </w-empty>
      </div>
      <div class='empty-box'>
        <w-empty>
         <div>
            <img src='https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/article/b6d2c0778801d7b4b26c5ec863ab7f322c977f33.png' width='70' style='cursor:pointer;' title='\u70B9\u6211\u91CD\u65B0\u52A0\u8F7D'>
          </div> 
        </w-empty>
      </div>
    </template>
    ${o}`}]),w={attribute:[{name:"image",desc:"\u5360\u4F4D\u56FE\u7684\u5730\u5740",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"image-style",desc:"\u5360\u4F4D\u56FE\u7684\u6837\u5F0F",type:"object",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"description",desc:"\u6587\u672C\u63CF\u8FF0",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"}],slot:[{name:"default",desc:"\u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9"},{name:"image",desc:"\u81EA\u5B9A\u4E49\u5360\u4F4D\u56FE\u7247"},{name:"description",desc:"\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u5B57"}]};const x={class:"empty-demo-list"},k={key:0,style:{"margin-bottom":"1em"}},$=["src"],N=["onClick"],I=p(" \u91CD\u65B0\u52A0\u8F7D "),L=["src"],S={key:0,class:"quotations"},V=e("p",null,"1\u3001\u4E16\u4E0A\u53EA\u6709\u4E00\u79CD\u82F1\u96C4\u4E3B\u4E49\uFF0C\u5C31\u662F\u5728\u8BA4\u6E05\u751F\u6D3B\u771F\u76F8\u4E4B\u540E\u4F9D\u7136\u70ED\u7231\u751F\u6D3B\u3002",-1),j=e("p",null," 2\u3001\u8981\u60F3\u8D62\uFF0C\u5C31\u4E00\u5B9A\u4E0D\u80FD\u6015\u8F93\u3002\u4E0D\u6015\u8F93\uFF0C\u7ED3\u679C\u672A\u5FC5\u80FD\u8D62\u3002\u4F46\u662F\u6015\u8F93\uFF0C\u7ED3\u679C\u5219\u4E00\u5B9A\u662F\u8F93\u3002 ",-1),T=e("p",null,"3\u3001\u4F60\u8981\u505A\u7684\u5C31\u662F\u522B\u4EBA\u6362\u4E0D\u6389\u7684\uFF0C\u90A3\u4F60\u505A\u4E0D\u5230\u602A\u8C01\uFF0C\u5C31\u662F\u4F60\u81EA\u5DF1\u6CA1\u7528\uFF01",-1),z=e("p",null,"4\u3001\u542B\u6CEA\u64AD\u79CD\u7684\u4EBA\u4E00\u5B9A\u80FD\u542B\u7B11\u6536\u83B7\u3002",-1),q=e("p",null,"5\u3001\u4E0D\u8981\u7B49\u5F85\u673A\u4F1A\uFF0C\u800C\u8981\u521B\u9020\u673A\u4F1A\u3002",-1),H=e("p",null," 6\u3001\u547D\u8FD0\uFF0C\u662F\u4E00\u4E2A\u5F88\u98D8\u6E3A\u7684\u4E1C\u897F\uFF0C\u6709\u4EBA\u76F8\u4FE1\u547D\u8FD0\uFF0C\u8D70\u5230\u4E86\u5854\u9876\uFF0C\u6216\u8005\u5760\u843D\u5230\u5D16\u5E95\u3002\u6709\u4EBA\u60F3\u9006\u5929\u6539\u547D\uFF0C\u4F46\u6210\u529F\u7684\u51E0\u7387\uFF0C\u4E0E\u4E2D\u5F69\u4E00\u6837\uFF0C\u4F46\u6709\u4E86\u6BC5\u529B\uFF0C\u7EC8\u6709\u90A3\u4E48\u4E00\u5929\uFF0C\u524D\u65B9\uFF0C\u4E0D\u518D\u662F\u7070\u8272\u7684\u96FE\u3002 ",-1),P=e("p",null," 7\u3001\u8FDB\u6B65\u548C\u6210\u957F\u7684\u8FC7\u7A0B\u603B\u662F\u6709\u8BB8\u591A\u7684\u56F0\u96BE\u4E0E\u574E\u5777\u7684\u3002\u6709\u65F6\u6211\u4EEC\u662F\u7531\u4E8E\u5FD7\u5411\u4E0D\u660E\uFF0C\u6CA1\u6709\u660E\u786E\u7684\u76EE\u7684\u800C\u788C\u788C\u65E0\u4E3A\u3002\u4F46\u662F\u8FD8\u6709\u53E6\u5916\u4E00\u79CD\u60C5\u51B5\uFF0C\u662F\u7531\u4E8E\u6211\u4EEC\u81EA\u5DF1\u7684\u9000\u7F29\uFF0C\u4E0E\u81EA\u5DF1\u201C\u4EB2\u5BC6\u201D\u7684\u59A5\u534F\u6CA1\u6709\u575A\u6301\u5230\u5E95\u7684\u610F\u5FD7\uFF0C\u624D\u4F7F\u5F97\u673A\u4F1A\u901D\u53BB\uFF0C\u9897\u7C92\u65E0\u6536\u3002 ",-1),R=e("p",null,"8\u3001\u6CA1\u6709\u4F1E\u7684\u5B69\u5B50\uFF0C\u5FC5\u987B\u52AA\u529B\u5954\u8DD1\uFF01",-1),G=e("p",null," 9\u3001\u771F\u6B63\u6210\u529F\u7684\u4EBA\u751F\uFF0C\u4E0D\u5728\u4E8E\u6210\u5C31\u7684\u5927\u5C0F\uFF0C\u800C\u5728\u4E8E\u4F60\u662F\u5426\u52AA\u529B\u5730\u53BB\u5B9E\u73B0\u81EA\u6211\uFF0C\u558A\u51FA\u81EA\u5DF1\u7684\u58F0\u97F3\uFF0C\u8D70\u51FA\u5C5E\u4E8E\u81EA\u5DF1\u7684\u9053\u8DEF\u3002 ",-1),J=e("p",null,"10\u3001\u751F\u6D3B\u4E0D\u662F\u6797\u9EDB\u7389\uFF0C\u4E0D\u4F1A\u56E0\u4E3A\u5FE7\u4F24\u800C\u98CE\u60C5\u4E07\u79CD\u3002",-1),K=[V,j,T,z,q,H,P,R,G,J],W=B({setup(M){return(O,Q)=>{const c=n("w-button"),y=n("w-empty"),b=n("DemoItem"),_=n("TableList");return t(),s("div",x,[(t(!0),s(d,null,r(D(h),(a,l)=>(t(),E(b,{item:a,key:a.title},{default:i(()=>[(t(!0),s(d,null,r(a.components,u=>(t(),s("div",{key:u},[l===4&&!u.isEmpty?(t(),s("div",k,[F(c,{onClick:g=>u.isEmpty=!u.isEmpty},{default:i(()=>[p(C(u.isEmpty?"\u4E0D\u4E3A\u7A7A":"\u4E3A\u7A7A"),1)]),_:2},1032,["onClick"])])):m("",!0),e("div",{class:v(["empty-box",l===4?"toggle":""])},[F(y,{description:u.description||a.description,image:u.image,"image-style":u.imageStyle},f({default:i(()=>[a.slotDefault?(t(),s("div",{key:0,onClick:g=>u.isEmpty=!1},[u.src?(t(),s("img",{key:1,src:u.src,width:"55",style:{cursor:"pointer"},title:"\u70B9\u6211\u91CD\u65B0\u52A0\u8F7D"},null,8,L)):(t(),E(c,{key:0,type:"primary"},{default:i(()=>[I]),_:1}))],8,N)):m("",!0)]),_:2},[u.slotDescription?{name:"description",fn:i(()=>[p(C(u.description),1)])}:void 0,u.slotImage?{name:"image",fn:i(()=>[e("img",{class:"slot-image",src:u.image},null,8,$)])}:void 0]),1032,["description","image","image-style"]),l===4&&!u.isEmpty?(t(),s("div",S,K)):m("",!0)],2)]))),128))]),_:2},1032,["item"]))),128)),F(_,{data:D(w)},null,8,["data"])])}}});export{W as default};
