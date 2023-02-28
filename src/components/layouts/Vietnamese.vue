<template>
    <div class="wrap-mainIndex">
        <h3 class="title-main">Tiếng Việt</h3>
        <div class="main-Content">
            <div class="videoVn" v-for="(videoTiengViet, index) in videoTiengViet" :key="index">
                <video class="imagevideoVn" data-video-slider="" controls playsinline webkit-playsinline preload="metadata">
                    <source type="video/mp4" :src="videoTiengViet.linkmp4">
                </video>
                <div class="name-videoVn">{{videoTiengViet.name}}</div>
                <p class="link-videoVn">
                    <a class="" :href="videoTiengViet.linktest" target="_blank"><span> Trắc nghiệm</span></a>
                    <a class="" :href="videoTiengViet.linkhopthu" target="_blank"><span> Hộp thư </span></a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import clipVn1 from '../../../video/TiengViet/NgayEmVaoDoi_TiengViet.mp4'
import clipVn2 from '../../../video/TiengViet/CuonSachEmYeu.mp4'
import clipVn3 from '../../../video/TiengViet/OngNgoai.mp4'
import clipVn4 from '../../../video/TiengViet/DocDaolehoidentrungthu.mp4'
import clipVn5 from '../../../video/TiengViet/Nghethuatbattrang.mp4'
import clipVn6 from '../../../video/TiengViet/TiengDan.mp4'
import clipVn7 from '../../../video/TiengViet/ChoiBongVoiBo.mp4'

export default {
    data() {
        return { 
            videoTiengViet : [
                {
                    name: "Ngày em vào đội",
                    linkmp4: clipVn1,
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Cuốn sách em yêu",
                    linkmp4: clipVn2,
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Ông ngoại",
                    linkmp4: clipVn3,
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Độc đáo lễ hội đèn Trung thu",
                    linkmp4: clipVn4,
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Nghệ nhân Bát Tràng",
                    linkmp4: clipVn5,
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tiếng đàn",
                    linkmp4: clipVn6,
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Chơi bóng với bố",
                    linkmp4: clipVn7,
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                }
            ]
         }
    }
}
</script>