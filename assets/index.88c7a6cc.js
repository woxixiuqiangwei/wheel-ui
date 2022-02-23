import{r as C,d as A,m,a as r,o,g as a,H as d,I as b,c as j,w as l,b as i,k as I,y as n,z as v,R as g,h as P}from"./vendor.c0366ad2.js";const H=C([{title:"\u57FA\u7840\u7528\u6CD5",desc:"\u8BBE\u7F6E current-index \u5C5E\u6027\uFF0C\u4FEE\u6539\u8F6E\u64AD\u56FE\u521D\u59CB\u72B6\u6001\u6FC0\u6D3B\u7684\u7D22\u5F15\uFF0C\u4ECE 0 \u5F00\u59CB\u3002\u8BBE\u7F6E width \u5C5E\u6027\uFF0C\u4FEE\u6539\u8F6E\u64AD\u56FE\u7684\u5BBD\u5EA6 (\u9ED8\u8BA4\u4E3A100%)\u3002 \u8BBE\u7F6E height \u5C5E\u6027\uFF0C\u4FEE\u6539\u8F6E\u64AD\u56FE\u7684\u5BBD\u5EA6 (\u9ED8\u8BA4\u4E3A200px)\u3002",components:[{label:"(\u9ED8\u8BA4) Hover \u6307\u793A\u5668\u65F6\u89E6\u53D1",currentIndex:-999},{label:"Click \u6307\u793A\u5668\u65F6\u89E6\u53D1",trigger:"click"}],template:`    <template>
      <div>
        <w-carousel v-for='item in carouselList' :trigger='item.trigger'>
          <w-carousel-item v-for='carousel in 4' :key='carousel'>
            <h3>
              {{ carousel }}<br>
              {{ item.label }}
            </h3>
          </w-carousel-item>
        </w-carousel>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            carouselList: [
              { label:'(\u9ED8\u8BA4) Hover \u6307\u793A\u5668\u65F6\u89E6\u53D1' },
              { label:'Click \u6307\u793A\u5668\u65F6\u89E6\u53D1', trigger: 'click' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const carouselList = [
            {label: '(\u9ED8\u8BA4) Hover \u6307\u793A\u5668\u65F6\u89E6\u53D1'},
            {label: 'Click \u6307\u793A\u5668\u65F6\u89E6\u53D1', trigger: 'click' }
          ]
          return { carouselList };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .carousel-test-demo {
        .w-carousel {  
          margin: 10px 0;
          display: flex;
          &-container {
            .w-carousel-item {
              display: flex;
              align-items: center;
              justify-content: center;
              background: blue;
              &:nth-of-type(2) {
                background: gold;
              }
              &:nth-of-type(3) {
                background: green;
              }
              &:nth-of-type(4) {
                background: gray;
              }
            }
          }
        }
      }
    </style>`},{title:"\u5207\u6362\u65F6\u673A",desc:"\u8BBE\u7F6E autoplay \u5C5E\u6027\uFF0C\u4FEE\u6539\u662F\u5426\u81EA\u52A8\u5207\u6362\u3002 \u8BBE\u7F6E\u5C5E\u6027 loop \uFF0C\u4FEE\u6539\u662F\u5426\u5FAA\u73AF\u5207\u6362",components:[{label:"\u9ED8\u8BA43\u79D2\u540E\u81EA\u52A8\u5207\u6362,\u5FAA\u73AF\u5207\u6362"},{label:"\u4E0D\u81EA\u52A8\u5207\u6362",autoplay:!1},{label:"\u4E0D\u5FAA\u73AF\u5207\u6362",loop:!1}],template:`    <template>
      <div>
        <w-carousel v-for='item in carouselList' :autoplay='item.autoplay' :loop='item.loop'>
          <w-carousel-item v-for='carousel in 4' :key='carousel'>
            <h3>
              {{ carousel }}<br>
              {{ item.label }}
            </h3>
          </w-carousel-item>
        </w-carousel>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data(){
          return{
            carouselList:[
              { label: '\u9ED8\u8BA43\u79D2\u540E\u81EA\u52A8\u5207\u6362, \u5FAA\u73AF\u5207\u6362' },
              { label: '\u4E0D\u81EA\u52A8\u5207\u6362', autoplay: false },
              { label: '\u4E0D\u5FAA\u73AF\u5207\u6362', loop: false }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const carouselList = [
            { label: '\u9ED8\u8BA43\u79D2\u540E\u81EA\u52A8\u5207\u6362, \u5FAA\u73AF\u5207\u6362' },
            { label: '\u4E0D\u81EA\u52A8\u5207\u6362', autoplay:false },
            { label: '\u4E0D\u5FAA\u73AF\u5207\u6362', loop:false }
          ]
          return { carouselList };
        }
      })
    <\/script>`},{title:"\u6307\u793A\u5668",desc:"\u8BBE\u7F6E indicator-position \u5C5E\u6027\uFF0C\u4FEE\u6539\u6307\u793A\u5668\u7684\u4F4D\u7F6E\u3002(\u9ED8\u8BA4inside,\u5728\u8F6E\u64AD\u56FE\u5185\u7684\u6B63\u4E0B\u65B9)",components:[{label:"\u9ED8\u8BA4\u6307\u793A\u5668\u5728\u5BB9\u5668\u5185\u90E8\u663E\u793A"},{label:"\u6307\u793A\u5668\u5728\u5BB9\u5668\u5916\u90E8\u663E\u793A",indicatorPosition:"outside"},{label:"\u6307\u793A\u5668\u4E0D\u663E\u793A",indicatorPosition:"none"}],template:`    <template>
      <div>
        <w-carousel v-for='item in carouselList' :indicator-position='item.indicatorPosition'>
          <w-carousel-item v-for='carousel in 4' :key='carousel'>
            <h3>
              {{ carousel }}<br>
              {{ item.label }}
            </h3>
          </w-carousel-item>
        </w-carousel>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            carouselList: [
              { label: '\u9ED8\u8BA4\u6307\u793A\u5668\u5728\u5BB9\u5668\u5185\u90E8\u663E\u793A' },
              { label: '\u6307\u793A\u5668\u5728\u5BB9\u5668\u5916\u90E8\u663E\u793A', indicatorPosition: 'outside' },
              { label: '\u6307\u793A\u5668\u4E0D\u663E\u793A', indicatorPosition: 'none' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const carouselList = [
            { label: '\u9ED8\u8BA4\u6307\u793A\u5668\u5728\u5BB9\u5668\u5185\u90E8\u663E\u793A' },
            { label: '\u6307\u793A\u5668\u5728\u5BB9\u5668\u5916\u90E8\u663E\u793A', indicatorPosition: 'outside' },
            { label: '\u6307\u793A\u5668\u4E0D\u663E\u793A', indicatorPosition: 'none' }
          ];
          return { carouselList };
        }
      })
    <\/script>`},{title:"\u662F\u5426\u6682\u505C",desc:"\u8BBE\u7F6E pause-on-hover \u5C5E\u6027\uFF0C\u5F53\u9F20\u6807\u79FB\u5165\u5BB9\u5668\u5185\u65F6 (\u5305\u62EC\u6307\u793A\u5668\u548C\u5206\u9875\u5668)\uFF0C\u662F\u5426\u6682\u505C\u81EA\u52A8\u64AD\u653E\u3002(\u9ED8\u8BA4\u4F1A\u6682\u505C)",components:[{label:"\u79FB\u5165\u65F6\uFF0C\u6682\u505C (\u9ED8\u8BA4)"},{label:"\u79FB\u5165\u65F6\uFF0C\u4E0D\u6682\u505C",pauseOnHover:!1}],template:`    <template>
      <div>
        <w-carousel v-for='item in carouselList' :pause-on-hover='item.pauseOnHover'>
          <w-carousel-item v-for='carousel in 4' :key='carousel'>
            <h3>
              {{ carousel }}<br>
              {{ item.label }}
            </h3>
          </w-carousel-item>
        </w-carousel>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            carouselList: [
              { label: '\u79FB\u5165\u65F6\uFF0C\u6682\u505C (\u9ED8\u8BA4)' },
              { label: '\u79FB\u5165\u65F6\uFF0C\u4E0D\u6682\u505C', pauseOnHover: false }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const carouselList = [
            { label: '\u79FB\u5165\u65F6\uFF0C\u6682\u505C (\u9ED8\u8BA4)' },
            {label: '\u79FB\u5165\u65F6\uFF0C\u4E0D\u6682\u505C', pauseOnHover: false }
          ];
          return { carouselList };
        }
      })
    <\/script>`},{title:"\u5207\u6362\u7BAD\u5934",desc:"\u8BBE\u7F6E arrow \u5C5E\u6027\uFF0C\u4FEE\u6539\u5207\u6362\u7BAD\u5934\u7684\u663E\u793A\u65F6\u673A\u3002",components:[{label:"\u9ED8\u8BA4\u5207\u6362\u7BAD\u5934hover\u5BB9\u5668\u5185\u65F6\u663E\u793A"},{label:"\u5207\u6362\u7BAD\u5934\u4E00\u76F4\u663E\u793A",arrow:"always"},{label:"\u5207\u6362\u7BAD\u5934\u4E0D\u663E\u793A",arrow:"never"}],template:`    <template>
      <div>
        <w-carousel v-for='item in carouselList' :arrow='item.arrow'>
          <w-carousel-item v-for='carousel in 4' :key='carousel'>
            <h3>
              {{ carousel }}<br>
              {{ item.label }}
            </h3>
          </w-carousel-item>
        </w-carousel>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            carouselList: [
              {label: '\u9ED8\u8BA4\u5207\u6362\u7BAD\u5934hover\u5BB9\u5668\u5185\u65F6\u663E\u793A' },
              { label: '\u5207\u6362\u7BAD\u5934\u4E00\u76F4\u663E\u793A',arrow: 'always' },
              { label: '\u5207\u6362\u7BAD\u5934\u4E0D\u663E\u793A',arrow: 'never' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const carouselList = [
            { label: '\u9ED8\u8BA4\u5207\u6362\u7BAD\u5934hover\u5BB9\u5668\u5185\u65F6\u663E\u793A' },
            { label: '\u5207\u6362\u7BAD\u5934\u4E00\u76F4\u663E\u793A', arrow: 'always' },
            { label: '\u5207\u6362\u7BAD\u5934\u4E0D\u663E\u793A', arrow: 'never' }
          ];
          return{carouselList};
        }
      })
    <\/script>`},{title:"\u65B9\u5411",desc:"\u8BBE\u7F6E direction \u5C5E\u6027\uFF0C\u4FEE\u6539\u8F6E\u64AD\u56FE\u7684\u5207\u6362\u65B9\u5411\u3002",components:[{label:"\u9ED8\u8BA4\u662F\u6A2A\u5411\u5207\u6362"},{label:"\u7AD6\u5411\u5207\u6362",direction:"vertical"}],template:`    <template>
      <div>
        <w-carousel v-for='item in carouselList' :direction='item.direction'>
          <w-carousel-item v-for='carousel) in 4' :key='carousel'>
            <h3>
              {{ carousel }}<br>
              {{ item.label }}
            </h3>
          </w-carousel-item>
        </w-carousel>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            carouselList: [
              { label: '\u9ED8\u8BA4\u662F\u6A2A\u5411\u5207\u6362'},
              { label: '\u7AD6\u5411\u5207\u6362', direction: 'vertical' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const carouselList = [
            { label: '\u9ED8\u8BA4\u662F\u6A2A\u5411\u5207\u6362' },
            { label: '\u7AD6\u5411\u5207\u6362', direction: 'vertical' }
          ];
          return { carouselList };
        }
      })
    <\/script>`},{title:"\u5207\u6362\u52A8\u753B",desc:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5207\u6362\u52A8\u753B\u662Fslide(\u5DE6\u53F3\u6ED1\u52A8)\uFF0C\u53EF\u4EE5\u8BBE\u7F6Eanimate\u4E3Afade(\u6DE1\u5165\u6DE1\u51FA)\u3001none(\u65E0\u52A8\u753B)",components:[{label:"\u9ED8\u8BA4\u5207\u6362\u52A8\u753B\u662F\u5DE6\u53F3\u6ED1\u52A8"},{label:"\u5207\u6362\u52A8\u753B\u662F\u6DE1\u5165\u6DE1\u51FA",animate:"fade"},{label:"\u65E0\u5207\u6362\u52A8\u753B",animate:"none"}],template:`    <template>
      <div>
        <w-carousel v-for='item in carouselList' :animate='item.animate'>
          <w-carousel-item v-for='carousel) in 4' :key='carousel'>
            <h3>
              {{ carousel }}<br>
              {{ item.label }}
            </h3>
          </w-carousel-item>
        </w-carousel>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            carouselList: [
              { label: '\u9ED8\u8BA4\u5207\u6362\u52A8\u753B\u662F\u5DE6\u53F3\u6ED1\u52A8' },
              { label: '\u5207\u6362\u52A8\u753B\u662F\u6DE1\u5165\u6DE1\u51FA', animate: 'fade' },
              { label: '\u65E0\u5207\u6362\u52A8\u753B', animate: 'none' }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { defineComponent } from 'vue';
      export default defineComponent({
        setup() {
          const carouselList = [
            { label: '\u9ED8\u8BA4\u5207\u6362\u52A8\u753B\u662F\u5DE6\u53F3\u6ED1\u52A8' },
            { label: '\u5207\u6362\u52A8\u753B\u662F\u6DE1\u5165\u6DE1\u51FA',animate:'fade' },
            { label: '\u65E0\u5207\u6362\u52A8\u753B',animate:'none' }
          ];
          return { carouselList };
        }
      })
    <\/script>`},{title:"\u8C03\u7528\u65B9\u6CD5",desc:"setActiveItem()\u2014\u2014\u7528\u4E8E\u8BBE\u7F6E\u5F53\u524D\u7684\u8F6E\u64AD\u56FE\u7D22\u5F15\u503C \u3001 prev()\u2014\u2014\u7528\u4E8E\u663E\u793A\u4E0A\u4E00\u9875 \u3001 next()\u2014\u2014\u7528\u4E8E\u663E\u793A\u4E0B\u4E00\u9875",method:!0,components:[{label:"\u81EA\u5E26setActiveItem()\u3001prev()\u3001next()\u65B9\u6CD5"},{label:"\u56FE\u7247",animate:"fade",imgs:["http://pic.netbian.com/uploads/allimg/180315/110404-1521083044b19d.jpg","https://pic.netbian.com/uploads/allimg/210307/232710-1615130830949f.jpg","https://pic.netbian.com/uploads/allimg/210216/191659-1613474219169f.jpg","https://pic.netbian.com/uploads/allimg/191227/002456-15773774969acd.jpg"]}],template:`    <template>
      <div class='carousel-test-demo' v-for='(item,index) in carouselList'>
        <div class='options'>
          <w-button @click='carousel[index].prev()'>\u540E\u9000</w-button>
          <w-button @click='carousel[index].next()'>\u524D\u8FDB</w-button>
          <w-button @click='carousel[index].setActiveItem(3)'>\u6700\u540E\u4E00\u9875</w-button>
        </div>
        <w-carousel :ref='(el)=>carousel.push(el)'>
          <w-carousel-item v-for='(child,childIndex) in 4' :key='child'>
            <h3 v-if='!item.imgs'>
              {{ childIndex + 1 }}<br>
              {{ item.label }}
            </h3>
            <img v-else :src='item.imgs[childIndex]'>
          </w-carousel-item>
        </w-carousel>
      </div>
    </template>
    <script>`,optionsApi:`
      export default {
        data() {
          return {
            carousel: [],
            carouselList: [
              {label: '\u81EA\u5E26setActiveItem()\u3001prev()\u3001next()\u65B9\u6CD5' },
              {
                imgs: [
                  'http://pic.netbian.com/uploads/allimg/180315/110404-1521083044b19d.jpg',
                  'https://pic.netbian.com/uploads/allimg/210307/232710-1615130830949f.jpg',
                  'https://pic.netbian.com/uploads/allimg/210216/191659-1613474219169f.jpg',
                  'https://pic.netbian.com/uploads/allimg/191227/002456-15773774969acd.jpg'
                ]
              }
            ]
          }
        }
      }
    <\/script>`,compositionApi:`
      import { reactive, defineComponent } from 'vue';
      export default defineComponent({
        setup(){
          const carousel = reactive([]);
          const carouselList = [
            { label: '\u81EA\u5E26setActiveItem()\u3001prev()\u3001next()\u65B9\u6CD5' },
            {
              imgs:[
              'http://pic.netbian.com/uploads/allimg/180315/110404-1521083044b19d.jpg',
              'https://pic.netbian.com/uploads/allimg/210307/232710-1615130830949f.jpg',
              'https://pic.netbian.com/uploads/allimg/210216/191659-1613474219169f.jpg',
              'https://pic.netbian.com/uploads/allimg/191227/002456-15773774969acd.jpg'
              ]
            }
          ];
          return { carousel, carouselList };
        }
      })
    <\/script>`,style:`
    <style lang='scss'>
      .carousel-test-demo {
        .w-carousel {  
          margin: 10px 0;
          display: flex;
          &-container {
            .w-carousel-item {
              display: flex;
                align-items: center;
                justify-content: center;
                background: blue;
                &:nth-of-type(2) {
                  background: gold;
                }
                &:nth-of-type(3) {
                  background: green;
                }
                &:nth-of-type(4) {
                  background: gray;
                }
            }
          }
        }
      }
    </style>`}]),D={attribute:[{name:"current-index",desc:"\u521D\u59CB\u72B6\u6001\u6FC0\u6D3B\u7684\u5E7B\u706F\u7247\u7684\u7D22\u5F15\uFF0C\u4ECE 0 \u5F00\u59CB",type:"number",optional:"\u2014\u2014",default:0},{name:"width",desc:"\u8D70\u9A6C\u706F\u7684\u5BBD\u5EA6",type:"string\u3001number",optional:"\u2014\u2014",default:"100%"},{name:"height",desc:"\u8D70\u9A6C\u706F\u7684\u9AD8\u5EA6",type:"string\u3001number",optional:"\u2014\u2014",default:"200px"},{name:"autoplay",desc:"\u662F\u5426\u81EA\u52A8\u5207\u6362",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"interval",desc:"\u81EA\u52A8\u5207\u6362\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2",type:"number",optional:"\u2014\u2014",default:3e3},{name:"trigger",desc:"\u6307\u793A\u5668\u7684\u89E6\u53D1\u65B9\u5F0F",type:"string",optional:"click\u3001hover",default:"hover"},{name:"indicator-position",desc:"\u6307\u793A\u5668\u7684\u4F4D\u7F6E",type:"string",optional:"inside\u3001outside\u3001none",default:"inside"},{name:"arrow",desc:"\u5207\u6362\u7BAD\u5934\u7684\u663E\u793A\u65F6\u673A",type:"string",optional:"always\u3001hover\u3001never",default:"hover"},{name:"loop",desc:"\u662F\u5426\u5FAA\u73AF\u663E\u793A",type:"boolean",optional:"\u2014\u2014",default:!0},{name:"direction",desc:"horizontal\u3001vertical",type:"string",optional:"\u2014\u2014",default:"horizontal"},{name:"animate",desc:"\u5207\u6362\u65F6\u7684\u52A8\u753B",type:"string",optional:"slide\u3001fade\u3001none",default:"slide"},{name:"pause-on-hover",desc:"\u9F20\u6807\u79FB\u5165\u5E7B\u706F\u7247\u5185\u65F6 (\u5305\u62EC\u6307\u793A\u5668\u548C\u5206\u9875\u5668)\uFF0C\u6682\u505C\u81EA\u52A8\u5207\u6362",type:"boolean",optional:"\u2014\u2014",default:!0}],event:[{name:"change",desc:"\u5E7B\u706F\u7247\u5207\u6362\u65F6\u89E6\u53D1",callbackParams:"\u5F53\u524D\u6FC0\u6D3B\u7684\u5E7B\u706F\u7247\u7684\u7D22\u5F15\uFF0C\u65E7\u5E7B\u706F\u7247\u7684\u7D22\u5F15"},{name:"click",desc:"\u70B9\u51FB\u5E7B\u706F\u7247\u65F6\u89E6\u53D1",callbackParams:"\u5F53\u524D\u70B9\u51FB\u7684\u5E7B\u706F\u7247\u7684\u7D22\u5F15"}],method:[{name:"setActiveItem",desc:"\u624B\u52A8\u5207\u6362\u5E7B\u706F\u7247",params:"\u9700\u8981\u5207\u6362\u7684\u5E7B\u706F\u7247\u7684\u7D22\u5F15\uFF0C\u4ECE0\u5F00\u59CB\u5230\u5E7B\u706F\u7247\u7684\u603B\u6570-1\u7ED3\u675F\u3002"},{name:"prev",desc:"\u5207\u6362\u81F3\u4E0A\u4E00\u5F20\u5E7B\u706F\u7247",params:"\u2014\u2014"},{name:"next",desc:"\u5207\u6362\u81F3\u4E0B\u4E00\u5F20\u5E7B\u706F\u7247",params:"\u2014\u2014"}]};const B={class:"carousel-demo-list"},O={key:0,class:"options"},E=n("\u540E\u9000"),N=n("\u524D\u8FDB"),V=n(" \u6700\u540E\u4E00\u9875 "),z={key:0},T=P("br",null,null,-1),$=["src"],S=A({setup(F){m(0),m(1);const s=m([]),w=f=>{console.log("click carousel item...",f)};return(f,U)=>{const p=r("w-button"),h=r("w-carousel-item"),y=r("w-carousel"),x=r("DemoItem"),_=r("TableList");return o(),a("div",B,[(o(!0),a(d,null,b(g(H),(c,k)=>(o(),j(x,{item:c,key:c.title},{default:l(()=>[(o(!0),a(d,null,b(c.components,(e,u)=>(o(),a("div",{key:e},[c.method?(o(),a("div",O,[i(p,{onClick:t=>s.value[u].prev()},{default:l(()=>[E]),_:2},1032,["onClick"]),i(p,{onClick:t=>s.value[u].next()},{default:l(()=>[N]),_:2},1032,["onClick"]),i(p,{onClick:t=>s.value[u].setActiveItem(3)},{default:l(()=>[V]),_:2},1032,["onClick"])])):I("",!0),i(y,{"current-index":e.currentIndex,"onUpdate:current-index":t=>e.currentIndex=t,trigger:e.trigger,arrow:e.arrow,"indicator-position":e.indicatorPosition,direction:e.direction,animate:e.animate,autoplay:e.autoplay,loop:e.loop,ref_for:!0,ref:k===7?t=>s.value.push(t):"","pause-on-hover":e.pauseOnHover,onClick:w},{default:l(()=>[(o(),a(d,null,b(4,(t,L)=>i(h,{key:t},{default:l(()=>[e.imgs?(o(),a("img",{key:1,src:e.imgs[L]},null,8,$)):(o(),a("h3",z,[n(v(t),1),T,n(" "+v(e.label),1)]))]),_:2},1024)),64))]),_:2},1032,["current-index","onUpdate:current-index","trigger","arrow","indicator-position","direction","animate","autoplay","loop","pause-on-hover"])]))),128))]),_:2},1032,["item"]))),128)),i(_,{data:g(D)},null,8,["data"])])}}});export{S as default};
