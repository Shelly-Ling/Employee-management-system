<template>
  <div id="app">
    <Row type="flex" class="layout">
      <i-col span="4" class="navbar-wrapper">
        <Navbar />
      </i-col>
      <i-col span="20">
        <div id="main-panel" class="main-panel">
          <router-view />
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}
</script>


<style scoped>
#app {
  min-width: 1000px;
  height: 100vh;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
}
.navbar-wrapper {
  min-width: 150px;
}
#main-panel {
  width: 100%;
  height: 100vh;
  min-width: auto;
  overflow: scroll;
}
</style>