import{r as k,d as N,m as b,C as O,a as u,L as M,o as s,g as a,H as w,I as B,c as x,w as n,b as t,k as c,P as W,h as e,t as P,R as y,z as q,y as m}from"./vendor.c0366ad2.js";import{a as G}from"./axios.92a82b3e.js";var J=G.exports;const Q=k([{title:"\u57FA\u672C\u7528\u6CD5",desc:"\u8BBE\u7F6E rows \u5C5E\u6027\uFF0C\u4FEE\u6539\u9AA8\u67B6\u5C4F\u6BB5\u843D\u6570\u91CF\uFF0C\u9ED8\u8BA4\u662F4\u3002",components:[{}],template:`    <template>
      <w-skeleton />
    </template>`},{title:"\u8BBE\u7F6E\u884C\u6570",desc:"\u53EF\u81EA\u5B9A\u4E49\u884C\u6570\uFF0C\u4EE5\u4FBF\u66F4\u63A5\u8FD1\u771F\u5B9E\u6E32\u67D3\u6548\u679C\u3002\u9996\u884C\u4F1A\u88AB\u6E32\u67D3\u957F\u5EA6\u4E3A 33% \u7684\u6BB5\u9996\uFF0C\u5C3E\u884C\u4F1A\u88AB\u6E32\u67D3\u957F\u5EA6\u4E3A 61% \u7684 \u6BB5\u5C3E\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5176\u6837\u5F0F\u3002",rows:5,components:[{}],template:`    <template>
      <div class='skeleton-rows-demo'>
        <div class='options'>
          <div>
            <span>\u884C\u6570\uFF1A</span>
            <w-input-number v-model='rows' size='small' :min='1' :max='66' />
          </div>
          <w-divider style='margin-right:0' /> 
        </div>
        <w-skeleton :rows='rows' />
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            rows: 5
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const rows = ref(5);
          return { rows };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>  
      .skeleton-rows-demo {
        max-width: 900px;
        margin: 1em;
        .options {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 2em;
          > div {
            display: flex;
            align-items: center;
          }
        }
        .w-skeleton-item:first-child {
          max-width: 310px;
          margin: 0px auto;
        }
      }
    </style>`},{title:"\u7ED1\u5B9Aloading",desc:`\u7ED9 Skeleton \u8BBE\u7F6E loading \u5C5E\u6027\uFF0C\u5207\u6362\u663E\u793A Skeleton \u8FD8\u662F\u771F\u5B9E\u7684UI\u3002<br>
      \u4F7F\u7528\u9ED8\u8BA4\u63D2\u69FD\uFF0C\u8BBE\u7F6E\u771F\u5B9E\u7684DOM\u7ED3\u6784\uFF0C\u4F7F\u7528 template \u63D2\u69FD\uFF0C\u8BBE\u7F6E Skeleton \u7684\u7ED3\u6784\uFF0C\u4F7F\u7528 content \u63D2\u69FD\uFF0C\u8BBE\u7F6E Skeleton \u91CC\u7684\u5185\u5BB9`,animated:!0,components:[{loading:!0},{loading:!0,avator:!0,rows:3},{loading:!0,card:!0}],template:`    <template>
      <div class='skeleton-demo'>
        <div class='options'>
          <div>
            <span>\u52A8\u753B\uFF1A</span>
            <w-switch v-model='animated' text-inline open-text='\u6709' off-text='\u65E0' />
          </div>
          <w-divider style='margin-right:0' /> 
        </div>
        <div v-for='(item, index) in skeletonList' :key='item' class='skeleton-list'>
          <div class='toggle-loading'>
            <span>\u5207\u6362 Loading\uFF1A</span>
            <w-switch v-model='item.loading' text-inline open-text='true' off-text='false' />
          </div>
          <w-skeleton :animated='animated' :rows='item.rows' :loading='item.loading' :avator='item.avator'>
            <div v-if='index===0' class='skeleton-default-real-content'>
              <h3 class='title'>
                \u4ECA\u5E74\u8BB0\u8005\u4F1A\uFF0C\u603B\u7406\u56DE\u7B54\u4E86\u8FD9\u4E9B\u70ED\u70B9\u95EE\u9898\uFF01
              </h3>
              <p class='content'>
                3\u670811\u65E5\u4E0B\u5348\uFF0C\u5341\u4E09\u5C4A\u5168\u56FD\u4EBA\u5927\u56DB\u6B21\u4F1A\u8BAE\u95ED\u5E55\u540E\uFF0C\u56FD\u52A1\u9662\u603B\u7406\u674E\u514B\u5F3A\u5728\u4EBA\u6C11\u5927\u4F1A\u5802\u4E09\u697C\u91D1\u8272\u5927\u5385\u51FA\u5E2D\u8BB0\u8005\u4F1A\u5E76\u56DE\u7B54\u4E2D\u5916\u8BB0\u8005\u63D0\u95EE\u3002
                \u5C31\u4E1A\u4F18\u5148\u3001\u201C\u653E\u7BA1\u670D\u201D\u6539\u9769\u3001\u201C\u7231\u56FD\u8005\u6CBB\u6E2F\u201D\u2026\u2026\u603B\u7406\u4ECA\u5E74\u90FD\u56DE\u7B54\u4E86\u54EA\u4E9B\u95EE\u9898\uFF1F\u54EA\u4E9B\u4E0E\u6211\u4EEC\u606F\u606F\u76F8\u5173\uFF1F<br>
              </p>
            </div>
            <div v-else-if='item.avator' class='skeleton-avator-real-content'> 
              <w-image class='avator' src='https://cdn.pixabay.com/photo/2021/02/12/09/36/sunflowers-6007847_960_720.jpg' :previewList="['https://cdn.pixabay.com/photo/2021/02/12/09/36/sunflowers-6007847_960_720.jpg']" />
              <div class='content-box'>
                <p>
                  \u8FD9\u4E16\u4E0A\u4ECE\u6CA1\u6709\u767D\u8D39\u7684\u52AA\u529B\uFF0C\u4E5F\u6CA1\u6709\u78B0\u5DE7\u7684\u6210\u529F\u3002\u5F88\u591A\u770B\u4F3C\u649E\u5927\u8FD0\u7684\u6210\u529F\u7ECF\u5386\uFF0C\u5F80\u5F80\u6E90\u4E8E\u66FE\u7ECF\u4E00\u6BB5\u770B\u4E0D\u5230\u5149\u660E\u7684\u9ED8\u9ED8\u4ED8\u51FA\u3002\u547D\u8FD0\u5728\u7528\u8FD9\u6837\u7684\u65B9\u5F0F\u544A\u8BC9\u6211\u4EEC\uFF0C\u53EA\u8981\u8BA4\u771F\u5BF9\u5F85\u751F\u6D3B\uFF0C\u7EC8\u6709\u4E00\u5929\uFF0C\u4F60\u7684\u6BCF\u4E00\u4EFD\u52AA\u529B\uFF0C\u90FD\u5C06\u7EDA\u70C2\u6210\u82B1\u3002
                </p>
              </div>
              <div class='space-between'>
                <span class="time">2021\u5E742\u670811\u65E5</span>
                <div>
                  <w-button type='text' class='button'>\u70B9\u8D5E</w-button>
                  <w-button type='text' class='button'>\u56DE\u590D</w-button>
                </div>
              </div>
            </div>
            <w-card v-else-if='item.card' class='skeleton-card-real-content' 
              :body-style="{padding:'0px'}">
              <img src='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=339371062,20206753&fm=199&app=68&f=JPEG?w=750&h=750&s=FF885B28471E4FCC4AFC7AC20300A0A5' class='image' />
              <div class='bottom'>
                <span>
                  \u4E1D\u5149\u68C9\u7EAF\u68C9\u886C\u886B\u7537\u957F\u8896\u4FEE\u8EAB\u97E9\u7248\u6F6E\u6D41\u7537\u58EB\u514D\u70EB\u6297\u76B1\u6B63\u88C5\u5546\u52A1\u4F11\u95F2\u886C\u8863
                </span>
                <div class='space-between' style='margin:0'>
                  <w-button type='text' class='button'>
                    \u5929\u732B\u65D7\u8230\u5E97
                  </w-button>
                  <w-button type='text' class='button'>
                    \u67E5\u770B\u8BE6\u60C5
                  </w-button>
                </div>
              </div>
            </w-card>

            <template v-if='item.avator' #content>
              <div class='space-between'>
                <w-skeleton-item style='width:100px;' />
                <w-skeleton-item style='width:80px;' />
              </div>
            </template>
            <template v-else-if='item.card' #template>
              <div class='skeleton-card'>
                <w-skeleton-item type='image' />
                <div class='bottom'>
                  <w-skeleton-item />
                  <w-skeleton-item />
                  <w-skeleton-item style='width:26%' />
                  <div class='space-between'>
                    <w-skeleton-item type='text' />
                    <w-skeleton-item type='text' />
                  </div>
                </div>
              </div>
            </template>
          </w-skeleton>
          <w-divider v-if='index!==skeletonList.length-1' /> 
        </div>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            animated: true,
            skeletonList: [
              { loading: true },
              { loading: true, avator: true, rows: 3 },
              { loading: true, card: true }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const animated = ref(true);
                skeletonList = reactive([
                  { loading: true },
                  { loading: true, avator: true, rows: 3 },
                  { loading: true, card: true }
                ]);
          return { animated, skeletonList };
        }
      })
    <\/script>`,style:`
    <script lang='scss'>
      .skeleton-demo {
        max-width: 900px;
        margin: 1em;
        .options {
          display: flex;
          flex-wrap: wrap;
          margin-top: 0;
          margin-bottom: 0;
          > div {
            display: flex;
            align-items: center;
          }
        }
        > div {
          margin-top: 2em;
        }
        .skeleton-list {
          > .toggle-loading {
            display: flex;
            margin-bottom: 2em;
            width: 100%;
          }
          .w-skeleton {
            max-width: 650px;
          }
          &:nth-of-type(2) {
            .skeleton-default-real-content {
              max-width: 650px;
              > .title {
                font-weight: 600;
                margin-bottom: 15px;
                text-align: center;
                font-size: 17px;
              }
              > .content {
                margin-top: 16px;
                line-height: 1.8;
                text-indent: 2em;
              }
            }
            .w-skeleton {
              min-height: 117px;
              :deep(.w-skeleton-content) {
                .is-first {
                  width: 300px;
                  margin: 0px auto;
                  margin-bottom: 2.3em;
                }
                :nth-of-type(2) {
                  width: auto;
                  margin-left: 2em;
                }
              }
            }
          }
          &:nth-of-type(3) {
            .w-skeleton {
              :deep(.w-skeleton-content) {
                .is-first {
                  width: 100%;
                }
              }
              :deep(.w-skeleton-avator) {
                width: 50px;
                height: 50px;
              }
            }
            .skeleton-avator-real-content {
              display: flex;
              flex-wrap: wrap;
              max-width: 650px;
              min-height: 137px;
              > .content-box {
                flex: 1;
                > p {
                  line-height: 1.7;
                }
              }
              > .avator {
                margin-right: 1em;
                  width: 50px;
                  height: 50px;
                  border-radius: 50%;
              }
              > .space-between {
                margin-left: 65px;
                > div {
                  display: flex;
                  > .w-button {
                    padding: .6em .5em;
                  }
                }
              }
            }
          }
          &:nth-of-type(4) {
            .skeleton-card {
              width: 237px;
              height: 360px;
              &-real-content {
                width: 237px;
                height: 360px;
                .image {
                  height: 237px;
                  +.bottom {
                    padding: 8px;
                    .space-between {
                      .w-button {
                        &:first-child {
                          color: #999;
                          padding-left: 0;
                        }
                        &:last-child {
                          color: rgb(130 164 241);
                          padding-right: 0;
                        }
                      }
                    }
                  }
                }
              }
              >.w-skeleton-item-image {
                 height: 237px;
              }
              >.bottom {
                padding: 6px 6px 0px;
                > * {
                  margin-top: 10px;
                }
                > .space-between {
                  .w-skeleton-item {
                    width: 85px;
                  }
                }
              }
            }
          }
          .space-between {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 10px 0px;
            .w-button {
              padding: 8px 0;
            }
            .time {
              font-size: 13px;
              color: rgb(153, 153, 153);
            }
          }
        }
      }
    <\/script>`},{title:"\u7ED3\u5408Infinite",desc:"\u7ED9\u6307\u5B9A\u5BB9\u5668\u6DFB\u52A0 v-infinite-scroll \u6307\u4EE4\uFF0C\u6307\u5B9A\u52A0\u8F7D\u51FD\u6570\uFF0C\u540C\u65F6\u7ED9 Skeleton \u8BBE\u7F6E loading \u5C5E\u6027\uFF0C\u5F53\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\uFF0C\u53EF\u4FEE\u6539 Skeleton \u7684 count \u5C5E\u6027\uFF0C\u589E\u52A0\u6570\u636E\u3002",animated:!0,components:[{loading:!0,count:3}],template:`    <template>
      <div class='skeleton-infinite-demo'>
        <div class='toggle-loading'>
          <span>\u5207\u6362 Loading\uFF1A</span>
          <w-switch v-model='loading' :loading='switchLoading' text-inline open-text='true' off-text='false' />
        </div>
        <div class='multi-content' v-infinite-scroll='setLoading'>
          <w-skeleton :loading='loading' animated :count='count'>
            <template #template>
              <div>
                <w-skeleton-item type='image' />
                <div style='padding:8px 14px;'>
                  <w-skeleton-item type='h3' style='width:90px;' />
                  <div class='space-between' style='margin-top:12px;height: 16px;'>
                    <w-skeleton-item type='text' style='width:100px;' />
                    <w-skeleton-item type='text' style='width:80px;' />
                  </div>
                </div>
              </div>
            </template>
            <w-card  v-for='item in lists' :key='item'
              :body-style="{padding:'6px 6px 6px'}">
              <img :src='item.imgUrl' class='image' />
              <div style='padding:6px 14px 0;'>
                <span>{{item.name}}</span>
                <div class='space-between'>
                  <span class='time'>2021\u5E742\u670811\u65E5</span>
                  <w-button type='text' class='button'>
                    \u64CD\u4F5C\u6309\u94AE
                  </w-button>
               </div>
              </div>
            </w-card>
          </w-skeleton>
        </div>
      </div>
    </template>
    <script>
      import axios from 'axios';`,optionsApi:`
      export default {
        data(){
          return{
            switchLoading: false,
            loading: false,
            count: 3,
            lists: [
              {
                imgUrl: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                name: '1. \u9E7F'
              },
              {
                imgUrl: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                name: '2. \u9A6C'
              },
              {
                imgUrl: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                name: '3. \u5C71\u72EE'
              }
            ]
          }
        },
        methods: {
          setLoading() {
            if (!this.loading) {
              this.loading = true;
              setTimeout(() => this.switchLoading = true);
              setTimeout(async () => {
                const obj = 3;
                for(let i = 0; i < 3; i++){
                  await axios('https://api.uomg.com/api/rand.img1?sort=%E6%B1%BD%E8%BD%A6&format=json').then(res => {
                    const { code, imgurl } = res.data;
                    code === 1 && this.lists.push({
                      imgUrl: imgurl,
                      name: (this.lists.length + 1) + '. ??\u8F66'
                    });
                  })
                }
                this.count = this.lists.length;
                this.loading = this.switchLoading = false;
              }, 600);
            }
          }
        }
      }
    <\/script>`,compositionApi:`
      import { ref, reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const switchLoading = ref(false);
                loading = ref(false);
                count = ref(3);  
                lists = reactive([
                  {
                    imgUrl: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                    name: '1. \u9E7F'
                  },
                  {
                    imgUrl: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    name: '2. \u9A6C'
                  },
                  {
                    imgUrl: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                    name: '3. \u5C71\u72EE'
                  }
                ]),
                setLoaing = () => {
                  if (!loading.value) {
                    loading.value = true;
                    setTimeout(() => switchLoading.value = true);
                    setTimeout(async() => {
                      const obj = 3;
                      for(const i = 0; i < 3; i++) {
                        await axios('https://api.uomg.com/api/rand.img1?sort=%E6%B1%BD%E8%BD%A6&format=json').then(res => {
                          const { code, imgurl } = res.data;
                          code ===1 && lists.push({
                            imgUrl: imgurl,
                            name: (lists.length + 1) + '. \u8F66\u5B50'
                          });
                        })
                      }
                      count.value = lists.length;
                      loading.value = switchLoading.value = false;
                    }, 600);
                  }
                };
          return { switchLoading, loading, count, lists, setLoading };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .skeleton-infinite-demo {
        margin: 1em;
        > .toggle-loading {
          display: flex;
          margin-bottom: 2em;
          width: 100%;
          align-items: center;
        }
        > .multi-content {
          height: 350px;
          width: 421px;
          border: 3px solid blue;
          overflow: auto;
          .w-skeleton {
            > div {
              padding: 6px 6px 6px; 
              height: 345px;
            }
          }
          > .w-card {
            height: 345px;
            .bottom {
              padding: 6px 14px 0;
            }
          }
          .image,
          .w-skeleton-item-image {
            width: 100%;
            height: 267px;
          }
          .space-between {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0;
            .time {
              font-size: 13px;
              color: #999;
            }
          }
        }
      }
    </style>`}]),Z={attribute:[{name:"loading",desc:"\u662F\u5426\u5728\u52A0\u8F7D\u4E2D (\u4E0D\u663E\u793A\u771F\u5B9E\u7684DOM)",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"rows",desc:"\u6BB5\u843D\u7684\u6570\u91CF",type:"number",optional:"\u6B63\u6574\u6570",default:4},{name:"count",desc:"\u6E32\u67D3\u591A\u5C11\u4E2A template, \u5EFA\u8BAE\u4F7F\u7528\u5C3D\u53EF\u80FD\u5C0F\u7684\u6570\u5B57",type:"number",optional:"\u6B63\u6574\u6570",default:1},{name:"animated",desc:"\u662F\u5426\u663E\u793A\u52A8\u753B",type:"boolean",optional:"\u2014\u2014",default:!1},{name:"avator",desc:"\u662F\u5426\u6709\u5934\u50CF (\u9002\u7528\u4E8E\u8BC4\u8BBA\u5217\u8868)",type:"boolean",optional:"\u2014\u2014",default:!1}],slot:[{name:"default",desc:"\u771F\u5B9E\u7684DOM\u7ED3\u6784"},{name:"template",desc:"\u81EA\u5B9A\u4E49\u9AA8\u67B6\u5C4F\u7ED3\u6784"},{name:"content",desc:"\u81EA\u5B9A\u4E49\u9AA8\u67B6\u5C4F\u91CC\u7684\u5185\u5BB9"}]},H={attribute:[{name:"type",desc:"\u5F53\u524D\u663E\u793A\u7684\u5360\u4F4D\u7684\u5143\u7D20\u540D\u79F0",type:"string",optional:"p / text / h1 / h3 / text / caption / button / image / circle / rect",default:"text"}]};const R={class:"skeleton-demo-list"},$={key:0,class:"options"},K={key:0,class:"options"},X=e("span",null,"\u884C\u6570\uFF1A",-1),Y={key:1,style:{display:"flex"}},ee=e("span",null,"\u52A8\u753B\uFF1A",-1),te={key:0,class:"toggle-loading"},se=e("span",null,"\u5207\u6362 Loading\uFF1A",-1),oe={class:"space-between"},ae={key:0,class:"skeleton-default-real-content"},ne=e("h3",{class:"title"},"\u4ECA\u5E74\u8BB0\u8005\u4F1A\uFF0C\u603B\u7406\u56DE\u7B54\u4E86\u8FD9\u4E9B\u70ED\u70B9\u95EE\u9898\uFF01",-1),ie=e("p",{class:"content"},[m(" 3\u670811\u65E5\u4E0B\u5348\uFF0C\u5341\u4E09\u5C4A\u5168\u56FD\u4EBA\u5927\u56DB\u6B21\u4F1A\u8BAE\u95ED\u5E55\u540E\uFF0C\u56FD\u52A1\u9662\u603B\u7406\u674E\u514B\u5F3A\u5728\u4EBA\u6C11\u5927\u4F1A\u5802\u4E09\u697C\u91D1\u8272\u5927\u5385\u51FA\u5E2D\u8BB0\u8005\u4F1A\u5E76\u56DE\u7B54\u4E2D\u5916\u8BB0\u8005\u63D0\u95EE\u3002 \u5C31\u4E1A\u4F18\u5148\u3001\u201C\u653E\u7BA1\u670D\u201D\u6539\u9769\u3001\u201C\u7231\u56FD\u8005\u6CBB\u6E2F\u201D\u2026\u2026\u603B\u7406\u4ECA\u5E74\u90FD\u56DE\u7B54\u4E86\u54EA\u4E9B\u95EE\u9898\uFF1F\u54EA\u4E9B\u4E0E\u6211\u4EEC\u606F\u606F\u76F8\u5173\uFF1F"),e("br")],-1),le=[ne,ie],ue={key:1,class:"skeleton-avator-real-content"},de=e("div",{class:"content-box"},[e("p",null," \u8FD9\u4E16\u4E0A\u4ECE\u6CA1\u6709\u767D\u8D39\u7684\u52AA\u529B\uFF0C\u4E5F\u6CA1\u6709\u78B0\u5DE7\u7684\u6210\u529F\u3002\u5F88\u591A\u770B\u4F3C\u649E\u5927\u8FD0\u7684\u6210\u529F\u7ECF\u5386\uFF0C\u5F80\u5F80\u6E90\u4E8E\u66FE\u7ECF\u4E00\u6BB5\u770B\u4E0D\u5230\u5149\u660E\u7684\u9ED8\u9ED8\u4ED8\u51FA\u3002\u547D\u8FD0\u5728\u7528\u8FD9\u6837\u7684\u65B9\u5F0F\u544A\u8BC9\u6211\u4EEC\uFF0C\u53EA\u8981\u8BA4\u771F\u5BF9\u5F85\u751F\u6D3B\uFF0C\u7EC8\u6709\u4E00\u5929\uFF0C\u4F60\u7684\u6BCF\u4E00\u4EFD\u52AA\u529B\uFF0C\u90FD\u5C06\u7EDA\u70C2\u6210\u82B1\u3002 ")],-1),pe={class:"space-between"},ce=e("span",{class:"time"},"2021\u5E742\u670811\u65E5",-1),me=m("\u70B9\u8D5E"),re=m("\u56DE\u590D"),ge=e("img",{src:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=339371062,20206753&fm=199&app=68&f=JPEG?w=750&h=750&s=FF885B28471E4FCC4AFC7AC20300A0A5",class:"image"},null,-1),fe={class:"bottom"},he=e("span",null," \u4E1D\u5149\u68C9\u7EAF\u68C9\u886C\u886B\u7537\u957F\u8896\u4FEE\u8EAB\u97E9\u7248\u6F6E\u6D41\u7537\u58EB\u514D\u70EB\u6297\u76B1\u6B63\u88C5\u5546\u52A1\u4F11\u95F2\u886C\u8863 ",-1),we={class:"space-between",style:{margin:"0"}},xe=m(" \u5929\u732B\u65D7\u8230\u5E97 "),ve=m(" \u67E5\u770B\u8BE6\u60C5 "),_e={class:"toggle-loading"},be=e("span",null,"\u5207\u6362 Loading\uFF1A",-1),ye={class:"multi-content"},Ee={style:{padding:"8px 14px"}},Fe={class:"space-between",style:{"margin-top":"12px",height:"16px"}},ke=["src"],Be={class:"bottom"},Ce={class:"space-between"},De=e("span",{class:"time"}," 2021\u5E742\u670811\u65E5 ",-1),Ae=m(" \u64CD\u4F5C\u6309\u94AE "),je=m("Skeleton Item"),Se=N({setup(Le){const r=b(!1),E=b(!1),C=b(3),D="https://cdn.pixabay.com/photo/2021/02/12/09/36/sunflowers-6007847_960_720.jpg",v=k([{imgUrl:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",name:"1. \u9E7F"},{imgUrl:"https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",name:"2. \u9A6C"},{imgUrl:"https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",name:"3. \u5C71\u72EE"}]);b(5);const V=S=>{r.value||(r.value=!0,setTimeout(()=>E.value=!0),setTimeout(async()=>{for(let g=0;g<3;g++)await J("https://api.uomg.com/api/rand.img1?sort=%E6%B1%BD%E8%BD%A6&format=json").then(F=>{let{code:f,imgurl:_}=F.data;f===1&&v.push({imgUrl:_,name:v.length+1+". \u8F66\u5B50"})});C.value=v.length,r.value=E.value=!1},600))};return k([{value:5,width:350,height:14,max:10,marks:{2:"2",5:"5",8:"8"}},{value:5,height:6,step:.1,max:10,marks:{2:"2",5:{style:{color:"blue",fontWeight:"bold"},label:"5"},8:"8"}},{value:50,width:14,height:200,max:100,min:0,vertical:!0,marks:{35:"35\xB0",50:{style:{color:"green",fontWeight:"bold"},label:"50\xB0"},75:"75\xB0"}}]),O(()=>{}),(S,g)=>{const F=u("w-input-number"),f=u("w-switch"),_=u("w-divider"),i=u("w-skeleton-item"),T=u("w-image"),h=u("w-button"),A=u("w-card"),j=u("w-skeleton"),I=u("DemoItem"),L=u("TableList"),z=M("infinite-scroll");return s(),a("div",R,[(s(!0),a(w,null,B(y(Q),(l,d)=>(s(),x(I,{item:l,key:l.title},{default:n(()=>[d===1||d===2?(s(),a("div",$,[d===1?(s(),a("div",K,[X,t(F,{modelValue:l.rows,"onUpdate:modelValue":o=>l.rows=o,size:"small",min:1,max:66},null,8,["modelValue","onUpdate:modelValue"])])):c("",!0),d===2?(s(),a("div",Y,[ee,t(f,{modelValue:l.animated,"onUpdate:modelValue":o=>l.animated=o,"text-inline":"","open-text":"\u6709","off-text":"\u65E0"},null,8,["modelValue","onUpdate:modelValue"])])):c("",!0),t(_,{style:{"margin-right":"0"}})])):c("",!0),(s(!0),a(w,null,B(l.components,(o,U)=>(s(),a("div",{key:o},[d===2?(s(),a("div",te,[se,t(f,{modelValue:o.loading,"onUpdate:modelValue":p=>o.loading=p,"text-inline":"","open-text":"true","off-text":"false"},null,8,["modelValue","onUpdate:modelValue"])])):c("",!0),d!==3?(s(),x(j,{key:1,animated:l.animated,rows:l.rows||o.rows,loading:o.loading,count:l.count,avator:o.avator},W({default:n(()=>[d===2?(s(),a(w,{key:0},[U===0?(s(),a("div",ae,le)):o.avator?(s(),a("div",ue,[t(T,{class:"avator",src:D,previewList:[D]},null,8,["previewList"]),de,e("div",pe,[ce,e("div",null,[t(h,{type:"text",class:"button"},{default:n(()=>[me]),_:1}),t(h,{type:"text",class:"button"},{default:n(()=>[re]),_:1})])])])):o.card?(s(),x(A,{key:2,class:"skeleton-card-real-content","body-style":{padding:"0px"}},{default:n(()=>[ge,e("div",fe,[he,e("div",we,[t(h,{type:"text",class:"button"},{default:n(()=>[xe]),_:1}),t(h,{type:"text",class:"button"},{default:n(()=>[ve]),_:1})])])]),_:1})):c("",!0)],64)):c("",!0)]),_:2},[o.avator?{name:"content",fn:n(()=>[e("div",oe,[t(i,{style:{width:"100px"}}),t(i,{style:{width:"80px"}})])])}:o.card?{name:"template",fn:n(()=>[e("div",{class:"skeleton-card"},[t(i,{type:"image"}),e("div",{class:"bottom"},[t(i),t(i),t(i,{style:{width:"26%"}}),e("div",{class:"space-between"},[t(i,{type:"text"}),t(i,{type:"text"})])])])])}:void 0]),1032,["animated","rows","loading","count","avator"])):(s(),a(w,{key:2},[e("div",_e,[be,t(f,{modelValue:r.value,"onUpdate:modelValue":g[0]||(g[0]=p=>r.value=p),loading:E.value,"text-inline":"","open-text":"true","off-text":"false"},null,8,["modelValue","loading"])]),P((s(),a("div",ye,[t(j,{loading:r.value,animated:"",count:C.value},{template:n(()=>[e("div",null,[t(i,{type:"image"}),e("div",Ee,[t(i,{type:"h3",style:{width:"90px"}}),e("div",Fe,[t(i,{type:"text",style:{width:"100px"}}),t(i,{type:"text",style:{width:"80px"}})])])])]),default:n(()=>[(s(!0),a(w,null,B(y(v),p=>(s(),x(A,{key:p,"body-style":{padding:"6px 6px 6px"}},{default:n(()=>[e("img",{src:p.imgUrl,class:"image"},null,8,ke),e("div",Be,[e("span",null,q(p.name),1),e("div",Ce,[De,t(h,{type:"text",class:"button"},{default:n(()=>[Ae]),_:1})])])]),_:2},1024))),128))]),_:2},1032,["loading","count"])])),[[z,V]])],64)),U!==l.components.length-1?(s(),x(_,{key:3})):c("",!0)]))),128))]),_:2},1032,["item"]))),128)),t(L,{data:y(Z)},null,8,["data"]),t(L,{data:y(H)},{default:n(()=>[je]),_:1},8,["data"])])}}});export{Se as default};
