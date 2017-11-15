<template>
  <div class="page">
      <div class="pageInner">
          <vhead></vhead>
          <router-view @showtost="upTost"></router-view>
          <vfoot></vfoot>
      </div>
      <navs></navs>
  </div>
</template>
<script>
    import vhead from '@/components/vhead'
    import vfoot from '@/components/vfoot'
    import navs from '@/components/nav'
    export default {
        name:'detail',
        components:{vhead,vfoot,navs},
        methods:{
            upTost (msg){
                this.$emit('showtost',msg);
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
</style>

