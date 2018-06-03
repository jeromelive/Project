<template>
  <div id="app">
    <div ref="nav" class="home-nav">
      <div class="logo">千奈家</div>
      <el-menu :default-active="activeIndex" text-color="#79776B" active-text-color="#E6A23C" router class="el-menu-demo" mode="horizontal">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/cate">美食中心</el-menu-item>
        <el-menu-item index="/brand">品牌馆</el-menu-item>
        <el-menu-item index="/about">集团简介</el-menu-item>
        <el-menu-item index="/join">合作加盟</el-menu-item>
        <el-menu-item index="/connect">联系我们</el-menu-item>
      </el-menu>
    </div>

    <div class="leave-word">
      <div class="word-header">
        <div class="title">请您留言</div>
        <i class="el-icon-edit" v-show="!leaveWord" @click="leaveWord = true"></i>
        <i class="el-icon-close" v-show="leaveWord" @click="leaveWord = false"></i>
      </div>
      <div class="word-form" v-if="leaveWord">
        <el-input
          class="input"
          type="textarea"
          :rows="3"
          placeholder="请在此输入留言内容，我们会尽快与您联系。(必填)"
          v-model="text">
        </el-input>
        <el-input class="input" maxlength="20" v-model="name" placeholder="姓名"></el-input>
        <el-input class="input" maxlength="11" v-model="phone" placeholder="电话(必填)"></el-input>
        <el-input class="input" v-model="email" placeholder="邮件"></el-input>
        <el-input class="input" v-model="address" placeholder="地址"></el-input>
        <el-button class="input" type="warning" plain>发送</el-button>
      </div>
    </div>

    <router-view />

    <div class="home-footer">
      <div class="footer-contents">
        <div class="footer-col">
          <img :src="require('@/assets/images/logo.png')" alt="logo">
        </div>
        <div class="footer-col">
          <h4 class="footer-title">我们</h4>
          <ul>
            <li>品牌故事</li>
            <li>品牌故事</li>
            <li>品牌故事</li>
            <li>品牌故事</li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="footer-title">我们</h4>
          <ul>
            <li>品牌故事</li>
            <li>品牌故事</li>
            <li>品牌故事</li>
            <li>品牌故事</li>
            <li>品牌故事</li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="footer-title">我们</h4>
          <ul>
            <li>品牌故事</li>
            <li>品牌故事</li>
            <li>品牌故事</li>
            <li>品牌故事</li>
            <li>品牌故事</li>
            <li>品牌故事</li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="footer-title">我们</h4>
          <ul>
            <li>品牌故事</li>
            <li>品牌故事</li>
            <li>品牌故事</li>
            <li>品牌故事</li>
            <li>品牌故事</li>
            <li>品牌故事</li>
            <li>品牌故事</li>
          </ul>
        </div>
      </div>
      <div style="text-align: center">
        Copyright @2014-2018 honraytech.com All Right Reserved 粤ICP备14074753号
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeIndex: this.$route.path,
      text: '',
      name: '',
      phone: '',
      email: '',
      address: '',
      leaveWord: false
    };
  },
  created() {
    window.onscroll = () => {
      
    }
  },
  mounted() {},
  methods: {}
};
</script>


<style lang="scss">
@import "@/assets/css/index.scss";
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #515252;
  margin: 0 auto;
  font-size: 16px;
}
.home-nav {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  background: #fff;
  @include flex(flex-start, center);
  z-index: 3;
  .logo {
    font-size: 26px;
  }
  .el-menu--horizontal {
    border: none;
    background: transparent;
    li:hover, li:active, li:focus {
      background: transparent !important;
    }
    li:hover {
      color: $theme !important;
    }
  }
}
.leave-word-center {
  left: 0 !important;
  bottom: 0 !important;
  transform: translate(0, 0) !important;
}
.leave-word {
  z-index: 3;
  position: fixed;
  left: 0;
  bottom: 0;
  // transform: translate(-50%, -50%);
  width: 300px;
  background: #ededed;
  border-radius: 5px;
  .word-header {
    background-color: #E6A23C;
    border-radius: 5px 5px 0 0;
    height: 35px;
    line-height: 35px;
    padding: 0 12px;
    color: #fff;
    font-size: 14px;
    @include flex(space-between, center);
    .el-icon-close, .el-icon-edit {
      cursor: pointer;
    }
  }
  .word-form {
    padding: 10px;
    .input {
      margin-top: 10px;
    }
    .input:first-child {
      margin-top: 0;
    }
    textarea {
      resize: none;
    }
  }
}
.home-footer {
  border-top: 1px solid rgba(0,0,0,.1);
  padding: 48px 160px;
  .footer-contents {
    max-width: 1440px;
    margin: 0 auto;
    @include flex(space-around, flex);
    img {
      width: 210px;
      height: 195px;
    }
    .footer-title {
      font-size: 13px;
      color: #515252;
      letter-spacing: 1px;
    }
    ul {
      padding: 20px 0 14px;
      li {
        margin-top: 12px;
        font-size: 13px;
      }
      li:first-child {
        margin-top: 0;
      }
    }
  }
}
body,
ol,
ul,
h1,
h2,
h3,
h4,
h5,
h6,
p,
th,
td,
dl,
dd,
form,
fieldset,
legend,
input,
textarea,
select {
  margin: 0;
  padding: 0;
}
body {
  background: #fff;
  -webkit-text-size-adjust: 100%;
}
a {
  color: #2d374b;
  text-decoration: none;
}
a:hover {
  color: #cd0200;
  text-decoration: underline;
}
em {
  font-style: normal;
}
li {
  list-style: none;
}
img {
  border: 0;
  vertical-align: middle;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
p {
  word-wrap: break-word;
}
</style>
