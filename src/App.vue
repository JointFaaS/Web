<template>
  <div id="app">
    <a-layout id="layout">
      <a-layout-header style="padding: 0;"><div style="font-size: 20px; color: #ffffff">HCloud Web</div></a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '600px' }">
        <router-view/>
      </a-layout-content>
      <a-layout-footer style="padding: 0">Powered By Veiasai@2020</a-layout-footer>
    </a-layout>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
