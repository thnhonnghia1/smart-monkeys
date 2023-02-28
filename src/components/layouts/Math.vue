<template>
    <div class="wrap-mainIndex">
        <h3 class="title-main">Toán học</h3>
        <div class="main-Content">
            <div class="videoVn videoToan " v-for="(videoToan, index) in videoToan" :key="index">
                <video class="imagevideoVn" data-video-slider="" controls playsinline webkit-playsinline preload="metadata">
                    <source type="video/mp4" :src="videoToan.linkmp4">
                </video>
                <div class="name-videoVn">{{videoToan.name}}</div>
                <p class="link-videoVn">
                    <a class="" :href="videoToan.linktest" target="_blank"><span> Trắc nghiệm</span></a>
                    <a class="" :href="videoToan.linkhopthu" target="_blank"><span> Hộp thư</span></a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import clipToan1 from '../../../video/Toan/khoihopchunhatkhoilapphuong.mp4'
import clipToan2 from '../../../video/Toan/LamTronSo.mp4'
import clipToan3 from '../../../video/Toan/PhepCongCacSoTrongPhamVi100.mp4'
import clipToan4 from '../../../video/Toan/PhepTruCacSoTrongPhamVi100.mp4'
import clipToan5 from '../../../video/Toan/mililit.mp4'
import clipToan6 from '../../../video/Toan/Nhanso.mp4'
import clipToan7 from '../../../video/Toan/ChiaSo.mp4'

export default {
    data() {
        return { 
            videoToan : [
                {
                    name: "Khối hộp chữ nhật khối lập phương",
                    linkmp4: clipToan1,
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Làm tròn số",
                    linkmp4: clipToan2,
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Phép cộng các số trong phạm vi 10000 ",
                    linkmp4: clipToan3,
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Phép trừ các số trong phạm vi 10000 ",
                    linkmp4: clipToan4,
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: " Mi li lít",
                    linkmp4: clipToan5,
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Nhân số có bốn chữ số với số có một chữ số ",
                    linkmp4: clipToan6,
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Chia số có bốn chữ số cho số có một chữ số",
                    linkmp4: clipToan7,
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                }
            ]
         }
    }
}
</script>