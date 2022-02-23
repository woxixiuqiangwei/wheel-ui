import{r as a,d as M,m as I,a as c,o as i,g as u,H as v,I as x,c as W,w as r,h as p,b as o,k as _,R as h,y as n}from"./vendor.c0366ad2.js";const k=s=>s<30?"red":s<50?"#c14f4f":s<70?"green":"blue",w=a([{color:"red",percentage:20},{color:"orange",percentage:40},{color:"gray",percentage:60},{color:"green",percentage:80},{color:"#79bfd5",percentage:100}]),b=a([{text:"\u5F00\u59CB\u4E0D\u4E45",percentage:20},{text:"\u7A0D\u7B49\u7247\u523B",percentage:50},{text:"\u4E00\u534A\u4E86",percentage:60},{text:"\u518D\u7B49\u7B49",percentage:80},{text:"\u5DEE\u4E0D\u591A\u4E86",percentage:95},{text:"\u597D\u4E86\uFF01",percentage:100}]),l=s=>{if(s<50)return"\u8FD8\u6CA1\u5462";if(s<60)return"\u4E00\u534A\u4E86";if(s<99)return"\u5FEB\u4E86";if(s===100)return"\u6EE1\u4E86"},B=a([{title:"\u7EBF\u5F62\u8FDB\u5EA6\u6761",desc:"\u8BBE\u7F6E percentNum \u5C5E\u6027\uFF0C\u4FEE\u6539\u8FDB\u5EA6\u6761\u5BF9\u5E94\u7684\u767E\u5206\u6BD4\u3002 \u9ED8\u8BA4\u4E3A0\uFF0C\u5FC5\u987B\u57280-100\u3002 \u8BBE\u7F6E ripple \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u663E\u793A\u6CE2\u7EB9\u6548\u679C\uFF08\u53EA\u5728 type \u4E3A line\u65F6\u6709\u6548\uFF09",strokeLinecap:"round",components:[{percentNum:30},{percentNum:40,status:"success"},{percentNum:50,status:"error",ripple:!0}],template:`    <template>
      <div v-for='item in progressList'>
        <w-progress :percentNum='item.percentNum' :status='item.status' :ripple='item.ripple' />
      </div>
    </template>
    <script>
      export default {
        data() {
          return {
            progressList: [
              { percentNum: 30 },
              { percentNum: 40, status: 'success' },
              { percentNum: 50, status: 'error', ripple: true }
            ]
          }
        }
      }
    <\/script>`},{title:"\u81EA\u5B9A\u4E49\u989C\u8272\u3001\u6587\u672C",desc:`\u8BBE\u7F6E void-color \u5C5E\u6027\uFF0C\u4FEE\u6539\u8FDB\u5EA6\u6761\u672A\u5B8C\u6210\u7684\u989C\u8272\u3002
      \u8BBE\u7F6E color \u5C5E\u6027\uFF0C\u4FEE\u6539\u8FDB\u5EA6\u6761\u5DF2\u5B8C\u6210\u7684\u989C\u8272 (\u7C7B\u578B\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u3001\u51FD\u6570\u6216\u6570\u7EC4)\u3002<br>
      \u8BBE\u7F6E text \u5C5E\u6027\uFF0C\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u5BF9\u5E94\u7684\u6587\u672C\uFF0C\u63A5\u6536\u989C\u8272\u51FD\u6570\u6216\u6570\u7EC4\u3002
      \u8BBE\u7F6E text-inside \u5C5E\u6027\uFF0C\u8BBE\u7F6E\u5BF9\u5E94\u63D0\u793A\u6587\u5B57\u5185\u7F6E\u5728\u8FDB\u5EA6\u6761\u5185 (\u53EA\u5728 type \u4E3A line\u65F6\u6709\u6548)\u3002<br>
      \u8BBE\u7F6E stroke-width \u5C5E\u6027\uFF0C\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u7684\u5BBD\u5EA6\u3002
      \u8BBE\u7F6E stroke-linecap \u5C5E\u6027\uFF0C\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u4E24\u7AEF\u7684\u5F62\u72B6\uFF0C\u9ED8\u8BA4\u662F\u5706\u89D2\u3002`,percentNum:50,step:5,textInside:!0,strokeLinecap:"round",components:[{},{color:"gold"},{status:"success",voidColor:"#f4afb9",ripple:!0},{color:w,text:b,voidColor:"#71efa7",ripple:!0},{color:k,text:l,ripple:!0,strokeWidth:30}],template:`    <template>
      <div class='options'>
        <div>
          \u8FB9\u7F18\u5706\u89D2\uFF1A
          <w-radio-group v-model:checked='strokeLinecap'>
            <w-radio value='round'>\u662F</w-radio>
            <w-radio value='square'>\u5426</w-radio>
          </w-radio-group>
        </div>
        <div>
          \u6587\u672C\u5185\u663E\uFF1A{{ item.textInside }}
          <w-radio-group v-model:checked='textInside'>
            <w-radio :value='true'>\u662F</w-radio>
            <w-radio :value='false'>\u5426</w-radio>
          </w-radio-group>
        </div>
        <div> 
          \u4FEE\u6539\u6B65\u957F\uFF1A
          <div>
            <w-input-number v-model='step' size='medium' :min='1' :max='10' />
          </div>
        </div>
        <div> 
          \u4FEE\u6539\u8FDB\u5EA6\uFF1A
          <div>
            <w-button @click="percentNum>=0?percentNum-=step:''">
              - {{ step }}
            </w-button>
            <w-button @click="percentNum<=100?percentNum+=step:''">
              + {{ step }}
            </w-button>
          </div>
        </div>
      </div>
      <div v-for='item in progressList'>
        <w-progress :percentNum='item.percentNum' :status='item.status' :ripple='item.ripple'
          :color'item.color' :void-color='item.color' :text='item.text' :stroke-width='item.strokeWidth' />
      </div>
    </template>
    <script>`,compositionApi:`
      import { reactive, ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const progressList = reactive([
            {},
            {color:'gold'},
            {status:'success',voidColor:'#f4afb9',ripple:true},
            {color:this.customColor,text:this.customText,voidColor:'#71efa7',ripple:true},
            {color:this.customColorMethod,text:this.customTextMethod,ripple:true,strokeWidth:30}
          ]);
          percentNum = ref(50);
          step = ref(5);
          textInside = ref(true);
          strokeLinecap = ref('round');
          customColor = [
            { color: 'red', percentage: 20 },
            { color: 'orange', percentage: 40 },
            { color: 'gray', percentage: 60 },
            { color: 'green', percentage: 80 },
            { color: '#79bfd5', percentage: 100 }
          ],
          customText=[
            { text: '\u5F00\u59CB\u4E0D\u4E45', percentage: 20} ,
            { text: '\u7A0D\u7B49\u7247\u523B', percentage: 50 },
            { text: '\u4E00\u534A\u4E86', percentage: 60 },
            { text: '\u518D\u7B49\u7B49', percentage: 80 },
            { text: '\u5DEE\u4E0D\u591A\u4E86', percentage: 95 },
            { text: '\u597D\u4E86\uFF01', percentage: 100 }
          ];
          customColorMethod = (percentage) => {
            if (percentage < 30) return 'red';
            else if (percentage < 50) return '#c14f4f';
            else if (percentage < 70) return 'green';
            else return 'blue';
          }
          customTextMethod = (percentage) => {
            if (percentage < 50) return '\u8FD8\u6CA1\u5462';
            if (percentage < 60) return '\u4E00\u534A\u4E86';
            else if (percentage <99) return '\u5FEB\u4E86';
            else if(percentage === 100) return '\u6EE1\u4E86';
          }
          return {
            progressList,percentNum,step,textInside,strokeLinecap,
            customColor,customText,customColorMethod,customTextMethod
          };
        }
      })
    <\/script>`},{title:"\u73AF\u5F62\u8FDB\u5EA6\u6761",desc:"\u8BBE\u7F6E type='circle' \u6765\u6307\u5B9A\u4F7F\u7528\u73AF\u5F62\u8FDB\u5EA6\u6761\uFF0C\u5728\u73AF\u5F62\u8FDB\u5EA6\u6761\u4E2D\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7 width \u5C5E\u6027\u6765\u8BBE\u7F6E\u5176\u5927\u5C0F\u3002",type:"circle",percentNum:45,step:5,strokeLinecap:"round",components:[{},{color:"#d6b91d"},{color:"#344ee8",voidColor:"#f1c677",strokeWidth:12},{color:w,width:160,strokeWidth:14,text:b,voidColor:"#dbb8d1"},{color:k,width:180,strokeWidth:16,text:l},{color:"rgb(135, 208, 104)",status:"success",width:180,strokeWidth:20,text:l}],template:`    <template>
      <div class='options'>
        <div>
          \u8FB9\u7F18\u5706\u89D2\uFF1A
          <w-radio-group v-model:checked='strokeLinecap'>
            <w-radio value='round'>\u662F</w-radio>
            <w-radio value='square'>\u5426</w-radio>
          </w-radio-group>
        </div>
        <div> 
          \u4FEE\u6539\u8FDB\u5EA6\u6B65\u957F\uFF1A
          <div>
            <w-input-number v-model='step' size='medium' :min='1' :max='10' />
          </div>
        </div>
        <div> 
          \u4FEE\u6539\u8FDB\u5EA6\uFF1A
          <div>
            <w-button @click="percentNum>=0?percentNum-=step:''">
              - {{step}}
            </w-button>
            <w-button @click="percentNum<=100?percentNum+=step:''">
              + {{step}}
            </w-button>
          </div>
        </div>
      </div>
      <div v-for='item in progressList'>
        <w-progress type='circle' :percentNum='item.percentNum' :status='item.status' :ripple='item.ripple'
          :color'item.color' :void-color='item.color' :text='item.text' :stroke-width='item.strokeWidth' />
      </div>
    </template>
    <script>`,compositionApi:`
      import { reactive, ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const progressList = reactive([
            {},
            {color:'#d6b91d'},
            {color:'#344ee8',voidColor:'#f1c677',strokeWidth:12},
            {color:customColor,width:160,strokeWidth:14,text:customText,voidColor:'#dbb8d1'},
            {color:customColorMethod,width:180,strokeWidth:16,text:customTextMethod},
            {color:'rgb(135, 208, 104)',status:'success',width:180,strokeWidth:20,text:customTextMethod}
          ]),
          percentNum = ref(45),
          step = ref(5),
          textInside = ref(true),
          strokeLinecap = ref('round'),
          customColor = [
            {color: 'red', percentage: 20},
            {color: 'orange', percentage: 40},
            {color: 'gray', percentage: 60},
            {color: 'green', percentage: 80},
            {color: '#79bfd5', percentage: 100}
          ],
          customText = [
            {text: '\u5F00\u59CB\u4E0D\u4E45', percentage: 20},
            {text: '\u7A0D\u7B49\u7247\u523B', percentage: 50},
            {text: '\u4E00\u534A\u4E86', percentage: 60},
            {text: '\u518D\u7B49\u7B49', percentage: 80},
            {text: '\u5DEE\u4E0D\u591A\u4E86', percentage: 95},
            {text: '\u597D\u4E86\uFF01', percentage: 100}
          ],
          customColorMethod = (percentage) => {
            if (percentage < 30) return 'red';
            else if (percentage < 50) return '#c14f4f';
            else if (percentage < 70) return 'green';
            else return 'blue';
          },
          customTextMethod = (percentage) => {
            if (percentage < 50) return '\u8FD8\u6CA1\u5462';
            if (percentage < 60) return '\u4E00\u534A\u4E86';
            else if (percentage <99) return '\u5FEB\u4E86';
            else if(percentage === 100) return '\u6EE1\u4E86';
          };
          return{
            progressList, percentNum, step, textInside, strokeLinecap,
            customColor, customText, customColorMethod, customTextMethod
          };
        }
      })
    <\/script>`}]),E={attribute:[{name:"type",desc:"\u8FDB\u5EA6\u6761\u7C7B\u578B",type:"string",optional:"line\u3001circle",default:"line"},{name:"percent-num",desc:"\u767E\u5206\u6BD4\uFF08\u5FC5\u586B\uFF09",type:"number",optional:"0-100",default:0},{name:"width",desc:"\u73AF\u5F62\u8FDB\u5EA6\u6761\u753B\u5E03\u5BBD\u5EA6\uFF08\u53EA\u5728 type \u4E3A circle\u65F6\u6709\u6548\uFF09",type:"string\u3001number",optional:"\u2014\u2014",default:128},{name:"stroke-width",desc:"\u8FDB\u5EA6\u6761\u5BBD\u5EA6",type:"string\u3001number",optional:"\u2014\u2014",default:8},{name:"status",desc:"\u8FDB\u5EA6\u6761\u5F53\u524D\u72B6\u6001",type:"string",optional:"success\u3001error",default:"\u2014\u2014"},{name:"stroke-linecap",desc:"\u8FDB\u5EA6\u6761\u8DEF\u5F84\u4E24\u7AEF\u7684\u5F62\u72B6",type:"string",optional:"square\u3001round",default:"round"},{name:"void-color",desc:"\u672A\u5B8C\u6210\u65F6\u7684\u989C\u8272",type:"string",optional:"\u2014\u2014",default:"#e5e9f2"},{name:"color",desc:"\u5B8C\u6210\u65F6\u7684\u989C\u8272",type:"string\u3001function\u3001array",optional:"\u2014\u2014",default:"#007fff"},{name:"text",desc:"\u8FDB\u5EA6\u6761\u5BF9\u5E94\u63D0\u793A\u6587\u5B57",type:"function\u3001array",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"show-text",desc:"\u662F\u5426\u663E\u793A\u63D0\u793A\u6587\u5B57",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"ripple",desc:"\u662F\u5426\u663E\u793A\u6CE2\u7EB9\u6548\u679C\uFF08\u53EA\u5728 type \u4E3A line\u65F6\u6709\u6548\uFF09",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"text-inside",desc:"\u5BF9\u5E94\u63D0\u793A\u6587\u5B57\u5185\u7F6E\u5728\u8FDB\u5EA6\u6761\u5185\uFF08\u53EA\u5728 type \u4E3A line\u65F6\u6709\u6548\uFF09",type:"boolean",optional:"\u2014\u2014",default:!1}],event:[{name:"finished",desc:"\u5B8C\u6210\u65F6\u89E6\u53D1",callbackParams:"\u2014\u2014"}]};const V={class:"progress-demo-list"},A={key:0},U={class:"options"},D=n(" \u8FB9\u7F18\u5706\u89D2\uFF1A "),q=n("\u662F"),z=n("\u5426"),$={key:0},j=n(" \u6587\u672C\u5185\u663E\uFF1A "),H=n("\u662F"),P=n("\u5426"),R=n(" \u4FEE\u6539\u6B65\u957F\uFF1A "),G=n(" \u4FEE\u6539\u8FDB\u5EA6\uFF1A "),J=n(" - "),K=n(" + "),X=M({setup(s){I(5);const N=()=>console.log("\u5B8C\u6210\u4E86\u3002");return(O,Q)=>{const d=c("w-radio"),m=c("w-radio-group"),C=c("w-input-number"),f=c("w-button"),y=c("w-button-group"),L=c("w-progress"),F=c("DemoItem"),T=c("TableList");return i(),u("div",V,[(i(!0),u(v,null,x(h(B),(e,g)=>(i(),W(F,{item:e,key:e.title},{default:r(()=>[g!=0?(i(),u("div",A,[p("div",U,[p("div",null,[D,o(m,{checked:e.strokeLinecap,"onUpdate:checked":t=>e.strokeLinecap=t},{default:r(()=>[o(d,{value:"round"},{default:r(()=>[q]),_:1}),o(d,{value:"square"},{default:r(()=>[z]),_:1})]),_:2},1032,["checked","onUpdate:checked"])]),g===1?(i(),u("div",$,[j,o(m,{checked:e.textInside,"onUpdate:checked":t=>e.textInside=t},{default:r(()=>[o(d,{value:!0},{default:r(()=>[H]),_:1}),o(d,{value:!1},{default:r(()=>[P]),_:1})]),_:2},1032,["checked","onUpdate:checked"])])):_("",!0),p("div",null,[R,p("div",null,[o(C,{modelValue:e.step,"onUpdate:modelValue":t=>e.step=t,size:"medium",min:1,max:10},null,8,["modelValue","onUpdate:modelValue"])])]),p("div",null,[G,p("div",null,[o(y,null,{default:r(()=>[o(f,{onClick:t=>e.percentNum>=0?e.percentNum-=e.step:""},{default:r(()=>[J]),_:2},1032,["onClick"]),o(f,{onClick:t=>e.percentNum<=100?e.percentNum+=e.step:""},{default:r(()=>[K]),_:2},1032,["onClick"])]),_:2},1024)])])])])):_("",!0),(i(!0),u(v,null,x(e.components,t=>(i(),u("div",{key:t},[o(L,{percentNum:t.percentNum||e.percentNum,status:t.status,text:t.text,width:t.width,"stroke-width":e.textInside?0:t.strokeWidth,"text-inside":e.textInside,color:t.color,"void-color":t.voidColor,"stroke-linecap":e.strokeLinecap,type:e.type,ripple:t.ripple,onFinished:N},null,8,["percentNum","status","text","width","stroke-width","text-inside","color","void-color","stroke-linecap","type","ripple"])]))),128))]),_:2},1032,["item"]))),128)),o(T,{data:h(E)},null,8,["data"])])}}});export{X as default};
