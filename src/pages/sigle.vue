<template>
    <div class="page before">
        <div class="pageInner">
                <div class="picContain headers">
                    <img src="http://n.sinaimg.cn/ah/865fe30d/20171114/header.png" alt="">
                </div>
                
                <peo :datalist="dataList"  hidetip="false" v-if ="getType"></peo>
                <com :datalist="dataList"  hidetip="false" v-else></com>
                <navs></navs>
        </div>
        
    </div>
</template>
<script>
import navs from '@/components/nav'
import com from '@/components/com'
import peo from '@/components/peo'
import mixin from '@/mixins/index'
    export default {
        name:'sigle',
        mixins:[mixin],
        components:{navs,com,peo},
        created(){
            this.getPageData(0);
        },
        computed : {
            getType (){
                
               var list = [8,9]
               console.log(list.indexOf(this.$route.query.type)>-1,this.$route.query.type)
                return list.indexOf(this.$route.query.type)>-1?true:false;
            }
        },
        methods:{
            
        },
        data () {
            return {
                dataList:[],
            }
        }
    }
</script>
<style scoped>
.pageInner{
    padding-bottom:1.05rem;
}
.page{
    background:url(http://n.sinaimg.cn/ah/865fe30d/20171114/8.jpg) no-repeat center top;
    background-size:cover;
    overflow: auto;
}
.headers{
    width:5.68rem;
    margin:0 auto;
    margin-top:0.3rem;
}
.headName{
    margin-top:0.42rem;
    min-height:1.14rem;
    
}
.proName{
    font-size:0.26rem;
    color:#d9c996;
    padding:0 0.37rem;
    float:left;
    display:table-cell;
    line-height: 0.48rem;
    left:50%;
    margin-left:-25%;
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

