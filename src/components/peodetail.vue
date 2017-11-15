<template>
    <div class="peopleWrap">
        <div class="people pos_rel" v-for="(val,index) in getInfo">
            <div class="pword pos_abs">
                <p class="nameJob">{{val.name}}</p>
                <p class="company">{{val.title}}</p>
                <p class="desc">{{val.content}}</p>
            </div>
            <div class="pavatar pos_abs">
                <img :src="val.photo" alt="">
            </div>
            <div class="buttonWrap pos_abs">
                <button-list></button-list>  
            </div>
        </div>
    </div>
</template>
<script>
import buttonList from '@/components/buttonList'
import mixin from '@/mixins/'
    export default {
        name:'peodetail',
        mixins:[mixin],
        components:{buttonList},
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
    .peopleWrap{
        width:5.8rem;   
        margin:0 auto;
        margin-top:0.38rem;
    }
    .people{
        width:100%;
        height: 4.76rem;
        background:url(http://n.sinaimg.cn/ah/865fe30d/20171114/Zu-17.png) no-repeat center top;
        background-size:100% auto;
    }
    .pword{
        width:3.28rem;
        height: 3.28rem;
        top:1.03rem;
        right:0.17rem;
        color:#d9c996;
        text-align: left;
    }
    .pavatar{
        width:2.04rem;
        height: 2.72rem;
        top:1.09rem;
        left:0;
    }
    .pavatar img{
        width:100%;
    }
    .buttonWrap{
        bottom:0;
        left:1rem;
    }
    .nameJob{
        font-size:0.26rem;
        
    }
    .company{
        font-size:0.18rem;
        margin:0.17rem 0 0.24rem;
    }
    .desc{
        font-size:0.16rem;
        line-height: 0.28rem;
    }
</style>

