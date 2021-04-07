<template>
  <div class="main">
    <Alert show-icon>
      抱歉，您搜尋的頁面不存在
      <div class="text">404 Not Found</div>

      <router-link to="/">
        <div class="home-icon font-size">
          <Icon type="ios-home"></Icon>
          <p>回主頁請點</p>
        </div>
      </router-link>
    </Alert>
  </div>
</template>

<style scoped>
.main {
  text-align: center;
}
.home-icon {
  font-size: 20px;
  margin: 20px;
}
</style>