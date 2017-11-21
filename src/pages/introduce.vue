<template>
  <div class="page">
      <div class="picContain">
          <img src="http://n.sinaimg.cn/ah/865fe30d/20171113/3_01.jpg" alt="">
      </div>
      <div class="picContain details before">
          <p>
               由新浪网、微博房产主办，新浪安徽承办，联策商管协办的2017第一届安徽“金地标”商业地产评选活动现已正式拉开序幕。安徽商业地产『金地标』奖项本着“客观求实、全面细致”的评审原则，遴选政府智囊、行业专家、企业高层、专业机构及媒体意见领袖组成强大的评审阵容，通过对大众网络投票的数据分析，项目与商家的现场实地调研、媒体调查等手段，对安徽商业地产与知名品牌商家行业进行大规模的专业审视。旨在推动安徽商业地产行业的发展进程，展示商业地产与品牌商家行业优秀成果，记录市场榜样，助力行业发展。
          </p>
          <p>        本次评选涉及<span class="strong">“项目奖”</span>、<span class="strong">“人物奖”</span>、<span class="strong">“企业奖”三大领域</span>，共计<span class="strong">11</span>个奖项。投票时间为<span class="strong">11月24日--12月24日</span>，网友可通过PC端或者手机端参与各奖项评选。公开投票结束后，<span class="strong">在统计网友投票数据的基础之上，综合相关机构、专家评委的投票，最终确定各奖项的归属</span>。榜单将在“2017安徽首届商铺节暨第一届‘金地标’商业地产评选”颁奖现场揭晓。 
</p>        
      </div>
      <div class="picContain rater before">
          <div class="listWrap">
            <ul class="list over_hidden">
                <li class="listItem fl_left" v-for="(val,index) in peopleList" :key="index">
                    <div class="pic over_hidden">
                        <img :src="val.avatar" alt="">
                    </div>
                    <h2 class="name">{{val.name}}</h2>
                    <p class="job">{{val.job}}</p>
                </li>
               
            </ul>
        </div>
      </div>
      <div class="picContain" style="padding-bottom:1.05rem;">
          <img src="http://n.sinaimg.cn/ah/865fe30d/20171121/3_03.jpg" alt="">
      </div>
      <navs></navs>
  </div>
</template>
<script>
    import navs from '@/components/nav'
    export default {
        name:'introduce',
        components:{navs},
        data () {
            return {
                peopleList:[
                    {name:'姜红',avatar:'http://n.sinaimg.cn/ah/865fe30d/20171108/people.jpg',job:'中国科学技术大学安徽MBA学院院长'},
                    {name:'姜红',avatar:'http://n.sinaimg.cn/ah/865fe30d/20171108/people.jpg',job:'中国科学技术大学安徽MBA学院院长'},
                    {name:'姜红',avatar:'http://n.sinaimg.cn/ah/865fe30d/20171108/people.jpg',job:'中国科学技术大学安徽MBA学院院长'},
                    {name:'姜红',avatar:'http://n.sinaimg.cn/ah/865fe30d/20171108/people.jpg',job:'中国科学技术大学安徽MBA学院院长'},
                    {name:'姜红',avatar:'http://n.sinaimg.cn/ah/865fe30d/20171108/people.jpg',job:'中国科学技术大学安徽MBA学院院长'},
                    {name:'姜红',avatar:'http://n.sinaimg.cn/ah/865fe30d/20171108/people.jpg',job:'中国科学技术大学安徽MBA学院院长'},
                    {name:'姜红',avatar:'http://n.sinaimg.cn/ah/865fe30d/20171108/people.jpg',job:'中国科学技术大学安徽MBA学院院长'},
                    {name:'姜红',avatar:'http://n.sinaimg.cn/ah/865fe30d/20171108/people.jpg',job:'中国科学技术大学安徽MBA学院院长'},
                    {name:'姜红',avatar:'http://n.sinaimg.cn/ah/865fe30d/20171108/people.jpg',job:'中国科学技术大学安徽MBA学院院长'},
                ],
            }
        }
    }
</script>
<style  scoped>
    .details{
        height:5.58rem;
        background:url(http://n.sinaimg.cn/ah/865fe30d/20171113/3_02.jpg) no-repeat center top;
        background-size:cover;
        padding-top:0.8rem;
    }
    .details p{
        font-size:0.2rem;
        color:#cabc96;
        text-align:left;
        line-height: 0.34rem;
        width:5.81rem;
        margin:0 auto;
        text-indent:2em;
        font-weight:600;
        margin-bottom: 0.22rem;
    }
    p span.strong{
        color:#e2993a;
    }
    .rater{
        height: 11.82rem;
        background:url(http://n.sinaimg.cn/ah/865fe30d/20171121/3_02.jpg) no-repeat center top;
        background-size:cover;
    }
    .listWrap{
        width:6.02rem;
        margin:0 auto;
        margin-top:0.76rem;
        display: none;
    }
    .list{
        width:100%;
    }
    .listItem{
            width: 1.65rem;
        height: 2.63rem;
        margin: 0 0.17rem;
        margin-bottom: 0.06rem;
    }
    .pic {
    width: 100%;
    height: 1.65rem;
    border-radius: 50%;
}
.name {
    font-size: 0.22rem;
    color: #dbcca0;
    text-align: center;
    margin: 0.10rem 0;
}
.job {
    font-size: 0.16rem;
    color: #dbcca0;
    text-align: center;
    line-height: .24rem;
}
</style>
