import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home/";
import Cate from "./views/Cate/";
import Brand from "./views/Brand/";
import About from "./views/About/";
import Join from "./views/Join/";
import Connect from "./views/Connect/";


Vue.use(Router);

export default new Router({
  routes: [
    // 首页
    {
      path: "/",
      name: "home",
      component: Home
    },
    // 美食简介
    {
      path: "/cate",
      name: "cate",
      component: Cate
    },
    // 品牌馆
    {
      path: "/brand",
      name: "brand",
      component: Brand
    },
    // 集团简介
    {
      path: "/about",
      name: "about",
      component: About
    },
    // 合作加盟
    {
      path: "/join",
      name: "join",
      component: Join
    },
    // 联系我们
    {
      path: "/connect",
      name: "connect",
      component: Connect
    },

  ]
});
