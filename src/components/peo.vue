<template>
  <div class="list">
        <div class="headName pos_rel">
            <div class="proName pos_abs">
              {{getheader}}
            </div>
            <p class="tips pos_abs" v-if="hidetip?true:false">
                (按拼音排序)
            </p>
        </div>
        <div class="listHeader">
            <p class="name">街区名</p>
            <p class="count">票数</p>
            <p class="vote">支持</p>
        </div>
        <div class="listItem" v-for = "(val,index) in datalist">
            <div class="pic">
                <div class="picInner com" @click="toPage(val)">
                        <img :src="val.photo" alt="">
                </div>
            </div>
            <div class="detail">
                <p class="itemName" @click="toPage(val)">
                    <span class="peoName">{{val.name}}</span>
                    <span class="peoJob">{{val.title}}</span>
                </p>
                <p class="itemCount">{{val.count}}</p>
                <p class="itemVote" @click="doVote(val)">
                    <img src="http://n.sinaimg.cn/ah/865fe30d/20171114/ShiLiangZhiNenDuiXiang.png" alt="">
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import mixin from '@/mixins/'
     export default {
        name:'com',
        mixins:[mixin],
        props:['datalist'],
        data () {
            return {

            }
        },
         methods:{
            toPage(val){
                this.$store.commit('setTmp',val);
                this.$router.push({path:'/detail/peodetail',query:{uid:val.id}})
            },
            
        },
    }
</script>
<style scoped>
    .list{
    width:5.8rem;
    margin:0 auto;
    font-size:0.24rem;
    color:#d9c996;
}
.listHeader{
    width:100%;
    display:flex;
    text-align: left;
    line-height: 0.46rem;
    background:#281c35;
    border: 1px solid #554855;
}
.name{
    flex-grow:6;
    text-indent:1em;
}
.count{
    flex-grow:2;
}
.vote{
    flex-grow:1;
}
.listItem{
    margin-top:0.2rem;
    height:1rem;
    display:flex;
}
.pic{
    width:1.28rem;
}
.detail{
    width:4.52rem;
    border-bottom:1px solid #4d424b;
    display:flex;
    text-align:left;
    align-items: center;
    height: 100%;
}
.com{
    width:1rem;
    height: 1rem;
    border-radius: 50%;
    overflow: hidden;
}
.picInner img{
    width:1rem;
    height:1rem;
}
.itemName{
    width:2.22rem;
    display: flex;
    flex-direction: column;
    margin-right: 0.1rem;
}
.itemCount{
    flex-grow:1.103;
}
.itemVote{
    width:1.08rem;
}
.itemVote img{
    width:100%;
}
.peoName{
    font-size:0.24rem;
    color:#d9c996;
}
.peoJob{
    font-size:0.16rem;
}
.headName{
    margin-top:0.42rem;
    min-height:1.14rem;
    display:flex;
    justify-content: center;
}
.proName{
    font-size:0.26rem;
    color:#d9c996;
    padding:0 0.37rem;
    line-height: 0.48rem;
    background:url(http://n.sinaimg.cn/ah/865fe30d/20171114/JuXing.png) no-repeat center 50%;
    background-size:contain;
}
.tips{
    font-size:0.16rem;
    color:#d9c996;
    top:0.69rem;
    left:50%;
    margin-left:-7%;
}
</style>

