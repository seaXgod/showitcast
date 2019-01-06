<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="../assets/logo.png" alt="logo图标">
          </div>
        </el-col>
        <el-col :span="19">
          <div class="grid-content bg-purple-light">
            <h2>电商后台管理系统</h2>
          </div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content bg-purple">
            <a href="#" class="loginout" @click.prevent="handleSignout">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>

    <el-container>
      <el-aside width="200px" class="aside-left">
        <el-menu default-active="1" class="menu" :unique-opened="true" :router="true">
          <!-- 用户管理 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-document"></i>用户列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 权限管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-document"></i>角色列表
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-document"></i>权限列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 商品管理 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-document"></i>商品列表
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-document"></i>分数参数
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-document"></i>商品分类
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 订单管理 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-document"></i>订单列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 数据统计 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-document"></i>数据报表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
		},
		// 用户退出
		handleSignout() {
			//删除session中的token
			sessionStorage.clear()
			//跳转登录页
			this.$router.push({name: 'login'})
			//提示
			this.$message.success('退出成功')
		}
	},
	 beforeCreate () {
    // 从session中获取token 判断是否有token
    const token = sessionStorage.getItem('token')
    if (!token) {
      // 返回登录页
      this.$router.push({name: 'login'})
      this.message.warning('请先登录')
    }
  }
};
</script>

<style>
html,
body,
h2 {
  height: 100%;
  margin: 0;
  padding: 0;
}
.container {
  height: 100%;
}

.header {
  height: 56px;
  background-color: #b3c0d1;
}

.aside {
  background-color: #d3dce6;
}

.main {
  background-color: #e9eef3;
  height: 100%;
}
.grid-content h2 {
  height: 56px;
  margin-left: 318px;
  line-height: 56px;
  color: #b3c0d1;
}

.grid-content a {
  color: red;
}

.loginout {
  text-align: center;
  line-height: 56px;
}

.aside-left {
  width: 200px;
}
.aside .menu {
  height: 100%;
}
</style>
