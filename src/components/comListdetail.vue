<template>
    <div class="comListWrap pos_rel">
        <com :datalist="dataList" :hidetip="false"></com>
        <div class="pageButton pos_abs">
            <span class="itemButton" @click="getPrev()">上一页</span>
            <span class="itemButton" @click="getNext()">下一页</span>
        </div>
    </div>
</template>
<script>
import com from '@/components/com'
import mixin from '@/mixins/'
    export default {
        name:'comListdetail',
        mixins:[mixin],
        components:{com},
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
    .comListWrap{
        width:5.8rem;
        margin:0 auto;
        min-height:8.07rem;
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

