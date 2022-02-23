import{r as w,d as _,a as r,o,g as i,H as p,I as m,c as y,w as C,h as n,t as g,N as h,b as l,k as F,i as V,R as x,y as s}from"./vendor.c0366ad2.js";const A=w([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u8BBE\u7F6E address \u5C5E\u6027\uFF0C\u6307\u5B9A github \u4ED3\u5E93\u5730\u5740\uFF0C\u683C\u5F0F\u662F <\u7528\u6237\u540D>/<\u4ED3\u5E93\u540D>\uFF0C\u4F8B\u5982\uFF1Awoxixiuqiangwei/wheel-ui",components:[{address:"woxixiuqiangwei/wheel-ui"}],template:`    <template>
      <div class="corner-box">
        <w-github-corner :address="child.address" />
      </div>
    </template>
    <style>
      .corner-box {
        position: relative;
        text-align: right;
        margin: 1em;
        width: 150px;
        height: 150px;
        border: 1px solid rgb(221, 221, 221);
      }
    </style>`},{title:"\u989C\u8272\u548C\u5C3A\u5BF8",desc:"\u8BBE\u7F6E bg-color \u5C5E\u6027 \u6307\u5B9A\u80CC\u666F\u989C\u8272\uFF0C\u8BBE\u7F6E color \u5C5E\u6027 \u6307\u5B9A\u89D2\u6807\u7684\u989C\u8272\u3002 width \u5C5E\u6027\u6307\u5B9A\u89D2\u6807\u7684\u5BBD\u5EA6\u3001height \u5C5E\u6027\u6307\u5B9A\u89D2\u6807\u7684\u9AD8\u5EA6\u3001svg-style \u5C5E\u6027\u6307\u5B9A\u89D2\u6807\u7684\u6837\u5F0F (top\u3001left\u7B49)",components:[{address:"FrankFang",bgColor:"#a52a2a",color:"#ecbcbc",width:60,height:60}],template:`    <template>
      <div class="github-corner-color-demo">
        <div class="options">
          <div>
            \u80CC\u666F\u989C\u8272\uFF1A<input  v-model="bgColor" type="color" />
          </div>
          <div>
            \u56FE\u6807\u989C\u8272\uFF1A<input v-model="color" type="color" />
          </div>
          <div>
            \u5BBD\u5EA6\uFF1A<w-input-number v-model="width" size="small" :min="30" :max="120" />
          </div>
          <div>
            \u9AD8\u5EA6\uFF1A<w-input-number v-model="height" size="small" :min="30" :max="120" />
          </div>
        </div>
        <div class="corner-box">
          <w-github-corner address="FrankFang" :width="width" :height="height"
            :bg-color="bgColor" :color="color" />
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            width: 60,
            height: 60,
            bgColor: '#a52a2a',
            color: '#ecbcbc'
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref,defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const width = ref(60);
                height = ref(60);
                bgColor = ref('#a52a2a');
                color = ref('#ecbcbc');
          return{ width, height, bgColor, color };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .github-corner-color-demo {
        display: flex;
        flex-wrap: wrap;
        margin: 1em;
        max-width: 350px;
        .options {
          margin-bottom: 1em;
          width: 100%;
          > div {
            margin-bottom: 1em;
            display: flex;
            align-items: center;
          }
        }
        .corner-box {
          position: relative;
          text-align: right;
          width: 150px;
          height: 150px;
          border: 1px solid rgb(221, 221, 221);
        }
      }
    </style>`},{title:"\u4F4D\u7F6E",desc:"\u8BBE\u7F6E direction \u901A\u8FC7\uFF0C\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u662F\u5728\u53F3\u8FB9 (right)\u3002",components:[{address:"woxixiuqiangwei/wheel-ui",direction:"right"}],template:`    <template>
      <div class='github-corner-direction-demo'>
        <div class='options'>
          <div>
            \u89D2\u6807\u4F4D\u7F6E\uFF1A
            <w-switch v-model='direction'
              open-text='\u53F3\u8FB9' off-text='\u5DE6\u8FB9' open-value='right' 
              off-value='left' text-inline />
          </div>
        </div>
        <div class='corner-box' :style="{'text-align':direction">
          <w-github-corner address='woxixiuqiangwei/wheel-ui' :direction='direction' />
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            direction: 'right'
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref,defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const direction = ref('right');
          return { direction };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .github-corner-direction-demo {
        display: flex;
        flex-wrap: wrap;
        margin: 1em;
        max-width: 350px;
        .options {
          margin-bottom: 1em;
          width: 100%;
          > div {
            margin-bottom: 1em;
          }
        }
        .corner-box {
          position: relative;
          width: 150px;
          height: 150px;
          border: 1px solid rgb(221, 221, 221);
        }
      }
    </style>`},{title:"\u5B9A\u4F4D",desc:"\u8BBE\u7F6E position \u5C5E\u6027\uFF0C\u6307\u5B9A\u5B9A\u4F4D\uFF0C\u9ED8\u8BA4\u662F\u7EDD\u5BF9\u5B9A\u4F4D (absolute)\uFF0C\u4E5F\u53EF\u56FA\u5B9A\u5B9A\u4F4D (fixed)\u3002",components:[{address:"woxixiuqiangwei/wheel-ui",position:"absolute",width:"100px",height:"100px",bgColor:"blue"}],template:`    <template>
      <div class='github-corner-position-demo'>
        <div class='options'>
          <div>
            \u89D2\u6807\u5B9A\u4F4D\uFF1A
            <w-switch v-model='position' open-text='fixed' 
              off-text='absolute' text-inline
              open-value='fixed' off-value='absolute' />
          </div>
        </div>
        <div class='corner-box'>
          <w-github-corner address='woxixiuqiangwei/wheel-ui' :position='position'
            :width='100' :height='100' bg-color='blue' />
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            position: 'absolute'
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref,defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const position = ref('absolute');
          return { position };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .github-corner-position-demo {
        display: flex;
        flex-wrap: wrap;
        margin: 1em;
        max-width: 350px;
        .options {
          margin-bottom: 1em;
          width: 100%;
          > div {
            margin-bottom: 1em;
          }
        }
        .corner-box {
          position: relative;
          width: 150px;
          height: 150px;
          border: 1px solid rgb(221, 221, 221);
        }
      }
    </style>`}]),k={attribute:[{name:"address",desc:"\u7528\u6237\u5730\u5740 <\u7528\u6237\u540D> \u4F8B\u5982 woxixiuqiangwei\u3002\u4ED3\u5E93\u5730\u5740 <\u7528\u6237\u540D>/<\u4ED3\u5E93\u540D> \u4F8B\u5982 woxixiuqiangwei/wheel-ui\uFF0C\u4E3A none \u65F6\u4E0D\u8DF3\u8F6C",type:"string",optional:"\u2014\u2014",default:!1},{name:"width",desc:"\u56FE\u6807\u5BBD\u5EA6",type:"string\u3001number",optional:"\u2014\u2014",default:"60px"},{name:"height",desc:"\u56FE\u6807\u9AD8\u5EA6",type:"string\u3001number",optional:"\u2014\u2014",default:"60px"},{name:"bg-color",desc:"\u80CC\u666F\u8272",type:"string",optional:"\u2014\u2014",default:"#151513"},{name:"color",desc:"github \u56FE\u6807\u586B\u5145\u989C\u8272",type:"string",optional:"\u2014\u2014",default:"#fff"},{name:"svg-style",desc:"GitHub\u89D2\u6807\u7684\u6837\u5F0F",type:"object",optional:"\u2014\u2014",default:{}},{name:"direction",desc:"\u663E\u793A\u4F4D\u7F6E\uFF0C\u5DE6\u4E0A\u6216\u53F3\u4E0A\uFF0Cleft right",type:"string",optional:"left\u3001right",default:"right"},{name:"position",desc:"\u5B9A\u4F4D",type:"boolean",optional:"absolute\u3001fixed",default:"absolute"},{name:"is-blank",desc:"\u662F\u5426\u5728\u65B0\u7A97\u53E3\u6253\u5F00\u94FE\u63A5",type:"boolean",optional:"\u2014\u2014",default:!0}]};const U={class:"githubCorner-demo-list"},D={key:0,class:"options"},B=s("\u80CC\u666F\u989C\u8272\uFF1A"),q=["onUpdate:modelValue"],E=s("\u56FE\u6807\u989C\u8272\uFF1A"),z=["onUpdate:modelValue"],N=s(" \u5BBD\u5EA6\uFF1A"),L=s(" \u9AD8\u5EA6\uFF1A"),T={key:1},I=s(" \u89D2\u6807\u4F4D\u7F6E\uFF1A "),j={key:2},H=s(" \u89D2\u6807\u5B9A\u4F4D\uFF1A "),J=_({setup(G){return(M,R)=>{const u=r("w-input-number"),c=r("w-switch"),b=r("w-github-corner"),f=r("DemoItem"),v=r("TableList");return o(),i("div",U,[(o(!0),i(p,null,m(x(A),(a,d)=>(o(),y(f,{item:a,key:a.title},{default:C(()=>[(o(!0),i(p,null,m(a.components,e=>(o(),i("div",{key:e},[d!==0?(o(),i("div",D,[d===1?(o(),i(p,{key:0},[n("div",null,[B,g(n("input",{"onUpdate:modelValue":t=>e.bgColor=t,type:"color"},null,8,q),[[h,e.bgColor]])]),n("div",null,[E,g(n("input",{"onUpdate:modelValue":t=>e.color=t,type:"color"},null,8,z),[[h,e.color]])]),n("div",null,[N,l(u,{modelValue:e.width,"onUpdate:modelValue":t=>e.width=t,size:"small",min:30,max:120},null,8,["modelValue","onUpdate:modelValue"])]),n("div",null,[L,l(u,{modelValue:e.height,"onUpdate:modelValue":t=>e.height=t,size:"small",min:30,max:120},null,8,["modelValue","onUpdate:modelValue"])])],64)):d===2?(o(),i("div",T,[I,l(c,{modelValue:e.direction,"onUpdate:modelValue":t=>e.direction=t,"open-text":"\u53F3\u8FB9","off-text":"\u5DE6\u8FB9","open-value":"right","off-value":"left","text-inline":""},null,8,["modelValue","onUpdate:modelValue"])])):(o(),i("div",j,[H,l(c,{modelValue:e.position,"onUpdate:modelValue":t=>e.position=t,"open-text":"fixed","off-text":"absolute","text-inline":"","open-value":"fixed","off-value":"absolute"},null,8,["modelValue","onUpdate:modelValue"])]))])):F("",!0),n("div",{class:"corner-box",style:V({"text-align":e.direction||"right"})},[l(b,{address:e.address,width:e.width,height:e.height,"bg-color":e.bgColor,color:e.color,position:e.position,direction:e.direction},null,8,["address","width","height","bg-color","color","position","direction"])],4)]))),128))]),_:2},1032,["item"]))),128)),l(v,{data:x(k)},null,8,["data"])])}}});export{J as default};
