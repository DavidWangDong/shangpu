<template>
  <div id="app">
    <loading v-show = "isLoading" :precent="progress"></loading>
    <router-view @showtost="showTost" v-show="!isLoading" />
    <tost-view v-for="(val,index) in messageList" :message="val" :key="index"></tost-view>
  </div>
</template>

<script>
import tostView from '@/components/tostView'
import loading from '@/components/loading'
import mixin from '@/mixins/'
export default {name: 'app',
  components:{tostView,loading},
  mixins:[mixin],
  created(){
    console.log('appReady');
  },
  data (){
    return {
      messageList:[],
      wx:null,
      imgs:["http://n.sinaimg.cn/ah/865fe30d/20171114/8.jpg","http://n.sinaimg.cn/ah/865fe30d/20171114/ShiLiangZhiNenDuiXiang.png","http://n.sinaimg.cn/ah/865fe30d/20171114/JuXing.png","http://n.sinaimg.cn/ah/865fe30d/20171114/Zu-171.png","http://n.sinaimg.cn/ah/865fe30d/20171023/1.jpg","http://n.sinaimg.cn/ah/865fe30d/20171114/ShiLiangZhiNenDuiXiang.png","http://n.sinaimg.cn/ah/865fe30d/20171114/JuXing.png","http://n.sinaimg.cn/ah/865fe30d/20171114/Zu-17.png","http://n.sinaimg.cn/ah/865fe30d/20171114/12_03.png","http://n.sinaimg.cn/ah/865fe30d/20171114/header.png","http://n.sinaimg.cn/ah/865fe30d/20171113/Zu-171.png","http://n.sinaimg.cn/ah/865fe30d/20171113/Zu-172.png","http://n.sinaimg.cn/ah/865fe30d/20171113/Zu-173.png","http://n.sinaimg.cn/ah/865fe30d/20171115/16.png","http://n.sinaimg.cn/ah/865fe30d/20171114/header.png","http://n.sinaimg.cn/ah/865fe30d/20171115/Zu-18.png","http://n.sinaimg.cn/ah/865fe30d/20171114/8.jpg","http://n.sinaimg.cn/ah/865fe30d/20171114/JuXing.png","http://n.sinaimg.cn/ah/865fe30d/20171115/Button.png","http://n.sinaimg.cn/ah/865fe30d/20171114/8.jpg","http://n.sinaimg.cn/ah/865fe30d/20171113/1-logo.png","http://n.sinaimg.cn/ah/865fe30d/20171113/1-1.png","http://n.sinaimg.cn/ah/865fe30d/20171113/QuanYi.png","http://n.sinaimg.cn/ah/865fe30d/20171113/1.jpg","http://n.sinaimg.cn/ah/865fe30d/20171113/3_01.jpg","http://n.sinaimg.cn/ah/865fe30d/20171113/3_04.jpg","http://n.sinaimg.cn/ah/865fe30d/20171113/3_02.jpg","http://n.sinaimg.cn/ah/865fe30d/20171113/3_03.jpg","http://n.sinaimg.cn/ah/865fe30d/20171113/1-2.png","http://n.sinaimg.cn/ah/865fe30d/20171114/JuXing.png","http://n.sinaimg.cn/ah/865fe30d/20171113/5_01.jpg","http://n.sinaimg.cn/ah/865fe30d/20171113/5.jpg","http://n.sinaimg.cn/ah/865fe30d/20171113/4_01.jpg","http://n.sinaimg.cn/ah/865fe30d/20171113/Layer-23.png","http://n.sinaimg.cn/ah/865fe30d/20171113/4bg_02.jpg"]
    }
  },
  methods:{
    showTost (message) {
      console.log(12345);
        this.messageList.push(message);
        setTimeout(()=>{
          let del_index=this.messageList.indexOf(message);
          this.messageList.splice(del_index,1);
        },800)
    }
  }
}
</script>

<style>
@import url(fonts/iconfont.css);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}
*{
  padding:0px;
  margin:0px;
}

ul,li {
  list-style-type: none;
  padding: 0;
}
img{
  vertical-align: middle;
}
.pos_abs{
  position: absolute;
  z-index: 1;
}
.pos_rel{
  position: relative;
}
.dis_flex{
  display: flex;
}
.pos_fix{
  position:fixed;
}
.mainCont{
  width: 100%;
  height: 100%;
}
.animate{
  z-index: 3;
}
.animate img{
    width: 100%;
    height: auto;
    display: block;   
}
.page{
    width:100%;
    margin:0 auto;
    height: 100%;
    background-size: 100% auto;
}
  .pageInner{
    width: 6.4rem;
    margin:0 auto;
  }
  .loading{
    font-size: 0.3rem;
    width: 6.4rem;
    text-align: center;
    line-height: 0.35rem;
    top:50%;
    margin-top: -0.175rem;
    color: #000;
    font-weight: bold;
  }
  .before:before{
    content: '';
    display: table;
  }
  .picContain{
    width:100%;
  }
  .picContain img{
    display: block;
    width:100%;
  }
  .over_hidden{
    overflow: hidden;
  }
  .fl_left{
    float:left;
  }
  .fl_right{
    float:right;
  }
</style>
