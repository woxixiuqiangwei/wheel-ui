import{r as $,d as N,m as f,C as T,a as C,L as M,o as e,g as n,H as s,I as r,c as h,w as c,b,y as l,z as g,k as j,h as d,t as p,v as I,R as L}from"./vendor.c0366ad2.js";import{L as A}from"./index.c63351a7.js";const V=$([{title:"\u57FA\u7840\u7528\u6CD5",desc:"\u5728\u8868\u683C\u3001\u5217\u8868\u7B49\u5BB9\u5668\u4E2D\u52A0\u8F7D\u6570\u636E\u65F6\u663E\u793A\uFF0C\u6709\u6307\u4EE4\u3001\u670D\u52A1\u4E24\u79CD\u52A0\u8F7D\u65B9\u5F0F\u3002",loading:!0,components:[{type:"\u6307\u4EE4",loading:!0},{type:"\u670D\u52A1",loading:!0}],template:`    <template>
      <div class='loading-demo'>
        <div class='loading-item' v-for='(item,i) in list'>
          <div class='btn'>
            <p>{{ item.type }}\u65B9\u5F0F</p>
            <w-button @click='toggle(item,i)'>
              \u52A0\u8F7D{{ item.loading ? '\u5B8C\u6210': '\u4E2D' }}
            </w-button>
          </div>
          <div v-if='i===0' class='directive-loading' v-loading='item.loading'>
            <p v-show='!item.loading' v-for='i in 20'>
              {{ i }} - ABCDEFGHIJKLMN
            </p>
          </div>
          <div v-else class='service-loading'>
            <p v-show='!loadingInstance' v-for='i in 20'>   
              {{ i }} - \u725B\u90CE\u5E74\u5E74\u604B\u5218\u5A18\uFF0C\u5218\u5A18\u8FDE\u8FDE\u5FF5\u725B\u90CE\uFF0C<br />\u725B\u90CE\u604B\u5218\u5A18\uFF0C\u5218\u5A18\u5FF5\u725B\u90CE\uFF0C<br />\u90CE\u604B\u5A18\u6765\u5A18\u5FF5\u90CE\u3002
            </p>
          </div> 
        </div>
      </div> 
    </template>
    <script>`,optionsApi:`
      import { getCurrentInstance } from 'vue';
      export default {
        data() {
          return {
            list: [
              { type: '\u6307\u4EE4', loading: true },
              { type: '\u670D\u52A1', loading: true }
            ],
            loadingInstance: null,
            instance: getCurrentInstance()
          }
        },
        methods: {
          openLoading(target) {
            const demo = this.instance.proxy.$loading({
              target
            });
            this.loadingInstance = demo.close;
          },
          toggle(item, index) {
            item.loading = !item.loading;
            if (index !==0 ) {
              if (this.loadingInstance) {
                this.loadingInstance();
                this.loadingInstance = null;
              }
              else this.openLoading('.service-loading');
            }
          }
        },
        mounted() {
          this.openLoading('.service-loading');
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, ref, getCurrentInstance, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = reactive([
                  { type: '\u6307\u4EE4\u65B9\u5F0F', loading: true },
                  { type: '\u670D\u52A1\u65B9\u5F0F', loading: true }
                ]),
                loadingInstance = ref(null),
                instance = getCurrentInstance(),
                openLoading = (target) => {
                  demo = instance.proxy.$loading({
                    target
                  });
                  loadingInstance.value = demo.close;
                },
                toggle = (item, index) => {
                  item.loading = !item.loading;
                  if (index!==0) {
                    if (loadingInstance.value) {
                      loadingInstance.value();
                      loadingInstance.value = null;
                    }
                    else openLoading('.service-loading');
                  }
                };
          onMounted(() => {
            openLoading('.service-loading');
          });
          return { list, toggle, loadingInstance };
        }
      })
    <\/script>`,style:`
    <style>
      .loading-demo {
        display: flex;
        width: 1000px;
      }
      .loading-demo .loading-item {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        width: 46%;
        margin: 1em 0.6em;
      }
      .loading-demo .loading-item .btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .5em 0px;
        width: 100%;
        margin-bottom: 0px !important;
      }
      .loading-item .directive-loading,
      .loading-item .service-loading {
        width: 100%;
        height: 200px;
        border: 2px solid black;
        text-align: center;
      }
      .loading-item .directive-loading p,
      .loading-item .service-loading p{
        margin: 1em;
      }
    </style>`},{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9",desc:"\u53EF\u81EA\u5B9A\u4E49\u52A0\u8F7D\u6587\u5B57\u63CF\u8FF0\u3001\u56FE\u6807\u548C\u80CC\u666F\u8272\u3002",loading:!0,components:[{text:"\u52A0\u8F7D\u4E2D"},{text:"Loading",background:"rgba(0,0,0,.8)"},{spin:2,text:"\u6B63\u5728\u52A0\u8F7D\u4E2D"},{spin:3,text:"\u7A0D\u7B49\u4E00\u4F1A",background:"rgba(0,0,0,.8)"},{spin:4,text:"Loading"},{spin:4,text:"Please wait",background:"rgba(0,0,0,.8)"}],template:`    <template>
      <div class='custom-loading-demo'>
        <div class='btn'>
          <w-button @click='loading=!loading'>
            \u52A0\u8F7D{{ loading ? '\u5B8C\u6210' : '\u4E2D' }}
          </w-button>
        </div>
        <div v-for='item in list' v-loading='loading' :key='item' class='directive-loading'
          :w-loading-text='item.text' :w-loading-spin='item.spin' :w-loading-background='item.background'>
          <p v-for='i in 10'>
            \u9ED1\u7070\u5316\u80A5\u7070\u4F1A\u6325\u53D1\u53D1\u7070\u9ED1\u8BB3\u4E3A\u9ED1\u7070\u82B1\u4F1A\u98DE..
          </p>
        </div>
      </div> 
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            list: [
              { text: '\u52A0\u8F7D\u4E2D'},
              { text: 'Loading', background: 'rgba(0,0,0,.8)' },
              { spin: 2, text: '\u6B63\u5728\u52A0\u8F7D\u4E2D' },
              { spin: 3, text: '\u7A0D\u7B49\u4E00\u4F1A', background: 'rgba(0,0,0,.8)' },
              { spin: 4, text: 'Loading' },
              { spin: 4, text: 'Please wait', background: 'rgba(0,0,0,.8)' }
            ],
            loading: true
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const list = reactive([
                  { text: '\u52A0\u8F7D\u4E2D'},
                  { text: 'Loading', background: 'rgba(0,0,0,.8)' },
                  { spin: 2, text: '\u6B63\u5728\u52A0\u8F7D\u4E2D' },
                  { spin: 3, text: '\u7A0D\u7B49\u4E00\u4F1A', background: 'rgba(0,0,0,.8)' },
                  { spin: 4, text: 'Loading' },
                  { spin: 4, text: 'Please wait', background: 'rgba(0,0,0,.8)' }
                ]),
                loading = ref(true);
          return { list, loading };
        }
      })
    <\/script>`,style:`
    <style>
      .custom-loading-demo {
        width: 1000px;
      }
      .custom-loading-demo .btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .5em 0px;
        width: 100%;
        margin-bottom: 0px !important;    
      }
      .custom-loading-demo .directive-loading {
        width: 100%;
        height: 200px;
        border: 2px solid black;
        text-align: center;
      }
      .custom-loading-demo .directive-loading p {
        margin: 1em;
      }
    </style>`},{title:"\u5168\u5C4F\u52A0\u8F7D",desc:"\u53EF\u5168\u5C4F\u663E\u793A\u52A0\u8F7D\u4E2D",loading:!0,components:[{}],template:`    <template>
      <div>
        <w-button v-loading.fullscreen='fullscreen' type='warning' w-loading-text='\u5168\u5C4F\u52A0\u8F7D\u4E2D\u3002' @click='openFullScreen(null)'>
          \u6307\u4EE4\u65B9\u5F0F
        </w-button>
        &nbsp;&nbsp;
        <w-button type='primary' @click="openFullScreen('service')">
          \u670D\u52A1\u65B9\u5F0F
        </w-button>
      </div>
    </template>
    <script>`,optionsApi:`
      import { getCurrentInstance } from 'vue';
      export default {
        data() {
          return {
            fullscreen: false
          }
        },
        methods: {
          openFullScreen(service) {
            let loadingDemo = null;
            if (service) {
              loadingDemo = getCurrentInstance().proxy.$loading({
                lock: true,
                text: '\u5168\u5C4F\u52A0\u8F7D\u4E2D\u3002\u3002',
                spin: 3,
                background: 'rgba(0, 0, 0, 0.7)',
                customClass: 'china'
              });
            }
            else this.fullscreen = true;
            setTimeout(() => {
              service ? loadingDemo.close() : this.fullscreen = false;
            }, 2000);
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, getCurrentInstance, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const fullscreen = ref(false);
                openFullScreen = (service) => {
                  let loadingDemo = null;
                  if (service) {
                    loadingDemo = getCurrentInstance().proxy.$loading({
                      lock: true,
                      text: '\u5168\u5C4F\u52A0\u8F7D\u4E2D\u3002\u3002',
                      spin: 3,
                      background: 'rgba(0, 0, 0, 0.7)',
                      customClass: 'china'
                    });
                  }
                  else fullscreen.value = true;
                  setTimeout(() => {
                    service ? loadingDemo.close() : fullscreen.value = false;
                  }, 2000);
                };
          return { fullscreen, openFullScreen };
        }
      }) 
    <\/script>`}]),H={attribute:[{name:"target",desc:"\u4F20\u5165\u5B57\u7B26\u4E32\uFF0C\u4F1A\u5C06\u5176\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165 document.querySelector \u4EE5\u83B7\u53D6\u5230\u5BF9\u5E94 DOM \u8282\u70B9",type:"string",optional:"\u2014\u2014",default:"body"},{name:"body",desc:"\u540C v-loading \u6307\u4EE4\u4E2D\u7684 body \u4FEE\u9970\u7B26",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"fullscreen",desc:"\u540C v-loading \u6307\u4EE4\u4E2D\u7684 fullscreen \u4FEE\u9970\u7B26",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"text",desc:"\u663E\u793A\u5728\u52A0\u8F7D\u56FE\u6807\u4E0B\u65B9\u7684\u52A0\u8F7D\u6587\u6848",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"spin",desc:"\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807\u7C7B\u540D",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"background",desc:"\u906E\u7F69\u80CC\u666F\u8272",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"},{name:"custom-class",desc:"Loading \u7684\u81EA\u5B9A\u4E49\u7C7B\u540D",type:"string",optional:"\u2014\u2014",default:"\u2014\u2014"}]};const P={class:"loading-demo-list"},G={key:0,class:"btn"},J={class:"btn"},K={key:0,class:"directive-loading"},q={key:1,class:"service-loading"},z=d("br",null,null,-1),O=l(" \u725B\u90CE\u604B\u5218\u5A18\uFF0C\u5218\u5A18\u5FF5\u725B\u90CE\uFF0C"),R=d("br",null,null,-1),Q=l(" \u90CE\u604B\u5A18\u6765\u5A18\u5FF5\u90CE\u3002 "),U=["w-loading-text","w-loading-spin","w-loading-background"],W=l(" \u6307\u4EE4\u65B9\u5F0F "),X=l("\xA0\xA0 "),Y=l(" \u670D\u52A1\u65B9\u5F0F "),ne=N({setup(Z){f(!0);const m=f(!0),u=f(null),x=f(!1),w=a=>{let t;a?t=A({lock:!0,text:"\u5168\u5C4F\u52A0\u8F7D\u4E2D\u3002\u3002",spin:3,background:"rgba(0, 0, 0, 0.7)",customClass:"china"}):x.value=!0,setTimeout(()=>{a?t.close():x.value=!1},2e3)},F=a=>{const t=A({target:a});u.value=t.close},E=(a,t)=>{a.loading=!a.loading,t!==0&&(u.value?(u.value(),u.value=null):F(".service-loading"))};return T(()=>{F(".service-loading")}),(a,t)=>{const v=C("w-button"),B=C("DemoItem"),S=C("TableList"),y=M("loading");return e(),n("div",P,[(e(!0),n(s,null,r(L(V),(k,_)=>(e(),h(B,{item:k,key:k.title},{default:c(()=>[_===1?(e(),n("div",G,[b(v,{onClick:t[0]||(t[0]=i=>m.value=!m.value)},{default:c(()=>[l(" \u52A0\u8F7D"+g(m.value?"\u5B8C\u6210":"\u4E2D"),1)]),_:1})])):j("",!0),(e(!0),n(s,null,r(k.components,(i,D)=>(e(),n("div",{key:i},[_===0?(e(),n(s,{key:0},[d("div",J,[d("p",null,g(i.type)+"\u65B9\u5F0F",1),b(v,{onClick:o=>E(i,D)},{default:c(()=>[l(" \u52A0\u8F7D"+g(i.loading?"\u5B8C\u6210":"\u4E2D"),1)]),_:2},1032,["onClick"])]),D===0?p((e(),n("div",K,[(e(),n(s,null,r(20,o=>p(d("p",{key:o},g(o)+" - ABCDEFGHIJKLMN ",1),[[I,!i.loading]])),64))])),[[y,i.loading]]):(e(),n("div",q,[(e(),n(s,null,r(20,o=>p(d("p",{key:o},[l(g(o)+" - \u725B\u90CE\u5E74\u5E74\u604B\u5218\u5A18\uFF0C\u5218\u5A18\u8FDE\u8FDE\u5FF5\u725B\u90CE\uFF0C",1),z,O,R,Q]),[[I,!u.value]])),64))]))],64)):_===1?p((e(),n("div",{key:1,class:"directive-loading","w-loading-text":i.text,"w-loading-spin":i.spin,"w-loading-background":i.background},[(e(),n(s,null,r(10,o=>d("p",null,"\u9ED1\u7070\u5316\u80A5\u7070\u4F1A\u6325\u53D1\u53D1\u7070\u9ED1\u8BB3\u4E3A\u9ED1\u7070\u82B1\u4F1A\u98DE..")),64))],8,U)),[[y,m.value]]):(e(),n(s,{key:2},[p((e(),h(v,{type:"warning","w-loading-text":"\u5168\u5C4F\u52A0\u8F7D\u4E2D\u3002",onClick:t[1]||(t[1]=o=>w(null))},{default:c(()=>[W]),_:1})),[[y,x.value,void 0,{fullscreen:!0}]]),X,b(v,{type:"primary",onClick:t[2]||(t[2]=o=>w("service"))},{default:c(()=>[Y]),_:1})],64))]))),128))]),_:2},1032,["item"]))),128)),b(S,{data:L(H)},null,8,["data"])])}}});export{ne as default};
