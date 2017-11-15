<template>
  <div class="page">
      <div class="pageInner pos_rel">
          <div class="pos_abs animate animate1">
              <img src="http://n.sinaimg.cn/ah/865fe30d/20171113/1-logo.png" alt="">
          </div>
          <div class="pos_abs animate animate2">
              <img src="http://n.sinaimg.cn/ah/865fe30d/20171113/1-1.png" alt="">
          </div>
          <div class="pos_abs animate animate3">
              
          </div>
          <div class="pos_abs animate animate4">
              
          </div>
          <div class="pos_abs animate animate5">
              
          </div>
          <div class="pos_abs animate animate6">
              
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'preindex',
  mounted (){
      setTimeout(()=>{
          this.$router.push({path:'/index'});
      }, 7000);
  },
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.page{
    background:url(http://n.sinaimg.cn/ah/865fe30d/20171113/1.jpg) no-repeat center top;
    background-size:cover;
}
.animate1{
    width:5.89rem;
    top:0.66rem;
    left: 0.27rem;
    opacity: 0;
    -webkit-animation:flipInX .8s ease-out .5s forwards;
}
.animate2{
    width:5.71rem;
    top:1.71rem;
    left: 0.35rem;
    opacity: 0;
    -webkit-animation:zoomBigIn .8s ease-out 1.2s forwards;
}
.animate3{
    width:0.45rem;
    height:3.34rem;
    background:url(http://n.sinaimg.cn/ah/865fe30d/20171113/1-2.png) no-repeat left top;
    background-size:1.6rem auto;
    opacity: 0;
    -webkit-animation:fadeInDown .8s ease-out 1.9s forwards;
    top:4.92rem;
    left:2.54rem;
}
.animate4{
    width:0.45rem;
    height:3.34rem;
    background:url(http://n.sinaimg.cn/ah/865fe30d/20171113/1-2.png) no-repeat -.47rem top;
    background-size:1.6rem auto;
    opacity: 0;
    -webkit-animation:fadeInDown .8s ease-out 2.3s forwards;
    top:4.92rem;
    left:3rem;
}
.animate5{
    width:0.45rem;
    height:3.34rem;
    background:url(http://n.sinaimg.cn/ah/865fe30d/20171113/1-2.png) no-repeat -.95rem top;
    background-size:1.6rem auto;
    opacity: 0;
    -webkit-animation:fadeInDown .8s ease-out 2.7s forwards;
    top:4.92rem;
    left:3.45rem;
}
.animate6{
    width:0.45rem;
    height:3.34rem;
    background:url(http://n.sinaimg.cn/ah/865fe30d/20171113/1-2.png) no-repeat -1.43rem top;
    background-size:1.6rem auto;
    opacity: 0;
    -webkit-animation:fadeInDown .8s ease-out 3.1s forwards;
    top:4.92rem;
    left:3.98rem;
}
</style>