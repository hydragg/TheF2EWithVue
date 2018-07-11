<template>
  <Layout id="layout" class="layout" :style="{ minHeight: '100vh'}">
    <Sider :width="200" breakpoint="md" collapsible :collapsed-width="0" v-model="isCollapsed">
      <Menu active-name="1" theme="dark" width="auto" :class="menuitemClasses">
        <Menu-Item name="1" @click.native="toPage('home')">
          <span>首頁</span>
        </Menu-Item>
        <Menu-Item name="2" @click.native="toPage('is-sign-up')">
          <span>報名查詢</span>
        </Menu-Item>
        <Menu-Item name="3" @click.native="toPage('stage-check')">
          <span>關卡查詢</span>
        </Menu-Item>
        <Submenu name="4">
          <template slot="title">
            <span>精神時光屋作業</span>
          </template>
          <Menu-Item name="4-1" @click.native="toPage('week1')">
            <span>第一週</span>
          </Menu-Item>
          <Menu-Item name="4-2"  @click.native="toPage('week2')">
            <span>第二週</span>
          </Menu-Item>
          <Menu-Item name="4-3"  @click.native="toPage('week3')">
            <span>第三週</span>
          </Menu-Item>
          <Menu-Item name="4-4"  @click.native="toPage('week4')">
            <span>第四週</span>
          </Menu-Item>
          <Menu-Item name="4-5"  @click.native="toPage('week5')">
            <span>第五週</span>
          </Menu-Item>
          <Menu-Item name="4-6"  @click.native="toPage('week6')">
            <span>第六週</span>
          </Menu-Item>
          <Menu-Item name="4-7"  @click.native="toPage('week7')">
            <span>第七週</span>
          </Menu-Item>
          <Menu-Item name="4-8"  @click.native="toPage('week8')">
            <span>第八週</span>
          </Menu-Item>
        </Submenu>
      </Menu>
    </Sider>
    <Layout>
      <Header :style="{ background: '#fff', boxShadow: '0 2px 3px 2px rgba(0, 0, 0, .1)' }"></Header>
      <Content :style="{ padding: '0 16px 16px'}">
        <Breadcrumb :style="{ margin: '16px 0' }">
          <BreadcrumbItem>Home</BreadcrumbItem>
        </Breadcrumb>
        <router-view></router-view>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      isCollapsed: false
    }
  },
  computed: {
    menuitemClasses() {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : ''];
    }
  },
  methods: {
    toPage(routerName) {
      this.$router.push({ name: routerName });
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout-con{
    height: 100%;
    width: 100%;
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
