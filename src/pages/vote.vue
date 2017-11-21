<template>
    <div class="page">
        <div class="picContain">
           <img src="http://n.sinaimg.cn/ah/865fe30d/20171113/4_01.jpg" alt="">
        </div>
        <div class="mainContent">
            <h3 class="pro_head"><span>投票说明</span></h3>
            <div :class="['pro_content',{'open':openDetail}]" @click="openDetail=!openDetail">
                <p>本次评选涉及“项目奖”、“人物奖”、“企业奖”三大领域，共计12个奖项。投票时间为11月20日--12月20日，网友可通过PC端或者手机端参与各奖项评选。公开投票结束后，在统计网友投票数据的基础之上，综合相关机构、专家评委的投票，最终确定各奖项的归属。榜单将在“2017安徽首届商铺节暨第一届‘金地标’商业地产评选”颁奖现场揭晓。 </p>
                
                <div :class="['close_icon']">
                    <span class="arrow">》</span>
                    <span>展开</span>
                </div>
            </div>
            <h3 class="pro_head" style="margin-top:0.29rem;margin-bottom:0.27rem;"><span>奖项设置</span></h3>
            <div class="proName pos_rel">
                <div class="pos_abs pointer">
                    <img class="pos_abs" src="http://n.sinaimg.cn/ah/865fe30d/20171113/Layer-23.png" alt="" style="width:0.36rem;top:0.1rem;">
                </div>
                <router-link class="pro_item pos_rel" v-for="(val,index) in proList" :to="{path:'/sigletype/'+val.type}" :key="index">
                    <img :src="val.src" alt="">
                    <div :class="['circle','pos_abs',{'circle2':index==1},{'circle3':index==2}]">
                        <span class="pos_abs"></span>
                    </div>
                </router-link>
                
            </div>
        </div>
        <navs></navs>
    </div>
</template>
<script>
    import navs from '@/components/nav'
    import mixin from '@/mixins/index'
    export default {
        name:'vote',
        mixins:[mixin],
        components:{navs},
        data () {
            return {
                openDetail:false,
                
            }
        }
    }
</script>
<style scoped>
@-webkit-keyframes scales{
	0%	 {-webkit-transform:scale(1)}
	100% {-webkit-transform:scale(2.5);opacity:0;}	
}
    .mainContent{
        background:url(http://n.sinaimg.cn/ah/865fe30d/20171113/4bg_02.jpg) no-repeat center top;
        background-size:cover;
        min-height: 8.1rem;
    }
    .pro_head{
        font-size:0.3rem;
        color:#d9c996;
        text-align: center;
    }
    .pro_head span{
        border-bottom: 2px solid #d9c996;
    }
    .pro_content{
        width:5.6rem;
        margin:0 auto;
        font-size:0.2rem;
        color:#d9c996;
        /* max-height: 1.92rem; */
        overflow:hidden;
    }
    .pro_content.open p{
       height: inherit;
    }
    .pro_content p{
        line-height: 0.38rem;
        margin-top:0.17rem;
        text-align:left;
        height: 1.5rem;
        overflow: hidden;
    }
    .close_icon{
        display:flex;
        flex-direction: column;
    }
    .open .close_icon{
        max-height: inherit;
    }
    .arrow{
        transform:rotate(90deg);
        transition:all .5s linear;
        width:20%;
        align-self: center;
    }
    .open .arrow{
        transform:rotate(-90deg);
    }
    .proName{
        width:5.8rem;
        height:2.4rem;
        margin:0 auto;
        display:flex;
        justify-content: space-between;
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
    .pointer{
        width:0.2rem;
        height: 0.2rem;
        background:rgba(255,255,255,0.5);
        border-radius: 50%;
        top:1.1rem;
        left:1rem;
    }
    .pointer:before{
        content:'';
        display: block;
        position: absolute;
        width:0.2rem;
        height:0.2rem;
        border:2px solid #fff;
        border-radius: 50%;
        top:-2px;
        left:-2px;
         -webkit-animation: scales 1s linear .5s infinite forwards;
        
    }
</style>

