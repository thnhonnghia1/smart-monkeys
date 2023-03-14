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

export default {
    data() {
        return { 
            videoTiengViet : [
                {
                    name: "Ngày em vào đội",
                    linkmp4: "https://thnhonnghia1.hn.ss.bfcplatform.vn/tieng-viet/NgayEmVaoDoi_TiengViet.mp4",
                    linktest: "https://forms.gle/S4be9bWQCkuvnV9h9",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Cuốn sách em yêu",
                    linkmp4: "https://thnhonnghia1.hn.ss.bfcplatform.vn/tieng-viet/CuonSachEmYeu.mp4",
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Ông ngoại",
                    linkmp4: "https://thnhonnghia1.hn.ss.bfcplatform.vn/tieng-viet/OngNgoai.mp4",
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Độc đáo lễ hội đèn Trung thu",
                    linkmp4: "https://thnhonnghia1.hn.ss.bfcplatform.vn/tieng-viet/DocDaolehoidentrungthu.mp4",
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Nghệ nhân Bát Tràng",
                    linkmp4: "https://thnhonnghia1.hn.ss.bfcplatform.vn/tieng-viet/Nghethuatbattrang.mp4",
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Tiếng đàn",
                    linkmp4: "https://thnhonnghia1.hn.ss.bfcplatform.vn/tieng-viet/TiengDan.mp4",
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                },
                {
                    name: "Chơi bóng với bố",
                    linkmp4: "https://thnhonnghia1.hn.ss.bfcplatform.vn/tieng-viet/ChoiBongVoiBo.mp4",
                    linktest: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                    linkhopthu: "https://docs.google.com/forms/d/1DhqkWrJQKw_8Of5X3GG37ue19w-ASRlIh2atl9oNeGM/viewform?edit_requested=true#responses",
                }
            ]
         }
    }
}
</script>