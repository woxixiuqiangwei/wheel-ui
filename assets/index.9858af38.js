import{r as $,d as j,m as I,a as p,o as m,g as s,H as f,I as w,c as k,w as e,b as a,k as _,h as b,z as y,R as C,y as l,E as G}from"./vendor.c0366ad2.js";const R=$([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u8BBE\u7F6E value/v-model \u5C5E\u6027\uFF0C\u7ED1\u5B9A\u503C\uFF0C\u7C7B\u578B\u4E3Astring\uFF0C\u5F53\u7ED1\u5B9A\u503C\u4E3A\u7A7A\u548C\u65E0\u6548\u503C\u65F6\uFF0C\u4F1A\u81EA\u52A8\u9009\u4E2D\u7B2C\u4E00\u4E2A\u6807\u7B7E\u3002 \u6807\u7B7E\u9875\u7684\u5BBD\u5EA6\u9ED8\u8BA4\u4E3A100%\uFF0C\u5185\u5BB9\u9AD8\u5EA6\u9ED8\u8BA4\u4E3A80px\u3002",components:[{activeName:"",tab:[{name:"user-management",title:"\u7528\u6237\u7BA1\u7406"},{name:"article-management",title:"\u6587\u7AE0\u7BA1\u7406"},{name:"menu-management",title:"\u83DC\u5355\u7BA1\u7406"},{name:"role-management",title:"\u89D2\u8272\u7BA1\u7406"}]}],template:`    <template>
      <w-tabs v-model="active1">
        <w-tab-item v-for="item in tabList1" v-bind="item" :key="item.name">
          <p v-for="i in 2"> \u7B2C{{ i }}\u884C - {{ item.title }} </p>
        </w-tab-item>
      </w-tabs>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            active1: '',
            tabList1: [
              { name: 'user-management', title: '\u7528\u6237\u7BA1\u7406' },
              { name: 'article-management', title: '\u6587\u7AE0\u7BA1\u7406' },
              { name: 'menu-management', title: '\u83DC\u5355\u7BA1\u7406' },
              { name: 'role-management', title: '\u89D2\u8272\u7BA1\u7406' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const active1 = ref('');
          const tabList1: [
            { name: 'user-management', title: '\u7528\u6237\u7BA1\u7406' },
            { name: 'article-management', title: '\u6587\u7AE0\u7BA1\u7406' },
            { name: 'menu-management', title: '\u83DC\u5355\u7BA1\u7406' },
            { name: 'role-management', title: '\u89D2\u8272\u7BA1\u7406' }
          ]
          return { active1, tabList1 };
        }
      })
    <\/script>`},{title:"\u9009\u9879\u5361\u6837\u5F0F",desc:"\u8BBE\u7F6E type \u5C5E\u6027\uFF0C\u4FEE\u6539\u6807\u7B7E\u9875\u7684\u7C7B\u578B\u3002",type:"",components:[{activeName:"html",tab:[{name:"html",title:"HTML"},{name:"css",title:"CSS"},{name:"javascript",title:"JavaScript"}]}],template:`    <template>
      <div class="options">
        <span>\u6807\u7B7E\u9875\u6837\u5F0F\uFF1A</span>
        <w-radio-group v-model:checked="tabsTyp2">
          <w-radio value="">\u9ED8\u8BA4\u6837\u5F0F</w-radio>
          <w-radio value="card">\u8FB9\u6846\u5361\u7247</w-radio>
          <w-radio value="border-card">\u80CC\u666F\u8272\u5361\u7247</w-radio>
        </w-radio-group>
      </div>
      <div>
        <w-tabs v-model="active2">
          <w-tab-item v-for="item in tabList2" v-bind="item" :key="item.name" :type="tabsTyp2">
            <p v-for="i in 2"> \u7B2C{{ i }}\u884C - {{ item.title }} </p>
          </w-tab-item>
        </w-tabs>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            active2: 'html',
            tabType2: '',
            tabList2: [
              { name: 'html', title: 'HTML' },
              { name: 'css', title: 'CSS' },
              { name: 'javascript', title: 'JavaScript' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const active2 = ref('html'),
                tabType2 = ref(''),
                tabList2 = [
                  { name: 'html', title: 'HTML' },
                  { name: 'css', title: 'CSS' },
                  { name: 'javascript', title: 'JavaScript' }
                ];
          return { active2, tabType2, tabList2 };
        }
      })
    <\/script>`},{title:"\u7981\u7528\u72B6\u6001",desc:"\u7ED9 Tabs \u7EC4\u4EF6\u8BBE\u7F6E disabled \u5C5E\u6027\u4F1A\u7981\u7528\u6240\u6709\u6807\u7B7E\u9875\u3002\u4E5F\u53EF\u4EE5\u7ED9\u6307\u5B9A\u7684 Item \u8BBE\u7F6E disabled \u5C5E\u6027\u3002",type:"",disabled:!1,components:[{activeName:"domestic",tab:[{name:"domestic",title:"\u56FD \u5185"},{name:"international",title:"\u56FD \u9645"},{name:"internet",title:"\u4E92 \u8054 \u7F51",disabled:!0},{name:"sport",title:"\u4F53 \u80B2"}]}],template:`    <template>
      <div class='options'>
        <div>
          <span>\u6807\u7B7E\u9875\u6837\u5F0F\uFF1A</span>
          <w-radio-group v-model:checked='tabType'>
            <w-radio value=''>\u9ED8\u8BA4\u6837\u5F0F</w-radio>
            <w-radio value='card'>\u8FB9\u6846\u5361\u7247</w-radio>
            <w-radio value='border-card'>\u80CC\u666F\u8272\u5361\u7247</w-radio>
          </w-radio-group>
        </div>
        <div>
          <span>\u5168\u90E8\u7981\u7528\uFF1A</span>
          <w-switch v-model='disabled' open-text='\u662F' off-text='\u5426' />
        </div>
      </div>
      <div>
        <w-tabs v-model="active3">
          <w-tab-item v-for="item in tabList3" v-bind="item" :key="item.name" :type="tabsTyp3">
            <p v-for="i in 2"> \u7B2C{{ i }}\u884C - {{ item.title }} </p>
          </w-tab-item>
        </w-tabs>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            active3: 'domestic',
            tabType3: '',
            disabled3: false,
            tabList3: [
              { name: 'domestic', title: '\u56FD \u5185' },
              { name: 'international', title: '\u56FD \u9645' },
              { name: 'internet', title: '\u4E92 \u8054 \u7F51', disabled: true },
              { name: 'sport', title: '\u4F53 \u80B2' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const active3 = ref('domestic'),
                tabType3 = ref(''),
                disabled3 = ref(false),
                tabList3 = ref([
                  { name: 'domestic', title: '\u56FD \u5185' },
                  { name: 'international', title: '\u56FD \u9645' },
                  { name: 'internet', title: '\u4E92 \u8054 \u7F51', disabled: true },
                  { name: 'sport', title: '\u4F53 \u80B2' }
                ]);
          return { active3, tabType3, disabled3, tabList3 };
        }
      })
    <\/script>`},{title:"\u5207\u6362\u52A8\u753B",desc:"\u8BBE\u7F6E animate \u5C5E\u6027\uFF0C\u4FEE\u6539\u5207\u6362\u6807\u7B7E\u9875\u65F6\u7684\u52A8\u753B\u3002 (\u9ED8\u8BA4\u6ED1\u52A8\u6548\u679C)",animate:"slide",components:[{activeName:"ufc",tab:[{name:"ufc",title:"UFC"},{name:"nba",title:"NBA"},{name:"boxing",title:"Boxing"}]}],template:`    <template>
      <div class='options'>
        <div>
          <span>\u5207\u6362\u52A8\u753B\uFF1A</span>
          <w-radio-group v-model:checked="tabAnimate4">
            <w-radio value="slide">\u6ED1\u52A8</w-radio>
            <w-radio value="fade">\u6DE1\u5165\u6DE1\u51FA</w-radio>
            <w-radio value="">\u65E0</w-radio>
          </w-radio-group>
        </div>
      </div>
      <div>
        <w-tabs v-model="active4">
          <w-tab-item v-for="item in tabList4" v-bind="item"
            :key="item.name" :animate="tabAnimate4">
            <p v-for="i in 2"> \u7B2C{{ i }}\u884C - {{ item.title }} </p>
          </w-tab-item>
        </w-tabs>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            active4: 'ufc',
            tabAnimate4: 'slide',
            tabList4: [
              { name: 'ufc', title: 'UFC' },
              { name: 'nba', title: 'NBA' },
              { name: 'boxing', title: 'Boxing' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const active4 = ref('ufc'),
                tabAnimate4 = ref('slide'),
                tabList4 = ref([
                  { name: 'ufc', title: 'UFC' },
                  { name: 'nba', title: 'NBA' },
                  { name: 'boxing', title: 'Boxing' }
                ]);
          return { active4, tabAnimate4, tabList4 };
        }
      })
    <\/script>`},{title:"\u4F4D\u7F6E",desc:"\u8BBE\u7F6E tab-position \u5C5E\u6027\uFF0C\u4FEE\u6539\u6807\u7B7E\u9875\u5BFC\u822A\u6761\u7684\u4F4D\u7F6E\u3002 (\u9ED8\u8BA4\u5728top)",position:"top",components:[{activeName:"dynamic",tab:[{name:"dynamic",title:"\u884C\u4E1A\u52A8\u6001"},{name:"activity",title:"\u70ED\u95E8\u6D3B\u52A8"},{name:"information",title:"\u4FE1\u606F\u4E2D\u5FC3"},{name:"my-collection",title:"\u6211\u7684\u6536\u85CF"}]}],template:`    <template>
      <div class='options'>
        <div>
          <span>\u83DC\u5355\u4F4D\u7F6E\uFF1A</span>
          <w-radio-group v-model:checked="tabPosition5">
            <w-radio value="top">\u4E0A</w-radio>
            <w-radio value="bottom">\u4E0B</w-radio>
            <w-radio value="left">\u5DE6</w-radio>
            <w-radio value="right">\u53F3</w-radio>
          </w-radio-group>
        </div>
      </div>
      <div>
        <w-tabs v-model="active5">
          <w-tab-item v-for="item in tabList5" v-bind="item"
            :key="item.name" :tab-position="tabPosition5">
            <p v-for="i in 2"> \u7B2C{{ i }}\u884C - {{ item.title }} </p>
          </w-tab-item>
        </w-tabs>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            active5: 'dynamic',
            tabPosition5: 'top',
            tabList5: [
              { name: 'dynamic', title: '\u884C\u4E1A\u52A8\u6001' },
              { name: 'activity', title: '\u70ED\u95E8\u6D3B\u52A8' },
              { name: 'information', title: '\u4FE1\u606F\u4E2D\u5FC3' },
              { name: 'my-collection', title: '\u6211\u7684\u6536\u85CF' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const active5 = ref('dynamic'),
                tabPosition5 = ref('top'),
                tabList5 = ref([
                  { name: 'dynamic', title: '\u884C\u4E1A\u52A8\u6001' },
                  { name: 'activity', title: '\u70ED\u95E8\u6D3B\u52A8' },
                  { name: 'information', title: '\u4FE1\u606F\u4E2D\u5FC3' },
                  { name: 'my-collection', title: '\u6211\u7684\u6536\u85CF' }
                ]);
          return { active5, tabPosition5, tabList5 };
        }
      })
    <\/script>`},{title:"\u589E\u52A0\u56FE\u6807",desc:"Item \u8BBE\u7F6E icon \u5C5E\u6027\uFF0C\u7ED9\u6807\u7B7E\u9875\u5BFC\u822A\u589E\u52A0\u56FE\u6807",position:"top",components:[{activeName:"google",tab:[{name:"google",title:"Google",icon:"google"},{name:"baidu",title:"Baidu",icon:"baidu"},{name:"ie",title:"IE",icon:"ie"}]}],template:`    <template>
      <div class='options'>
        <div>
          <span>\u83DC\u5355\u4F4D\u7F6E\uFF1A</span>
          <w-radio-group v-model:checked='tabPosition6'>
            <w-radio value='top'>\u4E0A</w-radio>
            <w-radio value='bottom'>\u4E0B</w-radio>
            <w-radio value='left'>\u5DE6</w-radio>
            <w-radio value='right'>\u53F3</w-radio>
          </w-radio-group>
        </div>
      </div>
      <div>
        <w-tabs v-model="active6">
          <w-tab-item v-for="item in tabList6" v-bind="item" :key="item.name"
            :tab-position="tabPosition6">
            <p v-for="i in 2"> \u7B2C{{ i }}\u884C - {{ item.title }} </p>
          </w-tab-item>
        </w-tabs>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            active6: 'google',
            tabPosition6: 'top',
            tabList6: [
              { name: 'google', title: 'Google', icon: 'google' },
              { name: 'baidu', title: 'Baidu', icon: 'baidu' },
              { name: 'ie', title: 'IE', icon: 'ie' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const active6 = ref('google'),
                tabPosition6 = ref('top'),
                tabList6 = ref([
                  { name: 'google', title: 'Google', icon: 'google' },
                  { name: 'baidu', title: 'Baidu', icon: 'baidu' },
                  { name: 'ie', title: 'IE', icon: 'ie' }
                ]);
          return { active6, tabPosition6, tabList6 };
        }
      })
    <\/script>`},{title:"\u53F3\u952E\u83DC\u5355",desc:"\u8BBE\u7F6E context-menu \u5C5E\u6027\uFF0C\u4FEE\u6539\u6807\u7B7E\u9875\u5BFC\u822A\u6761\u662F\u5426\u652F\u6301\u53F3\u952E\u83DC\u5355\u3002 \u4E5F\u53EF\u7ED9\u6307\u5B9A Item \u8BBE\u7F6E context-menu \u5C5E\u6027\u3002",contextMenu:!0,position:"top",components:[{activeName:"entertainment",tab:[{name:"entertainment",title:"\u5A31\u4E50"},{name:"delicious-food",title:"\u7F8E\u98DF"},{name:"economics",title:"\u7ECF\u6D4E"}],closable:!0}],template:`    <template>
      <div class='options'>
        <div>
          <span>\u83DC\u5355\u4F4D\u7F6E\uFF1A</span>
          <w-radio-group v-model:checked='tabPosition7'>
            <w-radio value='top'>\u4E0A</w-radio>
            <w-radio value='bottom'>\u4E0B</w-radio>
            <w-radio value='left'>\u5DE6</w-radio>
            <w-radio value='right'>\u53F3</w-radio>
          </w-radio-group>
        </div>
      </div>
      <div>
        <w-tabs v-model='active7' :tab-position='tabPosition7' 
          :context-menu='true' :closable="true" 
          @tab-remove='removeTab($event,tabList7)' @context-menu='contextMenu'>
          <w-tab-item v-for='item in tabList7' v-bind="item" :key='item.name'>
            <p v-for="i in 2"> \u7B2C{{ i }}\u884C - {{ item.title }} </p>
          </w-tab-item>
          <template #contextmenu>
            <w-dropdown-item @click="openMenu('edit')">
              \u7F16\u8F91
            </w-dropdown-item>
            <w-dropdown-item @click="openMenu('delete')">
              \u5220\u9664
            </w-dropdown-item>
          </template>
        </w-tabs>
      </div>
    </template>
    <script>`,optionsApi:`
      import { h, getCurrentInstance } from 'vue';
      export default {
        data() {
          return {
            tabList7: [
              { name: 'entertainment', title: '\u5A31\u4E50' },
              { name: 'delicious-food', title: '\u7F8E\u98DF' },
              { name: 'economics', title: '\u7ECF\u6D4E' },
              { name: 'science', title: '\u79D1\u5B66' }
            ],
            active7: 'entertainment',
            tabPosition7: 'top',
            contextData: {},
            instance: getCurrentInstance()
          }
        },
        methods: {
          removeTab(name, arr) {
            arr.splice(arr.findIndex(item => item.name === name), 1);
          },
          contextMenu() {
            this.contextData = item;
          },
          openMenu(type) {
            const content = '\u70B9\u51FB\u4E86' + contextData.title + ' \u7684' + (type === 'edit' ? '\u7F16\u8F91' : '\u5220\u9664') + '\u83DC\u5355';
            instance.proxy.$openDialog({
              visible: true,
              title: h('p', null, { default: () => content }),
              content: (type === 'edit' ? '\u7F16\u8F91' : '\u5220\u9664')
            });
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent, h, getCurrentInstance } from 'vue';
      export default defineComponent({
        setup() {
          let contextData = {};
          const instance = getCurrentInstance();
                tabList7= [
                  { name: 'entertainment', title: '\u5A31\u4E50' },
                  { name: 'delicious-food', title: '\u7F8E\u98DF' },
                  { name: 'economics', title: '\u7ECF\u6D4E' },
                  { name: 'science', title: '\u79D1\u5B66' }   
                ];
                active7 = ref('entertainment'),
                tabPosition7 = ref('top'),
                removeTab = (name, arr) => {
                  arr.splice(arr.findIndex((item) => item.name === name), 1);
                },
                contextMenu = () => contextData = item,
                openMenu = (type) => {
                  const content='\u70B9\u51FB\u4E86' + contextData.title + ' \u7684' + (type === 'edit' ? '\u7F16\u8F91' : '\u5220\u9664') + '\u83DC\u5355';
                  instance.proxy.$openDialog({
                    visible: true,
                    title: h('p', null, { default: () => content }),
                    content: (type === 'edit' ? '\u7F16\u8F91' : '\u5220\u9664')
                  });
                };
          return { tabList7, active7, tabPosition7, removeTab, contextMenu, openMenu };
        }
      })
    <\/script>`},{title:"\u52A8\u6001\u589E\u51CF\u6807\u7B7E\u9875",editable:!0,position:"top",type:"",desc:"\u8BBE\u7F6E addable \u5C5E\u6027\u53EF\u4EE5\u589E\u52A0\u6807\u7B7E\u9875\u3002 \u8BBE\u7F6E closable \u5C5E\u6027\u53EF\u4EE5\u5220\u9664\u6807\u7B7E\u9875\uFF0C\u4E5F\u53EF\u7ED9\u6307\u5B9A Item \u8BBE\u7F6E closable \u5C5E\u6027\u3002",components:[{activeName:"documentary",tab:[{name:"documentary",title:"\u7EAA\u5F55\u7247"},{name:"vlog",title:"VLOG"},{name:"live-broadcast",title:"\u76F4\u64AD"},{name:"variety",title:"\u7EFC\u827A"}]}],template:`    <template>
      <div class='options'>
        <div>
          <span>\u6807\u7B7E\u9875\u6837\u5F0F\uFF1A</span>
          <w-radio-group v-model:checked="tabType8">
            <w-radio value="">\u9ED8\u8BA4</w-radio>
            <w-radio value="card">\u8FB9\u6846</w-radio>
            <w-radio value="border-card">\u6709\u80CC\u666F\u8272</w-radio>
          </w-radio-group>
        </div>
        <div>
          <span>\u83DC\u5355\u4F4D\u7F6E\uFF1A</span>
          <w-radio-group v-model:checked='tabPosition8'>
            <w-radio value='top'>\u4E0A</w-radio>
            <w-radio value='bottom'>\u4E0B</w-radio>
            <w-radio value='left'>\u5DE6</w-radio>
            <w-radio value='right'>\u53F3</w-radio>
          </w-radio-group>
        </div>
      </div>
      <div>
        <w-tabs v-model='active8' :tab-position='tabPosition8'
          :editable='true' @tab-edit='edit($event)'>
          <w-tab-item v-for='item in tabList8' :key='item.name'
            :name='item.name' :title='item.title'>
            <p v-for="i in 2"> \u7B2C{{ i }}\u884C - {{ item.title }} </p>
          </w-tab-item>
        </w-tabs>
      </div> 
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            active8: 'documentary',
            tabList8: [
              { name: 'documentary', title: '\u7EAA\u5F55\u7247' },
              { name: 'vlog',title: 'VLOG' },
              { name: 'live-broadcast', title: '\u76F4\u64AD' },
              { name: 'variety', title: '\u7EFC\u827A' }
            ],
            tabPosition8: 'top',
            tabType8: '',
            index: 1
          }
        },
        methods: {
          edit(obj) {
            const { action, name } = obj;
            if (action === 'add') {
              const newTabName = new Date().getTime().toString(),
                    len = this.tabList8.length + 1;
              this.tabList8.push({
                title: '\u7B2C' + index + '\u4E2ANewTab',
                name: newTabName,
                content: '\u7B2C' + index + '\u4E2ANewTab' + newTabName,
                index: len-1
              });
              index++;
            }
            else this.tabList8.splice(this.tabList8.findIndex(item => item.name === name), 1);
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const active8 = ref('a-1'),
                tabList8=reactive([
                  { name: 'documentary', title: '\u7EAA\u5F55\u7247' },
                  { name: 'vlog',title: 'VLOG' },
                  { name: 'live-broadcast', title: '\u76F4\u64AD' },
                  { name: 'variety', title: '\u7EFC\u827A' }
                ]),
                tabType8 = ref(''),
                tabPosition8 = ref('top'),
                index=1,
                edit = (obj) => {
                  const { action, name } = obj;
                  if(action === 'add') {
                    const newTabName = new Date().getTime().toString(),
                          len = tabList8.length + 1;
                    tabList8.push({
                      title: '\u7B2C' + index + '\u4E2ANewTab',
                      name: newTabName,
                      content: '\u7B2C' + index + '\u4E2ANewTab' + newTabName,
                      index: len-1
                    });
                    index++;
                  }
                  else tabList8.splice(tabList8.findIndex(item => item.name === name), 1);
                };
          return { active8, tabList8, tabType8, tabPosition8, edit };
        }
      })
    <\/script>`},{title:"\u81EA\u5B9A\u4E49\u589E\u52A0\u6807\u7B7E\u9875",desc:"\u53EF\u4EE5\u81EA\u5B9A\u4E49\u589E\u52A0\u6807\u7B7E\u9875\u89E6\u53D1\u5668\uFF0C\u5982\u6309\u94AE\uFF0C\u56FE\u6807\uFF0C\u56FE\u7247\u7B49\u3002",customAdd:!0,components:[{activeName:"user-management",closable:!0,tab:[{name:"user-management",title:"\u7528\u6237\u7BA1\u7406"},{name:"article-management",title:"\u6587\u7AE0\u7BA1\u7406"},{name:"menu-management",title:"\u83DC\u5355\u7BA1\u7406"},{name:"role-management",title:"\u89D2\u8272\u7BA1\u7406"}]}],template:`    <template>
      <div style='margin-bottom: 1em;'>
        <w-button type='primary' plain @click='addTab'>
          \u6DFB\u52A0Tab
        </w-button>
      </div>
      <div>
        <w-tabs v-model='active9' :closable='true' @tab-remove='removeTab'>
          <w-tab-item v-for='item in tabList9' :key='item.name' :name='item.name'
            :title='item.title'>
            <p v-for='i in 2'>
              \u7B2C{{ i }}\u884C - {{ item.title }}
            </p>
          </w-tab-item>
        </w-tabs>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            active9: 'user-management',
            tabList9: [
              { name: 'user-management', title: '\u7528\u6237\u7BA1\u7406' },
              { name: 'article-management', title: '\u6587\u7AE0\u7BA1\u7406' },
              { name: 'menu-management', title: '\u83DC\u5355\u7BA1\u7406' },
              { name: 'role-management', title: '\u89D2\u8272\u7BA1\u7406' }
            ],
            index: 1
          }
        },
        methods: {
          addTab() {
            const newTabName = new Date().getTime().toString(),
                  len = this.tabList9.length+1;
              this.tabList9.push({
                title: '\u7B2C' + index  +'\u4E2ANewTab',
                name: newTabName,
                content: '\u7B2C' + index + '\u4E2ANewTab' + newTabName,
                index: len-1
              });
            index++;
          },
          removeTab(targetName) {
            this.tabList9.splice(this.tabList9.findIndex(item => item.nam e=== targetName), 1);
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          let index = 1;
          const active9 = ref ('user-management'),
                tabList9 = reactive([
                  { name: 'user-management', title: '\u7528\u6237\u7BA1\u7406' },
                  { name: 'article-management', title: '\u6587\u7AE0\u7BA1\u7406' },
                  { name: 'menu-management', title: '\u83DC\u5355\u7BA1\u7406' },
                  { name: 'role-management', title: '\u89D2\u8272\u7BA1\u7406' }
                 ]);
                addTab = () => {
                  const newTabName = new Date().getTime().toString();
                        len = tabList9.length+1;
                  tabList9.push({
                    title: '\u7B2C' + index + '\u4E2ANewTab',
                    name: newTabName,
                    content: '\u7B2C'+ index + '\u4E2ANewTab' + newTabName,
                    index: len-1
                  });
                  index++;
                },
                removeTab = (targetName) => {
                  tabList9.splice(tabList9.findIndex(item => item.name === targetName), 1);
                };
          return { active9, tabList9, addTab, removeTab };
        }
      })
    <\/script>`}]),H={attribute:[{name:"value / v-model",desc:"\u7ED1\u5B9A\u503C\uFF0C\u5F53\u524D\u9009\u4E2D\u7684\u6807\u7B7E\u9875\u7684name",type:"string",optional:"\u2014\u2014",default:"\u7B2C\u4E00\u4E2A\u6807\u7B7E\u9875\u7684 name"},{name:"type",desc:"\u98CE\u683C\u7C7B\u578B",type:"string",optional:"card\u3001border-card",default:"\u2014\u2014"},{name:"closable",desc:"\u6807\u7B7E\u9875\u662F\u5426\u53EF\u5173\u95ED",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"addable",desc:"\u6807\u7B7E\u9875\u662F\u5426\u53EF\u589E\u52A0",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"editable",desc:"\u6807\u7B7E\u9875\u662F\u5426\u540C\u65F6\u53EF\u589E\u52A0\u548C\u5173\u95ED",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"tab-position",desc:"\u6807\u7B7E\u9875\u5BFC\u822A\u6240\u5728\u7684\u4F4D\u7F6E",type:"string",optional:"top\u3001bottom\u3001left\u3001right",default:"top"},{name:"animate",desc:"\u5207\u6362\u6807\u7B7E\u9875\u65F6\u7684\u52A8\u753B\u6548\u679C",type:"string",optional:"slide\u3001fade",default:"slide"},{name:"disabled",desc:"\u662F\u5426\u7981\u7528\u6240\u6709\u7684\u6807\u7B7E\u9875",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"context-menu",desc:"\u662F\u5426\u652F\u6301\u53F3\u952E\u83DC\u5355",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"before-leave",desc:"\u5207\u6362\u6807\u7B7E\u9875\u524D\u7684\u56DE\u8C03\uFF0C\u82E5\u8FD4\u56DE false \u5219\u963B\u6B62\u5207\u6362\u3002",type:"function(name,oldName)",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"before-remove",desc:"\u5220\u9664\u6807\u7B7E\u9875\u524D\u7684\u56DE\u8C03\uFF0C\u82E5\u8FD4\u56DE false \u5219\u963B\u6B62\u5220\u9664\u3002",type:"function(name)",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"scroll-to-tab",desc:"\u589E\u52A0\u6807\u7B7E\u9875\u65F6\uFF0C\u6EDA\u52A8\u6761\u662F\u5426\u5207\u6362\u5230\u65B0\u589E\u7684\u6807\u7B7E\u9875(\u5305\u62EC\u66F4\u65B0\u7ED1\u5B9A\u503C)\u3002",type:"boolean",optional:"\u2014\u2014",default:!0}],slot:[{name:"\u2014\u2014",desc:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{name:"contextmenu",desc:"\u81EA\u5B9A\u4E49\u53F3\u952E\u5185\u5BB9"}],event:[{name:"change",desc:"\u6807\u7B7E\u503C\u6539\u53D8\u540E\u89E6\u53D1",callbackParams:"\u88AB\u9009\u4E2D\u7684 tab \u5B9E\u4F8B"},{name:"tab-remove",desc:"\u5220\u9664 tab \u540E\u89E6\u53D1",callbackParams:"\u88AB\u5220\u9664\u7684\u6807\u7B7E\u7684 name"},{name:"tab-add",desc:"\u70B9\u51FB\u65B0\u589E\u6309\u94AE\u540E\u89E6\u53D1",callbackParams:"\u2014\u2014"},{name:"edit",desc:"\u70B9\u51FB\u65B0\u589E\u6309\u94AE\u6216\u5220\u9664 tab \u540E\u89E6\u53D1",callbackParams:"(targetName, action)"},{name:"context-menu",desc:"\u53F3\u952E\u6807\u7B7E\u9875\u5BFC\u822A\u65F6\u89E6\u53D1",callbackParams:"\u53F3\u952E\u9009\u4E2D\u7684 tab \u5B9E\u4F8B"}]},J={attribute:[{name:"title",desc:"\u6807\u7B7E\u9875\u6807\u9898",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"name",desc:"\u4E0E\u6807\u7B7E\u9875\u7ED1\u5B9A\u503C value \u5BF9\u5E94\u7684\u6807\u8BC6\u7B26\uFF0C\u8868\u793A\u6807\u7B7E\u9875\u522B\u540D",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"disabled",desc:"\u662F\u5426\u7981\u7528",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"closable",desc:"\u6807\u7B7E\u662F\u5426\u53EF\u5173\u95ED",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"icon",desc:"\u6807\u7B7E\u9875\u5BFC\u822A\u589E\u52A0\u56FE\u6807",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"context-menu",desc:"\u662F\u5426\u652F\u6301\u53F3\u952E\u83DC\u5355",type:"boolean",optional:"\u2014\u2014",default:!1}]};const O={class:"tabs-demo-list"},z={key:0,class:"options"},q={key:0},K=b("span",null,"\u6807\u7B7E\u9875\u6837\u5F0F\uFF1A",-1),Q=l("\u9ED8\u8BA4"),W=l("\u8FB9\u6846"),X=l("\u6709\u80CC\u666F\u8272"),Y={key:1},Z=b("span",null,"\u5168\u90E8\u7981\u7528\uFF1A",-1),ee={key:2},te=b("span",null,"\u83DC\u5355\u4F4D\u7F6E\uFF1A",-1),ae=l("\u4E0A"),ie=l("\u4E0B"),ne=l("\u5DE6"),oe=l("\u53F3"),me={key:3},le=b("span",null,"\u5207\u6362\u52A8\u753B\uFF1A",-1),de=l("\u6ED1\u52A8"),se=l("\u6DE1\u5165\u6DE1\u51FA"),re=l("\u65E0"),ce=l(" \u6DFB\u52A0Tab "),pe=l(" \u7F16\u8F91 "),ue=l(" \u5220\u9664 "),be=l("Tab Item"),ge=j({setup(ve){let x=1;const N=(r,c)=>{c.splice(c.findIndex(i=>i.name===r),1)},A=I(null);I();const F=(r,c)=>{let{tab:i}=c,{name:u,action:h}=r;if(h=="add"){const g=new Date().getTime().toString(),T=i.length+1;i.push({title:"\u7B2C"+x+"\u4E2A NewTab",name:g,content:"\u7B2C"+x+"\u4E2A NewTab"+g,index:T-1}),x++}else N(u,i)},E=r=>{},v={},M=({name:r,title:c})=>{v.name=r,v.title=c},S=G(),D=(r,c)=>{const i="\u70B9\u51FB\u4E86 "+v.title+" \u7684"+(r==="edit"?"\u7F16\u8F91":"\u5220\u9664");r==="delete"?confirm(`\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417${v.title}\uFF1F`)&&A.value.tabRemove(v):S.proxy.$message.info(i)};return(r,c)=>{const i=p("w-radio"),u=p("w-radio-group"),h=p("w-switch"),g=p("w-button"),T=p("w-tab-item"),B=p("w-dropdown-item"),V=p("w-tabs"),U=p("DemoItem"),P=p("TableList");return m(),s("div",O,[(m(!0),s(f,null,w(C(R),(n,d)=>(m(),k(U,{item:n,key:n.title},{default:e(()=>[d>=1&&!n.customAdd?(m(),s("div",z,[d===1||d===2||d===7?(m(),s("div",q,[K,a(u,{checked:n.type,"onUpdate:checked":t=>n.type=t},{default:e(()=>[a(i,{value:""},{default:e(()=>[Q]),_:1}),a(i,{value:"card"},{default:e(()=>[W]),_:1}),a(i,{value:"border-card"},{default:e(()=>[X]),_:1})]),_:2},1032,["checked","onUpdate:checked"])])):_("",!0),d===2?(m(),s("div",Y,[Z,a(h,{modelValue:n.disabled,"onUpdate:modelValue":t=>n.disabled=t,"open-text":"\u662F","off-text":"\u5426"},null,8,["modelValue","onUpdate:modelValue"])])):d===4||d===5||d===6||d===7?(m(),s("div",ee,[te,a(u,{checked:n.position,"onUpdate:checked":t=>n.position=t},{default:e(()=>[a(i,{value:"top"},{default:e(()=>[ae]),_:1}),a(i,{value:"bottom"},{default:e(()=>[ie]),_:1}),a(i,{value:"left"},{default:e(()=>[ne]),_:1}),a(i,{value:"right"},{default:e(()=>[oe]),_:1})]),_:2},1032,["checked","onUpdate:checked"])])):d===3?(m(),s("div",me,[le,a(u,{checked:n.animate,"onUpdate:checked":t=>n.animate=t},{default:e(()=>[a(i,{value:"slide"},{default:e(()=>[de]),_:1}),a(i,{value:"fade"},{default:e(()=>[se]),_:1}),a(i,{value:""},{default:e(()=>[re]),_:1})]),_:2},1032,["checked","onUpdate:checked"])])):_("",!0)])):_("",!0),(m(!0),s(f,null,w(n.components,(t,fe)=>(m(),s("div",{key:t},[d===8?(m(),k(g,{key:0,type:"primary",plain:"",onClick:o=>F({action:"add"},t)},{default:e(()=>[ce]),_:2},1032,["onClick"])):_("",!0),a(V,{modelValue:t.activeName,"onUpdate:modelValue":o=>t.activeName=o,type:n.type||t.type,disabled:n.disabled,closable:t.closable,"context-menu":n.contextMenu,editable:n.editable,animate:n.animate,"tab-position":t.position||n.position,addable:t.addable,ref_for:!0,ref:o=>d===6&&(A.value=o),onTabEdit:o=>F(o,t),onTabRemove:o=>N(o,t.tab),onChange:E,onContextMenu:M},{contextmenu:e(()=>[a(B,{onClick:c[0]||(c[0]=o=>D("edit"))},{default:e(()=>[pe]),_:1}),a(B,{onClick:o=>D("delete",t.tab)},{default:e(()=>[ue]),_:2},1032,["onClick"])]),default:e(()=>[(m(!0),s(f,null,w(t.tab,o=>(m(),k(T,{key:o,title:o.title,name:o.name,disabled:o.disabled,icon:o.icon},{default:e(()=>[d===0?(m(),s(f,{key:0},w(2,L=>b("p",null,"\u7B2C"+y(L)+"\u884C - "+y(o.title),1)),64)):(m(),s(f,{key:1},w(2,L=>b("p",null,"\u7B2C"+y(L)+"\u884C - "+y(o.title),1)),64))]),_:2},1032,["title","name","disabled","icon"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","type","disabled","closable","context-menu","editable","animate","tab-position","addable","onTabEdit","onTabRemove"])]))),128))]),_:2},1032,["item"]))),128)),a(P,{data:C(H)},null,8,["data"]),a(P,{data:C(J)},{default:e(()=>[be]),_:1},8,["data"])])}}});export{ge as default};
