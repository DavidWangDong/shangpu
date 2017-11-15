<template>
  <div class="nav">
    <router-link v-for="(val,index) in menuList" :to="{path:pathList[index]}" class="navItem" :key="index">
        
            <span :class="['iconfont','icon',{'icon-homepage':index==0},{'icon-qrcode':index==1},{'icon-activity':index==2},{'icon-editor':index==3}]"></span>
            <span class="menuName">{{val}}</span>
       
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
        pathList:['/introduce','/vote','/paiming?type=1','/add'],
        menuList:['评选介绍','我要投票','排行榜单','我要报名'],
        widthList:['0.2rem','0.26rem','0.15rem'],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav{
      position: fixed;
      bottom:0;
      left: 0;
      z-index:999;
      width:6.4rem;
      height: 1.05rem;
      display: flex;
      justify-content: center;
      background:#a59a7c;
  }
 .navItem{
     flex-grow: 1;
     text-decoration: none;
     justify-content: center;
     display: flex;
         color: #44280e;
        font-weight: 600;
        border-right:1px solid #c6bca0;
 }
 .navItem:last-child{
     border-right:none;
 }
  .menuName{
      font-size:0.22rem;
  }
  .icon{
     align-self:center;
     margin-right: 0.06rem;
  }
  .menuName{
     align-content: center;
     line-height: 1.05rem;
  }
  .icon img{
          width: 100%;
    height: auto;
    display: block;
  }
  .icon1{
      width:0.2rem;
  }
  .icon2{
      width:0.26rem;
  }
  .icon3{
      width:0.15rem;
  }
</style>
