<template>
  <div class="header">
    <div class="header-top">
      <div class="wap_1200 d-flex align-items-center justify-content-between">
        <div class="left-header">
          <div class="name-shool">Trường Tiểu Học Nhơn Nghĩa A1</div>
          <div class="adress-shool">Địa chỉ: Ấp Nhơn Nhuận 1B, xã Nhơn Nghĩa A, huyện Châu Thành A, tỉnh Hậu Giang</div>
        </div>
        <div class="hotline-top">
          <p>Hotline: </p> <span>0932982526</span>
        </div>
      </div>
    </div>
  </div>
  <div class="menu">
    <div class="flex-menu">
      <ul class="d-flex align-items-center justify-content-between menu_desktop">
        <li v-for="(router, index) in routes.filter(i => i.isLoad)" :key="index">
          <router-link :key="router.path" :to="router.path">
            <h2>{{ router.name }}</h2>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: this.$router.options.routes
    }
  }
}
</script>