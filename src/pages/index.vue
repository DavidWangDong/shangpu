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
            <img src="http://n.sinaimg.cn/ah/865fe30d/20171121/QuanYi.png" alt="">
          </div>
      </div>
      <navs />
  </div>
</template>

<script>
import navs from '@/components/nav'
export default {
  name: 'index',
  components:{navs},
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
    width:3.94rem;
    opacity: 0;
    -webkit-animation:zoomIn .8s ease-out 1.9s forwards;
    left:1.32rem;
    top:4.83rem;
}
</style>