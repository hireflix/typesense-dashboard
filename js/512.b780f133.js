(self["webpackChunktypesense_dashboard"]=self["webpackChunktypesense_dashboard"]||[]).push([[512],{44512:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>x});var n=i(83673),l=i(62323);const s={class:"row q-mt-md"},a={class:"col-3 q-pr-sm"},r={class:"text-subtitle2 q-pt-md"},c={class:"text-subtitle2 q-pt-md"},o={class:"col-9"};function m(e,t,i,m,u,d){const h=(0,n.up)("ais-configure"),p=(0,n.up)("ais-search-box"),f=(0,n.up)("ais-stats"),w=(0,n.up)("ais-current-refinements"),g=(0,n.up)("ais-range-input"),W=(0,n.up)("ais-refinement-list"),b=(0,n.up)("ais-pagination"),y=(0,n.up)("search-result-item"),C=(0,n.up)("ais-hits"),_=(0,n.up)("ais-instant-search"),v=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(v,{padding:""},{default:(0,n.w5)((()=>[e.searchClient&&e.currentCollection?((0,n.wg)(),(0,n.j4)(_,{key:0,"search-client":e.searchClient,"index-name":e.currentCollection.name},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{hitsPerPage:12}),(0,n.Wm)(p,{placeholder:""}),(0,n.Wm)(f),(0,n.Wm)(w),(0,n.Wm)("div",s,[(0,n.Wm)("div",a,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.facetNumberFields,(e=>((0,n.wg)(),(0,n.j4)("div",{class:"q-mb-sm",key:e},[(0,n.Wm)("div",r,(0,l.zw)(e),1),(0,n.Wm)(g,{searchable:!0,attribute:e},null,8,["attribute"])])))),128)),((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.facetStringFields,(e=>((0,n.wg)(),(0,n.j4)("div",{class:"q-mb-sm",key:e},[(0,n.Wm)("div",c,(0,l.zw)(e),1),(0,n.Wm)(W,{class:"q-mb-sm",searchable:!0,attribute:e},null,8,["attribute"])])))),128))]),(0,n.Wm)("div",o,[(0,n.Wm)(b,{class:"q-mb-md"}),(0,n.Wm)(C,null,(0,n.Nv)({_:2},[e.currentCollection?{name:"item",fn:(0,n.w5)((({item:e})=>[(0,n.Wm)(y,{item:e},null,8,["item"])]))}:void 0]),1024),(0,n.Wm)(b,{class:"q-my-md"})])])])),_:1},8,["search-client","index-name"])):(0,n.kq)("",!0)])),_:1})}const u={key:0},d={key:0};function h(e,t,i,s,a,r){const c=(0,n.up)("q-item-label"),o=(0,n.up)("q-item-section"),m=(0,n.up)("ais-highlight"),h=(0,n.up)("q-item"),p=(0,n.up)("q-separator"),f=(0,n.up)("q-btn"),w=(0,n.up)("q-list");return e.currentCollection?((0,n.wg)(),(0,n.j4)("div",u,[(0,n.Wm)(w,{dense:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.currentCollection.fields,(t=>((0,n.wg)(),(0,n.j4)(h,{key:t.name},{default:(0,n.w5)((()=>[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(t.name),1)])),_:2},1024)])),_:2},1024),(0,n.Wm)(o,{side:"",class:"q-ml-xl text-body2"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{class:"overflow-hidden text-no-wrap text-ellipsis",title:e.item[t.name]},{default:(0,n.w5)((()=>[e.item&&Array.isArray(e.item._highlightResult[t.name])?((0,n.wg)(),(0,n.j4)("div",d,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.item._highlightResult[t.name],((e,t)=>((0,n.wg)(),(0,n.j4)("div",{innerHTML:e.value,key:t},null,8,["innerHTML"])))),128))])):((0,n.wg)(),(0,n.j4)(m,{key:1,attribute:t.name,hit:e.item},null,8,["attribute","hit"]))])),_:2},1032,["title"])])),_:2},1024)])),_:2},1024)))),128)),(0,n.Wm)(p),((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.fieldsNotInSchema,(t=>((0,n.wg)(),(0,n.j4)(h,{key:t},{default:(0,n.w5)((()=>[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(t),1)])),_:2},1024)])),_:2},1024),(0,n.Wm)(o,{side:"",class:"q-ml-xl text-body2"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{class:"overflow-hidden text-no-wrap text-ellipsis",title:e.item[t]},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(e.item[t]),1)])),_:2},1032,["title"])])),_:2},1024)])),_:2},1024)))),128)),(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,{flat:"",size:"sm",padding:"sm",color:"primary",onClick:t[1]||(t[1]=t=>e.editDocument()),icon:"edit",title:"Edit"})])),_:1})])),_:1}),(0,n.Wm)(o,{side:""},{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,{flat:"",size:"sm",padding:"sm",onClick:t[2]||(t[2]=t=>e.deleteDocumentById(e.item.id)),icon:"delete_forever",title:"Delete"})])),_:1})])),_:1})])),_:1})])),_:1})])):(0,n.kq)("",!0)}const p=(0,n.aZ)({name:"SearchResultItem",props:{item:{type:Object}},computed:{currentCollection(){return this.$store.state.node.currentCollection},fieldsNotInSchema(){return this.item&&this.currentCollection?Object.keys(this.item).filter((e=>{var t;return!e.startsWith("_")&&!(null===(t=this.currentCollection)||void 0===t?void 0:t.fields.map((e=>e.name)).concat(["objectID","text_match"]).includes(e))})):[]}},methods:{editDocument(){const e={};this.item&&(Object.keys(this.item).forEach((t=>{if(!t.startsWith("_")&&!["objectID","text_match"].includes(t)){if(!this.item)return;e[t]=this.item[t]}})),this.$store.dispatch("node/editDocuments",[JSON.parse(JSON.stringify(e))]))},deleteDocumentById(e){this.$q.dialog({title:"Confirm",message:`Delete document with id: ${e}?`,cancel:!0,persistent:!0}).onOk((()=>{this.$store.dispatch("node/deleteDocumentById",e)}))}}});var f=i(27011),w=i(83414),g=i(52035),W=i(2350),b=i(65869),y=i(48240),C=i(7518),_=i.n(C);p.render=h;const v=p;_()(p,"components",{QList:f.Z,QItem:w.Z,QItemSection:g.Z,QItemLabel:W.Z,QSeparator:b.Z,QBtn:y.Z});var k=i(68222);const j=(0,n.aZ)({components:{SearchResultItem:v},name:"Search",data(){return{searchClient:null}},computed:{currentCollection(){return this.$store.state.node.currentCollection},facetNumberFields(){return this.currentCollection?this.currentCollection.fields.filter((e=>e.facet&&["int32","int64","float","int32[]","int64[]","float[]"].includes(e.type))).map((e=>e.name)):[]},facetStringFields(){return this.currentCollection?this.currentCollection.fields.filter((e=>e.facet&&["string","string[]"].includes(e.type))).map((e=>e.name)):[]}},watch:{currentCollection:{handler(){this.searchClient=null,window.setTimeout((()=>{if(!this.$store.state.node.loginData||!this.currentCollection)return;const e=new k.Z({server:{nodes:[Object.assign({},this.$store.state.node.loginData.node)],apiKey:this.$store.state.node.loginData.apiKey},additionalSearchParameters:{queryBy:this.currentCollection.fields.filter((e=>["string","string[]"].includes(e.type))).map((e=>e.name)).join(",")}});this.searchClient=e.searchClient}))},immediate:!0}}});var q=i(24379);j.render=m;const x=j;_()(j,"components",{QPage:q.Z})}}]);