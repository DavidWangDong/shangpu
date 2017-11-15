<template>
  <div class="page">
      <div class="picContain">
          <img src="http://n.sinaimg.cn/ah/865fe30d/20171113/5_01.jpg" alt="">
      </div>
      <div class="contentList">
          <div class="proName pos_rel">
            <div class="pro_item pos_rel" v-for="(val,index) in proList" :key="index" v-if ="$route.params.type==val.type">
                <img :src="val.src" alt="">
                <div :class="['circle','pos_abs',{'circle2':index==1},{'circle3':index==2}]">
                    <span class="pos_abs"></span>
                </div>
            </div>
            
        </div>
        <div class="cellList">
            <div class="cellItem" v-for ="(val,index) in currCellType.children" @click="toSingle(index)">
                {{val.name}}
            </div>
        </div>
      </div>
      <navs></navs>
  </div>
</template>
<script>
    import mixin from '@/mixins/index'
    import navs from '@/components/nav'
    export default {
        name:'sigletype',
        mixins:[mixin],
        components:{navs},
        created(){
            let type =this.$route.params.type?this.$route.params.type:1;
            this.currCellType = this.proList[type-1];
        },
        data () {
            return {
                currCellType:[],
            }
        },
        methods :{
            toSingle (val) {
                let type = this.$route.params.type-1;
				let celltype = val;
                var realType = this.proList[type].children[celltype].celltype;
                this.$router.push({path:'/sigle',query:{type:realType}})
            }
        }
    }
</script>
<style scoped>
    .page{
        background:url(http://n.sinaimg.cn/ah/865fe30d/20171113/5.jpg) no-repeat center top;
        background-size:cover;
    }
    .proName{
        width:5.8rem;
        height:2rem;
        margin:0 auto;
        display:flex;
        justify-content: center;
    }
    .contentList{
        
    }
    .pro_item img{
        width:1.59rem;
    }
    .circle{
        width:1.59rem;
        height: 1.59rem;
        z-index:3;
        top:0;
        left: 0;
        -webkit-animation: round2D 2.5s linear .5s infinite forwards;
    }
    
    .circle span{
        width:0.16rem;
        height: 0.16rem;
        left: 0;
        top:50%;
        margin-left:-0.08rem;
        margin-top:-0.08rem;
        background:#d9c996;
        border-radius: 50%;
        
    }
    .circle2 span{
        top:0;
        left:50%;
        margin-left:-0.08rem;
        margin-top:-0.08rem;
    }
    .circle3 span{
        top:50%;
        right:0;
        margin-right:-0.08rem;
        margin-top:-0.08rem;
    }
    .cellList{
        width:3.87rem;
        margin:0 auto;
    }
    .cellItem{
        width:100%;
        box-sizing:border-box;
        border:1px solid #cabc96;
        line-height:0.42rem;
        font-size:0.18rem;
        color:#cabc96;
        border-radius: 5px;
        margin-bottom:0.21rem;
    }
</style>

