import{r as g,d as F,m as u,a as n,o as i,g as o,H as m,I as f,c as w,w as r,b as s,h as p,k as D,P as V,R as v,y as c}from"./vendor.c0366ad2.js";const B=g([{title:"\u57FA\u7840\u7528\u6CD5",desc:"\u8BBE\u7F6E current \u5C5E\u6027\uFF0C\u4FEE\u6539\u5F53\u524D\u7684\u6FC0\u6D3B\u6B65\u9AA4\u3002 \u7ED9 Item \u8BBE\u7F6E title \u5C5E\u6027\uFF0C\u4FEE\u6539\u5F53\u524D\u6B65\u9AA4\u7684\u6807\u9898\u3002 (\u4E5F\u53EF\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u6807\u9898)",current:1,components:[{items:[{title:"\u586B\u5199\u4E2A\u4EBA\u4FE1\u606F"},{title:"\u9A8C\u8BC1\u624B\u673A\u53F7"},{title:"\u4E0A\u4F20\u8EAB\u4EFD\u8BC1\u7167\u7247"},{title:"\u626B\u8138\u540E\u5B8C\u6210\u6CE8\u518C"}]}],template:`    <template>
      <w-steps v-model:current='current'>
        <w-step title='\u586B\u5199\u4E2A\u4EBA\u4FE1\u606F' />
        <w-step title='\u9A8C\u8BC1\u624B\u673A\u53F7' />
        <w-step title='\u5F85\u8FDB\u884C' />
        <w-step title='\u5DF2\u63D0\u4EA4' />
      </w-steps>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            current: 1
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const current = ref(1);
          return { current };
        }
      })
    <\/script>`},{title:"\u6709\u63CF\u8FF0\u7684\u6B65\u9AA4\u6761",desc:"\u7ED9 Item \u8BBE\u7F6E description \u5C5E\u6027\uFF0C\u4FEE\u6539\u5F53\u524D\u6B65\u9AA4\u7684\u63CF\u8FF0\u3002 (\u4E5F\u53EF\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u63CF\u8FF0)",components:[{items:[{title:"\u6B65\u9AA41",description:"\u5C06\u571F\u8C46\u6D17\u51C0\uFF0C\u5207\u6210\u539A\u5EA6\u9002\u4E2D\u7684\u7247"},{title:"\u6B65\u9AA42",description:"\u8F85\u6599:\u9752\u6912\u3001\u80E1\u841D\u535C\u5207\u7247\uFF0C\u59DC\u849C\u3001\u5C0F\u8FA3\u6912\u7B49\u5241\u788E\u3002"},{title:"\u6B65\u9AA43",description:"\u8C03\u5236\u4E00\u6B3E\u79D8\u5236\u9171\u6C41\uFF0C\u7528\u6765\u7092\u571F\u8C46\u975E\u5E38\u9002\u5408\uFF1A\u767D\u7CD6\u3001\u9999\u918B\u3001\u751F\u62BD\u3001\u9762\u9171\u3001\u76D0\u3001\u6912\u76D0\u5747\u5300\u6405\u62CC\u3002"},{title:"\u6B65\u9AA44",description:"\u70ED\u9505\u70ED\u6CB9\uFF0C\u5C06\u59DC\u3001\u849C\u3001\u5C0F\u8FA3\u6912\u7206\u9999\u540E\uFF0C\u5012\u5165\u571F\u8C46\u7247\u3001\u9752\u6912\u3001\u80E1\u841D\u535C\u7FFB\u7092\u81F3\u8F6F\u719F\u3002"},{title:"\u6B65\u9AA45",description:"\u5012\u5165\u79D8\u5236\u9171\u6C41\uFF0C\u7FFB\u7092\u5747\u5300\u5165\u5473\uFF0C\u6536\u6C41\u5373\u53EF\u3002"}]}],template:`    <template>
      <w-steps>
        <w-step v-for='item in steps' :key='item' :title='item.title' 
          :description='item.description' />
      </w-steps>
    </template>
    <script>
      export default{
        data(){
          return{
            steps:[
              { title: '\u6B65\u9AA41', description: '\u5C06\u571F\u8C46\u6D17\u51C0\uFF0C\u5207\u6210\u539A\u5EA6\u9002\u4E2D\u7684\u7247' },
              { title: '\u6B65\u9AA42', description: '\u8F85\u6599:\u9752\u6912\u3001\u80E1\u841D\u535C\u5207\u7247\uFF0C\u59DC\u849C\u3001\u5C0F\u8FA3\u6912\u7B49\u5241\u788E\u3002' },
              { title: '\u6B65\u9AA43', description: '\u8C03\u5236\u4E00\u6B3E\u79D8\u5236\u9171\u6C41\uFF0C\u7528\u6765\u7092\u571F\u8C46\u975E\u5E38\u9002\u5408\uFF1A\u767D\u7CD6\u3001\u9999\u918B\u3001\u751F\u62BD\u3001\u9762\u9171\u3001\u76D0\u3001\u6912\u76D0\u5747\u5300\u6405\u62CC\u3002' },
              { title: '\u6B65\u9AA44', description: '\u70ED\u9505\u70ED\u6CB9\uFF0C\u5C06\u59DC\u3001\u849C\u3001\u5C0F\u8FA3\u6912\u7206\u9999\u540E\uFF0C\u5012\u5165\u571F\u8C46\u7247\u3001\u9752\u6912\u3001\u80E1\u841D\u535C\u7FFB\u7092\u81F3\u8F6F\u719F\u3002' },
              { title: '\u6B65\u9AA45', description: '\u5012\u5165\u79D8\u5236\u9171\u6C41\uFF0C\u7FFB\u7092\u5747\u5300\u5165\u5473\uFF0C\u6536\u6C41\u5373\u53EF\u3002' }
            ]
          }
        }
      }
    <\/script>`},{title:"\u5E26\u56FE\u6807\u7684\u6B65\u9AA4\u6761",desc:"\u7ED9 Item \u8BBE\u7F6E icon \u5C5E\u6027\uFF0C\u4FEE\u6539\u5F53\u524D\u6B65\u9AA4\u7684\u8282\u70B9\u3002 (\u4E5F\u53EF\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u8282\u70B9)",components:[{items:[{title:"\u6CE8\u518C\u8D26\u53F7",icon:"file",description:"\u6D4F\u89C8\u70ED\u95E8\u6D3B\u52A8\u5FC5\u987B\u5148\u6CE8\u518C\u8D26\u53F7"},{title:"\u4E0A\u4F20\u5934\u50CF",icon:"upload",description:"\u5934\u50CF\u4E5F\u662F\u86EE\u91CD\u8981\u7684"},{title:"\u9A8C\u8BC1\u90AE\u7BB1",icon:"detail-s",description:"\u9A8C\u8BC1\u5B8C\u90AE\u7BB1\u540E\uFF0C\u6CE8\u518C\u8D26\u53F7\u6210\u529F\uFF01"}]}],template:`    <template>
      <w-steps>
        <w-step v-for='item in steps' :key='item' :title='item.title' 
          :description='item.description' :icon='item.icon' />
      </w-steps>
    </template>
    <script>
      export default {
        data() {
          return {
            steps: [
              { title: '\u6CE8\u518C\u8D26\u53F7', icon: 'file', description: '\u6D4F\u89C8\u70ED\u95E8\u6D3B\u52A8\u5FC5\u987B\u5148\u6CE8\u518C\u8D26\u53F7' },
              { title: '\u4E0A\u4F20\u5934\u50CF', icon: 'upload', description: '\u5934\u50CF\u4E5F\u662F\u86EE\u91CD\u8981\u7684' },
              { title: '\u9A8C\u8BC1\u90AE\u7BB1', icon: 'detail-s', description: '\u9A8C\u8BC1\u5B8C\u90AE\u7BB1\u540E\uFF0C\u6CE8\u518C\u8D26\u53F7\u6210\u529F\uFF01' }
            ]
          }
        }
      }
    <\/script>`},{title:"\u5C0F\u5706\u70B9\u6B65\u9AA4\u6761",isDot:!0,current:0,desc:"\u8BBE\u7F6E is-dot \u5C5E\u6027\uFF0C\u4FEE\u6539\u8282\u70B9\u662F\u5426\u4E3A\u5C0F\u5706\u70B9\u5F62\u72B6\u3002",components:[{items:[{title:"\u6CE8\u518C\u8D26\u53F7",description:"\u6D4F\u89C8\u70ED\u95E8\u6D3B\u52A8\u5FC5\u987B\u5148\u6CE8\u518C\u8D26\u53F7"},{title:"\u4E0A\u4F20\u5934\u50CF",description:"\u5934\u50CF\u4E5F\u662F\u86EE\u91CD\u8981\u7684"},{title:"\u9A8C\u8BC1\u90AE\u7BB1",description:"\u9A8C\u8BC1\u5B8C\u90AE\u7BB1\u540E\uFF0C\u6CE8\u518C\u8D26\u53F7\u6210\u529F\uFF01"}]},{items:[{title:"\u586B\u5199\u4E2A\u4EBA\u4FE1\u606F"},{title:"\u9A8C\u8BC1\u624B\u673A\u53F7"},{title:"\u4E0A\u4F20\u8EAB\u4EFD\u8BC1\u7167\u7247"},{title:"\u626B\u8138\u540E\u5B8C\u6210\u6CE8\u518C"}]}],template:`    <template>
      <w-steps v-for='step in steps' :key='step' :is-dot='true'>
        <w-step v-for='item in step.items' :key='item' :title='item.title'
          :description='item.description' />
      </w-steps>
    </template>
    <script>
      export default {
        data() {
          return {
            steps: [
              {
                items: [
                  { title: '\u6CE8\u518C\u8D26\u53F7', description: '\u6D4F\u89C8\u70ED\u95E8\u6D3B\u52A8\u5FC5\u987B\u5148\u6CE8\u518C\u8D26\u53F7' },
                  { title: '\u4E0A\u4F20\u5934\u50CF', description: '\u5934\u50CF\u4E5F\u662F\u86EE\u91CD\u8981\u7684' },
                  { title: '\u9A8C\u8BC1\u90AE\u7BB1', description: '\u9A8C\u8BC1\u5B8C\u90AE\u7BB1\u540E\uFF0C\u6CE8\u518C\u8D26\u53F7\u6210\u529F\uFF01' }
                ]
              },
              {
                items: [
                  { title: '\u586B\u5199\u4E2A\u4EBA\u4FE1\u606F' },
                  { title: '\u9A8C\u8BC1\u624B\u673A\u53F7' },
                  { title: '\u4E0A\u4F20\u8EAB\u4EFD\u8BC1\u7167\u7247' },
                  { title: '\u626B\u8138\u540E\u5B8C\u6210\u6CE8\u518C' }
                ]
              }
            ]
          }
        }
      }
    <\/script>`},{title:"\u7AD6\u5411\u6392\u5217",desc:"\u8BBE\u7F6E direction \u5C5E\u6027\uFF0C\u4FEE\u6539\u6B65\u9AA4\u6761\u5C55\u793A\u7684\u65B9\u5411\u3002 (\u9ED8\u8BA4 horizontal \u6C34\u5E73\u65B9\u5411\u5C55\u793A)",direction:"vertical",components:[{items:[{title:"\u6CE8\u518C\u8D26\u53F7"},{title:"\u4E0A\u4F20\u5934\u50CF"},{title:"\u9A8C\u8BC1\u90AE\u7BB1"}]},{items:[{title:"\u6CE8\u518C\u8D26\u53F7",icon:"user"},{title:"\u4E0A\u4F20\u5934\u50CF",icon:"upload"},{title:"\u9A8C\u8BC1\u90AE\u7BB1",icon:"detail-s"}]},{isDot:!0,items:[{title:"\u6CE8\u518C\u8D26\u53F7"},{title:"\u4E0A\u4F20\u5934\u50CF"},{title:"\u9A8C\u8BC1\u90AE\u7BB1"}]}],template:`    <template>
      <w-steps v-for='step in steps' :key='step' :is-dot='step.isDot' direction='vertical'>
        <w-step v-for='item in step.items' :key='item' :title='item.title'
          :description='item.description' />
      </w-steps>
    </template>
    <script>
      export default {
        data() {
          return {
            steps:[
              {
                items:[
                  { title: '\u6CE8\u518C\u8D26\u53F7' },
                  { title: '\u4E0A\u4F20\u5934\u50CF' },
                  { title: '\u9A8C\u8BC1\u90AE\u7BB1' }
                ]
              },
              {
                items:[
                  { title: '\u6CE8\u518C\u8D26\u53F7', icon: 'user' },
                  { title: '\u4E0A\u4F20\u5934\u50CF', icon: 'upload' },
                  { title: '\u9A8C\u8BC1\u90AE\u7BB1', icon: 'detail-s' }
                ]
              },
              {
                isDot:true,
                items:[
                  { title: '\u6CE8\u518C\u8D26\u53F7' },
                  { title: '\u4E0A\u4F20\u5934\u50CF' },
                  { title: '\u9A8C\u8BC1\u90AE\u7BB1' }
                ]
              }
            ]
          }
        }
      }
    <\/script>`},{title:"\u5012\u5E8F\u6392\u5217",desc:`\u8BBE\u7F6E reverse \u5C5E\u6027\uFF0C\u4FEE\u6539\u6B65\u9AA4\u6761\u662F\u5426\u5012\u5E8F\u6392\u5217\u5C55\u793A\u3002 (\u9ED8\u8BA4\u4E0D\u5012\u5E8F\u6392\u5217)<br>
      \u8BBE\u7F6E size \u5C5E\u6027\uFF0C\u4FEE\u6539\u6B65\u9AA4\u6761\u7684\u6807\u9898\u548C\u63CF\u8FF0\u7684\u6587\u5B57\u5927\u5C0F\u3002 (\u9ED8\u8BA4\u4E5F\u4F1A\u4FEE\u6539\u8282\u70B9\u7684\u5927\u5C0F)`,reverse:!0,size:15,components:[{items:[{title:"\u6CE8\u518C\u8D26\u53F7",description:"\u6D4F\u89C8\u70ED\u95E8\u6D3B\u52A8\u5FC5\u987B\u5148\u6CE8\u518C\u8D26\u53F7",icon:"file"},{title:"\u4E0A\u4F20\u5934\u50CF",description:"\u5934\u50CF\u4E5F\u662F\u86EE\u91CD\u8981\u7684"},{title:"\u9A8C\u8BC1\u90AE\u7BB1",description:"\u9A8C\u8BC1\u5B8C\u90AE\u7BB1\u540E\uFF0C\u6CE8\u518C\u8D26\u53F7\u6210\u529F\uFF01"}]},{items:[{title:"\u6CE8\u518C\u8D26\u53F7",description:"\u6D4F\u89C8\u70ED\u95E8\u6D3B\u52A8\u5FC5\u987B\u5148\u6CE8\u518C\u8D26\u53F7"},{title:"\u4E0A\u4F20\u5934\u50CF",description:"\u5934\u50CF\u4E5F\u662F\u86EE\u91CD\u8981\u7684"},{title:"\u9A8C\u8BC1\u90AE\u7BB1",description:"\u9A8C\u8BC1\u5B8C\u90AE\u7BB1\u540E\uFF0C\u6CE8\u518C\u8D26\u53F7\u6210\u529F\uFF01"}],direction:"vertical"}],template:`    <template>
      <div class='steps-demo'>
        <div class='options'>
          <div>
            <span>\u662F\u5426\u5012\u5E8F\uFF1A</span>
            <w-switch v-model='reverse' text-inline 
              open-text='\u662F' off-text='\u4E0D\u662F' />
          </div>&nbsp;&nbsp;&nbsp;
          <div>
            <span>\u6587\u5B57\u5927\u5C0F\uFF1A</span>
            <w-input-number v-model='size' size='medium' />
          </div>
        </div>
        <w-steps v-for='(step,index) in 2' :key='step' :reverse='reverse'
          :direction="index===0?'horizontal':'vertical'"
          :size='size'>
          <w-step v-for='(item,itemIndex) in steps' :key='item' :title='item.title'
            :description='item.description'
            :icon="index===0 && itemIndex===0?'file':''" />
        </w-steps>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            steps: [
              { title:'\u6CE8\u518C\u8D26\u53F7', description: '\u6D4F\u89C8\u70ED\u95E8\u6D3B\u52A8\u5FC5\u987B\u5148\u6CE8\u518C\u8D26\u53F7' },
              { title:'\u4E0A\u4F20\u5934\u50CF', description: '\u5934\u50CF\u4E5F\u662F\u86EE\u91CD\u8981\u7684' },
              { title:'\u9A8C\u8BC1\u90AE\u7BB1', description: '\u9A8C\u8BC1\u5B8C\u90AE\u7BB1\u540E\uFF0C\u6CE8\u518C\u8D26\u53F7\u6210\u529F\uFF01' }
            ],
            reverse: true,
            size: 15
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const steps = [
                  { title:'\u6CE8\u518C\u8D26\u53F7', description: '\u6D4F\u89C8\u70ED\u95E8\u6D3B\u52A8\u5FC5\u987B\u5148\u6CE8\u518C\u8D26\u53F7' },
                  { title:'\u4E0A\u4F20\u5934\u50CF', description: '\u5934\u50CF\u4E5F\u662F\u86EE\u91CD\u8981\u7684' },
                  { title:'\u9A8C\u8BC1\u90AE\u7BB1', description: '\u9A8C\u8BC1\u5B8C\u90AE\u7BB1\u540E\uFF0C\u6CE8\u518C\u8D26\u53F7\u6210\u529F\uFF01' }
                ],
                reverse = ref(true),
                size = ref(15);
          return { steps, reverse, size };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .steps-demo {
        max-width: 900px;
        margin: 1em;
        > .options {
          display: flex;
          > div {
            display: flex;
            align-items: center;
          }
        }
        > div {
          margin-bottom: 2em;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    </style>`},{title:"\u53EF\u70B9\u51FB",desc:"\u8BBE\u7F6E click \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u53EF\u4EE5\u70B9\u51FB\u6B65\u9AA4\u6761\u5207\u6362\u5F53\u524D\u6B65\u9AA4\uFF0C\u5F53\u524D\u6B65\u9AA4\u6761\u51FA\u9519\u65F6\u4E0D\u53EF\u70B9\u51FB\u540E\u9762\u7684\u6B65\u9AA4\u6761\u3002 (\u9ED8\u8BA4\u4E0D\u53EF\u70B9\u51FB)",click:!0,current:1,list:[{title:"\u6B65\u9AA4\u4E00"},{title:"\u6B65\u9AA4\u4E8C"},{title:"\u6B65\u9AA4\u4E09"}],components:[{},{direction:"vertical"}],template:`    <template>
      <div class='steps-demo'>
        <div>
          <w-button @click='current--'>\u4E0A\u4E00\u6B65</w-button>
          <w-button @click='current++'>\u4E0B\u4E00\u6B65</w-button>
          <w-button @click='status="error"'>\u51FA\u9519</w-button>
          <w-button @click='status=null'>\u89E3\u51B3</w-button>
        </div>
        <w-steps v-model:current='current' v-for='(step,index) in 2' :key='step'
          :status='status' :direction="index===1?'horizontal':'vertical'">
          <w-step v-for='item in step' :key='item' :title='item.title'
            :description='item.description' />
        </w-steps>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            steps: [
              { title: '\u6B65\u9AA4\u4E00' },
              { title: '\u6B65\u9AA4\u4E8C' },
              { title: '\u6B65\u9AA4\u4E09' }
            ],
            current: 1,
            status: null
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const steps = [
                  { title: '\u6B65\u9AA4\u4E00' },
                  { title: '\u6B65\u9AA4\u4E8C' },
                  { title: '\u6B65\u9AA4\u4E09' }
                ];
                current = ref(1);
                status = ref(null);
          return { steps, current, status };
        }
      })
    <\/script>`}]),E={attribute:[{name:"current",desc:"\u8BBE\u7F6E\u5F53\u524D\u6FC0\u6D3B\u6B65\u9AA4	",type:"number",optional:"\u2014\u2014",default:0},{name:"direction",desc:"\u8BBE\u7F6E\u6B65\u9AA4\u6761\u7684\u65B9\u5411\uFF0C\u652F\u6301\u6C34\u5E73(horizontal)\u548C\u7AD6\u76F4(vertical)\u4E24\u79CD\u65B9\u5411",type:"string",optional:"horizontal\u3001vertical",default:"horizontal"},{name:"status",desc:"\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001",type:"string",optional:"wait\u3001process\u3001finish\u3001error",default:"process"},{name:"size",desc:"\u6B65\u9AA4\u6761\u7684\u6587\u5B57\u5927\u5C0F (\u5305\u62EC\u6807\u9898\u3001\u63CF\u8FF0\uFF0C\u8282\u70B9\u4F1A\u6839\u636E\u6587\u5B57\u5927\u5C0F\u81EA\u52A8\u8C03\u8282)",type:"string\u3001number",optional:"\u2014\u2014",default:"15px"},{name:"is-dot",desc:"\u8282\u70B9\u662F\u5426\u4E3A\u5C0F\u5706\u70B9\u5F62\u72B6",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"reverse",desc:"\u662F\u5426\u5012\u5E8F\u663E\u793A\u6B65\u9AA4\u6761",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"click",desc:"\u662F\u5426\u53EF\u4EE5\u70B9\u51FB\u6B65\u9AA4\u6761\u5207\u6362\u5F53\u524D\u6B65\u9AA4",type:"boolean",optional:"\u2014\u2014",default:!1}],event:[{name:"change",desc:"\u5207\u6362\u6B65\u9AA4\u65F6\u89E6\u53D1",callbackParams:"current"}]},I={attribute:[{name:"title",desc:"\u5F53\u524D\u6B65\u9AA4\u7684\u6807\u9898",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"description",desc:"\u5F53\u524D\u6B65\u9AA4\u7684\u63CF\u8FF0",type:"string	",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"icon",desc:"\u5F53\u524D\u6B65\u9AA4\u7684\u56FE\u6807",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"}],slot:[{name:"title",desc:"\u5F53\u524D\u6B65\u9AA4\u7684\u6807\u9898"},{name:"description",desc:"\u5F53\u524D\u6B65\u9AA4\u7684\u63CF\u8FF0"},{name:"icon",desc:"\u5F53\u524D\u6B65\u9AA4\u7684\u56FE\u6807"}]};const U={class:"steps-demo-list"},L={key:0},N=c("\u4E0A\u4E00\u6B65"),$=c("\u4E0B\u4E00\u6B65"),T=c("\u51FA\u9519"),P=c("\u89E3\u51B3"),S={key:1},j=p("h3",null,"\u5C0F\u7092\u571F\u8C46\u7247\u7684\u505A\u6CD5\u6B65\u9AA4",-1),H=[j],R={key:2,class:"options"},W=p("span",null,"\u662F\u5426\u5012\u5E8F\uFF1A",-1),q=c(" \xA0\xA0\xA0 "),G=p("span",null,"\u6587\u5B57\u5927\u5C0F\uFF1A",-1),J=c("Step"),X=F({setup(K){u(1),u("error");const k=document.documentElement.clientWidth,x=u(k<=500?"vertical":"horizontal");return(M,O)=>{const d=n("w-button"),y=n("w-switch"),b=n("w-input-number"),h=n("w-icon"),z=n("w-step"),C=n("w-steps"),A=n("DemoItem"),_=n("TableList");return i(),o("div",U,[(i(!0),o(m,null,f(v(B),(t,a)=>(i(),w(A,{item:t,key:t.title},{default:r(()=>[a===6?(i(),o("div",L,[s(d,{onClick:e=>t.current--},{default:r(()=>[N]),_:2},1032,["onClick"]),s(d,{onClick:e=>t.current++},{default:r(()=>[$]),_:2},1032,["onClick"]),s(d,{onClick:e=>t.status="error"},{default:r(()=>[T]),_:2},1032,["onClick"]),s(d,{onClick:e=>t.status=null},{default:r(()=>[P]),_:2},1032,["onClick"])])):a===1?(i(),o("div",S,H)):a===5?(i(),o("div",R,[p("div",null,[W,s(y,{modelValue:t.reverse,"onUpdate:modelValue":e=>t.reverse=e,"text-inline":"","open-text":"\u662F","off-text":"\u4E0D\u662F"},null,8,["modelValue","onUpdate:modelValue"])]),q,p("div",null,[G,s(b,{modelValue:t.size,"onUpdate:modelValue":e=>t.size=e,size:"medium"},null,8,["modelValue","onUpdate:modelValue"])])])):D("",!0),(i(!0),o(m,null,f(t.components,e=>(i(),o("div",{key:e},[s(C,{current:t.current,"onUpdate:current":l=>t.current=l,direction:t.direction||e.direction||x.value,status:t.status,reverse:t.reverse,"is-dot":t.isDot||e.isDot,click:t.click,size:t.size},{default:r(()=>[(i(!0),o(m,null,f(t.list||e.items,l=>(i(),w(z,{key:l,title:l.title,description:l.description},V({_:2},[l.icon?{name:"icon",fn:r(()=>[s(h,{name:l.icon},null,8,["name"])])}:void 0]),1032,["title","description"]))),128))]),_:2},1032,["current","onUpdate:current","direction","status","reverse","is-dot","click","size"])]))),128))]),_:2},1032,["item"]))),128)),s(_,{data:v(E)},null,8,["data"]),s(_,{data:v(I)},{default:r(()=>[J]),_:1},8,["data"])])}}});export{X as default};
