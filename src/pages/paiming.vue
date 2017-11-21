<template>
    <div class="page before">
        <div class="pageInner">
                <div class="picContain headers">
                    <img src="http://n.sinaimg.cn/ah/865fe30d/20171114/header.png" alt="">
                </div>
                <div class="topListWrap">
                    <div class="topList">
                        <div class="listItem"  v-for="(val,index) in list" :ref="'listItem'+index"  >
                            <p @click.self="chgTab('listItem'+index,val.type)">{{val.name}}</p>
                            <ul class="innerLisst">
                                <li class="innerItem" v-for="(value,dex) in val.list"><span :class="[{strong:dex<=2}]">TOP{{dex+1}}:</span>{{value.name}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <navs></navs>
        </div>
        
    </div>
</template>
<script>
import navs from '@/components/nav'
import mixin from '@/mixins/index'
    export default {
        name:'sigle',
        mixins:[mixin],
        components:{navs},

        created(){
        let page=1;
        let type=1;
        let limit=10;
        this.getTopList(page,type,limit)
        Object.keys(this.nameList).forEach((val)=>{
            this.list.push({name:this.nameList[val],type:val,list:[]});
        })
        this.$nextTick(()=>{
            $(this.$refs['listItem0'][0]).addClass('open');
        })
        },
        computed : {
            
        },
        methods:{
            chgTab (e,type){
                Object.keys(this.$refs).forEach((val)=>{
                    $(this.$refs[val][0]).removeClass('open');
                })
                
                this.getTopList(1,type,10);
                $(this.$refs[e][0]).addClass('open');
            },
            getTopList(page,type,limit){
               
                this.getPageData(page,type,limit,(data)=>{
                    this.list.forEach((val)=>{
                        if (val.type==type){
                            val.list.length=0;
                            data.forEach((val1)=>{
                                val.list.push(val1);
                            })
                        }
                    })
                }); 
            }
        },
        data () {
            return {
                dataList:[],
                list:[
                    
                ]
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
.strong{
    color:#ffde02;
}
.headers{
    width:5.68rem;
    margin:0 auto;
    margin-top:0.3rem;
}
.topListWrap{
    width:4.2rem;
    margin:0 auto;
    margin-top:0.44rem;
}
.listItem{
    width:100%;
    font-size:0.22rem;
    color:#fff;
    position:relative;
    line-height:0.4rem;
    text-align:left;
    text-indent:1em;
}
.listItem:before{
    width:0.1rem;
    height: 0.1rem;content:'';
    position: absolute;
    top: 0.15rem;
    left:0;
    background:#fff;
    transform:rotate(45deg);
}
.innerItem{
    line-height: 0.4rem;
    display:flex;
    border-bottom:1px solid #47364f;
}
.innerLisst{
    padding-top:0.15rem;
    overflow: hidden;
    height:0;
    transition:all .5s linear;
}
.open .innerLisst{
    height:auto;
}
.innerItem span{
    margin-right:0.1rem;
    text-align:left;
}
</style>

