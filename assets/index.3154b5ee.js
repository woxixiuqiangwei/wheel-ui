import{r as D,d as T,m,C as E,a as i,o,g as r,H as u,I as w,c as v,w as n,b as l,h as d,k as z,y as a,z as L,R as y}from"./vendor.c0366ad2.js";const U=D([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u5217\u8868\u9ED8\u8BA4\u662F\u6C34\u5E73\u65B9\u5411\u6392\u5217\uFF0C\u9ED8\u8BA4\u81EA\u5E26\u54CD\u5E94\u5F0F\u3002",arr:[{label:"\u7528\u6237\u540D",content:"\u4E2D\u56FD\u5FC3"},{label:"\u6027\u522B",content:"\u7537"},{label:"\u51FA\u751F\u5E74\u6708",content:"2000-01-01"},{label:"\u7C4D\u8D2F",content:"\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02"},{label:"\u4F4F\u5740",content:"\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4"}],descriptionsTitle:"\u7528\u6237\u4FE1\u606F",components:[{}],template:`    <template>
      <div class='descriptions-demo'>
        <w-descriptions title='\u7528\u6237\u4FE1\u606F'> 
          <w-descriptions-item v-for='descriptions in descriptionsList' :key='descriptions.label' 
            :label='descriptions.label'>
            {{ descriptions.content }}
          </w-descriptions-item>
        </w-descriptions>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            descriptionsList: [
              { label: '\u7528\u6237\u540D',content: '\u4E2D\u56FD\u5FC3' },
              { label:'\u6027\u522B', content: '\u7537' },
              { label: '\u51FA\u751F\u5E74\u6708', content: '2000-01-01' },
              { label:'\u7C4D\u8D2F', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02' },
              { label: '\u4F4F\u5740', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const descriptionsList = [
            { label: '\u7528\u6237\u540D',content: '\u4E2D\u56FD\u5FC3' },
            { label:'\u6027\u522B', content: '\u7537' },
            { label: '\u51FA\u751F\u5E74\u6708', content: '2000-01-01' },
            { label:'\u7C4D\u8D2F', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02' },
            { label: '\u4F4F\u5740', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4' }
          ];
          return { descriptionsList };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .descriptions-demo {
        margin: 1em;
      } 
    </style>`},{title:"\u5782\u76F4\u5217\u8868",desc:"\u8BBE\u7F6E direction \u5C5E\u6027\uFF0C\u53EF\u4FEE\u6539\u5217\u8868\u6392\u5217\u7684\u65B9\u5411 (horizontal \u6C34\u5E73\uFF0C vertical \u5782\u76F4)\u3002",arr:[{label:"\u7528\u6237\u540D",content:"\u4E2D\u56FD\u5FC3"},{label:"\u6027\u522B",content:"\u7537"},{label:"\u51FA\u751F\u5E74\u6708",content:"2000-01-01"},{label:"\u7C4D\u8D2F",content:"\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02"},{label:"\u4F4F\u5740",content:"\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4"}],descriptionsTitle:"\u7528\u6237\u4FE1\u606F",components:[{direction:"vertical"}],template:`    <template>
      <div class='descriptions-demo'>
        <w-descriptions title='\u7528\u6237\u4FE1\u606F' direction='vertical'> 
          <w-descriptions-item v-for='descriptions in descriptionsList' :key='descriptions.label' 
            :label='descriptions.label'>
            {{ descriptions.content }}
          </w-descriptions-item>
        </w-descriptions>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            descriptionsList: [
              { label: '\u7528\u6237\u540D',content: '\u4E2D\u56FD\u5FC3' },
              { label:'\u6027\u522B', content: '\u7537' },
              { label: '\u51FA\u751F\u5E74\u6708', content: '2000-01-01' },
              { label:'\u7C4D\u8D2F', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02' },
              { label: '\u4F4F\u5740', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const descriptionsList = [
            { label: '\u7528\u6237\u540D',content: '\u4E2D\u56FD\u5FC3' },
            { label:'\u6027\u522B', content: '\u7537' },
            { label: '\u51FA\u751F\u5E74\u6708', content: '2000-01-01' },
            { label:'\u7C4D\u8D2F', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02' },
            { label: '\u4F4F\u5740', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4' }
          ];
          return { descriptionsList };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .descriptions-demo {
        margin: 1em;
      } 
    </style>`},{title:"\u5E26\u8FB9\u6846\u7684",desc:"\u8BBE\u7F6E border \u5C5E\u6027\uFF0C\u4FEE\u6539\u5217\u8868\u662F\u5426\u5E26\u6709\u8FB9\u6846\u3002",border:!0,arr:[{label:"\u7528\u6237\u540D",content:"\u4E2D\u56FD\u5FC3"},{label:"\u6027\u522B",content:"\u7537"},{label:"\u51FA\u751F\u5E74\u6708",content:"2000-01-01"},{label:"\u7C4D\u8D2F",content:"\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02"},{label:"\u4F4F\u5740",content:"\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4"}],descriptionsTitle:"\u7528\u6237\u4FE1\u606F",components:[{},{direction:"vertical"}],template:`    <template>
      <div class='descriptions-demo'>
        <w-descriptions v-for='i in 2' :key='i' :direction="i===1?'horizontal':'vertical'"
          border title='\u7528\u6237\u4FE1\u606F'> 
          <w-descriptions-item v-for='descriptions in descriptionsList' :key='descriptions.label' 
            :label='descriptions.label'>
            {{ descriptions.content }}
          </w-descriptions-item>
        </w-descriptions>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            descriptionsList: [
              { label: '\u7528\u6237\u540D',content: '\u4E2D\u56FD\u5FC3' },
              { label:'\u6027\u522B', content: '\u7537' },
              { label: '\u51FA\u751F\u5E74\u6708', content: '2000-01-01' },
              { label:'\u7C4D\u8D2F', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02' },
              { label: '\u4F4F\u5740', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const descriptionsList = [
            { label: '\u7528\u6237\u540D',content: '\u4E2D\u56FD\u5FC3' },
            { label:'\u6027\u522B', content: '\u7537' },
            { label: '\u51FA\u751F\u5E74\u6708', content: '2000-01-01' },
            { label:'\u7C4D\u8D2F', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02' },
            { label: '\u4F4F\u5740', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4' }
          ];
          return { descriptionsList };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .descriptions-demo {
        margin: 1em;
      } 
    </style>`},{title:"Item\u5360\u7684\u5217\u6570",desc:"\u7ED9 Item \u8BBE\u7F6E span \u5C5E\u6027\uFF0C\u53EF\u4EE5\u4FEE\u6539 Item \u5360\u7684\u5217\u6570\uFF0C\u9ED8\u8BA4 1 \u5217\u3002",border:!0,span:1,arr:[{label:"\u7528\u6237\u540D",content:"\u4E2D\u56FD\u5FC3"},{label:"\u6027\u522B",content:"\u7537"},{label:"\u51FA\u751F\u5E74\u6708",content:"2000-01-01"},{label:"\u7C4D\u8D2F",content:"\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02"},{label:"\u4F4F\u5740",content:"\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4"}],descriptionsTitle:"\u7528\u6237\u4FE1\u606F",components:[{},{direction:"vertical"}],template:`    <template>
      <div class='descriptions-demo'>
        <w-alert :visible='alertVisible' :size='15' type='warning'
          title='\u79FB\u52A8\u7AEF\u65F6\u5C5E\u6027 span \u4E0D\u9002\u7528' show-icon @close='alertVisible=false' />
        <div class='option'>
          <span>\u7528\u6237\u540D\u5360\u7684\u5217\u6570\uFF1A</span>
          <w-switch v-model='span' :open-value='2' :off-value='1'
            open-text='2\u5217' off-text='1\u5217' text-inline />
        </div>
        <w-descriptions v-for='i in 2' :key='i' :direction="i===1?'horizontal':'vertical'"
          border title='\u7528\u6237\u4FE1\u606F'> 
          <w-descriptions-item v-for='descriptions in descriptionsList' :key='descriptions.label' 
            :label='descriptions.label' :span="descriptions.label==='\u7528\u6237\u540D'?span:1">
            {{ descriptions.content }}
          </w-descriptions-item>
        </w-descriptions>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            descriptionsList: [
              { label: '\u7528\u6237\u540D', content: '\u4E2D\u56FD\u5FC3' },
              { label: '\u6027\u522B', content: '\u7537' },
              { label: '\u51FA\u751F\u5E74\u6708', content: '2000-01-01' },
              { label: '\u7C4D\u8D2F', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02' },
              { label: '\u4F4F\u5740', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4' }
            ],
            span: 1,
            alertVisible: true
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const descriptionsList = ref([
            { label: '\u7528\u6237\u540D', content: '\u4E2D\u56FD\u5FC3' },
            { label: '\u6027\u522B', content: '\u7537' },
            { label: '\u51FA\u751F\u5E74\u6708', content: '2000-01-01' },
            { label: '\u7C4D\u8D2F', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02' },
            { label: '\u4F4F\u5740', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4' }
          ]),
          span = ref(1),
          alertVisible = ref(true);
          return { descriptionsList, span, alertVisible };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .descriptions-demo {
        margin: 1em;
      } 
    </style>`},{title:"\u4E0D\u540C\u5C3A\u5BF8",desc:"\u8BBE\u7F6E size \u5C5E\u6027\uFF0C\u4FEE\u6539\u5217\u8868\u7684\u5C3A\u5BF8\u3002\u8BBE\u7F6E column \u5C5E\u6027\uFF0C\u4FEE\u6539 1 \u5217\u591A\u5C11\u4E2AItem (\u9ED8\u8BA4\u4F1A\u6839\u636E\u9875\u9762\u7684\u53EF\u89C6\u5BBD\u5EA6\u81EA\u52A8\u53D8\u66F4\u7684\uFF0C\u82E5\u53D6\u6D88\u54CD\u5E94\u5F0F\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u662F\u6BCF\u5217 3 \u4E2AItem)\u3002",border:!0,size:"",arr:[{label:"\u7528\u6237\u540D",content:"\u4E2D\u56FD\u5FC3"},{label:"\u6027\u522B",content:"\u7537"},{label:"\u51FA\u751F\u5E74\u6708",content:"2000-01-01"},{label:"\u7C4D\u8D2F",content:"\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02"},{label:"\u4F4F\u5740",content:"\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4"}],descriptionsTitle:"\u7528\u6237\u4FE1\u606F",components:[{},{direction:"vertical"}],template:`    <template>
      <div class='descriptions-demo'>
        <div class='options'>
          <div class='option'>
            <span>\u5C3A\u5BF8\uFF1A</span>
            <w-radio-group v-model:checked='descriptionsSize'>
              <w-radio value='large'>\u5927\u53F7</w-radio>
              <w-radio value=''>\u9ED8\u8BA4</w-radio>
              <w-radio value='medium'>\u4E2D\u7B49</w-radio>
              <w-radio value='small'>\u5C0F\u578B</w-radio>
              <w-radio value='mini'>\u8FF7\u4F60</w-radio>
            </w-radio-group>
          </div>
          <div class='option'>
            <span>\u6BCF\u884C\u591A\u5C11\u9879Item\uFF1A</span>
            <w-input-number v-model='descriptionsColumn' :max='4' :min='1' size='medium' />
          </div>
          <div class='option'>
            <span>\u8FB9\u6846\uFF1A</span>
            <w-switch v-model='descriptionsBorder' open-text='\u6709' off-text='\u65E0' 
              text-inline />
          </div>
        </div>
        <w-descriptions v-for='i in 2' :key='i' :direction="i===1?'horizontal':'vertical'"
          title='\u7528\u6237\u4FE1\u606F' :border='descriptionsBorder' :size='descriptionsSize'
          :column='descriptionsColumn'> 
          <w-descriptions-item v-for='descriptions in descriptionsList' :key='descriptions.label' 
            :label='descriptions.label'>
            {{ descriptions.content }}
          </w-descriptions-item>
        </w-descriptions>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            descriptionsList: [
              { label: '\u7528\u6237\u540D', content: '\u4E2D\u56FD\u5FC3' },
              { label: '\u6027\u522B', content: '\u7537' },
              { label: '\u51FA\u751F\u5E74\u6708', content: '2000-01-01' },
              { label: '\u7C4D\u8D2F', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02' },
              { label: '\u4F4F\u5740', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4' }
            ],
            descriptionsBorder: true,
            descriptionsSize: '',
            descriptionsColumn: 3
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const descriptionsList = [
            { label: '\u7528\u6237\u540D', content: '\u4E2D\u56FD\u5FC3' },
            { label: '\u6027\u522B', content: '\u7537' },
            { label: '\u51FA\u751F\u5E74\u6708', content: '2000-01-01' },
            { label: '\u7C4D\u8D2F', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02' },
            { label: '\u4F4F\u5740', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4' }
          ],
          descriptionsBorder = ref(true),
          descriptionsSize = ref(''),
          descriptionsColumn = ref(3);
          return { descriptionsList };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .descriptions-demo {
        margin: 1em;
      } 
    </style>`},{title:"\u81EA\u5B9A\u4E49\u6837\u5F0F",desc:`\u8BBE\u7F6E label-class-name \u5C5E\u6027\uFF0C\u4FEE\u6539 Item \u7684 label \u6837\u5F0F (\u4E5F\u53EF\u5355\u72EC\u7ED9\u6307\u4EE4\u7684 Item \u8BBE\u7F6E label-class-name \u5C5E\u6027)\u3002<br>
    \u8BBE\u7F6E content-class-name \u5C5E\u6027\uFF0C\u4FEE\u6539 Item \u7684 content \u6837\u5F0F (\u4E5F\u53EF\u5355\u72EC\u7ED9\u6307\u4EE4\u7684 Item \u8BBE\u7F6E content-class-name \u5C5E\u6027)\u3002`,border:!0,arr:[{label:"\u7528\u6237\u540D",content:"\u4E2D\u56FD\u5FC3",labelClassName:"custom-label-bg-color",contentClassName:"custom-content-bg-color"},{label:"\u6027\u522B",content:"\u7537"},{label:"\u51FA\u751F\u5E74\u6708",content:"2000-01-01"},{label:"\u7C4D\u8D2F",content:"\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02"},{label:"\u4F4F\u5740",content:"\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4"}],descriptionsTitle:"\u7528\u6237\u4FE1\u606F",components:[{},{direction:"vertical"}],template:`    <template>
      <div class='descriptions-demo'>
        <w-descriptions v-for='i in 2' :key='i' :direction="i===1?'horizontal':'vertical'"
          border title='\u7528\u6237\u4FE1\u606F'> 
          <template #extra>
            <w-button type='primary'>\u64CD\u4F5C</w-button>
          </template>
          <w-descriptions-item v-for='descriptions in descriptionsList' :key='descriptions.label' 
            :label='descriptions.label' :label-class-name='descriptions.labelClassName'
            :content-class-name='descriptions.contentClassName'>
            {{ descriptions.content }}
          </w-descriptions-item>
        </w-descriptions>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            descriptionsList: [
              { label: '\u7528\u6237\u540D', content: '\u4E2D\u56FD\u5FC3', labelClassName: 'custom-label-bg-color', contentClassName: 'custom-content-bg-color' },
              { label: '\u6027\u522B', content: '\u7537' },
              { label: '\u51FA\u751F\u5E74\u6708', content: '2000-01-01' },
              { label: '\u7C4D\u8D2F', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02' },
              { label: '\u4F4F\u5740', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const descriptionsList = [
            { label: '\u7528\u6237\u540D', content: '\u4E2D\u56FD\u5FC3', labelClassName: 'custom-label-bg-color', contentClassName: 'custom-content-bg-color' },
            { label: '\u6027\u522B', content: '\u7537' },
            { label: '\u51FA\u751F\u5E74\u6708', content: '2000-01-01' },
            { label: '\u7C4D\u8D2F', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02' },
            { label: '\u4F4F\u5740', content: '\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02\u5FEB\u4E50\u84DD\u5929\u5C0F\u533AA\u680B302\u5BA4' }
          ];
          return { descriptionsList };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .descriptions-demo {
        margin: 1em;
      } 
    </style>`}]),j={attribute:[{name:"title",desc:"\u6807\u9898\uFF0C\u663E\u793A\u5728\u5DE6\u4E0A\u65B9",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"column",desc:"\u4E00\u884C Item \u7684\u6700\u591A\u6570\u91CF (\u6839\u636E\u9875\u9762\u53EF\u89C6\u5BBD\u5EA6\u4F1A\u6539\u6539\u53D8\uFF0C\u82E5\u53D6\u6D88\u54CD\u5E94\u5F0F\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u662F\u6BCF\u884C3\u4E2AItem)",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"border",desc:"\u662F\u5426\u6709\u8FB9\u6846",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"extra",desc:"\u64CD\u4F5C\u533A\uFF0C\u663E\u793A\u5728\u53F3\u4E0A\u65B9",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"direction",desc:"\u6392\u5217\u7684\u65B9\u5411",type:"string",optional:"horizontal\u3001vetical",default:"horizontal"},{name:"colon",desc:"\u6807\u7B7E\u540D\u662F\u5426\u663E\u793A\u5192\u53F7",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"size",desc:"\u5C3A\u5BF8",type:"string",optional:"large\u3001medium\u3001small\u3001mini",default:"\u2014\u2014"},{name:"media",desc:`\u54CD\u5E94\u5F0F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u6BCF\u884C Item \u6570\u91CF\u3002
                      \u4E3A false \u65F6\u53D6\u6D88\u54CD\u5E94\u5F0F\uFF0C
                      \u4E3A\u6570\u7EC4\u5F62\u5F0F\u65F6\u5FC5\u987B\u4ECE\u5927\u5230\u5C0F\uFF0C\u5982 [{1300:3},{900:3},{768:2},{768:2}]\uFF0C
                      \u4E3A\u5BF9\u8C61\u5F62\u5F0F\u65F64\u4E2A\u952E\u540D (lg:\u22651366px,md:\u22651000px,sm:\u2265768px,xs:<768) \u662F\u56FA\u5B9A\u5199\u6CD5\uFF0C\u5217\u6570\u53EF\u81EA\u5B9A\u4E49\u3002`,type:"array\u3001object\u3001boolean",optional:"\u2014\u2014",default:{lg:4,md:3,sm:2,xs:1}},{name:"label-class-name",desc:"\u81EA\u5B9A\u4E49\u6807\u7B7E\u7C7B\u540D",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"content-class-name",desc:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u7C7B\u540D",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"label-style",desc:"\u81EA\u5B9A\u4E49\u6807\u7B7E\u6837\u5F0F",type:"object",optional:"\u2014\u2014",default:{}},{name:"content-style",desc:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u6837\u5F0F",type:"object",optional:"\u2014\u2014",default:{}}],slot:[{name:"\u2014\u2014",desc:"\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"},{name:"title",desc:"\u81EA\u5B9A\u4E49\u6807\u9898\uFF0C\u663E\u793A\u5728\u5217\u8868\u5DE6\u4E0A\u65B9"},{name:"extra",desc:"\u81EA\u5B9A\u4E49\u64CD\u4F5C\u533A\uFF0C\u663E\u793A\u5728\u5217\u8868\u53F3\u4E0A\u65B9"}]},S={attribute:[{name:"label",desc:"\u6807\u7B7E",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"span",desc:"\u5360\u7684\u5217\u6570",type:"number",optional:"\u2014\u2014",default:1},{name:"label-class-name",desc:"\u81EA\u5B9A\u4E49\u6807\u7B7E\u7C7B\u540D",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"content-class-name",desc:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u7C7B\u540D",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"label-style",desc:"\u81EA\u5B9A\u4E49\u6807\u7B7E\u6837\u5F0F",type:"object",optional:"\u2014\u2014",default:{}},{name:"content-style",desc:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u6837\u5F0F",type:"object",optional:"\u2014\u2014",default:{}}],slot:[{name:"\u2014\u2014",desc:"\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"},{name:"label",desc:"\u81EA\u5B9A\u4E49\u6807\u7B7E"}]};const H={class:"descriptions-demo-list"},M={class:"option"},R=d("span",null,"\u7528\u6237\u540D\u5360\u7684\u5217\u6570\uFF1A",-1),W={class:"option"},$=d("span",null,"\u5C3A\u5BF8\uFF1A",-1),q=a("\u5927\u53F7"),G=a("\u9ED8\u8BA4"),J=a("\u4E2D\u7B49"),K=a("\u5C0F\u578B"),O=a("\u8FF7\u4F60"),P={class:"option"},Q=d("span",null,"\u6BCF\u884C\u591A\u5C11\u9879Item\uFF1A",-1),X={class:"option"},Y=d("span",null,"\u8FB9\u6846\uFF1A",-1),Z=a("\u64CD\u4F5C"),ee=a("Descriptions Item"),oe=T({setup(te){const c=m(3);m(3),m("1 \u7528\u6237\u540D"),m(!0),m("");const g=m(!0);return E(()=>{const b=document.documentElement.clientWidth;b>=1200?c.value=4:b>=992?c.value=3:b>=768?c.value=2:b<768&&(c.value=1)}),(b,p)=>{const k=i("w-alert"),C=i("w-switch"),f=i("w-radio"),F=i("w-radio-group"),V=i("w-input-number"),x=i("w-descriptions-item"),A=i("w-descriptions"),I=i("w-button"),N=i("DemoItem"),h=i("TableList");return o(),r("div",H,[(o(!0),r(u,null,w(y(U),(e,_)=>(o(),v(N,{item:e,key:e.title},{default:n(()=>[_===3?(o(),r(u,{key:0},[l(k,{visible:g.value,size:15,type:"warning",title:"\u79FB\u52A8\u7AEF\u65F6\u5C5E\u6027 span \u4E0D\u9002\u7528","show-icon":"",onClose:p[0]||(p[0]=s=>g.value=!1)},null,8,["visible"]),d("div",M,[R,l(C,{modelValue:e.span,"onUpdate:modelValue":s=>e.span=s,"open-value":2,"off-value":1,"open-text":"2\u5217","off-text":"1\u5217","text-inline":""},null,8,["modelValue","onUpdate:modelValue"])])],64)):z("",!0),_===4?(o(),r(u,{key:1},[d("div",W,[$,l(F,{checked:e.size,"onUpdate:checked":s=>e.size=s},{default:n(()=>[l(f,{value:"large"},{default:n(()=>[q]),_:1}),l(f,{value:""},{default:n(()=>[G]),_:1}),l(f,{value:"medium"},{default:n(()=>[J]),_:1}),l(f,{value:"small"},{default:n(()=>[K]),_:1}),l(f,{value:"mini"},{default:n(()=>[O]),_:1})]),_:2},1032,["checked","onUpdate:checked"])]),d("div",P,[Q,l(V,{modelValue:c.value,"onUpdate:modelValue":p[1]||(p[1]=s=>c.value=s),max:4,min:1,size:"medium"},null,8,["modelValue"])]),d("div",X,[Y,l(C,{modelValue:e.border,"onUpdate:modelValue":s=>e.border=s,"open-text":"\u6709","off-text":"\u65E0","text-inline":""},null,8,["modelValue","onUpdate:modelValue"])])],64)):z("",!0),(o(!0),r(u,null,w(e.components,s=>(o(),r("div",{key:s},[_!==4?(o(),v(A,{key:0,title:e.descriptionsTitle,colon:e.colon,size:e.size,media:e.media,direction:s.direction,border:e.border},{default:n(()=>[(o(!0),r(u,null,w(e.arr,(t,B)=>(o(),v(x,{key:t,label:t.label,"label-class-name":t.labelClassName,"content-class-name":t.contentClassName,span:_===3&&t.label==="\u7528\u6237\u540D"?e.span:1},{default:n(()=>[a(L(t.content),1)]),_:2},1032,["label","label-class-name","content-class-name","span"]))),128))]),_:2},1032,["title","colon","size","media","direction","border"])):(o(),v(A,{key:1,title:e.descriptionsTitle,media:e.media,column:c.value,"onUpdate:column":p[2]||(p[2]=t=>c.value=t),size:e.size,direction:s.direction,border:e.border},{extra:n(()=>[l(I,{type:"primary"},{default:n(()=>[Z]),_:1})]),default:n(()=>[(o(!0),r(u,null,w(e.arr,(t,B)=>(o(),v(x,{key:t,label:t.label,"label-class-name":t.labelClassName,"content-class-name":t.contentClassName},{default:n(()=>[a(L(t.content),1)]),_:2},1032,["label","label-class-name","content-class-name"]))),128))]),_:2},1032,["title","media","column","size","direction","border"]))]))),128))]),_:2},1032,["item"]))),128)),l(h,{data:y(j)},null,8,["data"]),l(h,{data:y(S)},{default:n(()=>[ee]),_:1},8,["data"])])}}});export{oe as default};
