import{r as _,d as $,a as p,o as n,g as o,H as f,I as y,c as A,w as C,b as w,y as N,z as T,R as m,B as l,E as V}from"./vendor.c0366ad2.js";import{I as B}from"./index.c63351a7.js";const E=_([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u4ECE\u9875\u9762\u9876\u90E8\u51FA\u73B0\uFF0C\u9ED8\u8BA42\u79D2\u540E\u4F1A\u81EA\u52A8\u6D88\u5931\u3002",components:[{title:"\u6D88\u606F\u63D0\u793A",type:"info"},{title:"\u6210\u529F\u63D0\u793A",type:"success"},{title:"\u8B66\u544A\u63D0\u793A",type:"warning"},{title:"\u9519\u8BEF\u63D0\u793A",type:"error"}],template:`    <template>
      <div class='message-demo'>
        <w-button v-for='item in demo' @click='openMessage(item.type, item.title)'>
          {{item.title}}
        </w-button>
      </div>
    </template>
    <script>`,optionsApi:`
      import { getCurrentInstance } from 'vue';
      export default {
        data() {
          return {
            demo: [
              { title: '\u6D88\u606F\u63D0\u793A', type: 'info'},
              { title: '\u6210\u529F\u63D0\u793A', type: 'success'},
              { title: '\u8B66\u544A\u63D0\u793A', type: 'warning'},
              { title: '\u9519\u8BEF\u63D0\u793A', type: 'error'}
            ],
            instance: getCurrentInstance()
          }
        },
        methods: {
          openMessage(type, content) {
            this.instance.proxy.$message({
              type, content
            })
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent, getCurrentInstance } from 'vue';
      export default defineComponent({
        setup() {
          const demo = ref([
                  { title:'\u6D88\u606F\u63D0\u793A', type:'info' },
                  { title:'\u6210\u529F\u63D0\u793A', type:'success' },
                  { title:'\u8B66\u544A\u63D0\u793A', type:'warning' },
                  { title:'\u9519\u8BEF\u63D0\u793A', type:'error' }
                ]),
                instance = getCurrentInstance(),
                openMessage = (type,content) => {
                  instance.proxy.$message({
                    type,content
                  });
                };  
          return { demo, openMessage };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .message-demo {
        margin: 1em;
        > .w-button {
          margin: 1em;
        }
      } 
    </style>`},{title:"\u5C55\u793A\u6548\u679C",desc:"\u8BBE\u7F6E effect \u5C5E\u6027\uFF0C\u53EF\u4FEE\u6539\u63D0\u793A\u6846\u5C55\u793A\u6548\u679C\uFF0Cdefault(\u6709\u5BF9\u5E94\u80CC\u666F\u8272)\uFF0Clight(\u767D\u8272)\u3002",effect:"light",components:[{title:"\u6D88\u606F\u63D0\u793A",type:"info"},{title:"\u6210\u529F\u63D0\u793A",type:"success"},{title:"\u8B66\u544A\u63D0\u793A",type:"warning"},{title:"\u9519\u8BEF\u63D0\u793A",type:"error"}],template:`    <template>
      <div class='message-demo'>
        <w-button v-for='item in demo' @click='openMessage(item.type, item.title)'>
          {{ item.title }}
        </w-button>
      </div>
    </template>
    <script>`,optionsApi:`
      import { getCurrentInstance } from 'vue';
      export default {
        data() {
          return {
            demo: [
              { title:'\u6D88\u606F\u63D0\u793A', type:'info' },
              { title:'\u6210\u529F\u63D0\u793A', type:'success' },
              { title:'\u8B66\u544A\u63D0\u793A', type:'warning' },
              { title:'\u9519\u8BEF\u63D0\u793A', type:'error' }
            ],
            instance: getCurrentInstance()
          }
        },
        methods: {
          openMessage(type, content) {
            this.instance.proxy.$message({
              type, content, effect: 'light'
            })
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent, getCurrentInstance } from 'vue';
      export default defineComponent({
        setup() {
          const demo = ref([
                  { title: '\u6D88\u606F\u63D0\u793A', type: 'info' },
                  { title: '\u6210\u529F\u63D0\u793A', type: 'success' },
                  { title: '\u8B66\u544A\u63D0\u793A', type: 'warning' },
                  { title: '\u9519\u8BEF\u63D0\u793A', type: 'error' }
                ]),
                instance = getCurrentInstance(),
                openMessage = (type,content) => {
                  instance.proxy.$message({
                    type, content, effect: 'light'
                  });
                };
          return { demo, openMessage };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .message-demo {
        margin: 1em;
        > .w-button {
          margin: 1em;
        }
      } 
    </style>`},{title:"\u53EF\u5173\u95ED",desc:"\u8BBE\u7F6E show-close \u5C5E\u6027\uFF0C\u53EF\u5173\u95ED\u63D0\u793A\u6846 (\u4E00\u822C\u548C\u4E0D\u81EA\u52A8\u5173\u95ED\u7684\u63D0\u793A\u6846\u642D\u914D\u4F7F\u7528)\u3002",showClose:!0,components:[{title:"\u6548\u679C:\u9ED8\u8BA4",type:"info"},{title:"\u6548\u679C:\u9AD8\u4EAE",type:"info",effect:"light"}],template:`    <template>
      <div class='message-demo'>
        <w-button v-for='item in demo' @click='openMessage(item.type, item.title)'>
          {{ item.title }}
        </w-button>
      </div>
    </template>
    <script>`,optionsApi:`
      import { getCurrentInstance } from 'vue';
      export default {
        data() {
          return {
            demo: [
              { title: '\u6548\u679C:\u9ED8\u8BA4', type: 'info' },
              { title: '\u6548\u679C:\u9AD8\u4EAE', type: 'info', effect: 'light' }
            ],
            instance: getCurrentInstance()
          }
        },
        methods: {
          openMessage(type, content) {
            this.instance.proxy.$message({
              type, content, showClose: true
            })
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent, getCurrentInstance } from 'vue';
      export default defineComponent({
        setup() {
          const demo = ref([
                  { title: '\u6548\u679C:\u9ED8\u8BA4', type: 'info' },
                  { title: '\u6548\u679C:\u9AD8\u4EAE', type: 'info', effect: 'light' }
                ]),
                instance = getCurrentInstance(),
                openMessage = (type,content) => {
                instance.proxy.$message({
                  type, content, showClose: true
                });
              };
          return { demo, openMessage };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .message-demo {
        margin: 1em;
        > .w-button {
          margin: 1em;
        }
      } 
    </style>`},{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9",desc:"\u63D0\u793A\u6846\u5185\u5BB9\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A VNode\u3002",components:[{title:"\u5B57\u7B26\u4E32",type:"info"},{title:"VNode",type:"success",VNode:!0}],template:`    <template>
      <div class='message-demo'>
        <w-button v-for='item in demo' @click='openMessage(item.type,item.title,item.VNode)'>
          {{ item.title }}
        </w-button>
      </div>
    </template>
    <script>`,optionsApi:`
      import { getCurrentInstance, h}  from 'vue';
      import { Input } from 'gulu-for-ui';
      export default {
       components: { Input },
        data() {
          return {
            demo: [
              { title:'\u5B57\u7B26\u4E32', type:'info' },
              { title:'VNode', type:'success', VNode:true }
            ],
            instance: getCurrentInstance()
          }
        },
        methods: {
          openMessage(type, content, VNode) {
            this.instance.proxy.$message[type]({
              content:VNode ? h('div',{
                  style: 'display:flex; align-items:center;'
                },[
                h(Input,{
                  value: '1',
                  style: 'min-width:80px; width:80px;'
                }),
                h('b', { style: 'color:#007fff; padding: 0 .5em' }, '\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9')
              ]) : content
            })
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent, getCurrentInstance, h } from 'vue';
      export default defineComponent({
        setup() {
          const demo = ref([
                  { title: '\u5B57\u7B26\u4E32', type: 'info' },
                  { title: 'VNode', type: 'success', VNode: true }
                ]),
                instance = getCurrentInstance(),
                openMessage = (type, content, VNode) => {
                  instance.proxy.$message[type]({
                    content:VNode?h('div',{style:'display:flex;align-items:center;'},[
                      h(Input,{
                        value:'1',
                        style:'min-width:80px;width:80px;'
                      }),
                      h('b',{style:'color:#007fff;padding:0 .5em'},'\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9')
                    ]):content
                  });
                };
          return { demo, openMessage };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .message-demo {
        margin: 1em;
        > .w-button {
          margin: 1em;
        }
      } 
    </style>`},{title:"\u81EA\u5B9A\u4E49\u56FE\u6807",desc:"\u8BBE\u7F6E icon \u5C5E\u6027\uFF0C\u53EF\u4FEE\u6539\u56FE\u6807 (\u4F1A\u8986\u76D6type)\u3002",components:[{title:"\u70B9\u8D5E",icon:"zan-s",content:"\u70B9\u8D5E\u6210\u529F"},{title:"\u5173\u6CE8",icon:"love-s",content:"\u5173\u6CE8\u6210\u529F"}],template:`    <template>
      <div class='message-demo'>
        <w-button v-for='item in demo' @click='openMessage(item.icon,item.content)'>
          {{ item.title }}
        </w-button>
      </div>
    </template>
    <script>`,optionsApi:`
      import { getCurrentInstance } from 'vue';
      export default {
        data() {
          return {
            demo: [
              { title: '\u70B9\u8D5E', icon: 'zan-s', content: '\u70B9\u8D5E\u6210\u529F' },
              { title: '\u5173\u6CE8', icon: 'love-s', content: '\u5173\u6CE8\u6210\u529F' }
            ],
            instance: getCurrentInstance()
          }
        },
        methods: {
          openMessage(icon, content) {
            this.instance.proxy.$message({
              icon, content
            })
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent, getCurrentInstance } from 'vue';
      export default defineComponent({
        setup() {
          const demo = ref([
                  { title:'\u70B9\u8D5E', icon:'zan-s', content:'\u70B9\u8D5E\u6210\u529F' },
                  { title:'\u5173\u6CE8', icon:'love-s', content:'\u5173\u6CE8\u6210\u529F' }
                ]);
                instance = getCurrentInstance();
                openMessage = (icon,content) => {
                  instance.proxy.$message({
                    icon, content
                  });
                };
          return { demo, openMessage };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .message-demo {
        margin: 1em;
        > .w-button {
          margin: 1em;
        }
      } 
    </style>`},{title:"\u81EA\u5B9A\u4E49\u65F6\u95F4",desc:"\u8BBE\u7F6E duration \u5C5E\u6027\uFF0C\u53EF\u4FEE\u6539\u63D0\u793A\u6846\u663E\u793A\u7684\u65F6\u95F4\uFF0C\u8BBE\u7F6E 0 \u4E0D\u4F1A\u81EA\u52A8\u6D88\u5931\u3002",showClose:!0,components:[{title:"5\u79D2\u540E\u6D88\u5931",type:"info",duration:5e3},{title:"\u4E0D\u4F1A\u81EA\u52A8\u6D88\u5931",type:"warning",duration:0}],template:`    <template>
      <div class='message-demo'>
        <w-button v-for='item in demo' @click='openMessage(item.type,item.content,item.duration)'>
          {{ item.title }}
        </w-button>
      </div>
    </template>
    <script>`,optionsApi:`
      import { getCurrentInstance } from 'vue';
      export default {
        data() {
          return {
            demo: [
              { title: '5\u79D2\u540E\u6D88\u5931', type: 'info', duration: 5000 },
              { title: '\u4E0D\u4F1A\u81EA\u52A8\u6D88\u5931', type: 'warning', duration: 0 }
            ],
            instance: getCurrentInstance()
          }
        },
        methods: {
          openMessage(type, content, duration) {
            this.instance.proxy.$message({
              type, content, duration
            })
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent, getCurrentInstance } from 'vue';
      export default defineComponent({
        setup() {
          const demo = ref([
                  { title: '5\u79D2\u540E\u6D88\u5931', type: 'info', duration: 5000 },
                  { title: '\u4E0D\u4F1A\u81EA\u52A8\u6D88\u5931', type: 'warning', duration: 0 }
                ]);
                instance = getCurrentInstance();
                openMessage = (type,content,duration) => {
                  instance.proxy.$message({
                    type, content, duration
                  });
                };
          return { demo, openMessage };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .message-demo {
        margin: 1em;
        > .w-button {
          margin: 1em;
        }
      } 
    </style>`},{title:"\u81EA\u5B9A\u4E49\u5BBD\u5EA6",desc:"\u8BBE\u7F6E width \u5C5E\u6027\uFF0C\u53EF\u4FEE\u6539\u63D0\u793A\u6846\u7684\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u662F320px\u3002",components:[{title:"\u9ED8\u8BA4\u5BBD\u5EA6"},{title:"\u5BBD\u5EA6\u4E3A240px",width:"240px",center:!0}],template:`    <template>
      <div class='message-demo'>
        <w-button v-for='item in demo' @click='openMessage(item.content,item.width,item.center)'>
          {{ item.title }}
        </w-button>
      </div>
    </template>
    <script>`,optionsApi:`
      import { getCurrentInstance } from 'vue';
      export default {
        data() {
          return {
            demo: [
              { title:'\u9ED8\u8BA4\u5BBD\u5EA6' },
              { title:'\u5BBD\u5EA6\u4E3A240px', width:'240px', center:true }
            ],
            instance: getCurrentInstance()
          }
        },
        methods: {
          openMessage(content, width, center) {
            this.instance.proxy.$message({
              content, width, center
            })
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent, getCurrentInstance } from 'vue';
      export default defineComponent({
        setup() {
          const demo = ref([
            { title: '\u9ED8\u8BA4\u5BBD\u5EA6' },
            { title: '\u5BBD\u5EA6\u4E3A240px', width: '240px', center: true }
          ]);
          const instance = getCurrentInstance();
          const openMessage = (content,width,center) => {
            instance.proxy.$message({
              content, width, center
            });
          };
          return { demo, openMessage };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .message-demo {
        margin: 1em;
        > .w-button {
          margin: 1em;
        }
      } 
    </style>`},{title:"\u52A0\u8F7D\u4E2D",desc:"\u8BBE\u7F6E type = loading \uFF0C\u7528\u4E8E\u52A0\u8F7D\u4E2D\u3002\u53EF\u642D\u914D\u5B9E\u4F8B\u7684 change \u65B9\u6CD5\u66F4\u65B0\u63D0\u793A\u6846\u7684\u5185\u5BB9\u3002",components:[{title:"\u52A0\u8F7D\u4E2D",type:"loading",duration:0},{title:"\u52A0\u8F7D\u4E2D,\u4F1A\u66F4\u65B0\u5185\u5BB9",type:"loading",duration:0,change:!0}],template:`    <template>
      <div class='message-demo'>
        <w-button @click='openMessage("loading", "\u52A0\u8F7D\u4E2D", 0)'>
          \u52A0\u8F7D\u4E2D
        </w-button>
        <w-button @click='openMessage("loading", "\u52A0\u8F7D\u4E2D,\u4F1A\u66F4\u65B0\u5185\u5BB9", 0, true)'>
          \u52A0\u8F7D\u4E2D,\u4F1A\u66F4\u65B0\u5185\u5BB9
        </w-button>
      </div>
    </template>
    <script>`,optionsApi:`
      import { getCurrentInstance } from 'vue';
      export default {
        data() {
          return {
            instance: getCurrentInstance()
          }
        },
        methods:{
          openMessage(type, content, duration, change) {
            const Message = this.instance.proxy.$message({
              type, content, duration
            })
            if (change) {
              setTimeout(() => {
                Message.change({
                  content: '\u52A0\u8F7D\u6210\u529F .....',
                  type: 'success'
                });
                setTimeout(() => {
                  Message.close();
                }, 1000);
              }, 1100);
            }
            else{
              setTimeout(() => {
                Message.close();
              }, 2000);
            }
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent, getCurrentInstance } from 'vue';
      export default defineComponent({
        setup() {
          const instance = getCurrentInstance();
          const openMessage = (type, content, duration, change) => {
            const Message = instance.proxy.$message({
              type, content, duration
            });
            if (change) {
              setTimeout(() => {
                Message.change({
                  content: '\u52A0\u8F7D\u6210\u529F .....',
                  type: 'success'
                });
                setTimeout(() => {
                  Message.close();
                }, 1000);
              }, 1100);
            }
            else{
              setTimeout(() => {
                Message.close();
              }, 2000);
            }
          };
          return { openMessage };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .message-demo {
        margin: 1em;
        > .w-button {
          margin: 1em;
        }
      } 
      </style>`},{title:"\u6587\u5B57\u5C45\u4E2D",desc:"\u8BBE\u7F6E center \u5C5E\u6027\uFF0C\u4F7F\u6587\u5B57\u5C45\u4E2D\u3002",components:[{title:"\u6587\u5B57\u5C45\u4E2D",type:"info",center:!0}],template:`    <template>
      <div class='message-demo'>
        <w-button @click='openMessage("info", "\u6587\u5B57\u5C45\u4E2D", true)'>
          \u6587\u5B57\u5C45\u4E2D
        </w-button>
      </div>
    </template>
    <script>`,optionsApi:`
      import { getCurrentInstance } from 'vue';
      export default {
        data() {
          return {
            instance: getCurrentInstance()
          }
        },
        methods: {
          openMessage(type, content, center){
            this.instance.proxy.$message({
              type, content, center
            })
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent, getCurrentInstance } from 'vue';
      export default defineComponent({
        setup() {
          const instance = getCurrentInstance();
          const openMessage = (type, content, center) => {
            instance.proxy.$message({
              type, content, center
            });
          };
          return { openMessage };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .message-demo {
        margin: 1em;
        > .w-button {
          margin: 1em;
        }
      } 
    </style>`},{title:"\u6807\u8BB0\u6B21\u6570",desc:"\u8BBE\u7F6E fold \u5C5E\u6027\uFF0C\u53EF\u5408\u5E76\u5185\u5BB9\u76F8\u540C\u7684\u6D88\u606F\uFF0C\u5E76\u5C55\u793A\u5BF9\u5E94\u7684\u6B21\u6570\u3002",components:[{title:"1 - \u6807\u8BB0\u6B21\u6570",icon:"file",fold:!0,key:1},{title:"2 - \u6807\u8BB0\u6B21\u6570",icon:"write",fold:!0,key:2,customClass:"custom-bg-color"}],template:`    <template>
      <div class='message-demo'>
        <w-button @click='openMessage("file", "1 - \u6807\u8BB0\u6B21\u6570", true, "fold-1")'>
          1 - \u6807\u8BB0\u6B21\u6570
        </w-button>
        <w-button @click='openMessage("write", "2 - \u6807\u8BB0\u6B21\u6570", true, "fold-2", "custom-bg-color")'>
          2 - \u6807\u8BB0\u6B21\u6570
        </w-button>
      </div>
    </template>
    <script>`,optionsApi:`
      import { getCurrentInstance } from 'vue';
      export default {
        data() {
          return {
            instance: getCurrentInstance()
          }
        },
        methods: {
          openMessage(icon, content, fold, key, customClass) {
            this.instance.proxy.$message({
              icon, content, fold, key, customClass
            })
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent, getCurrentInstance } from 'vue';
      export default defineComponent({
        setup() {
          const instance = getCurrentInstance();
          const openMessage = (file, content, fold, key, customClass) => {
            instance.proxy.$message({
              icon, content, fold, key, customClass
            });
          };
          return { openMessage };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .message-demo {
        margin: 1em;
        > .w-button {
          margin: 1em;
        }
      }
      .w-message-box {
        .w-message.custom-bg-color {
          background: #007fff !important;
          color: #fff;
        }
      }
    </style>`},{title:"\u5168\u5C40\u65B9\u6CD5",desc:`Wheel UI \u4E3A app.config.globalProperties \u6DFB\u52A0\u4E86\u5168\u5C40\u65B9\u6CD5 $message\uFF0C
    \u56E0\u6B64\u5728 vue \u5B9E\u4F8B\u4E2D\u4F60\u53EF\u4EE5\u4F7F\u7528 getCurrentInstance().proxy.$message \u7684\u8C03\u7528\u65B9\u5F0F\u8C03\u7528 Message\u3002`},{title:"\u5355\u72EC\u5F15\u7528",exhibitionCode:"<script>import { Message as MyMessage } from 'gulu-for-ui';<\/script>",desc:`\u8C03\u7528\u65B9\u6CD5\u4E3A MyMessage(options)\u3002 
      \u6211\u4E3A\u6BCF\u4E2A type \u5B9A\u4E49\u4E86\u5404\u81EA\u7684\u65B9\u6CD5\uFF0C
      \u5982 MyMessage.success(options)\u3001<br>MyMessage.warning({ title: '\u6D4B\u8BD5\u3002\u3002', duration: 1200 })\uFF0C
      \u5E76\u4E14\u53EF\u4EE5\u8C03\u7528 MyMessage.change({ title: '\u65B0\u7684\u5185\u5BB9\u3002\u3002' }) \u66FF\u6362 Message \u539F\u5148\u7684\u5185\u5BB9\uFF0C<br>
      \u8FD8\u53EF\u4EE5\u8C03\u7528 MyMessage.close() \u624B\u52A8\u5173\u95ED\u5B9E\u4F8B\u3002`}]),D={attribute:[{name:"type",desc:"\u7C7B\u578B",type:"string",optional:"success\u3001warning\u3001info\u3001error\u3001loading",default:"info"},{name:"effect",desc:"\u4E3B\u9898\u6548\u679C",type:"string",optional:"default\u3001light",default:"default"},{name:"content",desc:"\u6D88\u606F\u6587\u5B57",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"top",desc:"\u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u7684\u504F\u79FB\u91CF",type:"number\u3001string",optional:"\u2014\u2014",default:60},{name:"duration",desc:"\u663E\u793A\u65F6\u95F4\uFF0C\u5355\u4F4D:\u6BEB\u79D2\u3002\u8BBE\u4E3A 0 \u5219\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED ",type:"number",optional:"\u2014\u2014",default:2300},{name:"width",desc:"\u63D0\u793A\u6846\u7684\u5BBD\u5EA6",type:"number\u3001string",optional:"\u2014\u2014",default:"320px"},{name:"custom-class",desc:"\u81EA\u5B9A\u4E49\u7C7B\u540D",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"icon",desc:"\u81EA\u5B9A\u4E49\u56FE\u6807\u7684name (\u4F1A\u8986\u76D6 type)",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"show-close",desc:"\u662F\u5426\u5173\u95ED\u56FE\u6807",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"center",desc:"\u5185\u5BB9\u662F\u5426\u5C45\u4E2D",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"use-HTML-string",desc:"\u662F\u5426\u5C06 content \u5C5E\u6027\u4F5C\u4E3A HTML \u7247\u6BB5\u5904\u7406",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"fold",desc:"\u53EF\u5408\u5E76\u5185\u5BB9\u76F8\u540C\u7684\u63D0\u793A\uFF0C\u5E76\u5C55\u793A\u5BF9\u5E94\u7684\u6B21\u6570\u3002",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"key",desc:"\u63D0\u793A\u6846\u7684\u552F\u4E00\u6807\u8BC6\u3002\u5F53\u8BBE\u7F6E fold \u4E3A true\u65F6\uFF0C\u9700\u8981\u7528\u5230\u3002",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"close",desc:"\u5173\u95ED\u63D0\u793A\u7684\u56DE\u8C03",type:"function",optional:"\u2014\u2014",default:"\u2014\u2014"}],method:[{name:"close",desc:"\u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570",params:"\u2014\u2014"},{name:"change",desc:"\u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570",params:"options"}]};const L={class:"message-demo-list"},j=$({setup(F){let h=V(),x=(u,i,a,{type:s,duration:r,center:e,icon:d,VNode:t,fold:g,key:M,customClass:v,change:b,width:I,effect:k})=>{const c=h.proxy.$message({content:t?l("div",{style:"display:flex;align-items:center;"},[l(B,{value:1,style:"width:130px;"}),l("b",{style:"color:#007fff;padding:0 .5em"},"\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9")]):u+(i?" ,\u53EF\u5173\u95ED":""),type:s,center:e,duration:r,showClose:i,icon:d,fold:g,key:M,customClass:v,width:I,effect:a||k});s==="loading"&&(b?setTimeout(()=>{c.change({content:"\u52A0\u8F7D\u6210\u529F .....",type:"success"}),setTimeout(()=>{c.close()},1e3)},1100):setTimeout(()=>{c.close()},2e3))};return(u,i)=>{const a=p("w-button"),s=p("DemoItem"),r=p("TableList");return n(),o("div",L,[(n(!0),o(f,null,y(m(E),(e,d)=>(n(),A(s,{item:e,key:e.title},{default:C(()=>[(n(!0),o(f,null,y(e.components,t=>(n(),o("div",{key:t},[w(a,{onClick:g=>m(x)(t.content||t.title,e.showClose,e.effect,t)},{default:C(()=>[N(T(t.title),1)]),_:2},1032,["onClick"])]))),128))]),_:2},1032,["item"]))),128)),w(r,{data:m(D)},null,8,["data"])])}}});export{j as default};
