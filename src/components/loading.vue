<template>
<div class="page">
  <div class="svgWrap">
        <span class="texter pos_abs">{{precent}}<span class="small">%</span></span>
        <svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="purple" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stop-color="#7a5bcf"/>
            <stop offset="100%" stop-color="#8A6FD5"/>
          </linearGradient>
        </defs>
        <circle cx="130" cy="130" r="120" stroke="#aaa" stroke-width="8" fill="none"></circle>
        <circle class="ref" ref="pre" cx="130" cy="130" r="120" stroke-width="12" fill="none" stroke="url(#purple)" stroke-linejoin="round" stroke-linecap="round" :stroke-dasharray="strokeDa" :stroke-dashoffset="getPercent"></circle>
      </svg>
    </div>
</div>
    
</template>

<script>
export default {
  name: 'loading',
  props:['precent'],
  computed:{
    getPercent () {
      return ((100-this.precent)/100)*this.strokeDo;
    }
  },
  data () {
    return {
      strokeDa:753,
      strokeDo:753,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .page{
     background:url(http://n.sinaimg.cn/ah/865fe30d/20171114/8.jpg) no-repeat center top;
    background-size:cover;
    overflow: auto;
  }
  .svgWrap{
    height: 2rem;
    width: 2rem;
    position: absolute;
    top:50%;
    left:50%;
    margin:-1rem 0 0 -1rem;
  }
  svg {
    width:100%;
    transform:rotate(-90deg);
}
.ref{
  transition:all .1s ease-out;
}
.texter{
    color: #8a6fd5;
    font-size: 0.6rem;
    line-height: 0.65rem;
    height: 0.65rem;
    margin-left: -50%;
    margin-top: -0.325rem;
    top: 50%;
    left: 50%;
    width: 100%;
}
.small{
      font-size: 0.5em;
    line-height: 0.5rem;
    position: relative;
    top: -0.2rem;
}
</style>
