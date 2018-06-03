<template>
  <div class="home">
    <div ref="header" class="home-header">
      <img ref="img" :src="require('@/assets/images/home.jpg')" />
    </div>

    <div class="story" ref="story">
      <div class="story-main">
        <div class="title">如何加入</div>
        <el-steps class="join-step" finish-status="success" :space="350">
          <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
      </div>
    </div>

    <div class="brand" ref="brand">
      <div class="title">品牌馆</div>
      <div class="title-sub">BRAND</div>
      <el-carousel class="carousel" :autoplay="false" indicator-position="none" type="card" height="700px" @change="carouselChenge">
        <el-carousel-item v-for="(item, index) in brands" :key="index">
          <div style="text-align:center;">
            <img :src="require('@/assets/images/01_argentinian-grilled-steak.png')" alt="brand">
            <transition name="brand">
              <template v-if="index == activeItem">
                  <div class="assets">
                    <p class="title">{{item.title}}</p>
                    <div class="separator"></div>
                    <p class="detail">{{item.separator}}</p>
                  </div>
              </template>
            </transition>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="news">
      <div class="title">我们的动态</div>
      <div class="title-sub">OUR NEWS</div>
      <div class="news-content">
        <el-row class="new-row" v-for="(item, index) in news" :key="index">
          <el-col class="new-img" :span="3">
            <img :src="item.url" alt="new" />
          </el-col>
          <el-col :span="17" class="new-content">
            <div class="new-title">{{item.title}}</div>
            <div class="new-detail">{{item.detail}}</div>
          </el-col>
          <el-col :span="4" class="new-time">
            <div class="new-month">{{item.month}}</div>
            <div class="new-year">{{item.year}}</div>
            <img :src="require('@/assets/images/go.png')" alt="go">
          </el-col>
        </el-row>
      </div>
      <div class="new-more">
        查看更多
        <img :src="require('@/assets/images/go.png')" alt="more">
      </div> 
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: 0,
      brands: [
        { url: require('@/assets/images/01_argentinian-grilled-steak.png'), title: '品牌1', separator: '【展会动态】洪睿科技携智能方案管理系统亮相创交会，助力企业信息化' },
        { url: require('@/assets/images/01_argentinian-grilled-steak.png'), title: '品牌2', separator: '【展会动态】洪睿科技携智能方案管理系统亮相创交会，助力企业信息化' },
        { url: require('@/assets/images/01_argentinian-grilled-steak.png'), title: '品牌3', separator: '【展会动态】洪睿科技携智能方案管理系统亮相创交会，助力企业信息化' },
        { url: require('@/assets/images/01_argentinian-grilled-steak.png'), title: '品牌4', separator: '【展会动态】洪睿科技携智能方案管理系统亮相创交会，助力企业信息化' },
        { url: require('@/assets/images/01_argentinian-grilled-steak.png'), title: '品牌5', separator: '【展会动态】洪睿科技携智能方案管理系统亮相创交会，助力企业信息化' },
        { url: require('@/assets/images/01_argentinian-grilled-steak.png'), title: '品牌6', separator: '【展会动态】洪睿科技携智能方案管理系统亮相创交会，助力企业信息化' },
      ],
      news: [
        { url: require('@/assets/images/01_argentinian-grilled-steak.png'), title: '【展会动态】洪睿科技携智能方案管理系统亮相创交会，助力企业信息化', detail: '5月26日，2017中国创新创业成果交易会（创交会）在广交会展馆开幕。今年为期两天的创交会以“创享广州、合作共赢”为主题，展出创新创业成果项目约1300项，并举办20多场次专项活动，洪睿科技携行业创新成果——智能方案管理系统应邀参展。', month: '05-12', year: '2018' },
        { url: require('@/assets/images/01_argentinian-grilled-steak.png'), title: '【展会动态】洪睿科技携智能方案管理系统亮相创交会，助力企业信息化', detail: '5月26日，2017中国创新创业成果交易会（创交会）在广交会展馆开幕。今年为期两天的创交会以“创享广州、合作共赢”为主题，展出创新创业成果项目约1300项，并举办20多场次专项活动，洪睿科技携行业创新成果——智能方案管理系统应邀参展。', month: '05-12', year: '2018' },
        { url: require('@/assets/images/01_argentinian-grilled-steak.png'), title: '【展会动态】洪睿科技携智能方案管理系统亮相创交会，助力企业信息化', detail: '5月26日，2017中国创新创业成果交易会（创交会）在广交会展馆开幕。今年为期两天的创交会以“创享广州、合作共赢”为主题，展出创新创业成果项目约1300项，并举办20多场次专项活动，洪睿科技携行业创新成果——智能方案管理系统应邀参展。', month: '05-12', year: '2018' },
      ]
    }
  },
  created() {
    let that = this;
    this.$nextTick(() => {
      window.onload = () => {
        console.log('onload');
        that.$refs.header.style.height  = `${Math.min(that.$refs.header.offsetHeight, window.innerHeight)}px`;
        // this.$refs.story.style.height = `${window.innerHeight}px`;
        // this.$refs.brand.style.height = `${window.innerHeight}px`;
      }
      window.onresize = () => {
        console.log('onresize');
        that.$refs.header.style.height  = `${Math.min(that.$refs.img.offsetHeight, window.innerHeight)}px`;
      }
    })
  },
  methods: {
    carouselChenge(index) {
      console.log(this.activeItem);
      console.log(index);
      this.activeItem = index;
    }
  }
}
</script>

<style lang="scss">
  @import './index.scss';
</style>
