import{r as h,d as A,m as F,a,o as s,g as o,H as d,I as f,c as i,w as p,y as r,z as b,k as g,b as m,h as x,n as V,R as u}from"./vendor.c0366ad2.js";const l=`
    <style lang='scss'>
      .grid-demo {
        margin: 3em 1em;
        .w-row {
          margin: 3em 0;
          > .w-col {
            > div{
              display: flex;
              min-height:56px;
              align-items: center;
              justify-content: center;
              color: #fff;
              font-size: 18px;
            }
            &:nth-of-type(odd) {
              > div {
                background: rgba(0,160,233,.5);
              }
            }
            &:nth-of-type(even) {
              > div {
                background: rgba(130,130,216);
              }
            }
          }
        }
      }
    </style>`,R=h([{title:"\u57FA\u7840\u5E03\u5C40",desc:"\u4E00\u7EC4 Row \u5305\u542B\u591A\u4E2A Col \u7EC4\u4EF6\uFF0C\u6700\u591A 24 \u5217(\u540C\u7EC4\u5185\u7684Col \u5C5E\u6027 span \u76F8\u52A0\u5E94 \u2264 24)\uFF0C\u5426\u5219\u4F1A\u6362\u884C\u3002",components:[{list:[{span:24}]},{list:[{span:12},{span:12}]},{list:[{span:8},{span:8},{span:8}]},{list:[{span:6},{span:6},{span:6},{span:6}]},{list:[{span:4},{span:4},{span:4},{span:4},{span:4},{span:4}]}],template:`    <template>
      <div class='grid-demo'>
        <w-row v-for='item in rows' :key='item'>
          <w-col v-for='col in item.list' :key='col' :span='col.span'>
            <div>{{ col.span }}</div>
          </w-col>
        </w-row>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            rows: [
              {
                list: [{ span: 24 }]
              },
              {
                list: [{ span: 12 }, { span: 12 }]
              },
              {
                list: [{ span: 8 }, { span: 8 }, { span: 8 }]
              },
              {
                list: [{ span: 6 }, { span: 6 }, { span: 6 }, { span: 6 }]
              },
              {
                list: [{ span: 4 }, { span: 4 }, { span: 4 }, { span: 4 }, { span: 4 }, { span: 4 }]
              }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const rows = [
            {
              list: [{ span: 24 }]
            },
            {
              list: [{ span: 12 }, { span: 12 }]
            },
            {
              list: [{ span: 8 }, { span: 8 }, { span: 8 }]
            },
            {
              list: [{ span: 6 }, { span: 6 }, { span: 6 }, { span: 6 }]
            },
            {
              list: [{ span: 4 }, { span: 4 }, { span: 4 }, { span: 4 }, { span: 4 }, { span: 4 }]
            }
          ];
          return { rows };
        }
      })
    <\/script>`,style:l},{title:"\u6DF7\u5408\u5E03\u5C40",desc:"\u901A\u8FC7\u57FA\u7840\u7684 24 \u5206\u680F\u53EF\u4EFB\u610F\u6269\u5C55\u7EC4\u5408\u5F62\u6210\u8F83\u4E3A\u590D\u6742\u7684\u6DF7\u5408\u5E03\u5C40\u3002",components:[{list:[{span:3},{span:7},{span:14}]},{list:[{span:10},{span:5},{span:5},{span:4}]},{list:[{span:18},{span:6}]}],template:`    <template>
      <div class='grid-demo'>
        <w-row v-for='item in rows' :key='item'>
          <w-col v-for='col in item.list' :key='col' :span='col.span'>
            <div>{{ col.span }}</div>
          </w-col>
        </w-row>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            rows: [
              {
                list: [{ span: 3 }, { span: 7 }, { span: 14 }]
              },
              {
                list: [{ span: 10 }, { span: 5 }, { span: 5 }, { span: 4 }]
              },
              {
                list: [{ span: 18 }, { span: 6 }]
              }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const rows = [
            {
              list: [{ span: 3 }, { span: 7 }, { span: 14 }]
            },
            {
              list: [{ span: 10 }, { span: 5 }, { span: 5 }, { span: 4 }]
            },
            {
              list: [{ span: 18 }, { span: 6 }]
            }
          ];
          return { rows };
        }
      })
    <\/script>`,style:l},{title:"\u6805\u683C\u95F4\u9694",desc:`\u8BBE\u7F6E Row \u7684 \u5C5E\u6027 gutter\uFF0C\u53EF\u4EE5\u7ED9\u5217\uFF08column\uFF09\u52A0\u95F4\u8DDD\uFF0C\u63A8\u8350\u4F7F\u7528 (16+8n)px \u4F5C\u4E3A\u6805\u683C\u95F4\u9694\u3002(n \u662F\u81EA\u7136\u6570)\u3002<br>
      \u5982\u9700\u8981\u652F\u6301\u54CD\u5E94\u5F0F\uFF0C\u53EF\u4EE5\u5199\u6210 { xs: 8, sm: 16, md: 24, lg: 32 } \u3001 [{ 1200: 50}, { 1000: 40 }, { 800: 30 }, { 800: 20 }] (\u6570\u7EC4\u5199\u6CD5\u5FC5\u987B\u662F\u4ECE\u5927\u5C3A\u5BF8\u5230\u5C0F\u5C3A\u5BF8,\u6700\u540E\u4E00\u9879\u5C31\u662F\u6700\u5C0F\u5C3A\u5BF8)\u3002<br>
      \u5982\u9700\u8981\u5782\u76F4\u95F4\u8DDD\uFF0C\u53EF\u4EE5\u5199\u6210\u6570\u7EC4\u5F62\u5F0F [\u6C34\u5E73\u95F4\u8DDD, \u5782\u76F4\u95F4\u8DDD]\u3002`,border:!0,components:[{title:"\u6C34\u5E73\u65B9\u5411",list:[{span:8},{span:8},{span:8}],gutter:30},{title:"\u6C34\u5E73+\u5782\u76F4\u65B9\u5411",list:[{span:6},{span:6},{span:6},{span:6}],gutter:[40,40]}],template:`    <template>
      <div class="grid-demo">
        <div v-for="(item, index) in rows" :key="index">
          <div>
            <w-divider content-position="left">
              {{ item.title }}
            </w-divider>
            <div style="margin: 1.2em 0 2em;">
              <span>\u95F4\u9694\uFF1A</span>
              <w-input-number v-if="index===0" v-model="item.gutter" 
                :min="0" :max="100" />
              <w-input-number v-lese v-model="item.gutter[0]" 
                :min="0" :max="100" 
                @change="e => item.gutter[1]=e" />
              &nbsp;
              <span>px</span>
            </div>
          </div>
          <w-row :gutter="item.gutter">
            <w-col v-for="col in item.list" :key="col" :span="col.span">
              <div>{{ col.span }}</div>
            </w-col>
          </w-row>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            rows: [
              {
                title: '\u6C34\u5E73\u65B9\u5411',
                list: [{ span: 8 }, { span: 8 }, { span: 8 }],
                gutter: 30
              },
              {
                title: '\u6C34\u5E73+\u5782\u76F4\u65B9\u5411',
                list: [{ span: 6 }, { span: 6 }, { span: 6 }, { span: 6 }],
                gutter: [40, 40]
              }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref,defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const rows = ref([
            {
              title: '\u6C34\u5E73\u65B9\u5411',
              list: [{ span: 8 }, { span: 8 }, { span: 8 }],
              gutter: 30
            },
            {
              title: '\u6C34\u5E73+\u5782\u76F4\u65B9\u5411',
              list: [{ span: 6 }, { span: 6 }, { span: 6 }, { span: 6 }],
              gutter: [40, 40]
            }
          ]);
          return { rows };
        }
      })
    <\/script>`,style:l},{title:"\u6805\u683C\u504F\u79FB",desc:'\u8BBE\u7F6E Col \u7684\u5C5E\u6027 offset \u53EF\u4EE5\u5C06\u5217\u5411\u53F3\u4FA7\u504F\u3002\u4F8B\u5982: offset="6" \u5C06\u5143\u7D20\u5411\u53F3\u4FA7\u504F\u79FB\u4E86 6 \u4E2A\u5217\uFF08column\uFF09\u7684\u5BBD\u5EA6\u3002',components:[{list:[{span:8},{span:6,offset:10}]},{list:[{span:6,offset:8},{span:6,offset:4}]},{list:[{span:10,offset:14}]}],template:`    <template>
      <div class='grid-demo'>
        <w-row v-for='item in rows' :key='item'>
          <w-col v-for='col in item.list' :key='col' :span='col.span' 
            :offset='col.offset'>
            <div>{{ col.span }}</div>
          </w-col>
        </w-row>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            rows: [
              {
                list: [{ span: 8 }, { span: 6, offset: 10 }]
              },
              {
                list: [{ span: 6, offset: 8 }, { span: 6, offset: 4 }]
              },
              {
                list: [{ span: 10, offset: 14 }]
              }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const rows = [
            {
              list: [{ span: 8 }, { span: 6, offset: 10 }]
            },
            {
              list: [{ span: 6, offset: 8 }, { span: 6, offset: 4 }]
            },
            {
              list: [{ span: 10, offset: 14 }]
            }
          ];
          return { rows };
        }
      })
    <\/script>`,style:l},{title:"\u6805\u683C\u6392\u5E8F",desc:"\u901A\u8FC7 Flex \u5E03\u5C40\u7684 order \u6216\u8005 push (\u5F80\u53F3\u79FB\u52A8) \u548C pull (\u5F80\u5DE6\u79FB\u52A8) \u5C31\u53EF\u4EE5\u5F88\u5BB9\u6613\u7684\u6539\u53D8\u5217\uFF08column\uFF09\u7684\u987A\u5E8F\u3002",components:[{title:"push \u3001\u3000pull",list:[{span:16,push:8,label:"\u2460 16\uFF0Cpush-8"},{span:8,pull:16,label:"\u2461 8\uFF0Cpush-16"}]},{type:"flex",title:"order",list:[{span:4,label:"\u2460 6\uFF0Corder-4",order:4},{span:4,label:"\u2461 6\uFF0Corder-3",order:3},{span:8,label:"\u2462 6\uFF0Corder-2",order:2},{span:8,label:"\u2463 6\uFF0Corder-1",order:1}]}],template:`    <template>
      <div class="grid-demo">
        <div v-for="(item, index) in rows" :key="index">
          <w-divider content-position="left">
            {{ item.title }}
          </w-divider>
          <w-row>
            <w-col v-for="col in item.list" :key="col" :span="col.span">
              <div>{{ col.label }}</div>
            </w-col>
          </w-row>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            rows: [
              {
                title: 'push \u3001\u3000pull',
                list: [
                  { span: 16, push: 8, label: '\u2460 16\uFF0Cpush-8' },
                  { span: 8, pull: 16, label: '\u2461 8\uFF0Cpush-16' }
                ]
              },
              {
                type: 'flex',
                title: 'order',
                list: [
                  { span: 4, label: '\u2460 6\uFF0Corder-4', order: 4 }, 
                  { span: 4, label: '\u2461 6\uFF0Corder-3', order: 3 },
                  { span: 8, label: '\u2462 6\uFF0Corder-2', order: 2 }, 
                  { span: 8, label: '\u2463 6\uFF0Corder-1', order: 1 }
                ]
              }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const rows = [
            {
              title: 'push \u3001\u3000pull',
              list: [
                { span: 16, push: 8, label: '\u2460 16\uFF0Cpush-8' },
                { span: 8, pull: 16, label: '\u2461 8\uFF0Cpush-16' }
              ]
            },
            {
              type: 'flex',
              title: 'order',
              list: [
                { span: 4, label: '\u2460 6\uFF0Corder-4', order: 4 }, 
                { span: 4, label: '\u2461 6\uFF0Corder-3', order: 3 },
                { span: 8, label: '\u2462 6\uFF0Corder-2', order: 2 }, 
                { span: 8, label: '\u2463 6\uFF0Corder-1', order: 1 }
              ]
            }
          ];
          return { rows };
        }
      })
    <\/script>`,style:l},{title:"Flex\u5E03\u5C40",desc:"\u8BBE\u7F6E Row \u7684\u5C5E\u6027 type \u4E3A flex \uFF0C\u5B9A\u4E49 flex \u5E03\u5C40\u3002\u8BBE\u7F6E justify \u5C5E\u6027\uFF0C\u53EF\u4EE5\u8BA9\u5B50\u5143\u7D20\u5728\u6C34\u5E73\u65B9\u5411\u8FDB\u884C\u6392\u5217",type:"flex",border:!0,components:[{title:"\u5B50\u5143\u7D20\u5411\u5DE6\u6392\u5217 (start\uFF0C\u9ED8\u8BA4) ",justify:"start",list:[{span:3},{span:3},{span:3}]},{title:"\u5B50\u5143\u7D20\u5C45\u4E2D\u6392\u5217 (center)",justify:"center",list:[{span:3},{span:3},{span:3}]},{title:"\u5B50\u5143\u7D20\u5411\u53F3\u6392\u5217 (end)",justify:"end",list:[{span:3},{span:3},{span:3}]},{title:"\u5B50\u5143\u7D20\u7B49\u5BBD\u6392\u5217 (between)",justify:"between",list:[{span:3},{span:3},{span:3}]},{title:"\u5B50\u5143\u7D20\u5206\u6563\u6392\u5217 (around)",justify:"around",list:[{span:3},{span:3},{span:3}]}],template:`    <template>
      <div class="grid-demo">
        <div v-for="(item, index) in rows" :key="index">
          <w-divider content-position="left">
            {{ item.title }}
          </w-divider>
          <w-row type="flex" :justify="item.justify">
            <w-col v-for="col in item.list" :key="col" :span="col.span">
              <div>{{ col.span }}</div>
            </w-col>
          </w-row>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            rows: [
              {
                title: '\u5B50\u5143\u7D20\u5411\u5DE6\u6392\u5217 (start\uFF0C\u9ED8\u8BA4) ',
                justify: 'start',
                list: [
                  { span: 3 }, { span: 3 }, { span: 3 }
                ]
              },
              {
                title: '\u5B50\u5143\u7D20\u5C45\u4E2D\u6392\u5217 (center)',
                justify: 'center',
                list: [
                  { span: 3 }, { span: 3 }, { span: 3 }
                ]
              },
              {
                title: '\u5B50\u5143\u7D20\u5411\u53F3\u6392\u5217 (end)',
                justify: 'end',
                list: [
                  { span: 3 }, { span: 3 }, { span: 3 }
                ]
              },
              {
                title: '\u5B50\u5143\u7D20\u7B49\u5BBD\u6392\u5217 (between)',
                justify: 'between',
                list: [
                  { span: 3 }, { span: 3 }, { span: 3 }
                ]
              },
              {
                title: '\u5B50\u5143\u7D20\u5206\u6563\u6392\u5217 (around)',
                justify: 'around',
                list: [
                  { span: 3 }, { span: 3 }, { span: 3 }
                ]
              }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const rows = [
            {
              title: '\u5B50\u5143\u7D20\u5411\u5DE6\u6392\u5217 (start\uFF0C\u9ED8\u8BA4) ',
              justify: 'start',
              list: [
                { span: 3 }, { span: 3 }, { span: 3 }
              ]
            },
            {
              title: '\u5B50\u5143\u7D20\u5C45\u4E2D\u6392\u5217 (center)',
              justify: 'center',
              list: [
                { span: 3 }, { span: 3 }, { span: 3 }
              ]
            },
            {
              title: '\u5B50\u5143\u7D20\u5411\u53F3\u6392\u5217 (end)',
              justify: 'end',
              list: [
                { span: 3 }, { span: 3 }, { span: 3 }
              ]
            },
            {
              title: '\u5B50\u5143\u7D20\u7B49\u5BBD\u6392\u5217 (between)',
              justify: 'between',
              list: [
                { span: 3 }, { span: 3 }, { span: 3 }
              ]
            },
            {
              title: '\u5B50\u5143\u7D20\u5206\u6563\u6392\u5217 (around)',
              justify: 'around',
              list: [
                { span: 3 }, { span: 3 }, { span: 3 }
              ]
            }
          ];
          return { rows };
        }
      })
    <\/script>`,style:l},{title:"Flex\u5BF9\u9F50",desc:"\u8BBE\u7F6E Row \u7684\u5C5E\u6027 align\uFF0C\u53EF\u4EE5\u8BA9\u5B50\u5143\u7D20\u5728\u5782\u76F4\u65B9\u5411\u8FDB\u884C\u6392\u5217\u3002",type:"flex",border:!0,align:!0,components:[{title:"\u9876\u90E8\u5BF9\u9F50 (top\uFF0C\u9ED8\u8BA4)",align:"top",list:[{span:3},{span:3},{span:3}]},{title:"\u5C45\u4E2D\u5BF9\u9F50 (center)",align:"center",list:[{span:3},{span:3},{span:3}]},{title:"\u5E95\u90E8\u5BF9\u9F50 (bottom)",align:"bottom",list:[{span:3},{span:3},{span:3}]}],template:`    <template>
      <div class="grid-demo">
        <div v-for="(item, index) in rows" :key="index">
          <w-divider content-position="left">
            {{ item.title }}
          </w-divider>
          <w-row type="flex" :align="item.align">
            <w-col v-for="col in item.list" :key="col" :span="col.span">
              <div>{{ col.span }}</div>
            </w-col>
          </w-row>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            rows: [
              {
                title: '\u9876\u90E8\u5BF9\u9F50 (top\uFF0C\u9ED8\u8BA4)',
                align: 'top',
                list: [
                  { span: 3 }, { span: 3 }, { span: 3 }
                ]
              },
              {
                title: '\u5C45\u4E2D\u5BF9\u9F50 (center)',
                align: 'center',
                list: [
                  { span: 3 }, { span: 3 }, { span: 3 }
                ]
              },
              {
                title: '\u5E95\u90E8\u5BF9\u9F50 (bottom)',
                align: 'bottom ',
                list: [
                  { span: 3 }, { span: 3 }, { span: 3 }
                ]
              }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const rows = [
            {
              title: '\u9876\u90E8\u5BF9\u9F50 (top\uFF0C\u9ED8\u8BA4)',
              align: 'top',
              list: [
                { span: 3 }, { span: 3 }, { span: 3 }
              ]
            },
            {
              title: '\u5C45\u4E2D\u5BF9\u9F50 (center)',
              align: 'center',
              list: [
                { span: 3 }, { span: 3 }, { span: 3 }
              ]
            },
            {
              title: '\u5E95\u90E8\u5BF9\u9F50 (bottom)',
              align: 'bottom ',
              list: [
                { span: 3 }, { span: 3 }, { span: 3 }
              ]
            }
          ];
          return { rows };
        }
      })
    <\/script>`,style:l},{title:"Flex\u586B\u5145",desc:"\u8BBE\u7F6E Col \u7684\u5C5E\u6027 flex\uFF0C\u652F\u6301 Flex \u5C5E\u6027 \u586B\u5145 (\u4F5C\u7528\u76F8\u5F53\u4E8E\u5C5E\u6027 span)",type:"flex",components:[{title:"\u5360\u6BD4",list:[{flex:6,label:"6 / 10"},{flex:4,label:"4 / 10"}]},{title:"\u586B\u8865",list:[{flex:"120px",label:"\u56FA\u5B9A120px"},{flex:"auto",label:"\u586B\u8865\u5269\u4F59\u5BBD\u5EA6"}]},{title:"\u5206\u914D",list:[{flex:"1 1 200px",label:"1 1 200px"},{flex:"2 1 300px",label:"2 1 300px"}]}],template:`    <template>
      <div class="grid-demo">
        <div v-for="(item, index) in rows" :key="index">
          <w-divider content-position="left">
            {{ item.title }}
          </w-divider>
          <w-row type="flex">
            <w-col v-for="col in item.list" :key="col" :flex="col.flex">
              <div>{{ col.label }}</div>
            </w-col>
          </w-row>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            rows: [
              {
                title: '\u5360\u6BD4',
                list: [
                  { flex: 6, label: '6 / 10' }, { flex: 4, label: '4 / 10' }
                ]
              },
              {
                title: '\u586B\u8865',
                list: [
                  { flex: '120px', label: '\u56FA\u5B9A120px' }, { flex: 'auto', label: '\u586B\u8865\u5269\u4F59\u5BBD\u5EA6' }
                ]
              },
              {
                title: '\u5206\u914D',
                list: [
                  { flex: '1 1 200px', label: '1 1 200px' }, { flex: '2 1 300px', label: '2 1 300px' }
                ]
              }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const rows = [
            {
              title: '\u5360\u6BD4',
              list: [
                { flex: 6, label: '6 / 10' }, { flex: 4, label: '4 / 10' }
              ]
            },
            {
              title: '\u586B\u8865',
              list: [
                { flex: '120px', label: '\u56FA\u5B9A120px' }, { flex: 'auto', label: '\u586B\u8865\u5269\u4F59\u5BBD\u5EA6' }
              ]
            },
            {
              title: '\u5206\u914D',
              list: [
                { flex: '1 1 200px', label: '1 1 200px' }, { flex: '2 1 300px', label: '2 1 300px' }
              ]
            }
          ];
          return { rows };
        }
      })
    <\/script>`,style:l},{title:"\u54CD\u5E94\u5F0F",desc:"\u53C2\u7167 Bootstrap \u7684 \u54CD\u5E94\u5F0F\u8BBE\u8BA1\uFF0C\u9884\u8BBE\u516D\u4E2A\u54CD\u5E94\u5C3A\u5BF8\uFF1Axs (<576px)\u3001sm (\u2265576px)\u3001md (\u2265768px)\u3001lg (\u2265992px)\u3001xl (\u22651200px)\u3001xxl (\u22651300px)\u3002",border:!0,components:[{title:"\u57FA\u672C\u54CD\u5E94\u5F0F",list:[{xl:2,lg:4,md:6,sm:8,xs:10,label:"\u2460"},{xl:20,lg:16,md:12,sm:8,xs:4,label:"\u2461"},{xl:2,lg:4,md:6,sm:8,xs:10,label:"\u2462"}]},{title:"\u533A\u5757\u95F4\u9694\u4E5F\u53EF\u4EE5\u54CD\u5E94\u5F0F",gutter:{xxl:[60,60],xl:[60,60],lg:[40,40],md:[30],sm:[20,40],xs:[30,30]},list:[{xxl:10,xl:10,lg:8,md:6,sm:5,xs:24,label:"\u2460"},{xxl:4,xl:4,lg:8,md:12,sm:14,xs:24,label:"\u2461"},{xxl:10,xl:10,lg:8,md:6,sm:5,xs:24,label:"\u2462"}]},{title:"\u5C5E\u6027 offset \u54CD\u5E94\u5F0F",gutter:[{1200:50},{1e3:30},{800:20},{800:20}],list:[{xxl:10,xl:{span:6,offset:2},lg:{span:5,offset:3},md:{span:7,offset:1},sm:{span:4,offset:4},xs:24,label:"\u2460"},{xxl:4,xl:{span:6,offset:2},lg:{span:5,offset:3},md:{span:7,offset:1},sm:{span:4,offset:4},xs:24,label:"\u2461"},{xxl:10,xl:{span:6,offset:2},lg:{span:5,offset:3},md:{span:7,offset:1},sm:{span:4,offset:4},xs:0,label:"\u2462"}]}],template:`    <template>
      <div class="grid-demo">
        <div v-for="(item, index) in rows" :key="index">
          <w-divider content-position="left">
            {{ item.title }}
          </w-divider>
          <w-row type="flex" :gutter='item.gutter'>
            <w-col v-for="col in item.list" :key="col" :xs="col.xs" :sm="col.sm"
              :md="col.md" :lg="col.lg" :xl="col.xl" :xxl="col.xxl">
              <div>{{ col.label }}</div>
            </w-col>
          </w-row>
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            rows: [
              {
                title: '\u57FA\u672C\u54CD\u5E94\u5F0F',
                list: [
                  { xl: 2, lg: 4, md: 6, sm: 8, xs: 10, label: '\u2460' },
                  { xl: 20, lg: 16, md: 12, sm: 8, xs: 4, label: '\u2461' },
                  { xl: 2, lg: 4, md: 6, sm: 8, xs: 10, label: '\u2462' }
                ]
              },
              {
                title: '\u533A\u5757\u95F4\u9694\u4E5F\u53EF\u4EE5\u54CD\u5E94\u5F0F',
                gutter: { xxl: [60, 60], xl: [60, 60], lg: [40, 40], md: [30], sm: [20, 40], xs: [30, 30] },
                list: [
                  { xxl: 10, xl: 10, lg: 8, md: 6, sm: 5, xs: 24, label: '\u2460' },
                  { xxl: 4, xl: 4, lg: 8, md: 12, sm: 14, xs: 24, label: '\u2461' },
                  { xxl: 10, xl: 10, lg: 8, md: 6, sm: 5, xs: 24, label: '\u2462' }
                ]
              },
              {
                title: '\u5C5E\u6027 offset \u54CD\u5E94\u5F0F',
                gutter: [{ 1200: 50 }, { 1000: 30 }, { 800: 20 }, { 800: 20 }],
                list: [
                  {
                    xxl: 10, xl: { span: 6, offset: 2 },
                    lg: { span: 5, offset: 3 }, md: { span: 7, offset: 1 },
                    sm: { span: 4, offset: 4 }, xs: 24, label: '\u2460'
                  },
                  {
                    xxl: 4, xl: { span: 6, offset: 2 },
                    lg: { span: 5, offset: 3 }, md: { span: 7, offset: 1 },
                    sm: { span: 4, offset: 4 }, xs: 24, label: '\u2461'
                  },
                  {
                    xxl: 10, xl: { span: 6, offset: 2 },
                    lg: { span: 5, offset: 3 }, md: { span: 7, offset: 1 },
                    sm: { span: 4, offset: 4 }, xs: 0, label: '\u2462'
                  }
                ]
              }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const rows = [
            {
              title: '\u57FA\u672C\u54CD\u5E94\u5F0F',
              list: [
                { xl: 2, lg: 4, md: 6, sm: 8, xs: 10, label: '\u2460' },
                { xl: 20, lg: 16, md: 12, sm: 8, xs: 4, label: '\u2461' },
                { xl: 2, lg: 4, md: 6, sm: 8, xs: 10, label: '\u2462' }
              ]
            },
            {
              title: '\u533A\u5757\u95F4\u9694\u4E5F\u53EF\u4EE5\u54CD\u5E94\u5F0F',
              gutter: { xxl: [60, 60], xl: [60, 60], lg: [40, 40], md: [30], sm: [20, 40], xs: [30, 30] },
              list: [
                { xxl: 10, xl: 10, lg: 8, md: 6, sm: 5, xs: 24, label: '\u2460' },
                { xxl: 4, xl: 4, lg: 8, md: 12, sm: 14, xs: 24, label: '\u2461' },
                { xxl: 10, xl: 10, lg: 8, md: 6, sm: 5, xs: 24, label: '\u2462' }
              ]
            },
            {
              title: '\u5C5E\u6027 offset \u54CD\u5E94\u5F0F',
              gutter: [{ 1200: 50 }, { 1000: 30 }, { 800: 20 }, { 800: 20 }],
              list: [
                {
                  xxl: 10, xl: { span: 6, offset: 2 },
                  lg: { span: 5, offset: 3 }, md: { span: 7, offset: 1 },
                  sm: { span: 4, offset: 4 }, xs: 24, label: '\u2460'
                },
                {
                  xxl: 4, xl: { span: 6, offset: 2 },
                  lg: { span: 5, offset: 3 }, md: { span: 7, offset: 1 },
                  sm: { span: 4, offset: 4 }, xs: 24, label: '\u2461'
                },
                {
                  xxl: 10, xl: { span: 6, offset: 2 },
                  lg: { span: 5, offset: 3 }, md: { span: 7, offset: 1 },
                  sm: { span: 4, offset: 4 }, xs: 0, label: '\u2462'
                }
              ]
            }
          ];
          return { rows };
        }
      })
    <\/script>`,style:l}]),B={attribute:[{name:"type",desc:"\u5E03\u5C40\u6A21\u5F0F\uFF0C\u53EF\u9009 flex \u6216\u8005\u4E0D\u586B",type:"string",optional:"flex",default:"\u2014\u2014"},{name:"gutter",desc:"\u6805\u683C\u7684\u95F4\u9694\uFF0C\u53EF\u4EE5\u5199\u6210\u50CF\u7D20\u503C\u6765\u8BBE\u7F6E\u6C34\u5E73\u95F4\u8DDD\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6570\u7EC4[\u6C34\u5E73\u95F4\u8DDD,\u5782\u76F4\u95F4\u8DDD]\u5F62\u5F0F\uFF0C\u8FD8\u652F\u6301\u54CD\u5E94\u5F0F { xl: 20, lg: 16, md: 10 } or [{ 1300: [50, 50] }, { 1000: [30, 30] }]",type:"number\u3001object\u3001array",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"justify",desc:"Flex \u5E03\u5C40\u4E0B\u7684\u6C34\u5E73\u6392\u5217\u65B9\u5F0F",type:"string",optional:"start\u3001end\u3001center\u3001around\u3001between",default:"start"},{name:"align",desc:"Flex \u5E03\u5C40\u4E0B\u7684\u5782\u76F4\u6392\u5217\u65B9\u5F0F",type:"string",optional:"top\u3001center\u3001bottom",default:"top"}],slot:[{name:"\u2014\u2014",desc:"\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9 \u5FC5\u987B\u662F Col \u7EC4\u4EF6"}]},D={attribute:[{name:"span",desc:"\u6805\u683C\u5360\u4F4D\u683C\u6570\uFF0C\u4E3A 0 \u65F6\u76F8\u5F53\u4E8E display: none",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"flex",desc:"Flex \u5E03\u5C40\u586B\u5145",type:"string\u3001number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"offset",desc:"\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570",type:"number",optional:"\u2014\u2014",default:0},{name:"order",desc:"\u6805\u683C\u987A\u5E8F\uFF0CFlex \u5E03\u5C40\u6A21\u5F0F\u4E0B\u6709\u6548",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"push",desc:"\u6805\u683C\u5411\u53F3\u79FB\u52A8\u683C\u6570",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"pull",desc:"\u6805\u683C\u5411\u5DE6\u79FB\u52A8\u683C\u6570",type:"number",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"xs",desc:"<576px \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u542B\u6805\u683C\u5C5E\u6027\u7684\u5BF9\u8C61 (6 or { span: 6, offset: 2})",type:"number\u3001object",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"sm",desc:"\u2265576px \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u542B\u6805\u683C\u5C5E\u6027\u7684\u5BF9\u8C61 (6 or { span: 6, offset: 2})",type:"number\u3001object",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"md",desc:"\u2265768px \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u542B\u6805\u683C\u5C5E\u6027\u7684\u5BF9\u8C61 (6 or { span: 6, offset: 2})",type:"number\u3001object",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"lg",desc:"\u2265992px \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u542B\u6805\u683C\u5C5E\u6027\u7684\u5BF9\u8C61 (6 or { span: 6, offset: 2})",type:"number\u3001object",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"xl",desc:"\u22651200px \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u542B\u6805\u683C\u5C5E\u6027\u7684\u5BF9\u8C61 (6 or { span: 6, offset: 2})",type:"number\u3001object",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"xxl",desc:"\u22651600px \u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u53EF\u4E3A\u6805\u683C\u6570\u6216\u542B\u6805\u683C\u5C5E\u6027\u7684\u5BF9\u8C61 (6 or { span: 6, offset: 2})",type:"number\u3001object",optional:"\u2014\u2014",default:"\u2014\u2014"}],slot:[{name:"\u2014\u2014",desc:"\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"}]};const L={class:"grid-demo-list"},N={key:1,style:{margin:"1.2em 0 2em"}},U=x("span",null,"\u95F4\u9694\uFF1A",-1),z=r(" \xA0"),I=x("span",null,"px",-1),T=r("Row"),E=r("Col"),J=A({setup(H){return F([{flex:"1 1 200px"},{flex:"2 1 300px"}]),(S,q)=>{const v=a("w-divider"),c=a("w-input-number"),y=a("w-col"),_=a("w-row"),j=a("DemoItem"),w=a("TableList");return s(),o("div",L,[(s(!0),o(d,null,f(u(R),(n,k)=>(s(),i(j,{item:n,key:n.title},{default:p(()=>[(s(!0),o(d,null,f(n.components,(t,C)=>(s(),o("div",{key:t},[t.title?(s(),i(v,{key:0,"content-position":"left"},{default:p(()=>[r(b(t.title),1)]),_:2},1024)):g("",!0),k===2?(s(),o("div",N,[U,C===0?(s(),i(c,{key:0,modelValue:t.gutter,"onUpdate:modelValue":e=>t.gutter=e,min:0,max:100},null,8,["modelValue","onUpdate:modelValue"])):(s(),i(c,{key:1,modelValue:t.gutter[0],"onUpdate:modelValue":e=>t.gutter[0]=e,min:0,max:100,onChange:e=>t.gutter[1]=e},null,8,["modelValue","onUpdate:modelValue","onChange"])),z,I])):g("",!0),m(_,{class:V({border:n.border,align:n.align}),gutter:t.gutter,type:n.type||t.type,justify:t.justify,align:t.align},{default:p(()=>[(s(!0),o(d,null,f(t.list,e=>(s(),i(y,{key:e,span:e.span,offset:e.offset,push:e.push,pull:e.pull,order:e.order,flex:e.flex,xxl:e.xxl,xl:e.xl,lg:e.lg,md:e.md,sm:e.sm,xs:e.xs},{default:p(()=>[x("div",null,b(e.label||e.span),1)]),_:2},1032,["span","offset","push","pull","order","flex","xxl","xl","lg","md","sm","xs"]))),128))]),_:2},1032,["class","gutter","type","justify","align"])]))),128))]),_:2},1032,["item"]))),128)),m(w,{data:u(B)},{default:p(()=>[T]),_:1},8,["data"]),m(w,{data:u(D)},{default:p(()=>[E]),_:1},8,["data"])])}}});export{J as default};
