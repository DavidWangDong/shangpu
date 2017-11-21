<template>
   <div class="page before">
        <div class="hover pos_fix" v-if ="isShowModal">
            <div class="detials pos_rel">
                <img src="http://n.sinaimg.cn/ah/865fe30d/20171121/16.png" alt="">
                <span class="pos_abs close" @click="isShowModal=false"></span>
            </div>
        </div>
        <div class="pageInner">
                <div class="picContain headers">
                    <img src="http://n.sinaimg.cn/ah/865fe30d/20171114/header.png" alt="">
                </div>
                <div class="headName pos_rel">
                    <div class="proName pos_abs">
                        我要报名
                    </div>
                </div>
                <form class="form" onsubmit="return false">
                    <div class="form-group">
                        <span class="name" >申报奖项：</span>
                        <select type="text" class="inputter" name="jiang"  v-model="jiang">
                          <option v-for = "(val,index) in getName" :value="val.type"> {{val.name}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <span class="name">联系电话：</span>
                        <input type="text" class="inputter" name="mobile" v-model="mobile">
                    </div>
                    <div class="form-group">
                        <span class="name">人物姓名：</span>
                        <input type="text" class="inputter" name="name" v-model="name">
                    </div>
                    <div class="form-group">
                        <span class="name">所在单位：</span>
                        <input type="text" class="inputter" name="danwei"  v-model="danwei">
                    </div>
                    <div class="button">
                        <span class="sub buItem" @click="subForm">提交报名</span>
                        <span class="det buItem" @click="isShowModal=true">查看详情</span>
                    </div>
                </form>
                <div class="picContain footer">
                    <img src="http://n.sinaimg.cn/ah/865fe30d/20171115/Zu-18.png" alt="">
                </div>
        </div>
        <navs></navs>   
   </div>
</template>
<script>
import navs from '@/components/nav'
import mixin from '@/mixins/'
    export default {
        name:'addUser',
        mixins:[mixin],
        components:{navs},
        computed:{
            getName(){
                let list=[];
                Object.keys(this.nameList).forEach((val)=>{
                    list.push({name:this.nameList[val],type:val});
                })
                return list;
            }  
        },
        methods:{
            subForm(){
                let reg=/^1[345678]\d{9}$/g
                if (!this.jiang||!this.mobile||!this.name||!this.danwei){
                    this.$emit('showtost','请将信息填写完整');
                    return 
                }
                if (!reg.test(this.mobile)){
                    this.$emit('showtost','电话号码格式有误');
                    return;
                }
                $.ajax({
                    url:'http://ahfensitong.com/tmp/shangpu/api.php?action=baoming',
                    type:'GET',
                    data:{jsonp:1,name:this.name,mobile:this.mobile,danwei:this.danwei,jiang:this.nameList[this.jiang]},
                    dataType:'jsonp',
                    success:(data)=>{
                        if (data.error==0){
                            this.$emit('showtost','恭喜您！报名成功！')
                            this.clearData();
                        }
                    }
                })
            },
            clearData(){
                this.jiang=1;
                this.mobile='';
                this.name='';
                this.danwei='';
            }
        },
        data(){
            return {
                jiang:'1',
                mobile:'',
                name:'',
                danwei:'',
                isShowModal:false,
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
.footer{
    width:4.35rem;
    margin:0 auto;
    margin-top:0.8rem;
}
.headName{
    margin-top:0.42rem;
    min-height:1.14rem;
    display:flex;
    justify-content: center;
}
.proName{
     font-size: 0.26rem;
    color: #d9c996;
    padding: 0 0.77rem;
    line-height: 0.48rem;
    background: url(http://n.sinaimg.cn/ah/865fe30d/20171114/JuXing.png) no-repeat center 50%;
    background-size: 2.4rem 100%;
}
.form{
    width:4.3rem;
    margin:0 auto;
}
.form-group{
    width:100%;
    display:flex;
    font-size:0.24rem;
    color:#d9c996;
    height:0.4rem;
    align-items: center;
    margin-bottom:0.34rem;
}
.inputter{
    border:none;
    background: none;
    border:1px solid #cabc96;
    color:#d9c996;
    height: 0.36rem;outline:none;
    width:2.9rem;
    line-height: 0.36rem;
    border-radius: 2px;
    text-indent:0.5em;
}
.button{
    width:4.02rem;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    margin-top:0.5rem;
}
.buItem{
    width:1.82rem;
    height:0.58rem;
    background:url(http://n.sinaimg.cn/ah/865fe30d/20171115/Button.png) no-repeat center top;
    background-size:100% auto;
    font-size:0.21rem;
    color:#281911;
    text-align: center;
    line-height: 0.58rem;

}
.hover{
    top:0;
    left: 0;
    bottom:0;
    right:0;
    background:rgba(0,0,0,0.5);
    z-index:999;
    overflow-y: auto;
}
.detials{
    width:5.74rem;
    margin:0 auto;
    padding-bottom: 1.05rem;
}
.detials img{
    width:100%;
    height:auto;
}
.close{
    width:0.5rem;
    height: 0.5rem;
    top:0;
    right:0;
}
</style>

