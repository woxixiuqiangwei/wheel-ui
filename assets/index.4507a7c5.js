import{r as n,d as T,m as s,a as r,o as l,g as i,H as u,I as d,c as p,w as v,h as o,t as b,N as h,z as w,b as c,y,k as g,R as x}from"./vendor.c0366ad2.js";const I=n([{title:"\u57FA\u7840\u7528\u6CD5",desc:"\u8BBE\u7F6E value/v-model \u5C5E\u6027\uFF0C\u7ED1\u5B9A Slider \u7684\u503C\u3002",components:[{value:0}],template:`    <template>
      <div class='slider-demo'>
        <w-slider v-model='sliderValue' />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            sliderValue: 0
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const sliderValue = ref(0);
          return { sliderValue };
        }
      })
    <\/script>`},{title:"\u7AD6\u5411\u6A21\u5F0F",desc:"\u8BBE\u7F6E vertical \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u662F\u7AD6\u5411\u6A21\u5F0F\u5C55\u793A Slider\u3002",components:[{value:30,vertical:!0}],template:`    <template>
      <div>
        <w-slider v-model='sliderValue' vertical />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            sliderValue: 30
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const sliderValue = ref(30);
          return { sliderValue };
        }
      })
    <\/script>`},{title:"\u5012\u5E8F\u5C55\u793A",desc:"\u8BBE\u7F6E reverse \u5C5E\u6027\u4E3A true\uFF0C\u53EF\u4EE5\u5012\u5E8F\u5C55\u793A Slider\u3002",reverse:!0,components:[{value:50},{value:50,vertical:!0}],template:`    <template>
      <div>
        <w-slider v-model='sliderValues[0]' reverse />
        <w-slider v-model='sliderValues[1]' vertical reverse />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            sliderValues: [50, 50]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const sliderValues = reactive([50, 50]);
          return { sliderValues };
        }
      })
    <\/script>`},{title:"\u81EA\u5B9A\u4E49\u989C\u8272",desc:"\u8BBE\u7F6E color \u5C5E\u6027\uFF0C\u4FEE\u6539 \u5DF2\u6ED1\u8FC7\u7684\u989C\u8272\uFF0C\u4FEE\u6539 void-color \u5C5E\u6027\uFF0C\u4FEE\u6539\u672A\u6ED1\u8FC7\u7684\u989C\u8272\u3002",color:"#82dd3b",voidColor:"#e4e7ed",components:[{value:30}],template:`    <template>
      <div class="slider-demo">
        <div class="options">
          <div>
            <span>\u672A\u6ED1\u8FC7\uFF1A</span>
            <input v-model="color" type="color" />
          </div>
          &nbsp;&nbsp;
          <div>
            <span>\u5DF2\u6ED1\u8FC7\uFF1A</span>
            <input v-model="voidColor" type="color" />
          </div>
        </div>
        <w-slider v-model="sliderValue" :color="color" :void-color="voidColor" />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            sliderValue: 30,
            color: '#82dd3b',
            voidColor: '#e4e7ed'
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const sliderValue = ref(30),
                color = ref('#82dd3b'),
                voidColor = ref('#e4e7ed');
          return { sliderValue, color, voidColor };
        }
      })
    <\/script>`},{title:"\u79BB\u6563\u503C",desc:"\u8BBE\u7F6E step \u5C5E\u6027\uFF0C\u4FEE\u6539\u6B65\u957F\uFF0C\u8BBE\u7F6E show-stops \u5C5E\u6027\uFF0C\u53EF\u4EE5\u663E\u793A\u95F4\u65AD\u70B9\u3002",components:[{value:0,step:5,max:10,min:-10},{value:0,step:5,max:10,min:-10,showStops:!0}],template:`    <template>
      <div>
        <w-slider v-model='sliderValue' vertical />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            sliderValue: 30
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const sliderValue = ref(30);
          return { sliderValue };
        }
      })
    <\/script>`},{title:"\u5C55\u793A\u6807\u8BB0",desc:"\u8BBE\u7F6E marks \u5C5E\u6027\uFF0C\u6765\u5C55\u793A\u6807\u8BB0\u3002\u952E\u540D\u4E3A\u5BF9\u5E94\u7684\u503C\uFF0C\u952E\u503C\u4E3A\u6807\u8BB0\u5185\u5BB9\u3002\u53EF\u4EE5\u5355\u72EC\u7ED9\u6307\u5B9A\u7684\u6807\u8BB0\u8BBE\u7F6E\u6837\u5F0F ( { style:{} } )\u3002",components:[{value:0,width:350,height:14,max:10,min:-10,marks:{"-5":"-5",0:"0",5:"5"}},{value:5,height:6,step:.1,max:10,marks:{2:"2.0",5:{style:{color:"blue",fontWeight:"bold"},label:"5.0"},8:"8.0"}},{value:50,width:14,height:200,max:100,min:0,vertical:!0,marks:{35:"35\xB0",50:{style:{color:"green",fontWeight:"bold"},label:"50\xB0"},75:"75\xB0"}}],template:`    <template>
      <div class='slider-marks-demo'>
        <div v-for='item in list' :key='item'>
          <div class='options'>
            <span>\u5927\u5C0F\uFF1A</span>
            <w-input-number v-if='!item.vertical' v-model='item.height' size='small' />
            <w-input-number v-else v-model='item.width' size='small' />
          </div>
          <w-slider v-model='item.value' :vertical='item.vertical' :width='width' 
            :height='height' :max='max' :marks='marks' :step='step' />
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              {
                value: 0,
                width: 350,
                height: 14,
                max: 10,
                marks: {
                  '-5': '-5', 0: '0', 5: '5'
                }
              },
              {
                value: 5,
                height: 6,
                step: 0.1,
                max: 10,
                marks: {
                  2: '2.0',
                  5: {
                    style: {
                      color: 'blue',
                      fontWeight: 'bold'
                    },
                    label: '5.0'
                  },
                  8: '8.0'
                }
              },
              {
                value: 50,
                width: 14,
                height: 200,
                max: 100,
                min: 0,
                vertical: true,
                marks: {
                  35: '35\xB0',
                  50: {
                    style: {
                      color: 'green',
                      fontWeight: 'bold'
                    },
                    label: '50\xB0'
                  },
                  75: '75\xB0'
                }
              }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = ref([
            {
              value: 0,
              width: 350,
              height: 14,
              max: 10,
              marks: {
                '-5': '-5', 0: '0', 5: '5'
              }
            },
            {
              value: 5,
              height: 6,
              step: 0.1,
              max: 10,
              marks: {
                2: '2.0',
                5: {
                  style: {
                    color: 'blue',
                    fontWeight: 'bold'
                  },
                  label: '5.0'
                },
                8: '8.0'
              }
            },
            {
              value: 50,
              width: 14,
              height: 200,
              max: 100,
              min: 0,
              vertical: true,
              marks:{
                35: '35\xB0',
                50: {
                  style: {
                    color: 'green',
                    fontWeight: 'bold'
                  },
                  label: '50\xB0'
                },
                75: '75\xB0'
              }
            }
          ]);
          return { list };
        }
      })
    <\/script>`,style:`
    <style>
      .slider-marks-demo {
        margin: 1em;
        > div {
          margin-bottom: 4em;
          > .options {
            margin-bottom: 1.5em;
          }
        }
      }
    </style>`},{title:"\u66F4\u591A\u914D\u7F6E",desc:"\u53EF\u901A\u8FC7\u672C\u4F8B\u5B50\u6D4B\u8BD5\u76F8\u5173\u7684\u53C2\u6570\u3002\u5177\u4F53\u53C2\u6570\u7684\u4FE1\u606F\u53EF\u4EE5\u5728\u4E0B\u65B9 Slider \u5C5E\u6027\u91CC\u67E5\u770B\u3002",components:[{value:50,height:5},{value:50,vertical:!0,width:5}],disabled:!1,showTooltip:!0,tooltipPlacement:"top",showInput:!1,inputControls:"always",inputSize:"small",tipFormatter:!1,template:`    <template>
      <div class='slider-options-demo'> 
        <div class='options'> 
          <div v-for='type in options' :key='type'>
            <span>{{type.title}}\uFF1A</span>
            <w-radio-group v-model:checked='data[type.attr]'>
              <w-radio v-for='radio in type.radio' :key='radio' :value='radio.value'>
                {{radio.label || radio.value}}
              </w-radio>
            </w-radio-group>
          </div>
        </div>
        <div class='slider'>
          <w-slider v-for='item in demo' v-model='item.value' :key='item'
            v-bind='data' :vertical='item.vertical'
            :tip-formatter="data.tipFormatter?item.value+' %':item.value" />
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            demo: [
              { value: 50 },
              { value: 50, vertical: true }
            ],
            options: [
              {
                title: '\u662F\u5426\u7981\u7528',
                attr: 'disabled',
                radio: [
                  { value: true, label: '\u662F' },
                  { value: false, label: '\u5426' }
                ]
              },
              {
                title: '\u663E\u793ATooltip',
                attr: 'showTooltip',
                radio: [
                  { value: true, label: '\u662F' },
                  { value: false, label: '\u5426' }
                ]
              },
              {
                title: 'Tooltip\u4F4D\u7F6E',
                attr: 'tooltipPlacement',
                radio: [
                  { value: 'top', label: '\u4E0A' },
                  { value: 'bottom', label: '\u4E0B' },
                  { value: 'left', label: '\u5DE6' } ,
                  { value: 'right', label:'\u53F3' }
                ]
              },
              {
                title: '\u662F\u5426\u663E\u793AInput',
                attr: 'showInput',
                radio: [
                  { value: true, label: '\u662F' },
                  { value: false, label: '\u5426' }
                ]
              },
              {
                title: 'Input\u5927\u5C0F',
                attr: 'inputSize',
                radio: [
                  { value: 'small', label: '\u5C0F' },
                  { value: 'medium', label: '\u4E00\u822C' }
                ]
              },
              {
                title: '\u52A0\u51CF\u6309\u94AE\u663E\u793A',
                attr: 'inputControls',
                radio:[
                  { value: 'always', label: '\u663E\u793A' },
                  { value: 'hover', label: '\u79FB\u5165\u65F6' },
                  { value: 'never', label: '\u4ECE\u4E0D' }
                ]
              },
              {
                title: '\u683C\u5F0F\u5316 Tooltip',
                attr: 'tipFormatter',
                radio: [
                  { value: true, label: '\u767E\u5206\u6BD4' },
                  { value: false, label: '\u9ED8\u8BA4' }
                ]
              }
            ],
            data: {
              disabled: false,
              showTooltip: true,
              tooltipPlacement: 'top',
              showInput: false,
              inputControls: 'always',
              inputSize: 'small',
              tipFormatter: false
            }
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const demo = reactive([
            { value: 50 },
            { value: 50, vertical: true }
          ]);
          const options = [
            {
                title: '\u662F\u5426\u7981\u7528',
                attr: 'disabled',
                radio: [
                  { value: true, label: '\u662F' },
                  { value: false, label: '\u5426' }
                ]
              },
              {
                title: '\u663E\u793ATooltip',
                attr: 'showTooltip',
                radio: [
                  { value: true, label: '\u662F' },
                  { value: false, label: '\u5426' }
                ]
              },
              {
                title: 'Tooltip\u4F4D\u7F6E',
                attr: 'tooltipPlacement',
                radio: [
                  { value: 'top', label: '\u4E0A' },
                  { value: 'bottom', label: '\u4E0B' },
                  { value: 'left', label: '\u5DE6' } ,
                  { value: 'right', label:'\u53F3' }
                ]
              },
              {
                title: '\u662F\u5426\u663E\u793AInput',
                attr: 'showInput',
                radio: [
                  { value: true, label: '\u662F' },
                  { value: false, label: '\u5426' }
                ]
              },
              {
                title: 'Input\u5927\u5C0F',
                attr: 'inputSize',
                radio: [
                  { value: 'small', label: '\u5C0F' },
                  { value: 'medium', label: '\u4E00\u822C' }
                ]
              },
              {
                title: '\u52A0\u51CF\u6309\u94AE\u663E\u793A',
                attr: 'inputControls',
                radio:[
                  { value: 'always', label: '\u663E\u793A' },
                  { value: 'hover', label: '\u79FB\u5165\u65F6' },
                  { value: 'never', label: '\u4ECE\u4E0D' }
                ]
              },
              {
                title: '\u683C\u5F0F\u5316 Tooltip',
                attr: 'tipFormatter',
                radio: [
                  { value: true, label: '\u767E\u5206\u6BD4' },
                  { value: false, label: '\u9ED8\u8BA4' }
                ]
              }
          ];
          const data = reactive({
            disabled: false,
            showTooltip: true,
            tooltipPlacement: 'top',
            showInput: false,
            inputControls: 'always',
            inputSize: 'small',
            tipFormatter: false
          });
          return { demo, options, data };
        }
      }
    <\/script>`,style:`
    <style lang='scss'>
      .slider-options-demo {
        max-width: 900px;
        margin: 1em;
        > .options {
          display: flex;
          flex-wrap: wrap;
          > div {
            margin: .5em;
            width: 30%;
            display: flex;
            align-items: center;
            > span {
              white-space: nowrap;
            }
            > .w-radio-group {
              flex-wrap: nowrap;
            }
          }
        }
        > .slider {
          display: flex;
          > div {
            &:first-child {
              margin-right: 3em;
            }
          }
        }
      }
    </style>`}]),E={attribute:[{name:"value / v-model",desc:"\u7ED1\u5B9A\u503C",type:"number",optional:"\u2014\u2014",default:0},{name:"max",desc:"\u6700\u5927\u503C",type:"number",optional:"\u2014\u2014",default:100},{name:"min",desc:"\u6700\u5C0F\u503C",type:"number",optional:"\u2014\u2014",default:0},{name:"disabled",desc:"\u662F\u5426\u7981\u7528",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"color",desc:"\u5DF2\u6ED1\u8FC7\u7684\u989C\u8272",type:"string",optional:"\u2014\u2014",default:"#007fff"},{name:"void-color",desc:"\u672A\u6ED1\u8FC7\u7684\u989C\u8272",type:"string",optional:"\u2014\u2014",default:"#e4e7ed"},{name:"step",desc:"\u6B65\u957F",type:"number",optional:"\u2014\u2014",default:"1"},{name:"height",desc:"\u6ED1\u52A8\u6761\u7684\u9AD8\u5EA6",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"width",desc:"\u6ED1\u52A8\u6761\u7684\u5BBD\u5EA6",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"vertical",desc:"\u662F\u5426\u5782\u76F4",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"reverse",desc:"\u662F\u5426\u5012\u5E8F",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"show-value",desc:"\u662F\u5426\u5C55\u793A Slider \u7684\u503C",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"show-tooltip",desc:"\u662F\u5426\u5C55\u793ATooltip",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"show-stops",desc:"\u662F\u5426\u663E\u793A\u95F4\u65AD\u70B9",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"tooltip-class",desc:"Tooltip \u7684 class",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"tooltip-placement",desc:"Tooltip \u663E\u793A\u7684\u4F4D\u7F6E",type:"string",optional:"top\u3001bottom\u3001right\u3001left",default:"top"},{name:"tip-formatter",desc:"\u81EA\u5B9A\u4E49 Tooltip \u5185\u5BB9",type:"string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"show-input",desc:"\u662F\u5426\u5C55\u793AInput",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"input-controls",desc:"Input controls \u663E\u793A\u7684\u65F6\u673A",type:"string",optional:"always\u3001hover\u3001never",default:"hover"},{name:"input-size",desc:"Input \u7684\u5C3A\u5BF8",type:"string",optional:"small\u3001medium",default:"small"},{name:"marks",desc:"\u6807\u8BB0\uFF0C\u6BCF\u4E2A\u6807\u8BB0\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E\u6837\u5F0F",type:"object",optional:"\u2014\u2014",default:"\u2014\u2014"}],event:[{name:"change",desc:"\u503C\u6539\u53D8\u65F6\u89E6\u53D1\uFF08\u4F7F\u7528\u9F20\u6807\u62D6\u66F3\u65F6\uFF0C\u53EA\u5728\u677E\u5F00\u9F20\u6807\u540E\u89E6\u53D1\uFF09",callbackParams:"\u6539\u53D8\u540E\u7684\u503C"},{name:"input",desc:"\u4F7F\u7528\u9F20\u6807\u62D6\u66F3\u65F6\uFF0C\u6D3B\u52A8\u8FC7\u7A0B\u5B9E\u65F6\u89E6\u53D1 / \u70B9\u51FB\u6ED1\u52A8\u6761\u6539\u53D8\u503C / \u624B\u52A8\u6539\u53D8\u503C / Input\u6539\u53D8\u503C \u90FD\u4F1A\u89E6\u53D1",callbackParams:"\u6539\u53D8\u540E\u7684\u503C"}]};const S={class:"slider-demo-list"},z={key:0,class:"options"},B=o("span",null,"\u5DF2\u6ED1\u8FC7\uFF1A",-1),D=["onUpdate:modelValue"],U=y(" \xA0\xA0\xA0 "),W=o("span",null,"\u672A\u6ED1\u8FC7\uFF1A",-1),P=["onUpdate:modelValue"],N={key:1,class:"options"},L={key:0,class:"options"},j=o("span",null,"\u5927\u5C0F\uFF1A",-1),G=T({setup(H){s(10),s(56),s(3),s(25),s(5),n({20:"20\xB0C",50:{style:{color:"#1989FA",fontWeight:"bold"},label:"50\xB0C"},80:"80\xB0C"}),n({2:"2",5:{style:{color:"#1989FA",fontWeight:"bold"},label:"5"},8:"8"});const _=[{title:"\u662F\u5426\u7981\u7528",attr:"disabled",radio:[{value:!0,label:"\u662F"},{value:!1,label:"\u5426"}]},{title:"\u663E\u793ATooltip",attr:"showTooltip",radio:[{value:!0,label:"\u662F"},{value:!1,label:"\u5426"}]},{title:"Tooltip\u4F4D\u7F6E",attr:"tooltipPlacement",radio:[{value:"top",label:"\u4E0A"},{value:"bottom",label:"\u4E0B"},{value:"left",label:"\u5DE6"},{value:"right",label:"\u53F3"}]},{title:"\u662F\u5426\u663E\u793AInput",attr:"showInput",radio:[{value:!0,label:"\u662F"},{value:!1,label:"\u5426"}]},{title:"Input\u5927\u5C0F",attr:"inputSize",radio:[{value:"small",label:"\u5C0F"},{value:"medium",label:"\u4E00\u822C"}]},{title:"\u52A0\u51CF\u6309\u94AE\u663E\u793A",attr:"inputControls",radio:[{value:"always",label:"\u663E\u793A"},{value:"hover",label:"\u79FB\u5165\u65F6"},{value:"never",label:"\u4ECE\u4E0D"}]},{title:"\u683C\u5F0F\u5316 Tooltip",attr:"tipFormatter",radio:[{value:!0,label:"\u767E\u5206\u6BD4"},{value:!1,label:"\u9ED8\u8BA4"}]}];return n([{value:5,width:350,height:14,max:10,marks:{2:"2",5:"5",8:"8"}},{value:5,width:320,height:6,step:.1,max:10,marks:{2:"2",5:{style:{color:"blue",fontWeight:"bold"},label:"5"},8:"8"}},{value:50,width:14,height:180,max:100,min:0,vertical:!0,marks:{35:"35\xB0",50:{style:{color:"green",fontWeight:"bold"},label:"50\xB0"},75:"75\xB0"}}]),(M,R)=>{const C=r("w-radio"),k=r("w-radio-group"),f=r("w-input-number"),V=r("w-slider"),F=r("DemoItem"),A=r("TableList");return l(),i("div",S,[(l(!0),i(u,null,d(x(I),(t,m)=>(l(),p(F,{item:t,key:t.title},{default:v(()=>[m===3?(l(),i("div",z,[o("div",null,[B,b(o("input",{"onUpdate:modelValue":e=>t.color=e,type:"color"},null,8,D),[[h,t.color]])]),U,o("div",null,[W,b(o("input",{"onUpdate:modelValue":e=>t.voidColor=e,type:"color"},null,8,P),[[h,t.voidColor]])])])):m===6?(l(),i("div",N,[(l(),i(u,null,d(_,e=>o("div",{key:e},[o("span",null,w(e.title)+"\uFF1A",1),c(k,{checked:t[e.attr],"onUpdate:checked":a=>t[e.attr]=a},{default:v(()=>[(l(!0),i(u,null,d(e.radio,a=>(l(),p(C,{key:a,value:a.value},{default:v(()=>[y(w(a.label||a.value),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["checked","onUpdate:checked"])])),64))])):g("",!0),(l(!0),i(u,null,d(t.components,e=>(l(),i("div",{key:e},[m===6?(l(),i("div",L,[o("div",null,[j,e.vertical?(l(),p(f,{key:1,modelValue:e.width,"onUpdate:modelValue":a=>e.width=a,size:"small"},null,8,["modelValue","onUpdate:modelValue"])):(l(),p(f,{key:0,modelValue:e.height,"onUpdate:modelValue":a=>e.height=a,size:"small",min:4,max:30},null,8,["modelValue","onUpdate:modelValue"]))])])):g("",!0),c(V,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,vertical:e.vertical,disabled:t.disabled,"show-tooltip":t.showTooltip,"tooltip-placement":t.tooltipPlacement,"show-input":t.showInput,reverse:t.reverse,color:t.color,"void-color":t.voidColor,"input-controls":t.inputControls,"input-size":t.inputSize,"tip-formatter":t.tipFormatter?e.value+" %":e.value,max:e.max,min:e.min,marks:e.marks,width:e.width,height:e.height,step:e.step,showStops:e.showStops},null,8,["modelValue","onUpdate:modelValue","vertical","disabled","show-tooltip","tooltip-placement","show-input","reverse","color","void-color","input-controls","input-size","tip-formatter","max","min","marks","width","height","step","showStops"])]))),128))]),_:2},1032,["item"]))),128)),c(A,{data:x(E)},null,8,["data"])])}}});export{G as default};
