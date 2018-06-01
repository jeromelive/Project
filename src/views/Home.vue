<template>
  <div class="home">
    <img src="../assets/logo.png">
    <div>
      <el-input v-model="phone" placeholder="请输入手机号码"></el-input>
      <el-input v-model="password" placeholder="请输入密码"></el-input>
      <el-button type="primary" @click="submit">主要按钮</el-button>
    </div>  
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import request from '@/utils/request';

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    async submit() {
      let res = await request({
        url: '/login',
        method: 'POST',
        data: {
          phone: this.phone,
          password: this.password
        }
      });
      console.log(res);
    }
  }
};
</script>
