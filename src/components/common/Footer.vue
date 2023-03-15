<template>
  <div class="footer-powered">
    <div class="wap_1200 w-clear">
      <p class="copyright">&copy; 2023 Copyright <b> Trường tiểu học nhơn nghĩa a</b></p>
    </div>
  </div>
  <a class="btn-map btn-frame text-decoration-none" target="_blank"
      :href="linkmap">
      <div class="animated infinite zoomIn kenit-alo-circle"></div>
      <div class="animated infinite pulse kenit-alo-circle-fill"></div>
      <i><img :src="icon1" alt="Chỉ đường"></i>
  </a>
  <a class="btn-zalo btn-frame text-decoration-none" target="_blank" :href="linkzalo">
      <div class="animated infinite zoomIn kenit-alo-circle"></div>
      <div class="animated infinite pulse kenit-alo-circle-fill"></div>
      <i><img :src="icon2" alt="Zalo"></i>
  </a>
  <a class="btn-phone btn-frame text-decoration-none" :href="linkphone">
      <div class="animated infinite zoomIn kenit-alo-circle"></div>
      <div class="animated infinite pulse kenit-alo-circle-fill"></div>
      <i><img :src="icon3" alt="Hotline"></i>
  </a>
</template>

<script>
import icon1 from '../../../images/icon-t6.png';
import icon2 from '../../../images/zl.png';
import icon3 from '../../../images/hl.png';

  export default {
    data() {
        return {
          linkmap: `https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+Ti%E1%BB%83u+H%E1%BB%8Dc+Nh%C6%A1n+Ngh%C4%A9a+A1/@9.944326,105.6628517,17z/data=!3m1!4b1!4m5!3m4!1s0x31a08d054a076d6d:0xeb6e64cb660c4185!8m2!3d9.9443207!4d105.6650404?hl=vi`,
          linkzalo: `https://zalo.me/0932982526`,
          linkphone: `tel:0932982526`,icon1,icon2,icon3
        }
    },
  };
</script>