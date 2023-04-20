<template>
  <div class="header">
    <div class="header-top">
      <div class="wap_1200 d-flex align-items-center justify-content-between">
        <div class="left-header">
          <div class="name-shool"> Trường Tiểu Học Nhơn Nghĩa A1</div>
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
  <div :class="{ 'menu_mobi_active': menuMobiActive, 'menu_mobi_add': true }">
    <span class="close_menu" @click="closeMenu">X</span>
    <ul>
      <li v-for="(router, index) in routes.filter(i => i.isLoad)" :key="index">
        <router-link @click="closeMenu" :key="router.path" :to="router.path">
          {{ router.name }}
        </router-link>
      </li>
    </ul>
  </div>
  <div class="menu_mobi w-clear">
    <p class="menu_baophu"
      :style="{ display: showElement ? '' : 'none', opacity: isShown ? 1 : 0, transition: 'opacity 0.5s' }"
      @click="closeMenu"></p>
    <p class="icon_menu_mobi" @click="showMenu"><i class="fas fa-bars"></i></p>
    <a href="/#/smart-monkeys" class="home_mobi"><i class="fa fa-home" aria-hidden="true"></i></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: this.$router.options.routes,
      menuMobiActive: false,
      showElement: false,
      isShown: false,
    }
  },
  methods: {
    showMenu() {
      this.isShown = true;
      setTimeout(() => {
        this.menuMobiActive = true;
        this.showElement = true;
      }, 200);
    },
    closeMenu() {
      this.menuMobiActive = false;
      this.showElement = false;
      setTimeout(() => {
        this.isShown = false;
      }, 500);
    }
  }
}
</script>