<template>
    <div class="peoListWrap pos_rel">
        <peo :datalist="dataList" :hidetip="false"></peo>
        <div class="pageButton pos_abs">
            <span class="itemButton" @click="getPrev()">上一页</span>
            <span class="itemButton" @click="getNext()">下一页</span>
        </div>
    </div>
</template>
<script>
import peo from '@/components/peo'
import mixin from '@/mixins/'
    export default {
        name:'peoListdetail',
        mixins:[mixin],
        components:{peo},
        created(){
            this.getPageData(1);
        },
        data () {
            return {
                dataList:[],
            }
        }
    }
</script>
<style scoped>
    .peoListWrap{
        width:5.8rem;
        margin:0 auto;
        min-height:10.07rem;
    }
    .pageButton{
        display:flex;
        width:1.95rem;
        margin:0 auto;
        font-size:0.18rem;
        color:#231815;
        justify-content: space-between;
        bottom:0;
        left:50%;
        margin-left:-0.975rem;
    }
    .itemButton{
        padding:0.09rem 0.12rem;
        background:#e3d6b1;
        border-radius:2px;
        margin-top:0.48rem;
    }
</style>

