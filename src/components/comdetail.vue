<template>
    <div class="comWrap pos_rel">
        <template v-for ="(val,index) in getInfo">
            <div class="comavatar pos_rel">
                <img :src="val.photo" alt="">
            </div>
            <div class="comword"> {{val.content}}</div>
            <div class="buttonWrap pos_abs">
                <button-list @showtost="showTost"></button-list>
            </div>
        </template>
        <tost-view v-for="(val,index) in messageList" :message="val" :key="index"></tost-view>
    </div>
</template>
<script>
    import buttonList from '@/components/buttonList'
    import tostView from '@/components/tostView'
    import mixin from '@/mixins/'
    export default {
        name:'comdetail',
        mixins:[mixin],
       
        components:{buttonList},
        data () {
            return {
                messageList:[],
            }
        },
        methods:{
            
        }
    }
</script>
<style scoped>
    .comWrap{
        height: 5.63rem;
        width:5.8rem;
        margin:0 auto;
        background:url(http://n.sinaimg.cn/ah/865fe30d/20171114/Zu-171.png) no-repeat center top;
        background-size:100% auto;
        margin-top:0.3rem;
    } 
    .comavatar{
        width:4.65rem;
        height: 3.08rem;
        margin:0 auto;
    }
    .comavatar img{
        width:100%;
        height:100%;
    }
    .comword{
        width:4.84rem;
        margin:0 auto;
        padding-top:0.3rem;
        font-size:0.16rem;
        color:#dbcca0;
        text-indent:2em;
        line-height: 0.3rem;
        text-align:left;
        overflow: auto;
        height: 1.7rem;
    }   
    .buttonWrap{
        bottom:0;
        left:50%;
        margin-left:-2.305rem;
    }
</style>

