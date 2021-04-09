<template>
  <div class="layout">
    <div class="layout-header"></div>
    <div class="layout-breadcrumb">
      <Breadcrumb>
        <Breadcrumb-item href="/">Home</Breadcrumb-item>
        <Breadcrumb-item href="/components/breadcrumb"
          >Components</Breadcrumb-item
        >
        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
      </Breadcrumb>
    </div>
    <h1>Welcome</h1>
    <div class="layout-content">
      <div class="layout-content-main">
        <Carousel autoplay v-model="value2">
          <Carousel-item>
            <img
              src="https://lh3.google.com/u/0/d/1eop11abjbVp7rShPRTHGQhleIEh4_TVN=w2250-h1476-iv1"
              alt=""
            />
          </Carousel-item>
          <Carousel-item>
            <img
              src="https://lh3.google.com/u/0/d/17C4ZOEJ9BYb0UKRmlpU0LBokg57S10G_=w2000-h1920-iv1"
              alt=""
            />
          </Carousel-item>
          <Carousel-item>
            <img
              src="https://lh3.google.com/u/0/d/1yjvrnJvzdoI60KYmKJt64yfPfviEbTyH=w2000-h1920-iv1"
              alt=""
            />
          </Carousel-item>
          <Carousel-item>
            <img
              src="https://lh3.google.com/u/0/d/1EW-_CKu9MLenYM_hovORSfmxJgbP3dJc=w2000-h1920-iv1"
              alt=""
            />
          </Carousel-item>
        </Carousel>
      </div>
    </div>
    <div class="layout-copy">2011-2016 &copy; TalkingData</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value2: 0
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 10px 30px;
}
.layout {
  min-width: auto;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main {
  height: 80vh;
  padding: 10px;
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}

.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>